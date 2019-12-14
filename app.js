const http = require("http");
const routes = require("./routes");

const server = http.createServer((req, res) => {
  console.log(`url = ${req.url}  \n method = ${req.method} `);
  console.log("Header =", req.headers);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my nodejs server</h1><p>Wassup</p></body>");
  res.write("</html>");
  res.end();
});

routes.listen(8080);
