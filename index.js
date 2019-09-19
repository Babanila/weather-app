const Joi = require("joi")
const express = require("express")

const app = express()
app.use(express.json())

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Listening at port ${port}...`))
