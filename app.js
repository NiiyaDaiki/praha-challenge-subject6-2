const express = require("express");
const app = express();

app.use(express.json());

// port番号
const port = 8081;
// サーバー起動
app.listen(port);

// ルーティング
app.get("/", (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Credentials': true
    });
    res.cookie('6-2-1', 'get', {
        sameSite: "none",
        httpOnly: true,
        secure: true
    });
    res.sendFile(__dirname + '/public/get.html');
});

app.post("/simple", (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Credentials': true,
    });
    res.cookie('6-2-2', 'post', {
        sameSite: "none",
        httpOnly: true,
        secure: true
    });
    res.sendFile(__dirname + '/public/post.html');
});

// preflight request
// optionsメソッドでリクエストするので、それを正しく処理する必要がある。
app.options("/preflight", (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'

    })
    res.sendStatus(200);
})

// optionsが正しく処理できたら、実際のリクエストを処理する。
app.post("/preflight", (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Credentials': true,

    });
    res.cookie('6-2-3', 'preflight', {
        sameSite: "none",
        httpOnly: true,
        secure: true
    });
    res.status(201).json({ key: 'success' });
});
