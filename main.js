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
        if (constructor == "windows"){
            html_instert = ["<h1>You have insterted a window... Edit this text!</h1>", "<p>end</p>"];
            css_instert = ["div", "{", "width: 300px;", "border: 15px soild green;", "padding: 50px;", "margin: 20px;", "}"];
        }
        if (constructor == ".end"){
            die("Ended file using .end")
        }
        }
    }
}