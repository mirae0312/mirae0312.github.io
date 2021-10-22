const check1 = document.querySelector("#idFrm");
const checkId = check1.querySelector("input");
const check2 = document.querySelector("#pwdFrm");
const checkPwd = check2.querySelector("input");
const loginBtn = document.querySelector("#subBtn");

function Check() {
    const id = checkId.value;
    const pwd = checkPwd.value;
    if(localStorage.getItem(id) == pwd){
        alert("로그인 성공!");
        location.href='../kimmirae/index.html';
        }
    else {
        alert("잘못 입력하셨습니다.");
    }
}
function shot() {
    loginBtn.addEventListener('click', Check);
}
shot();
    
    


