const http = require("http")
const hostname = "localhost"
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end(
    `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Node.js Server</title>
        </head>
        <body>
            <h1>Aplikacja w Node</h1>
            <p>To jest odpowiedz HTML</p>
            <ul>
                <li>1.</li>
                <li>2.</li>
                <li>3.</li>
            </ul>
        </body>
    </html>
    `)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
