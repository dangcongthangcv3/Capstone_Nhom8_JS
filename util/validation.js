export function Validation(){
    this.kiemTraRong = function (value,idError,name) {
        if(value.trim() === ''){
            document.getElementById(idError).innerHTML = `${name} không được bỏ trống !`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;

    }
    this.kiemTraKyTu = function (value,idError,name) {
        var regexLetter = /^[A-Z a-z]+$/
        // Nếu chuỗi định dạng test thành công value là true
        if(regexLetter.test(value)){
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} tất cả phải có ký tự`;
        return false;
    }
    this.kiemTraEmail = function (value,idError,name) {
        var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // Nếu chuỗi định dạng test thành công value là true
        if(regexEmail.test(value)){
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} Không hợp lệ`;
        return false;
    }
    this.kiemTraSo = function (value,idError,name) {
        var regexNumber = /^[0-9]+$/;

        // Nếu chuỗi định dạng test thành công value là true
        if(regexNumber.test(value)){
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} Không hợp lệ`;
        return false;
    }
    this.kiemTraDoDai = function (value,idError,name,minLength,maxLength) {
        // tên đăng nhập 6-30 ký tự

        // Nếu chuỗi định dạng test thành công value là true
        if(value.length >maxLength || value.length <minLength){
            document.getElementById(idError).innerHTML =  `${name} từ ${minLength} đến ${maxLength}`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
    this.kiemTraMatKhau = function (value,idError,name) {
        // tên đăng nhập 6-30 ký tự
        //ít Nhất 1 ký tự hoa
        var regexMatKhau = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{6,10}$/g;

        // Kiểm tra giá trị
        if(regexMatKhau.test(value)){
            document.getElementById(idError).innerHTML =''
            return true
        }
        document.getElementById(idError).innerHTML =  `${name} từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)`;
        return false;
    }
    this.kiemTraMatKhauXacNhan = function (value,idError,name,pass) {
        // tên đăng nhập 6-30 ký tự
        //ít Nhất 1 ký tự hoa
        if(pass != value){
              document.getElementById("tbPasswordCm").innerHTML = "PassWord không khớp";
              return false
            }
          else{
              document.getElementById("tbPasswordCm").innerHTML = "";
              return true
              
          }
    }
    
    this.kiemTraKhoangCach = function (value,idError,name) {
        // tên đăng nhập 6-30 ký tự
        //ít Nhất 1 ký tự hoa
        var regexSpace = /[ ]/g;

        // Kiểm tra giá trị
        if(regexSpace.test(value)){
            document.getElementById(idError).innerHTML =  `${name} không dùng khoảng cách!`;
            return false
        }
        document.getElementById(idError).innerHTML =  '';
        return true;
    }
    
    this.kiemTraSoDienThoai = function (value,idError,name) {
        // tên đăng nhập 6-30 ký tự
        //ít Nhất 1 ký tự hoa
        var regexSpace = /^[0-9\-\+]{9,15}$/g;

        // Kiểm tra giá trị
        if(regexSpace.test(value)){
            document.getElementById(idError).innerHTML =  '';
            return true;
            
        }document.getElementById(idError).innerHTML =  `${name} không có thật!`;
        return false
    }

    this.search = function (value, idError, name) {
        var regexLetter =
          /^[A-Z a-z  ă â e ê đ ý ỳ ỷ ỹ ỵ ú ù ủ ũ ụ ư ứ ừ ử ữ ự ó ò ỏ õ ọ ô ố ồ ổ ỗ ộ ơ ớ ờ ở ỡ ợ ó ò ỏ õ ọ ô ố ồ ổ ỗ ộ ơ ớ ờ ở ỡ ợ i í ì ỉ ĩ ị é è ẻ ẽ ẹ ê ế ề ể ễ ệ á à ả ạ ã ă ắ ằ ẳ ẵ ặ â ấ ầ ẩ ẫ ậ Ă Â E Ê Đ Ý Ỳ Ỷ Ỹ Ỵ Ú Ù Ủ Ũ Ụ Ư Ứ Ừ Ử Ữ Ự Ó Ò Ỏ Õ Ọ Ô Ố Ồ Ổ Ỗ Ộ Ơ Ớ Ờ Ở Ỡ Ợ Ó Ò Ỏ Õ Ọ Ô Ố Ồ Ổ Ỗ Ộ Ơ Ớ Ờ Ở Ỡ Ợ I Í Ì Ỉ Ĩ Ị É È Ẻ Ẽ Ẹ Ê Ế Ề Ể Ễ Ệ Á À Ả Ạ Ã Ă Ắ Ằ Ẳ Ẵ Ặ Â Ấ Ầ Ẩ Ẫ Ậ]+$/;
        if (regexLetter.test(value)) {
          document.getElementById(idError).innerHTML = "";
          return true;
        }
        document.getElementById(idError).innerHTML = `${name} tất cả phải là ký tự`;
        return false;
      };
}