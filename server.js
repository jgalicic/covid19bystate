// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express")
var app = express()

// Declare the package
const covid = require("novelcovid")

app.use(express.static(__dirname + "/static"))

app.get("/", function(request, response) {
  // Now we create a async/await
  ;(async () => {
    let sortedStates = await covid.getState()
    return response.json(sortedStates)
  })()

  /////////
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000")
})
