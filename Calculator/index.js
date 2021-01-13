let screen = document.getElementById('screen');
buttons = document.querySelectorAll('.btn1');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        btnText = e.target.innerText;
        console.log(btnText);
        if(btnText == 'x'){
            btnText = '*';
            screen.value += btnText;
            screenValue = screen.value;
        }
        else if(btnText == '='){
            screen.value = eval(screen.value);
            screenValue = screen.value;
            if((typeof screenValue) == 'number'){
                screenValue = screen.value;
            }
            else{
                screenValue = "Invalid";
            }
        }
        else if(btnText == 'C'){
            screen.value = '';
            screenValue = screen.value;
        }
        else {
            screen.value += btnText;
            screenValue = screen.value;
        }
    })
}