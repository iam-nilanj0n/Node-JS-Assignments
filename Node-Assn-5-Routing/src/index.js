var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const contactResponse = {
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
    };
    const jsoncontent = JSON.stringify(contactResponse);
    
    if (req.url === "/welcome") {
        res.writeHead(200, { 'Content-Type': 'text' });
        res.end("Welcome to Dominos!")
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(jsoncontent);
    } else {
        res.writeHead(404,{'Content-Type':'text'});
        res.end("Error: Web page not found")
    }
}
httpServer.listen(8081, () => {
    console.log(`Server is running with port 8081`);
});
module.exports = httpServer;