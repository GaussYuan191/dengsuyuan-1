let searchBtn = document.getElementById("search-icon")
let searchInput = document.getElementById("searchform-input")
let closeBtn = document.getElementById("search-close")
let searchContent = document.getElementById("searchview")
let linkSearch = document.getElementById("link-search")
let navContent = document.getElementsByClassName("nav-first")[0]
searchInput.oninput = function() {
    
    
}
inputInit = function() {
    searchInput.value =  ""
    console.log('初始化输入框')
}
navAnimation = function() {
    let navList = Array.from(navContent.childNodes)
    let newList = navList.filter((item, index) => {
        console.log(item, index)
        return index % 2 != 0
      })
      navList.forEach((item) => {
        item.className = "nav-animation"
      })
}
linkSearch.onclick = function() {
    searchContent.style.display = "block"
    inputInit()
    navAnimation()
    navContent.style.display = "none"
    searchInput.focus()
    console.log(searchInput.onfocus)
}
closeBtn.onclick = function() {
    searchContent.style.display = "none"
    navContent.style.display = "flex"
}

document.onclick = function(e) {
    ev = e || window.event
    var mousePos = mouseCoords(ev)
    let flag = searchContent.style.display
     console.log(flag)
    if (flag == "block" && (mousePos.x > 1300 || mousePos.x < 610) && (mousePos.y > 44)) {
        searchContent.style.display = "none"
        navContent.style.display = "flex"
        inputInit()
    }
    console.log(mousePos.x, mousePos.y)
    
}
function mouseCoords(ev) 
 { 
    //鼠标移动的位置
     if(ev.pageX || ev.pageY){ 
         return {x:ev.pageX, y:ev.pageY}
     } 
    return{ 
         x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
         y:ev.clientY + document.body.scrollTop - document.body.clientTop 
    }
 } 

