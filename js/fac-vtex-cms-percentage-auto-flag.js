function write(product) {
  var infoPrice = product.querySelector(".fac-product__content__info__price");
  var hasPromo = infoPrice.querySelector(".fac-product__content__info__price__from__price");

  if (hasPromo !== null) {
    var priceFrom = hasPromo.innerText.replace("R$ ", "");
    var bestPrice = infoPrice.querySelector(".fac-product__content__info__price__sale-price").innerText.replace("R$ ", "");
    var priceFromIntValue = Number.parseFloat(priceFrom.replace(",", "."));
    var bestPriceIntValue = Number.parseFloat(bestPrice.replace(",", "."));
    var percentage = Math.round(((priceFromIntValue - bestPriceIntValue) / priceFromIntValue) * 100);
    var htmlPtag = product.querySelector(".fac-product__content__img-container__flag-area");
    htmlPtag.innerHTML += `<p class="flag">-${percentage}%</p>`;
  }
}

document.addEventListener("DOMContentLoaded", function (a) {
  var products = document.getElementsByClassName("fac-product__content");

  for (var i = 0; i < products.length; i++) {
    write(products[i]);
  }
});