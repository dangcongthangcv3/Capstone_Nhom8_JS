function renderProductFeature(arrProd) {
  var htmlContent = "";
  for (var index = 0; index < arrProd.length; index++) {
    var prod = arrProd[index];
    htmlContent += `
        <div class="product_item" id="${prod.id}">
            <img src="${prod.image}" />
            <div class="item_info">
                <h3>${prod.name}</h3>
                <p>${prod.shortDescription}</p>
            </div>
            <div class="item_footer">
                <a href="./detail.html?id=${prod.id}">Buy now</a>
                <p>${prod.price}$</p>
            </div>
        </div>
        `;
  }
  document.querySelector("#product_feature").innerHTML = htmlContent;
  return htmlContent;
}

function getAllProduct() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise.then(function (res) {
    renderProductFeature(res.data.content);
  });
  promise.catch(function (err) {
    alert(err);
  });
}

window.addEventListener("load", function () {
  getAllProduct();
});


var html = ''
if(localStorage.getItem('Login')){
  // de
  let stringArr= localStorage.getItem('Login');
  // debugger
  let data = JSON.parse(stringArr)
  for(let i= 0; i<data.length;i++){
    if(data[1]==true){
      html = `<div class='header_user'><a>${data[0]} </a></div>
      <div class='header_user'><a id='logout'>Log out </a></div>`
      document.getElementById('loginIndex').innerHTML = html;
      // <div class="header_user">
      //   <a href="./login.html">Login</a>
      //   <a href="./register.html">Register</a>
      // </div>
      // debugger
      // var arrLogin = [data[i].name, true]
      // var jsonLogin = JSON.stringify(arrLogin);
      // localStorage.setItem('Login',jsonLogin)
      // loginAxios(login)
      // window.location.href = './index.html'
    }
    else{
      html = `<div class="header_user">
      <a href="./login.html">Login</a>
      <a href="./register.html">Register</a>
    </div>`
    document.getElementById('loginIndex').innerHTML = html;
    }
  }
}else{
  html = `<div class="header_user">
        <a href="./login.html">Login</a>
        <a href="./register.html">Register</a>
      </div>`
      document.getElementById('loginIndex').innerHTML = html;
}
document.getElementById('logout').onclick = function(){
  // debugger
  let stringArr= localStorage.getItem('Login');
  let data = JSON.parse(stringArr)
  // for(let i= 0; i<data.length;i++){
    var arrLogin = [data[0], false]
    var jsonLogin = JSON.stringify(arrLogin);
    localStorage.setItem('Login',jsonLogin)
    html = `<div class="header_user">
        <a href="./login.html">Login</a>
        <a href="./register.html">Register</a>
      </div>`
      document.getElementById('loginIndex').innerHTML = html;
  // }
}