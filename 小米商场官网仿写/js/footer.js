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
