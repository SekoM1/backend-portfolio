

const { appendFile } = require('fs');
const http = require('http')

const server = http.createServer(function(req, res){
    res.setHeader('content-type', 'application/json');
    res.setHeader('access-control-allow-origin', "*");
    res.writeHeader(200);//status code http 200= ok!


    let dataObj= JSON.stringify({"id":1224, "name":"seko", "email":"seko.n.mpofu"});
    res.send(dataObj);
});

server.listen(8910, function() {
    console.log("Listening on port 8910")
});
app.listen(8910);