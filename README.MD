# Nodejs Express Server with Site Crawling

This is a small Express server project designed to crawl websites and return all the links found on the site. It accepts requests in JSON format with a `sites` value as the body, where the `sites` value is supposed to be an array of URLs to be crawled. The server utilizes clustering to ensure high throughput and is well optimized for performance.

## Features

- **Website Crawling**: The server is capable of crawling websites provided in the request payload and extracting all the links found on those websites.
- **JSON API**: Accepts JSON formatted requests with a list of websites to crawl.
- **Clustering**: Utilizes Node.js clustering to distribute the workload across multiple CPU cores, ensuring high throughput and efficient resource utilization.
- **Optimization**: The server is optimized for performance to handle a large number of concurrent requests efficiently.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/timfemey/web-crawler-nodejs.git
```

2. Navigate to the project directory:

```bash
cd web-crawler-nodejs
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

By default, the server will start listening on port 5000. You can modify the port by setting the `PORT` environment variable.

## Usage

Send POST requests to the server endpoint with a JSON payload containing an array of websites to crawl:

```json
POST /v1/crawlSites

{
  "sites": [
    "https://example.com",
    "https://example2.com"
  ]
}
```

The server will respond with a JSON object containing the links found on each website:

```json
{
    status: boolean,
[
 { "https://example.com": [
    "https://example.com/page1",
    "https://example.com/page2",
    "https://example.com/page3"
  ]},
  {"https://example2.com": [
    "https://example2.com/about",
    "https://example2.com/contact"
  ]}
]

}
```

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue on GitHub or submit a pull request.

## License

This project is licensed under the MIT License