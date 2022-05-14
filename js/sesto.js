function store() { //stores items in the sessionStorage
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var message = document.getElementById('message').value;

    window.sessionStorage.setItem('fname', JSON.stringify(fname));
    window.sessionStorage.setItem('lname', JSON.stringify(lname));
    window.sessionStorage.setItem('email', JSON.stringify(email));
    window.sessionStorage.setItem('mobile', JSON.stringify(mobile));
    window.sessionStorage.setItem('message', JSON.stringify(message));
    //converting object to string
}

function retrieveRecords() { //retrieves items in the sessionStorage
    console.log("retrive records");
    document.getElementById('dt').innerHTML = window.sessionStorage.getItem('now');
    document.getElementById('flname').innerHTML = window.sessionStorage.getItem('fname') + ' ' + window.sessionStorage.getItem('lname');
    document.getElementById('email').innerHTML = window.sessionStorage.getItem('email');
    document.getElementById('mobile').innerHTML = window.sessionStorage.getItem('mobile');
    document.getElementById('message').innerHTML = window.sessionStorage.getItem('message');
}

function removeItem() { //deletes item from sessionStorage
    sessionStorage.removeItem('car');
    console.log("remove items");
}

function clearStorage() { //clears the entire sessionStorage
    sessionStorage.clear();
    console.log("clear records");
}

window.onload = function () { //ensures the page is loaded before functions are executed.
    retrieveRecords();
    clearStorage();
    // document.getElementById("carForm").onsubmit = store;
    // document.getElementById("clearButton").onclick = clearStorage;
    // document.getElementById("removeButton").onclick = removeItem;
    // document.getElementById("retrieveButton").onclick = retrieveRecords;
}