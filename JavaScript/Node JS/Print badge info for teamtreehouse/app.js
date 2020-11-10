var profile = require("./profile.js");

var users = process.argv.slice(3);

var skill = process.argv[2];

users.forEach(function(user){
  profile.get(user, skill);
});