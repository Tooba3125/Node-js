const http = require('http');

function datacontrol(req,resp)
{
    resp.write("<h1>hello this is basic program </h1>");
    resp.end();
}
http.createServer(datacontrol).listen(4500); 

//then go to google and search localhost4500 
