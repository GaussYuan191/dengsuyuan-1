// 轮播图
let sli_ul = document.querySelector(".sli-ul")
let sli_li = document.querySelectorAll(".sli-ul li")
let sli_box = document.querySelector(".sli-box")
let left = document.querySelector(".slideshow .left")
let right = document.querySelector(".slideshow .right")

//动态生成ul的宽
let liWidth = sli_li[0].offsetWidth
let ulWidth = liWidth * sli_li.length
sli_ul.style.width = ulWidth + "px"


//创建index保存索引
let index = 0

//定义一个自动切换的定时器标识
let timer
// 开启自动切换图片
autoChange()

//创建一个函数，用来开启自动切换图片
function autoChange() {
    //开启一个定时器，用来定时去切换图片
    timer = setInterval(function() {
        if (index <= 0) {
            index = 6
            sli_ul.style.left = -liWidth * index + "px"
        }
        index--
        move(sli_ul, "left", -liWidth * index, 100, function() {
    
        })

    }, 4000)
}

//箭头切换图片功能
left.onclick = function() {
    clearInterval(timer)
    index++
    if (index >= sli_li.length - 6) {
        index = 0
        sli_ul.style.left = 0
    }
    move(sli_ul, "left", -liWidth * index, 150)
    
}
//right
right.onclick = function() {
    clearInterval(timer)
    if (index <= 0) {
        index = 6
        sli_ul.style.left = -liWidth * index + "px"
    }
    index--
    move(sli_ul, "left", -liWidth * index, 100, function() {

    })
  
}

//页面离开时，暂停定时器 打开时开启
document.addEventListener("visibilitychange", function() {
    if (document.hidden === true) { //判断当前窗口的状态
        clearInterval(timer)
    } else {
        //开启自动切换图片
        autoChange()
    }
})

//鼠标移到ul上关闭定时器
sli_ul.onmouseover = function() {
    clearInterval(timer)

}
sli_ul.onmouseout = function() {
    clearInterval(timer)
    //开启自动切换图片
    autoChange()
}