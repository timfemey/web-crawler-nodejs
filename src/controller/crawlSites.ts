import { extractContent } from "../helpers/extractContent.js";

export default function crawlSites(sites: string[]) {
    const dataRes: string[] = []
    if (Array.isArray(sites)) {
        for (let index = 0; index < sites.length; index++) {
            const site = sites[index];
            extractContent(site).then((linksArr) => {
                dataRes.push(...linksArr)
            })


        }
    }
    return dataRes


}