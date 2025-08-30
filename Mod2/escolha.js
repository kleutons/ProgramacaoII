import { readFile } from "fs";
import { createServer } from "http";
import { parse } from "url";

createServer(function (req, res) {
  let q = parse(req.url, true);
  let fileName = "./Mod2/html/" + q.pathname;
  console.log(q);
  console.log(fileName);

  readFile(fileName, function (error, data) {
    console.log(error);
    if (error) {
      res.writeHead(400, { "Content-Type": "text/html" });
      return res.end("404 NOT FOUND");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
}).listen(8080);
