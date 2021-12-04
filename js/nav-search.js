let searchBtn = document.getElementById("search-icon")
let searchInput = document.getElementById("searchform-input")
let searchformSrc = document.getElementById("searchform-src")
let closeBtn = document.getElementById("search-close");
let searchContent = document.getElementById("searchview");

searchformSrc.value = ""
searchInput.value = ""
searchInput.oninput = function() {
    if (searchInput.value != "") searchInput.value = ""
    searchInput.type = "hidden"
    searchformSrc.type = "text"
    console.log("ajshd")
    searchformSrc.onfocus()
    
}

searchformSrc.oninput = function() {
    searchInput.value = ""
    console.log("ajshdaa")
}


closeBtn.onclick = function() {
    searchContent.style.display = "none"
}

document.onclick = function(e) {
    ev = e || window.event; 
    var mousePos = mouseCoords(ev); 
    if ((mousePos.x > 1300 || mousePos.x < 610) && (mousePos.y > 44)) {
        // searchContent.style.display = "none"
        searchformSrc.value = ""
    }
    
}
function mouseCoords(ev) 
 { 
    //鼠标移动的位置
     if(ev.pageX || ev.pageY){ 
         return {x:ev.pageX, y:ev.pageY}; 
     } 
    return{ 
         x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
         y:ev.clientY + document.body.scrollTop - document.body.clientTop 
    }; 
 } 

