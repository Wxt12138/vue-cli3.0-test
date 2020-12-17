// 声明http协议
const http = require("http");
// 声明文件操作系统对象
const fs = require("fs");
// 声明端口
const post = 8888;
http.createServer((request, response) => {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/html
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    fs.readFile("../dist/index.html", 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        // 发送响应数据
        response.write(data);
        // 结束
        response.end();
    })

}).listen(post);
// 终端打印如下信息
console.log("Server running at http://127.0.0.1:" + post + "/");