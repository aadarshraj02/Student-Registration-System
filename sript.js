var studentId = document.getElementById('studentId');
var studentName =document.getElementById('studentName');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var submit = document.getElementById('submit');

var arrayStudents = [];

submit.addEventListener('click',(e)=>{
    let studentObject = {
        studentId : studentId.value,
        studentName : studentName.value,
        email : email.value,
        phone : phone.value,
    }
    arrayStudents.push(studentObject);
    console.log(arrayStudents);
    e.preventDefault();
})

function displayInfos(){
    let table = '';
    for( let index = 0; index < arrayStudents.length; index++){

    }
}