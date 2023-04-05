
function renderProductDetail(obj){
    var    htmlContent = `
        <div class="detail_flex">
                <div class="detail_left">
                    <img src="${obj.image}" alt="">
                </div>
                <div class="detail_right">
                    <h2>${obj.name}</h2>
                    <p>${obj.description}</p>
                    <p class="size">Available size</p>
                    <ul>
                        <li>${obj.size[0]}</li>
                        <li>${obj.size[1]}</li>
                        <li>${obj.size[2]}</li>
                        <li>${obj.size[3]}</li>
                        <li>${obj.size[4]}</li>
                        <li>${obj.size[5]}</li>
                        <li>${obj.size[6]}</li>
                    </ul>
                    <p class="price">${obj.price}$</p>
                    <div>
                        <i class="fa fa-plus"></i>
                        <span class="num">1</span>
                        <i class="fa fa-minus"></i>
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        `;
    
    document.getElementById('product-detail').innerHTML = htmlContent;
    return htmlContent;
}


function renderProductRealate(arrProdRealate) {
    var htmlContent = "";
    var backToTop = "";
    for (var index = 0; index < arrProdRealate.length; index++) {
      var prod = arrProdRealate[index];
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
    document.querySelector("#product_realate").innerHTML = htmlContent;
    return htmlContent;
  }


function getProductDetail () {
    var param = new URL(window.location.href);
    var thamSo = param.searchParams.get('id');

    var promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${thamSo}`,
        method:'GET'
    }) 

    promise.then(function(res){
        renderProductDetail(res.data.content);
        renderProductRealate(res.data.content.relatedProducts);
    })
}
window.addEventListener("load", function () {
    getProductDetail();
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
    debugger
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