var http = require("http");
var https = require("https");
var printer = require("./printer.js");


function get(username, skill) {
    // Connect to the API URL (http://teamtreehouse.com/madhavisankholkar.json)
    var request = https.get("https://teamtreehouse.com/"+username+".json", function(response) {  
      var body = "";
      // Read the data
      response.on('data', function(chunk){
        body += chunk;
      });
      
      response.on('end', function(){
        
        if(response.statusCode === 200) {
        
          body = JSON.parse(body);
          try {
            // Parse the data
            printer.printMessage(body.name, body.badges.length, eval('body.points.' + skill), skill);
          } catch (error) {
            // Parse Error 
            printer.printError(error);
          }
        } else {
          //Status code Error
          var statusErrMsg = http.STATUS_CODES[response.statusCode];
          printer.printError({message: "There was an error getting the profile for " + username + " (" + statusErrMsg + ")."});
        }
      });
    });
    
    //connection error
    request.on('error', printer.printError);
}

module.exports.get = get;