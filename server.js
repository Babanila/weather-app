const Joi = require("@hapi/joi")
const express = require("express")
const axios = require("axios")
const cors = require("cors")

if (process.env.NODE_ENV != "production") {
  require("dotenv").config()
}

const apiKey = process.env.OPEN_WEATHER_API_KEY
const port = process.env.PORT || 3333
const hostname = process.env.HOSTNAME || "localhost"
const defaultApiUrl = `http://api.openweathermap.org/data/2.5`

const app = express()
app.use(express.json())

// Setting CORS
const originsWhitelist = [
  "http://localhost:3333" // Front-end url for development
]
const corsOptions = {
  origin: (origin, callback) => {
    const isWhitelisted = originsWhitelist.indexOf(origin) !== -1
    callback(null, isWhitelisted)
  },
  credentials: true
}

app.use(cors(corsOptions))

const c = "spain"
// Search parameter
// app.get("/:query", async (req, res) => {
app.get("/", async (req, res) => {
  const url = `${defaultApiUrl}/weather?q=${req.params.query}&appid=${apiKey}`
  try {
    const { data } = await axios.get(url)

    res.status(200).send(data)
  } catch (e) {
    res.status(e.response.status).send(e.response.statusText)
  }
})

app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
)
