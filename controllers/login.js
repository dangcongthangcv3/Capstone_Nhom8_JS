import {Validation} from '../util/validation.js'
import { Login } from "../models/Login.js";

document.getElementById('login').onclick = function(){
    arrLogin=[s,s]
    let thanhcong = 'admin'
    if(thanhcong == 'KH'){
        window.location.href ='./index.html'
    }
    else if(thanhcong =='admin'){
        alert('sa')
    }

    loginAxios(arrLogin)
   
    
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