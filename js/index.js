


function checkUsername(){
    var username=document.getElementById('username').value;
    if(username.length < 6 || username.length > 20){
        return false;
    }
    else{        
        if(/^[\w]*$/.test(username)){

            return true;
        }
        else{
            return false;
        }
    }
}

function checkPassword(){
    var pass= document.getElementById('password').value;
    var passReg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w].{8,20}$/;
    if(pass.match(passReg)){
        return true;
    }
    else return false;
}

function onLogin(){
    var msg;
    var passMsg='C8-20! Must contain lowercase, uppercase and number!';
    var nameMsg='C6-20! Only alpha numeric and underscore are allowed!';
    var passError;
    var div=document.createElement('div');
    div.className="divError";
    if(checkUsername()){
        if(checkPassword()){
            // location.replace(window.location.href="../member.html");
            // window.open("member.html","_self");
            window.location.href="member.html";
            
        }
        else{
            passError=document.createElement('p');
            msg=document.createTextNode(passMsg);
            passError.appendChild(msg);
            document.getElementById('pass').after(div);
            div.appendChild(passError);
            passError.className="error";
        }
    }
    else{
        var nameDiv=document.createElement('div');
        nameDiv.className="divError";
        var nameError=document.createElement('p');
        msg=document.createTextNode(nameMsg);
        nameError.appendChild(msg);
        document.getElementById('name').after(nameDiv);
        nameDiv.appendChild(nameError);
        nameError.className="error";
        if(!checkPassword()){
            passError=document.createElement('p');
            msg=document.createTextNode(passMsg);
            passError.appendChild(msg);
            document.getElementById('pass').after(div);
            div.appendChild(passError);
            passError.className="error";
        }
    }    

    return false;
}

function onAddMem(){

}