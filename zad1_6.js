const http = require("http")
const url = require("url")

const hostname = "localhost"
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")

    const route = url.parse(req.url).pathname

    switch (route) {
        case "/home":
            res.write("Strona domowa!")
            break
        case "/about":
            res.write("About")
            break
        default:
            res.write("Nie znaleziono")
            break
    }
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})