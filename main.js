// UPDATE: ADD THIS.
var currentfile = require(fileselected + '.txt');
var fileselected = "default";
var myinput = "";

var input = "null";
var constructor = ".null";

function jangsbase() {
    if (input == "create"){
        console.log("Create is not a valid command, add a constructor.")
        if (constructor == ".file"){
            currentfile.appendFile('default.txt', myinput, function (err) {
                if (err) throw err;
                console.log('Logged and created new file...');
              });
        }
    }
}