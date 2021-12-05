let itemColorList = Array.from(document.getElementsByClassName("item-color-wrapper")[0].childNodes)
let imgNode = document.getElementsByClassName("main-image")[0]
let host = window.location.host
let imgSrc = ["iphone-12pro-shimose.png","iphone-12pro-silery.png","iphone-12pro-golden.png","iphone-12pro-navy-bule.png"]
for (let i = 0; i < imgSrc.length; i++) {
    imgSrc[i] = `http://` + host + `/assets/images/`+ imgSrc[i]
}

itemColorList = itemColorList.filter((item,index) => {
    return index % 2 != 0
})
let clearColorActive = function() {
    for (let i = 0; i < itemColorList.length; i++) {
        itemColorList[i].className = "product-selector-item item-color"
    }
}

itemColorList.forEach((item) => {
    console.log(item)
    item.onclick = function() {
        clearColorActive()
        console.log(item.dataset.index)
        item.className = "product-selector-item item-color product-selector-item-click"
        imgNode.src = imgSrc[item.dataset.index]
        imgNode.style.height = "411px"
        imgNode.style.width = "325px"
    }
})
// item.onclick = function() {
//     console.log("ksadjsk")
// }
