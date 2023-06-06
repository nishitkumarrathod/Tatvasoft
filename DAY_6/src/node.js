const express = require("express");
const app = express();

app.get("/myBackend", async (req, res) => {
    res.send("This is Backend");
});

app.listen(3000,() => console.log("Running on port number 3000"))