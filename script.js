var array =  new Array();
function addData(){
    getData();
    array.push({
        bookTitle: document.getElementById("bookTitle").value,
        bookAuthor: document.getElementById("bookAuthor").value,
        bookPriority: document.getElementById("bookPriority").value,
        bookCategory: document.getElementById("bookCategory").value,
    })
    localStorage.setItem("localData", JSON.stringify(array));
    document.forms["form"].reset();
    showData();
}

function getData(){
    var data = localStorage.getItem("localData");
    if(data != null)
        array = JSON.parse(data);
}

function showData(){
    getData();
    var tbl = document.getElementById("myTable");
    var x = tbl.rows.length;
    while(--x){
        tbl.deleteRow(x);
    }
    var tBody = document.getElementById("tBody");
    for(i=0; i<array.length; i++){
        var r = tBody.insertRow();
        var cell1= r.insertCell();
        var cell2= r.insertCell();
        var cell3= r.insertCell();
        var cell4= r.insertCell();
        cell1.innerHTML = array[i].bookTitle;
        cell2.innerHTML = array[i].bookAuthor;
        cell3.innerHTML = array[i].bookPriority;
        cell4.innerHTML = array[i].bookCategory;
    }
}

function checkForm(){
    document.getElementById('submitBtn').disabled = !form.checkValidity() || !document.getElementById('bookCategory').value;
}

window.onload = function() { 
    showData();
}