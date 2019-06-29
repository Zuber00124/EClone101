const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send("Hello from server");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log("server is running");
})