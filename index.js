
// *********************************cancel******************************************
let clear=document.getElementById("cancel").addEventListener("click",cancel);
function cancel(){
    document.getElementById("fname").value = "";
    document.getElementById("dateof").value = "";
    document.getElementById("contact").value = "";

}
// ****************************validation form*****************************************************
// let personname=document.getElementById("fname");
// let personDOB=document.getElementById("dateof");
// const errorName = document.getElementById("errorName");

let save=document.getElementById("saveform");
save.addEventListener("click",function(){
    onFormSubmit();
    // validateName();
    
});

// ****************************************************

var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        console.log(formData);
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["dateof"] = document.getElementById("dateof").value;
    formData["contact"] = document.getElementById("contact").value;
    console.log(formData);
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("Record").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.dateof;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.contact;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = new Date();
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)" class="bg-success text-light border-0 rounded-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                       <button onClick="onDelete(this)" class="bg-danger text-light  border-0 rounded-3">Delete</button>`;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("dateof").value = selectedRow.cells[1].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[2].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.dateof;
    selectedRow.cells[2].innerHTML = formData.contact;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("Record").deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("dateof").value = "";
    document.getElementById("contact").value = "";
    selectedRow = null;
}

function validate() {
    isValid = true;
    if (document.getElementById("fname").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }else if(document.getElementById("dateof").value == ""){
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }
    else if(document.getElementById("contact").value == ""){
        isValid = false;
        document.getElementById("contactValidationError").classList.remove("hide");
    } 
    else{
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

// *************************************END********************************************
