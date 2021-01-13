// console.log("Hello");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validName = false;
let validEmail = false;
let validPhone = false;

$('#success').hide();
$('#failure').hide();

// console.log(name,email,phone);

name.addEventListener('blur',()=>{
    console.log('Name is blurred');
    //validating name
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;   //must start with ^ & end with $;
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("Name is Valid");
        name.classList.remove('is-invalid'); 
        validName = true;
    }
    else{
        console.log("It does not match");
        name.classList.add('is-invalid');
        validName = false;
    }
})

email.addEventListener('blur',()=>{
    console.log('Email is blurred');
    //validating email
    let regex = /^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-Z]){2,7}$/;   //must start with ^ & end with $;
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("Email is Valid");
        email.classList.remove('is-invalid'); 
        validEmail = true;
    }
    else{
        console.log("It does not match");
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur',()=>{
    console.log('Phone is blurred');
    //validating phone
    let regex = /^([0-9]){10}$/;   //must start with ^ & end with $;
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log("Phone is Valid");
        phone.classList.remove('is-invalid'); 
        validPhone = true;
    }
    else{
        console.log("It does not match");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

window.onload = function(){

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    
    e.preventDefault();
    console.log("you clicked on submit");

    //submitting form
    if(validEmail && validName && validPhone == true){
        console.log("These are valid");
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        
        $('#success').show();
        $('#failure').hide();
    }
    else{
        console.log("These are not valid");
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        
        $('#failure').show();
        $('#success').hide();
    }
  
})
}

