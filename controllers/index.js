import { em } from "./login.js";

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


    document.getElementById('a').innerHTML = em