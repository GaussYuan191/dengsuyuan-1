let searchBtn = document.getElementById("search-icon")
let searchInput = document.getElementById("searchform-input")
let closeBtn = document.getElementById("search-close")
let searchContent = document.getElementById("searchview")
let linkSearch = document.getElementById("link-search")
let navContent = document.getElementsByClassName("nav-first")[0]
let resultContent = document.getElementsByClassName("searchresults-list")[0]
let resultList = Array.from(resultContent.childNodes)
let searchresultContent = document.getElementById("searchresults")
let itemList =  resultList.filter((item, index) => {
    return index % 2 != 0
})
let searchResults = document.getElementById("searchresults")
searchInput.oninput = function() {
    itemList.forEach((item) => {
        if (searchInput.value == "") {
            item.childNodes[0].innerText = "Apple Store 商店"
        } else {
            item.childNodes[0].innerText = searchInput.value
        }
        
    })
    
}
//初始化搜索区域
inputInit = function() {
    searchInput.value =  ""
    itemList.forEach((item) => {
        item.childNodes[0].innerHTML = "Apple Store 商店"
    })  
}
//给导航栏添加动画
navAnimation = function() {
    let navList = Array.from(navContent.childNodes)
    let newList = navList.filter((item, index) => {
        return index % 2 != 0
      })
    newList.forEach((item) => {
        item.className = "nav-animation"
    })
}

//点击搜索图标出现搜索框隐藏导航栏
linkSearch.onclick = function() {
    console.log(navContent.style.display,searchContent.style.display ,searchResults.style.display)
    navContent.style.display = "none"
    searchContent.style.display = "block"
    searchresultContent.style.display = "block"
    searchresultContent.style.position = "fixed"
    inputInit()
    navAnimation()
    searchInput.focus()
    console.log(navContent.style.display,searchContent.style.display ,searchResults.style.display)

    
}

//点击关闭图标出现导航栏隐藏搜索框
closeBtn.onclick = function() {
    searchContent.style.display = "none"
    navContent.style.display = "flex"
    searchresultContent.style.display = "none"
}
//当搜索框出现时，点击搜索框以外的区域，搜索区域隐藏
document.onclick = function(e) {
    ev = e || window.event
    var mousePos = mouseCoords(ev)
    let flag = searchContent.style.display
    if (flag == "block" && (mousePos.x > 1300 || mousePos.x < 610) && (mousePos.y > 84)) {
        closeBtn.onclick()
        inputInit()
    }
    console.log(mousePos.x, mousePos.y)
    
}
//监测鼠标点击的位置
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

