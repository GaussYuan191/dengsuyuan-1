let itemImgs = document.getElementsByClassName("item-img")
let points = document.getElementsByClassName("select-point")


let content = document.querySelector(".content")
let leftBtn = document.getElementById("btn-letf");
let rightBtn = document.getElementById("btn-right");
let index = 0
let timer = null
const ms = 1500 


//初始化状态
let clearActive = function() {
    for (let i = 0; i < itemImgs.length; i++) {
        itemImgs[i].className = "item-img"
        points[i].className = "select-point"
    }
}
//切换图片
let goIndex = function() {
    clearActive();
    itemImgs[index].className = "item-img active"
    points[index].className = "select-point active"
}
//点击下一张图片
rightBtn.onclick = function() {
    if (index < itemImgs.length - 1) {
        index++
    } else {
        index = 0
    }
    goIndex()
}
//点击上一张图片
leftBtn.onclick = function() {
    if (index > 0) {
        index--
    } else {
        index = itemImgs.length - 1
    }
    goIndex()
}
//开启定时播放图片
timer = setInterval(function(){
    rightBtn.onclick()
}, ms)
//当鼠标移入的时候，关闭定时器
content.onmouseover = function() {
    clearInterval(timer)
}
//当鼠标移出的时候，重新开启计时器
content.onmouseout = function() {
    timer = setInterval(function(){
        rightBtn.onclick()
    }, ms);
}
