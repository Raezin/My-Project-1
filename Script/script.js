

class user{
    constructor(username , password , status){
        this.newusername = username;
        this.newuserpassword = password;
        this.newstatus = status;
    }

    loggedin(){
        this.status = 'LoggedIn';
    }

    reset(){
        this.username = '';
        this.password = '';
        this.status = 'pending';
    }

    userenter(name , password){
        this.username = name;
        this.password = password;
    }

}

let newuser = new user('','','pending');

function autoincloc(){
    let loc = document.getElementById('loc');
    let hot = document.getElementById('hot');
    let rid = document.getElementById('rid');
    let x = 0;
    let y=0;
    let z=0;
    var interval= setInterval(function(){
            loc.innerHTML= x + "0+";
            hot.innerHTML = y + "000+"
            rid.innerHTML = z + "00000+";
            if (x>=90 && y >=100 && z >=70){
                clearInterval(interval);
            }
            else if(x>=90 && y < 100 && z< 70){
                y++;
                z++;
            }
            else if(z>=70 && y < 100){
                y++;
            }
            else{
                x++;
                y++;
                z++;
            }
    },10)
    
}

autoincloc();


// This is the login code


function verifyemail(){
    let email = document.getElementById('guestemail');
    let password = document.getElementById('guestpassword');
    

    if(email.value == '' && password.value == ''){
        alert("Enter Email and password!");
    }
    else if(email.value == ''){
        alert("Email is empty!");
    }
    else if(password.value == ''){
        alert("Password is empty!");
    }
    else if(email.value != "guest@gmail.com" || password.value != "guest"){
        alert("Invalid Email or Password");
    }
    else if(email.value != "guest@gmail.com" && password.value != "guest"){
        alert("Invalid Email or Password");
    }
    else if(email.value == "guest@gmail.com" && password.value == "guest"){

        newuser.userenter('guest@gmail.com', 'guest');

        newuser.loggedin();

        document.getElementById('username').innerText = "Guest";
        alert('Welcome to RentUs. You have signed in as Guest');

    }
}


function loggincheck(){
    if (document.getElementById('username').innerText == "Guest"){
        newuser.reset();
        document.getElementById('username').innerText = "Sign In";
        alert('You have successfully Logged out!');
        document.getElementsByClassName('custom-modal').removeAttribute('id');
    }
    else{
        document.getElementsByClassName('custom-modal').setAttribute("id", "exampleModal");
    }
}


function loginfirst(){
    let user = document.getElementById('username').innerText;
    if(user == "Sign In"){
        alert("Login First!");
    }
}