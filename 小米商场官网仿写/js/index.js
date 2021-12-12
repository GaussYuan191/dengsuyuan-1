/* app下载 */
let jApp = document.getElementById("j-app")
let appCode = document.querySelector(".app-code")
jApp.onmousemove = function () {
    appCode.style.height = "148px";
    console.log(appCode.style.length)

    jApp.classList.add("active")
}
jApp.onmouseout = function () {
    appCode.style.height = "0";
    jApp.classList.remove("active")
}

/* 购物车*/
let jMenu = document.querySelector(".j-menu")
let cart = document.querySelector(".cart-trigger")
let cartColor = document.querySelector(".navigation-cart")
cart.onmousemove = function () {
    jMenu.style.height = "99px"
    cartColor.classList.add("cart-color")
}
cart.onmouseout = function () {
    jMenu.style.height = 0
    cartColor.classList.remove("cart-color")
}

/* 搜索框*/
let searchText = document.querySelector(".search-text")
let searchBtn = document.querySelector(".search-btn")
searchText.onfocus = function () {
    searchText.classList.add("allBorder")
    searchBtn.classList.add("allBorder")
}
searchText.onblur = function () {
    searchText.classList.remove("allBorder")
    searchBtn.classList.remove("allBorder")
}

/* nav 区域 */
let headerNavMenu = document.querySelectorAll(".header-nav-menu")
let navItem = document.querySelectorAll(".nav-item");
for (var i = 0; i < navItem.length; i++) {
  navItem[i].index = i
  navItem[i].onmouseover = function () {
    for (var i = 0; i < headerNavMenu.length; i++) {
      headerNavMenu[i].style.display = "none"
    }
    headerNavMenu[this.index].style.display = "block"
    headerNavMenu[this.index].style.borderTop = "1px solid #e0e0e0"
    headerNavMenu[this.index].classList.add("menuHeight")
  }
  navItem[i].onmouseout = function () {
    headerNavMenu[this.index].classList.remove("menuHeight")
    headerNavMenu[this.index].style.border = "none"
  }
}

/*全部商品分类 */
let category_list = document.querySelectorAll(".category-list")
let commodity = document.querySelectorAll(".commodity")
for (var i = 0; i < category_list.length; i++) {
  category_list[i].index = i;
  category_list[i].onmouseover = function () {
    for (var i = 0; i < commodity.length; i++) {
      commodity[i].style.display = "none"
    }
    commodity[this.index].style.display = "block";
    category_list[this.index].classList.add("listBcolor")
  }
  category_list[i].onmouseout = function () {
    category_list[this.index].classList.remove("listBcolor")
    commodity[this.index].style.display = "none"
  }
}

/* 小米闪购*/
let swiper_slide = document.querySelectorAll(".swiper-slide")
let swiper_wrapper = document.querySelector(".swiper-wrapper")
let btn_left = document.querySelector(".swiper-controls .swiper-miaosha-prev")
let btn_right = document.querySelector(".swiper-controls .swiper-miaosha-next")
let iNow = 0     //记录当前位置
let count = Math.ceil(13 / 4) - 1 //最大位置下标
let timers = null
//动态生成ul的宽
let swiperLiWidth = swiper_slide[0].offsetWidth + 14
swiper_wrapper.style.width = swiperLiWidth * (swiper_slide.length + 1) + "px"
function tab() {
  //设置箭头的样式
  iNow == 0 ? btn_left.classList.add("swiper-button-disabled") : btn_left.classList.remove("swiper-button-disabled")
  iNow == count ? btn_right.classList.add("swiper-button-disabled") : btn_right.classList.remove("swiper-button-disabled")
  //移动的距离
  let iTarget = iNow == count ? -swiperLiWidth * 4 * 2 - swiperLiWidth : -swiperLiWidth * 4 * iNow
  swiper_wrapper.style.transitionDuration = "1000ms"
    swiper_wrapper.style.transform = 'translate3d(' + iTarget + "px" + ' ,0,0)'

}
//设置定时器，自行滚动
timers = setInterval(function() {
  iNow++;
  if (iNow > count) {
    iNow = 0
  }
  tab()
}, 5000)
btn_left.onclick = function () {
  clearInterval(timers)
  iNow++
  //设置index的范围
  iNow = iNow >= count ? count : iNow
  tab()
}
btn_right.onclick = function () {
  clearInterval(timers)
  iNow--
  //设置index的位置
  iNow = iNow <= 0 ? 0 : iNow
  tab()
}
//先调用一次，让箭头样式先改变
tab()

/* 小米闪购倒计时 */

let spans = document.querySelectorAll(".countdown span")
let round = document.querySelector(".round")
//场的时间
let InDate = new Date(new Date().getTime() + 3600000)

setTimeout(function() {
  InDate = new Date(new Date().getTime() + 3600000)
}, 3600000)
function counts() {
  let date = new Date()
  let sInDate = (InDate.getTime() - date.getTime()) / 1000
  //小时
  let hr = parseInt((sInDate / 60 / 60) % 24)
  //分钟
  let min = parseInt((sInDate / 60) % 60)
  //秒
  let sec = parseInt(sInDate % 60)
  //添加成为00
  hr = hr < 10 ? "0" + hr : hr
  min = min < 10 ? "0" + min : min
  sec = sec < 10 ? "0" + sec : sec
  //给span赋值
  spans[0].innerHTML = hr
  spans[1].innerHTML = min
  spans[2].innerHTML = sec
  round.innerHTML =  InDate.getHours() + " : 00 场" 
  //关闭定时器，使时间变为00：00：00
  // if (sInDate <= 0) {
  //   clearInterval(times)
  //   spans[0].innerHTML = "00"
  //   spans[1].innerHTML = "00"
  //   spans[2].innerHTML = "00"
  // }
}
//先调用一次，防止刷新空白
counts()
// 定时器
let times = setInterval(counts, 1000)

/*底部微信图标 */
let jFollowWxImg = document.getElementById("J_followWxImg")
let  jFollowWx = document.getElementById("J_followWx")
jFollowWx.onmouseover = function () {
  jFollowWxImg.style.display = "block";
};
jFollowWx.onmouseout = function () {
  jFollowWxImg.style.display = "none";
};

/*底部图标切换 */
let jSafeAuth = document.querySelector(".J_safeAuth")
setInterval(function () {
  jSafeAuth.classList.add("active")
}, 2000)
setInterval(function () {
  jSafeAuth.classList.remove("active")
}, 4000)

/*回顶部*/
let jAtop = document.getElementById("J_atop")
// 当网页向下滑动 854px 出现"返回顶部" 按钮
window.onscroll = function () {
  scrollFun()
}

function scrollFun() {
  if (
    document.body.scrollTop > 854 ||
    document.documentElement.scrollTop > 854
  ) {
    jAtop.classList.add("active")
  } else {
    jAtop.classList.remove("active")
  }
}

function topFun() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

//点击返回顶部
jAtop.onclick = function () {
  topFun()
}
