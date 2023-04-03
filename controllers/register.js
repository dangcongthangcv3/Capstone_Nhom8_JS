import {Validation} from '../util/validation.js'
import { User } from "../models/User.js";

document.getElementById('register').onclick = function(){
    var user = new User();
    user.email = document.getElementById('txt__email').value
    user.password = document.getElementById('txt__password').value
    user.name = document.getElementById('txt__name').value
    let gender = document.querySelector('input[name="gender"]:checked').value
    let gen = true
    if(gender =='true'){
        gen = true
    }
    else if(gender =='false'){
        gen = false
    }
    user.gender = gen
    user.phone = document.getElementById('txt__phone').value

    let passcm = document.getElementById('txt__pwdCm').value

    var kiemTra = new Validation()
    // Khởi tạo biến lổi của Email
    var loiEmail = 0
    //Nếu email có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(user.email, 'tbEmail','Email')){loiEmail++}
    else if(!kiemTra.kiemTraEmail(user.email, 'tbEmail','Email')){loiEmail++}

    // Nếu có lổi thì hiện class='sp-thongbao-hide'
    if(loiEmail!=0){
      if(document.querySelector('#tbEmail').className == 'sp-thongbao'){
        document.querySelector('#tbEmail').className = 'sp-thongbao-hide'
      }
    }
    else{
      if(document.querySelector('#tbEmail').className = 'sp-thongbao-hide'){
        document.querySelector('#tbEmail').className = 'sp-thongbao'
    }
  }


      // Khởi tạo biến lổi của mật khẩu
      var loiMatKhau = 0
      //Nếu mật khẩu có lổi thì lổi +1
      if(!kiemTra.kiemTraMatKhau(user.password, 'tbPassword','Mật khẩu')){loiMatKhau++}
  
      // Nếu có lổi thì hiện class='sp-thongbao-hide'
      if(loiMatKhau!=0){
        if(document.querySelector('#tbPassword').className == 'sp-thongbao'){
          document.querySelector('#tbPassword').className = 'sp-thongbao-hide'
        }
      }
      else{
        if(document.querySelector('#tbPassword').className = 'sp-thongbao-hide'){
          document.querySelector('#tbPassword').className = 'sp-thongbao'
      }
    }

    // Khởi tạo biến lổi của mật khẩu
    var loiTK = 0

    //Nếu taiKhoan có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(user.name, 'tbName','Name')){loiTK++}
    else if(!kiemTra.kiemTraKhoangCach(user.name, 'tbName','Name')){loiTK++}

    // Nếu có lổi thì hiện class='sp-thongbao-hide'
    if(loiTK!=0){
      if(document.querySelector('#tbName').className == 'sp-thongbao'){
        document.querySelector('#tbName').className = 'sp-thongbao-hide'
        
      }
    }
    else{
        if(document.querySelector('#tbName').className = 'sp-thongbao-hide'){
          document.querySelector('#tbName').className = 'sp-thongbao'
        }
    }
    // Khởi tạo biến lổi của tên nhân viên
    var loiPhone = 0
    //Nếu họ tên có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(user.phone, 'tbPhone','Phone')){loiPhone++}
    else if(!kiemTra.kiemTraSoDienThoai(user.phone, 'tbPhone','Phone')){loiPhone++}
    // Nếu có lổi thì hiện class='sp-thongbao-hide'

    if(loiPhone!=0){
      if(document.querySelector('#tbPhone').className == 'sp-thongbao'){
        document.querySelector('#tbPhone').className = 'sp-thongbao-hide'
   
      }
    }
    else{
      if(document.querySelector('#tbPhone').className = 'sp-thongbao-hide'){
        document.querySelector('#tbPhone').className = 'sp-thongbao'
    }
  }

  
    // Khởi tạo biến lổi của xác nhận mật khẩu
    var loiPassCom = 0
    //Nếu họ tên có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(passcm, 'tbPasswordCm','Mật khẩu')){loiPassCom++}
    else if(!kiemTra.kiemTraMatKhauXacNhan(passcm, 'tbPasswordCm','Mật khẩu',user.password )){loiPassCom++}

  if(loiPassCom!=0){
    if(document.querySelector('#tbPasswordCm').className == 'sp-thongbao'){
      document.querySelector('#tbPasswordCm').className = 'sp-thongbao-hide'
 
    }
  }
  else{
    if(document.querySelector('#tbPasswordCm').className = 'sp-thongbao-hide'){
      document.querySelector('#tbPasswordCm').className = 'sp-thongbao'
  }
}

if(loiEmail!=0 || loiMatKhau!=0 || loiTK!=0 || loiPhone!=0 || loiPassCom!=0){
  return
}
    
  DangKy(user)
  }
function DangKy(user){
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
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
  }else{
    id1.setAttribute('type', 'password');
    id2.style.color = '#5887ef';
  }
}
document.getElementById('eye__open').onclick = function(){
  toggle('txt__password','eye__open')
}
document.getElementById('eye__open__2').onclick = function(){
  toggle('txt__pwdCm','eye__open__2')
}