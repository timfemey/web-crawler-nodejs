#!/usr/bin/env node
import cluster from "node:cluster"
import { availableParallelism } from "node:os"
import process from "node:process"
import express from "express"
import helmet from "helmet"
import crawlSites from "./controller/crawlSites.js"
import bodyParser from "body-parser"

const PORT = process.env.PORT || 5000
if (cluster.isPrimary) {
    const noOfCPUs = availableParallelism()
    for (let i = 0; noOfCPUs > i; i++) {
        cluster.fork()
    }
    cluster.on("fork", (clust) => {
        console.log(`Cluster ${clust.id} Started and Running`)
    })

    cluster.on("exit", (worker, code, signal) => {
        console.error(
            `Cluster ${worker.process.pid} died, Code: ${code}, Signal: ${signal}`
        );
        console.log("Creating anoter worker");
        cluster.fork();
    });
} else {
    const app = express();

    //MiddleWares

    app.use(helmet())
    app.use(bodyParser.json({ strict: true }))


    app.post("/v1/crawlSites", (req, res) => {
        const results = crawlSites(req.body.sites as string[])
        if (results.length <= 0) {
            res.status(400).json({ status: false, data: results })
        }
        res.status(200).json({ status: true, data: results })
    })


    app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`)
    })
}