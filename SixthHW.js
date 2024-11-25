const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')


const PORT = 80


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const { pathname, query } = parsedUrl

    res.setHeader('Content-Type', 'text/plain')

    if (pathname === '/' && req.method === 'GET') {
        res.statusCode = 200
        res.end('Welcome to the new Server!')
    } else if (pathname === '/about' && req.method === 'GET') {
        res.statusCode = 200
        res.end('This is a simple http Node.js server.')
    } else if (pathname === '/contact' && req.method === 'GET') {
        res.statusCode = 200
        res.end('Contact us at contact@newserver.com')
    } else if (pathname === '/file' && req.method === 'GET') {
        const fileName = query.name

        if (!fileName) {
            res.statusCode = 400
            res.end('File name is required!')
            return
        }

        const filePath = path.join(__dirname, fileName);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.statusCode = 404
                    res.end('File not found!')
                } else {
                    res.statusCode = 500
                    res.end('Server error!')
                }
            } else {
                res.statusCode = 200
                res.end(data)
            }
        })
    } else {
        res.statusCode = 404
        res.end('Invalid route!')
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});