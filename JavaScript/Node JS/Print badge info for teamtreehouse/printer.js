function printMessage(username, badgeCount, points, skill){
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in " + skill;
  console.log(message);
}

// Print Error messages 

function printError(error) {
  console.error(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;