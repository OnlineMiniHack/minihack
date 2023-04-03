

const validate = (username, password) => {
    return (username === 'test' && password === 'password123')
}

document.getElementById('submit').addEventListener("click",()=>{

  var userName = document.getElementById('user').value;
  var password = document.getElementById('password').value
  if(validate(userName,password))
  {
    login();
  }
  else{
    alert("Invalid UserName or Password")
  }
  
})

function login()
{
  document.cookie = "auth=loggedIn; SameSite=None; Secure";;
  window.location.href = "/app.html"
}

document.addEventListener('keydown', logKey);

var currentIndex = 0; 
var keys = [38,38,40,40,37,39,37,39,66,65]
var secret = "😎😋😎😋😎😋";

//up, up, down, down, left, right, left, right, B, A

function logKey(e) {
 
  if(e.keyCode === keys[currentIndex])
    currentIndex += 1;
  else{
    currentIndex = 0;
    console.log("reset")
  }
  
  if(currentIndex == keys.length)
    window.location.hash = secret;
    
}

if(window.location.hash == "#%F0%9F%98%8E%F0%9F%98%8B%F0%9F%98%8E%F0%9F%98%8B%F0%9F%98%8E%F0%9F%98%8B"){
  login();
}
  
 