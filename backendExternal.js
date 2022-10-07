var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/student_info_using_external_js_file.html");
});

app.post("/", (req, res) => {
  console.log("POST request getting called");
  var rollno = req.body["rollno."];
  console.log(typeof rollno);
  studinfo = {
    U101113FCS103: {
        "student_name": "Harry Potter",
        "age": 25,
        "gender": "Male",
        "house": "Griffendor",
    },
    U101113FCS104: {
        "student_name": "Hermione Granger",
        "age": 27,
        "gender": "Female",
        "house": "Griffendor"
    },
    U101113FCS105: {
        "student_name": "Ron Weasley",
        "age": 26,
        "gender": "Male",
        "house": "Griffendor"
    },
    U101113FCS106: {
        "student_name": "Albus Dumbeldore",
        "age": 35,
        "gender": "Male",
        "house": "Griffendor"

    }
  }

  console.log( rollno in studinfo);
  if(rollno in studinfo) {
    console.log(rollno);
    console.log("rollno found");
    result = studinfo[rollno];
  }
  else {
    console.log(rollno);
    console.log("rollno not found");
    result = {};
  }
  res.json(result)
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080.');
});