function onsubmit(){
    var userId = document.getElementById("#userId");
    var pwd = document.getElementById("#pwd");
    var pwdCheck = document.getElementById("#pwdCheck");
    var userName = document.getElementById("#userName");
    var email = document.getElementById("#email");
    var ssn1 = document.getElementById("#ssn1");
    var ssn2 = document.getElementById("#ssn2");
    var tel1 = document.getElementById("#tel1");
    var tel2 = document.getElementById("#tel2");
    var tel3 = document.getElementById("#tel3");
    var regExp1 = /^[a-z][a-z\d]{3,11}$/;
    var regExp2 = /[0-9]/;
    var regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\*!&]/];

    //아이디체크
    if (userId.value == "") {
        alert("아이디를 입력하세요.");
        userId.focus();
        return false;
    }    
    //비밀번호 체크
    if (pwd.value == "") {
        alert("비밀번호를 입력하세요.");
        pwd.focus();
        return false;
    }
    for(let i = 0; i < regExpArr.length; i++){
        if(!regExpTest(regExpArr[i], pwd, "비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다.")){
            return false;
        }
    }
    if(!isEqualPwd()){
        return false;
    }
    //이름체크
    var regExp3 = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{2,}$/;
    if(!regExpTest(regExp3,userName,"한글2글자이상 입력하세요."))
        return false;

    //주민번호체크
    var regExp4 = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[01])$/;
    var regExp5 = /^[1234]\d{6}$/;
    if(!regExpTest(regExp4,ssn1,"숫자만 입력하세요."))
        return false;
    if(!regExpTest(regExp5,ssn2,"숫자만 입력하세요."))
        return false;
    if(!ssnCheck(ssn1.value,ssn2.value)){
        alert("올바른 주민번호가 아닙니다.");
        return false;
    }
    //이메일 검사
    if(!regExpTest(/^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/, email, "이메일 형식에 어긋납니다."))
            return false;
    
    //전화번호 검사
    // 전화번호 앞자리는 010, 두번째 자리는 3~4자리 숫자, 세번째 자리는 4자리 숫자
    if (!regExpTest(/^010$/, tel1, "번호 2자리 이상 입력"))
            return false;
    if (!regExpTest(/^[0-9]{3,4}$/, tel2, "번호 3자리 이상 입력"))
            return false;
    if (!regExpTest(/^[0-9]{4}$/, tel3, "4자리 번호 입력"))
            return false;
    return true;
}

function ssnCheck(ssn1, ssn2){
    var ssn = ssn1+ssn2;
    var total = 0;
    for(var i=0; i<12; i++){
        if(i<8){
            total += parseInt(ssn.substr(i,1))*(i+2);
        }
        else {
            total += parseInt(ssn.substr(i,1))*(i-6);
        }
    }
    var result = (11-(total%11))%10;
    var num13 = parseInt(ssn.substr(12,1));
    console.log(result+'=='+num13);
    if(result==num13)
        return true;
    else 
        return false;
}
function isEqualPwd(){
    if(pwd.value == pwdCheck.value){
        return true;
    }
    else{
        alert("비밀번호가 일치하지 않습니다.");
        pwd.select();
        return false;
    }
}
function regExpTest(regExp, el, msg){
    if(regExp.test(el.value))
        return true;
    //적합한 문자열이 아닌 경우
    alert(msg);
    el.value="";
    el.focus();
    return false;
}