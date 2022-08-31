const express = require("express");

const app = express();

// app.use( "/", (req, res, next) => {
//     console.log("Middleware start");
//     next();
//     console.log("Midddleware ends");
// })

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my Server.");
})
app.post("/", (req, res) => {
    res.status(201).send("Your data has been saved.");
})
app.put("/", (req, res) => {
    res.status(200).send("your data has been replaced.");
})
app.patch("/", (req, res) => {
    res.status(200).send("Your data has been updated");
})
app.delete("/", (req, res) => {
    res.status(200).send("Your dta has been deleted");
})


app.listen(4000, (err) => {
    console.log("😍 server listening http://localhost/4000")
});


