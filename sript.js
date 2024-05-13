var studentId = document.getElementById('studentId');
var studentName =document.getElementById('studentName');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var submit = document.getElementById('submit');

var arrayStudents = [];

var flag = 'create'
var tempId;

if(localStorage.arrayStudents != null){
    arrayStudents = JSON.parse(localStorage.getItem('arrayStudents'))
}
else{
    arrayStudents = []
}

submit.addEventListener('click',(e)=>{
    if(flag === 'create'){
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
    }
    else{
        submit.innerHTML = "Update"
        updateStudent(tempId);
    }
   
    e.preventDefault();
})

function displayInfos(){
    let table = '';
    for( let index = 1; index < arrayStudents.length; index++){
        table += `
        <tr>
              <th scope="row">${index}</th>
              <td>${arrayStudents[index].studentId}</td>
              <td>${arrayStudents[index].studentName}</td>
              <td>${arrayStudents[index].email}</td>
              <td>${arrayStudents[index].phone}</td>
              <td>
                <button class="btn btn-warning" onclick = "updateStudent(${index})">Edit</button>
                <button class="btn btn-danger" onclick = "deleteStudent(${index})">Delete</button>
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

function deleteStudent(id){
    arrayStudents.splice(id,1)
    localStorage.setItem('arrayStudents',JSON.stringify(arrayStudents));
    displayInfos();
}

function updateStudent(id){
    tempId = id;
    flag = 'update';
    submit.innerHTML = "Update"
    let studentObject = {
        studentId : studentId.value,
        studentName : studentName.value,
        email : email.value,
        phone : phone.value,
    }
    studentId.value = arrayStudents[id].studentId;
    studentName.value = arrayStudents[id].studentName;
    email.value = arrayStudents[id].email;
    phone.value = arrayStudents[id].phone;
    
    arrayStudents[tempId] = studentObject;
    localStorage.setItem('arrayStudents',JSON.stringify(arrayStudents));
    displayInfos()
}

displayInfos()