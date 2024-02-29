import { Tokenizer } from "html-tokenizer"
import { WritableStream } from "stream/web";

export async function extractContent(site: string) {
    const body = await connectToWebsite(site)

    const res: string[] = []


    // Initialize the storedData variable for chunk data y
    let storedData = '';

    // Create a writable stream to store data in memory
    const writableStream = new WritableStream({
        write(chunk) {
            // Append data to the string
            storedData += chunk.toString();

        }
    });


    // Pipe the readable stream to the writable stream
    body?.pipeTo(writableStream);

    // When the writableStream finishes, log the stored data
    writableStream.getWriter().closed.then(async () => {
        const tokens = [...Tokenizer.tokenize(storedData)]
        for (let index = 0; index < tokens.length; index++) {
            const element = tokens[index];
            if (element.type == "attribute" && element.name == "href") {
                res.push(element.value)
            }

        }
    });
    return res;
}