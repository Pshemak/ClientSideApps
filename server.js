const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    res.send("<h1>my app on heroku! - Przemysław Maciejczyk</h1>")
})

app.get("/data", function (req, res) {
    let obiekt = {
        imie: "Przemysław",
        nazwisko: "Maciejczyk",
        klasa: "3i1",
        grupa: "2"
    }
    res.send(obiekt)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})