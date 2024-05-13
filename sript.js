var studentId = document.getElementById('studentId');
var studentName =document.getElementById('studentName');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var submit = document.getElementById('submit');

var arrayStudents = [];

if(localStorage.arrayStudents != null){
    arrayStudents = JSON.parse(localStorage.getItem('arrayStudents'))
}
else{
    arrayStudents = []
}

submit.addEventListener('click',(e)=>{
    let studentObject = {
        studentId : studentId.value,
        studentName : studentName.value,
        email : email.value,
        phone : phone.value,
    }
    arrayStudents.push(studentObject);
    localStorage.setItem('arrayStudents',JSON.stringify(arrayStudents))
    console.log(arrayStudents);
    displayInfos()
    clearText()
    e.preventDefault();
})

function displayInfos(){
    let table = '';
    for( let index = 0; index < arrayStudents.length; index++){
        table += `
        <tr>
              <th scope="row">${index}</th>
              <td>${arrayStudents[index].studentId}</td>
              <td>${arrayStudents[index].studentName}</td>
              <td>${arrayStudents[index].email}</td>
              <td>${arrayStudents[index].phone}</td>
              <td>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
              </td>
            </tr>
        `
        document.getElementById('tbody').innerHTML = table;
    }
}

function clearText(){
    studentId.value = "";
    studentName.value = "";
    email.value = "";
    phone.value = "";
}

function deleteStudent(){

}

displayInfos()