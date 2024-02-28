async function connectToWebsite(site: string) {
    try {
        const resp = await fetch(site, { method: "GET" })
        return resp.body;
    } catch (error) {
        console.error(`Failed to make HTTP Request to ${site}. Error: ${error}`)
    }

}