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
    res.cookie('6-2', 'value2', {
        sameSite: "none",
        httpOnly: true,
        secure: true
    });
    res.sendFile(__dirname + '/public/get.html');
});

app.post("/", (req, res) => {
    // res.sendFile(__dirname + '/public/post.html');
});
