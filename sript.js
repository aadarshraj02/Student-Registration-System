var studentId = document.getElementById('studentId');
var studentName =document.getElementById('studentName');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var submit = document.getElementById('submit');

submit.addEventListener('click',(e)=>{
    let studentObject = {
        studentId : studentId.value,
        studentName : studentName.value,
        email : email.value,
        phone : phone.value,
    }
})