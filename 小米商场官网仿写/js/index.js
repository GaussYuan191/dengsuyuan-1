

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

