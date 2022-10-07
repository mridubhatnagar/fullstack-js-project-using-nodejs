// Alternate approch to call async function without making caller function async

function loadDetails(endpoint, method, id){
    const value = document.getElementById(id).value;
    console.log(value);
    var inputData = {"rollno.": value};
    
    var promise = Promise.resolve(callApi(endpoint, method, inputData))
    fetchPromiseValue(promise);
}

function fetchPromiseValue(promise) {
    promise.then(function(value) {
        displayResult(value);
    })
}

function callApi(endpoint, method, data) {
    const returnJSON = fetch(endpoint, {
        method: method,
        headers: {
        "Accept": "application/json, text/plain, */*",
        "content-type": "application/json"
        },
        body:  JSON.stringify(data)
    })
    .then(function(res){
        return res.json()
    })
    return returnJSON
}

function displayResult(data) {
    if (Object.keys(data).length != 0) {
        showDetails(data);
        
    }
    else {
        hideDetails();

    }
}

function showDetails(data) {
    document.getElementById("div3").style.display = "block";
    document.getElementById("studentname").innerHTML = data["student_name"];
    document.getElementById("age").innerHTML = data["age"];
    document.getElementById("gender").innerHTML = data["gender"];
    document.getElementById("house").innerHTML = data["house"];
    document.getElementById("div4").style.display = "none";
}

function hideDetails() {
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "block";
    document.getElementById("div4").style.textAlign = "center";
    document.getElementById("div4").style.color = "red";
    document.getElementById("div4").style.margin = "10px";
}