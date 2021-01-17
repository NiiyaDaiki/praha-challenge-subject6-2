const express = require("express");
const app = express();

app.use(express.json());


// port番号
const port = 8081;
// サーバー起動
app.listen(port);

// ルーティング
app.get("/", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.sendFile(__dirname + '/public/get.html');
});

app.post("/", (req, res) => {
    // res.sendFile(__dirname + '/public/post.html');
});
