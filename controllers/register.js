import {Validation} from '../util/validation.js'
import { User } from "../models/User.js";

document.getElementById('register').onclick = function(){
    let IDname = document.getElementById('txt__email').value
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

    /**---------------------------------Bắt lỗi------------------------------------------------------ */
    var kiemTra = new Validation()
    /**---------------------------------Bắt lỗi email ------------------------------------------------------ */
    // Khởi tạo biến lổi của Email
    var loiEmail = 0
    //Nếu email có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(user.email, 'tbEmail','Email')){loiEmail++}
    else if(!kiemTra.kiemTraEmail(user.email, 'tbEmail','Email')){loiEmail++}

    // Nếu có lổi thì hiện class='sp-thongbao-hide'
    showHideClass(loiEmail,'#tbEmail')

    /**---------------------------------Bắt lỗi mật khẩu------------------------------------------------------ */
      // Khởi tạo biến lổi của mật khẩu
      var loiMatKhau = 0
      //Nếu mật khẩu có lổi thì lổi +1
      if(!kiemTra.kiemTraMatKhau(user.password, 'tbPassword','Mật khẩu')){loiMatKhau++}
     // Nếu có lổi thì hiện class='sp-thongbao-hide'
    showHideClass(loiMatKhau,'#tbPassword')

    
  /**---------------------------------Bắt lỗi xác nhận mật khẩu------------------------------------------------------ */
    // Khởi tạo biến lổi của xác nhận mật khẩu
    var loiPassCom = 0
    //Nếu họ tên có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(passcm, 'tbPasswordCm','Mật khẩu')){loiPassCom++}
    else if(!kiemTra.kiemTraMatKhauXacNhan(passcm, 'tbPasswordCm','Mật khẩu',user.password )){loiPassCom++}

     // Nếu có lổi thì hiện class='sp-thongbao-hide'
     showHideClass(loiPassCom,'#tbPasswordCm')

    /**---------------------------------Bắt lỗi name------------------------------------------------------ */
    // Khởi tạo biến lổi của mật khẩu
    var loiTK = 0

    //Nếu taiKhoan có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(user.name, 'tbName','Name')){loiTK++}
    else if(!kiemTra.kiemTraKhoangCach(user.name, 'tbName','Name')){loiTK++}
     // Nếu có lổi thì hiện class='sp-thongbao-hide'
     showHideClass(loiTK,'#tbName')

    /**---------------------------------Bắt lỗi số điện thoại------------------------------------------------------ */
    // Khởi tạo biến lổi của số điện thoại
    var loiPhone = 0
    //Nếu họ tên có lổi thì lổi +1
    if(!kiemTra.kiemTraRong(user.phone, 'tbPhone','Phone')){loiPhone++}
    else if(!kiemTra.kiemTraSoDienThoai(user.phone, 'tbPhone','Phone')){loiPhone++}

     // Nếu có lổi thì hiện class='sp-thongbao-hide'
     showHideClass(loiPhone,'#tbPhone')


     var json = JSON.stringify(user);
     localStorage.setItem(IDname,json)
// Nếu lổi > 0 thì out
if(loiEmail!=0 || loiMatKhau!=0 || loiTK!=0 || loiPhone!=0 || loiPassCom!=0){
  
  return
}else{
  var json = JSON.stringify(user);
  localStorage.setItem(IDname,json)
  console.log(json)
//Chạy hàm Dang ký
  // DangKy(user)
  }
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

//Hàm xét nếu có lổi thì hiện class='sp-thongbao-hide'
//Hàm xét không nếu có lổi thì hiện class='sp-thongbao'
function showHideClass(loi, idTB){
  if(loi!=0){
    if(document.querySelector(idTB).className == 'sp-thongbao'){
      document.querySelector(idTB).className = 'sp-thongbao-hide'
    }
  }
  else{
    if(document.querySelector(idTB).className = 'sp-thongbao-hide'){
      document.querySelector(idTB).className = 'sp-thongbao'
  }
}
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