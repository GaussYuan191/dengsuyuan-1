let itemColorList = Array.from(document.getElementsByClassName("item-color-wrapper")[0].childNodes)
let imgNode = document.getElementsByClassName("main-image")[0]
let productBuy = document.getElementById("product-buy")
let host = window.location.host
let shopBagNum = document.getElementsByClassName("shop-bag")[0]
let buyNum = 0
let imgSrc = ["iphone-12pro-shimose.png","iphone-12pro-silery.png","iphone-12pro-golden.png","iphone-12pro-navy-bule.png"]
// 处理图片路径
for (let i = 0; i < imgSrc.length; i++) {
    imgSrc[i] = `http://` + host + `/assets/images/`+ imgSrc[i]
}
//获取表示颜色元素的集合
itemColorList = itemColorList.filter((item,index) => {
    return index % 2 != 0
})
//初始化状态
let clearColorActive = function() {
    for (let i = 0; i < itemColorList.length; i++) {
        itemColorList[i].className = "product-selector-item item-color"
    }
    imgNode.className = "main-image"
    console.log(imgNode.className)
}
//点击表示颜色的节点 显示图换成对应的图片
itemColorList.forEach((item) => {
    console.log(item)
    item.onclick = function() {
        clearColorActive()
        console.log(item.dataset.index)
        item.className = "product-selector-item item-color product-selector-item-click "
        imgNode.src = imgSrc[item.dataset.index]
        imgNode.style.height = "411px"
        imgNode.style.width = "325px"
        imgNode.className = "main-image item-color-animation"
    }
})
//开启蒙板
function openDialog(){
    document.getElementById('light').style.display='block'
    document.getElementById('fade').style.display='block'
}
//关闭蒙板
function closeDialog(){
    document.getElementById('light').style.display='none'
    document.getElementById('fade').style.display='none'
}
//点击购买，元素变颜色且数量加一
productBuy.onclick =  function() {
    buyNum++
    if (buyNum % 2 == 1) {
        productBuy.style.background =   "linear-gradient(0deg, #03477D 0%, #1D79C2 100%)";
    } else {
        productBuy.style.background =   "linear-gradient(0deg, #0573CB 0%, #40A0EC 100%);";
    }
    shopBagNum.style.display =  "inline-block"

    
}
