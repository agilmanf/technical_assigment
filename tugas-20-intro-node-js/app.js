const http = require('http');
const PORT = 8000;

http
    .createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });

        const url = req.url;
        switch (url) {
            case "/about":
                res.write("<h2>Welcome to about us page</h2>");
                res.end();
                break;
            case "/contact":
                res.write("<h2>Welcome to contact us page</h2>");
                res.end();
                break;
            default:
                res.write("<h2>Hello World</h2>");
                res.end();
        }

        res.end();
    })
    .listen(PORT, () => console.log(`Server running on port ${PORT}`))