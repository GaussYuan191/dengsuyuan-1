// 博客时间线效果
let timeLine = document.querySelector("#time-line")
let timeText = document.querySelectorAll(".blog-text-wrapper")
let logoIndex = -1 //记录当前的进度
function bolgActive (i) {
    timeText[i].classList.remove("blog-click")
}
timeLine.onclick = function () {
    if (logoIndex == -1) {
        timeText[0].classList.add("blog-click")
        logoIndex = 0
    
    } 
    else if (logoIndex >= 2) {
        bolgActive(logoIndex)
        logoIndex = 0
        timeText[logoIndex].classList.add("blog-click")
    } else {
        bolgActive(logoIndex)
        logoIndex++
        timeText[logoIndex].classList.add("blog-click")
        
    
    }
     
}