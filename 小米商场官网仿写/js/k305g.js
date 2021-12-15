// let navCategory = document.querySelector(".nav-category")
// let navCategoryList = document.querySelector(".nav-category")
// let catUl = document.querySelector(".cat-ul")

// navCategory.onmouseover = function () {
//     catUl.classList.remove("hide")

// }


// catUl.onmouseout = function () {
   
//         catUl.classList.add("hide")
// }
/* 选择配置*/
let detailSize = document.getElementsByClassName("detail_much_left")
let phone = {} //记录选择的配置
let sizePriceList = [1599, 1799, 1999]
let preIndexSize = -1
phone.name = "Redmi K30 5G"
function sizeActiveInit (i) {

    detailSize[i].classList.remove("checked")
 
}
function sizeInit() {
    for (let i = 0; i < detailSize.length; i++) {
        (function(i) {
            detailSize[i].onclick = function () {
                if (preIndexSize != -1) {
                    sizeActiveInit(preIndexSize)
                }
                detailSize[i].classList.add("checked") 
                phone.size = detailSize[i].dataset.size
                preIndexSize = i
                dealSize (sizePriceList[i], sizePriceList[i] + 800)
                
            }
        })(i)
        
    }
}
sizeInit()
let price = document.querySelector(".price-info span")
let delPrice = document.querySelector(".price-info del")
let phoneInfo  = document.querySelector(".phone-info")
let rightPrice = document.querySelector(".phone-price").children
let totalPrice = document.querySelector(".total-price")
function dealSize (rprice, rdelPrice) {
    price.innerHTML = rprice + " 元"
    phone.price = rprice
    phone.delprice = rdelPrice
    delPrice.innerHTML = rdelPrice + " 元"
    phoneInfo.innerHTML = phone.name + " " + phone.size + " " + phone.color
    rightPrice[0].innerHTML = phone.price + "元 "
    rightPrice[1].innerHTML = phone.delprice + "元"
    cartInit()
}
detailSize[0].onclick()
/* 选颜色*/
let detailColor = document.querySelectorAll(".detail_color_left")
let preIndexColor = -1
function colorActiveInit (i) {
   
    detailColor[i].classList.remove("checked")
   
}
function colorInit () {
    for (let i = 0; i < detailColor.length; i++) {
        (function (i) {
            detailColor[i].onclick = function () {
                if (preIndexColor != -1) {
                    colorActiveInit(preIndexColor)
                }
                detailColor[i].classList.add("checked")
                phone.color = detailColor[i].dataset.color
                phoneInfo.innerHTML = phone.name + " " + phone.size + " " + phone.color
                preIndexColor = i
                changeImg (i)
            }
        })(i)
    }
}

//换颜色切换不同颜色的图片
let imgColorList = ["blue-", "white-", "blue-", "white-"]
let imgNodeList = document.querySelectorAll(".sli-ul img")
let host = window.location.origin
function changeImg (index) {
    for (let i = 0; i < imgNodeList.length; i++) {
        imgNodeList[i].src =  host + "/assets/images/" + imgColorList[index] + (i + 1) + ".jpg"
        console.log(imgNodeList[i].src)
    }
}
colorInit ()
detailColor[0].onclick()
/* 选服务 */
// 意外保护
let serverDefend = document.querySelectorAll(".shop_detail_bz .item1")
let defendFaCheck = document.querySelectorAll(".shop_detail_bz .item1 .shop_detail_button")
let titleItem1 = document.querySelectorAll(".item1 .detail-title")
let serverList = [{}, {}, {}]
let preIndexDefend = -1
let defendPriceList = [249, 129]
let N = 3
phone.server = serverList
function serverInit () {
    for (let i = 0; i < N; i++) {
        serverList[i].name = "空"
        serverList[i].price = -1
    }
}
serverInit ()
function defendActiveInit (i) {
   
    serverDefend[i].classList.remove("checked")
    defendFaCheck[i * 2].classList.remove("fa-check-circle")
    defendFaCheck[i * 2 + 1].classList.remove("fa-check-circle")
    titleItem1[i].classList.remove("title-checked")
  
}
function defendInit () {
    for (let i = 0; i < serverDefend.length; i++) {
        (function (i) {
            serverDefend[i].onclick = function () {
                if (preIndexDefend == i) {
                    defendActiveInit(i)
                    preIndexDefend = -1
                    serverList[0].name = "空"
                    serverList[0].price = -1
                } else if (preIndexDefend == -1) {
                    let item = serverDefend[i]
                    item.classList.add("checked") 
                    defendFaCheck[item.dataset.item * 2].classList.add("fa-check-circle")
                    defendFaCheck[item.dataset.item * 2 + 1].classList.add("fa-check-circle")
                    titleItem1[item.dataset.item].classList.add("title-checked")
                    preIndexDefend = i
                    serverList[0].name = "意外保障服务"
                    serverList[0].price = defendPriceList[i]
                   
                } else {
                    defendActiveInit(preIndexDefend)
                    let item = serverDefend[i]
                    item.classList.add("checked")
                   
                    defendFaCheck[item.dataset.item * 2].classList.add("fa-check-circle")
                    defendFaCheck[item.dataset.item * 2 + 1].classList.add("fa-check-circle")
                    titleItem1[item.dataset.item].classList.add("title-checked")
                    preIndexDefend = i
                    serverList[0].name = "意外保障服务"
                    serverList[0].price = defendPriceList[i]
                    
                }
                dealServer ()
                          
            }
        })(i)
    }
}
defendInit ()
//延长保修
let serverFix = document.querySelectorAll(".shop_detail_bz .item2")
let fixFaCheck = document.querySelectorAll(".shop_detail_bz .item2 .shop_detail_button")
let titleItem2 = document.querySelectorAll(".item2 .detail-title")
let preIndexFix = -1
let fixPriceList = [69]
function fixActiveInit (i) {
    
    serverFix[i].classList.remove("checked")
    fixFaCheck[i * 2].classList.remove("fa-check-circle")
    fixFaCheck[i * 2 + 1].classList.remove("fa-check-circle")
    titleItem2[i].classList.remove("title-checked")
  
}
function fixInit () {
    for (let i = 0; i < serverFix.length; i++) {
        (function (i) {
            serverFix[i].onclick = function () {
                if (preIndexFix == i) {
                   fixActiveInit(preIndexFix)
                   preIndexFix = -1
                   serverList[1].name = "空"
                   serverList[1].price = -1
                } else {
                    let item = serverFix[i]
                    item.classList.add("checked")
                    console.log(item.dataset.item * 2, item.dataset.item * 2 + 1)
                    fixFaCheck[item.dataset.item * 2].classList.add("fa-check-circle")
                    fixFaCheck[item.dataset.item * 2 + 1].classList.add("fa-check-circle")
                    titleItem2[item.dataset.item].classList.add("title-checked")
                    preIndexFix = i
                    serverList[1].name = "延长保修服务"
                    serverList[1].price = fixPriceList[i]
                    
                    
                }
                dealServer ()
                
                
            }
        })(i)
    }
}
fixInit ()
//云空间
let serverCloud = document.querySelectorAll(".shop_detail_bz .item3")
let cloudFaCheck = document.querySelectorAll(".shop_detail_bz .item3 .shop_detail_button")
let titleItem3 = document.querySelectorAll(".item3 .detail-title")
let preIndexCloud = -1
let cloudPriceList = [159, 49]
function cloudActiveInit (i) {
    
    serverCloud[i].classList.remove("checked")
    cloudFaCheck[i * 2].classList.remove("fa-check-circle")
    cloudFaCheck[i * 2 + 1].classList.remove("fa-check-circle")
    titleItem3[i].classList.remove("title-checked")
  
}
function cloudInit () {
    for (let i = 0; i < serverCloud.length; i++) {
        (function (i) {
            serverCloud[i].onclick = function () {
                if (preIndexCloud == i) {
                   cloudActiveInit(preIndexCloud)
                   preIndexCloud = -1
                   serverList[2].name = "空"
                   serverList[2].price = -1
                } else if (preIndexCloud == -1) {
                    let item = serverCloud[i]
                    item.classList.add("checked")
                    console.log(item.dataset.item * 2, item.dataset.item * 2 + 1)
                    cloudFaCheck[item.dataset.item * 2].classList.add("fa-check-circle")
                    cloudFaCheck[item.dataset.item * 2 + 1].classList.add("fa-check-circle")
                    titleItem3[item.dataset.item].classList.add("title-checked")
                    preIndexCloud = i
                    serverList[2].name = "云空间年卡"
                    serverList[2].price = cloudPriceList[i]
            
                } else {
                    let item = serverCloud[i]
                    cloudActiveInit(preIndexCloud)
                    item.classList.add("checked")
                    console.log(item.dataset.item * 2, item.dataset.item * 2 + 1)
                    cloudFaCheck[item.dataset.item * 2].classList.add("fa-check-circle")
                    cloudFaCheck[item.dataset.item * 2 + 1].classList.add("fa-check-circle")
                    titleItem3[item.dataset.item].classList.add("title-checked")
                    preIndexCloud = i
                    serverList[2].name = "云空间年卡"
                    serverList[2].price = cloudPriceList[i]
                    
                }
                dealServer ()
                
                
            }
        })(i)
    }
}
cloudInit ()

/* 结账*/


let selectWrapper = document.querySelector(".select-wrapper")
//处理服务费
function clearAllNode(parentNode){
    while (parentNode.firstChild) {
      var oldNode = parentNode.removeChild(parentNode.firstChild);
       oldNode = null;
     }
}
function dealServer () {
    clearAllNode(selectWrapper)
    for (let i = 0; i < phone.server.length; i++) {
        if (phone.server[i].price != -1) {
            let selectServer = document.createElement("div")
            selectServer.classList.add("select-server")
            let serverName = document.createElement("span")
            let serverPrice = document.createElement("span")
            selectServer.appendChild(serverName)
            selectServer.appendChild(serverPrice)
            selectWrapper.appendChild(selectServer)
            serverName.classList.add("server-name")
            serverName.classList.add("fl")
            serverPrice.classList.add("fr")
            serverPrice.classList.add("server-price")
            serverName.innerHTML = phone.server[i].name
            serverPrice.innerHTML = phone.server[i].price

        }
        console.log(phone.server[i])
        console.log(phone.server[i].length)
    }
    console.log(phone.server)
}
// 计算费用
function cartInit () {
    
    // console.log(phone.name + " " + phone.size + " " + phone.color)
    // console.log(phone)
    totalPrice.innerHTML = "总计：" + phone.price + "元"
    // dealServer ()
}
// 添加购物车
let cartBtn = document.querySelector(".shop-detail-cart")
let cartNum = document.querySelector(".cart-num")
function addCart () {
    cartBtn.onclick = function () {
        cartNum.classList.add("add-cart")
        cartNum.innerHTML = 1
        cartBtn.classList.add("click-cart")
    }
    
}
addCart()
