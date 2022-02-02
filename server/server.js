const express = require("express")

const app = express()

// this lets express serve static files from public directory
const fileServerMiddleware = express.static("public")

app.use("/", fileServerMiddleware)

app.listen(3000, () => {
  console.log("Server started at port 3000");
})
