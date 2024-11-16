const input = document.getElementById("input");
const inputPass = document.getElementById("inputPass");
const loginBtn = document.getElementById("loginBtn");

function btn(){
    if(input.value === '' || inputPass.value === ''){
        loginBtn.style.transition = 'background-color 1s';
        loginBtn.style.backgroundColor = '#53bdeb';
    } else{
        loginBtn.style.transition = 'background-color 1s';
        loginBtn.style.backgroundColor = 'hsl(198, 79%, 32%)';
    }
}

btn();

input.addEventListener("input", btn);
inputPass.addEventListener("input", btn);

