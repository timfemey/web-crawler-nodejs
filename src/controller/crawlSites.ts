import { extractContent } from "../helpers/extractContent.js";

export default function crawlSites(sites: string[]) {
    const dataRes: {}[] = []
    if (Array.isArray(sites)) {
        for (let index = 0; index < sites.length; index++) {
            const site = sites[index];
            extractContent(site).then((linksArr) => {
                const siteObj: { [key: string]: string[] } = {}
                siteObj[site] = linksArr
                dataRes.push(siteObj)
            })


        }
    }
    return dataRes


}