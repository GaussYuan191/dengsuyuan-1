// 轮播图
let sli_ul = document.querySelector(".sli-ul")
let sli_li = document.querySelectorAll(".sli-ul li")
let sli_box = document.querySelector(".sli-box")
let left = document.querySelector(".slideshow .left")
let right = document.querySelector(".slideshow .right")
let aAll = document.querySelectorAll(".sli-box a")
//动态生成ul的宽
let liWidth = sli_li[0].offsetWidth
let ulWidth = liWidth * sli_li.length
sli_ul.style.width = ulWidth + "px"
//动态使箭头居中
let leftT = (sli_li[0].offsetHeight - left.offsetHeight) / 2
left.style.top = leftT + "px"
let rightT = (sli_li[0].offsetHeight - right.offsetHeight) / 2
right.style.top = rightT + "px"



//创建index保存索引
let index = 0
//设置默认a的样式
aAll[index].style.background = "hsla(0, 0%, 100%, .4)"
aAll[index].style.borderColor = "rgba(0, 0, 0, .4)"
//点击导航索引，让图片切换
for (let i = 0; i < aAll.length; i++) {
    aAll[i].num = i
    aAll[i].onclick = function() {
        //关闭自动切换的定时器
        clearInterval(timer)
        //获取点击a的索引，并赋值给index
        index = this.num
        setA()
        //切换图片
        move(sli_ul, "left", -liWidth * index, 100, function() {

        })
    }
}

//设置一个方法用来设置选中的a
function setA() {
    //判断当前图片是否是最后一张
    if (index >= sli_li.length - 1) {
        index = 0
        sli_ul.style.left = 0
    }
    for (let i = 0; i < aAll.length; i++) {
        aAll[i].style.background = ""
        aAll[i].style.borderColor = ""
        //给选中的a设置样式
        aAll[index].style.background = "hsla(0, 0%, 100%, .4)"
        aAll[index].style.borderColor = "rgba(0, 0, 0, .4)"
        
    }
}
//定义一个自动切换的定时器标识
let timer
//开启自动切换图片
autoChange()

//创建一个函数，用来开启自动切换图片
function autoChange() {
    //开启一个定时器，用来定时去切换图片
    timer = setInterval(function() {
        index++
        //执行动画，切换图片
        move(sli_ul, "left", -liWidth * index, 100, function() {
            //修改导航按钮
            setA()
        })

    }, 4000)
}

//箭头切换图片功能
left.onclick = function() {
        clearInterval(timer)
        if (index <= 0) {
            index = 5
            sli_ul.style.left = -liWidth * index + "px"
        }
        index--
        move(sli_ul, "left", -liWidth * index, 100, function() {

        })
        setA()
    }
//right
right.onclick = function() {
    clearInterval(timer)
    index++
    if (index >= sli_li.length - 1) {
        index = 0
        sli_ul.style.left = 0
    }
    move(sli_ul, "left", -liWidth * index, 150)
    setA()
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