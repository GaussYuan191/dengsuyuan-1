let priceMin = document.getElementById("slider1")
let priceMax = document.getElementById("slider2")
let bgColor = document.querySelector(".price-line")
let N = 20000
let rangeMax
let rangeMin
priceMax.oninput = function () {
    document.getElementById('price-max').innerHTML = "￥" + priceMax.value
    if (priceMin.value < priceMax) {
        console.log(priceMax.value, priceMin.value)
        rangeMax = parseInt((priceMax.value - priceMin.value) / N * 216)
        console.log(rangeMax)
        bgColor.style.width = rangeMax + "px"
    } else {
        bgColor.style.width = 0
    }
}
priceMin.oninput = function () {

    document.getElementById('price-min').innerHTML = "￥" + priceMin.value
    console.log(priceMax.value, priceMin.value)
    rangeMin = parseInt((priceMin.value) / N * 216)
    console.log(rangeMin)
    if (priceMin.value < priceMax) {
        bgColor.style.left = rangeMin  + "px"
        rangeMax = parseInt((priceMax.value - priceMin.value) / N * 216)
        console.log(rangeMax)
        bgColor.style.width = rangeMax + "px"
    } else {
        bgColor.style.width = 0
    }

}