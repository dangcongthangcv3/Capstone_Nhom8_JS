import {Validation} from '../util/validation.js'
import {LoginVal} from "../models/Login.js";

// emai: asc@gmail.com
//                     asc@gmail.com
// pass: aA1!aa
//                     aA1!aa
var arrLogin = []
document.getElementById('loginbutton').onclick = function(){
  // debugger
    let loginVal = new LoginVal()
    
    loginVal.email = document.getElementById('txt__email').value
    loginVal.password = document.getElementById('txt__password').value

    if(localStorage.getItem('mang')){
      let stringArr= localStorage.getItem('mang');
      let data = JSON.parse(stringArr)
      for(let i= 0; i<data.length;i++){
        if(loginVal.email== data[i].email && loginVal.password==data[i].password){
          
          var arrLogin = [data[i].name, true]
          var jsonLogin = JSON.stringify(arrLogin);
          localStorage.setItem('Login',jsonLogin)
          loginAxios(login)
          debugger
          window.location.href = './index.html'
        }
        else{
          document.getElementById('loss').innerHTML = 'Đăng nhập thất bại'
        }
      }
  } 
}

function loginAxios(user){
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signin',
        method: "POST",
        ResponseType: JSON,
        data: user,
    })
    promise.then(function(res) {
        console.log(res.data);
    })
    promise.catch(function(err) {
        console.log(err.response.data);
    })
}


///EYE

function toggle(txt__id1,txt__id2){
    let id1 = document.getElementById(txt__id1)
    let id2 = document.getElementById(txt__id2)
    if(id1.type=== 'password'){
      id1.setAttribute('type', 'text');
      id2.style.color = '#7a797e';
    }
    else{
      id1.setAttribute('type', 'password');
      id2.style.color = '#5887ef';
    }
  }
document.getElementById('eye__open').onclick = function(){
    toggle('txt__password','eye__open')
  }

  var html = ''
  if(localStorage.getItem('Login')){
    // de
    let stringArr= localStorage.getItem('Login');
    let data = JSON.parse(stringArr)
    // for(let i= 0; i<data.length;i++){
      var arrLogin = [data[0], false]
      var jsonLogin = JSON.stringify(arrLogin);
      localStorage.setItem('Login',jsonLogin)
      
        html = `<ul  class="ul"><li><a href="./login.html">Login</a></li>
        <li><a href="./register.html">Register</a></li></ul>`
      document.getElementById('loginIndex').innerHTML = html;
    
  }
  else{
    html = `<ul  class="ul"><li><a href="./login.html">Login</a></li>
    <li><a href="./register.html">Register</a></li></ul>`
      document.getElementById('loginIndex').innerHTML = html;
  }
  
  document.getElementById('togShop').onclick = function(){
    // debugger
    let mobile = document.getElementById('menu').style.display ==='flex';
    
    if(mobile==false){
      document.getElementById('menu').style.display ='flex'
      mobile = 'none'
    }
    else{
      document.getElementById('menu').style.display ='none'
      mobile = 'none'
    }
  }