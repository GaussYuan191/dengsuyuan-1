/* app下载 */
let jApp = document.getElementById("j-app")
let appCode = document.querySelector(".app-code")
jApp.onmousemove = function () {
    appCode.style.height = "148px"
    console.log(appCode.style.length)

    jApp.classList.add("active")
}
jApp.onmouseout = function () {
    appCode.style.height = "0"
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
let searchDown = document.querySelector(".search-down")
searchText.onfocus = function () {
    searchText.classList.add("allBorder")
    searchBtn.classList.add("allBorder")
}
searchText.onblur = function () {
    searchText.classList.remove("allBorder")
    searchBtn.classList.remove("allBorder")
    searchDown.classList.add("hide")
}
searchText.onclick = function () {
  searchDown.classList.remove("hide")
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