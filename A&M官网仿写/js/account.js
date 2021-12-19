// 结算页面js
// 送货信息
let inputList = document.querySelectorAll(".info-list input")
let inputInfoList = document.querySelectorAll(".info-list input + span")
function inputInit () {
    for (let i = 0; i < inputList.length; i++) {
        (function (i) {
            inputList[i].onfocus = function () {   
                inputInfoList[i].classList.add("input-value")
                inputList[i].classList.add("info-checked")
                
            }
            inputList[i].onblur = function () {       
                if (inputList[i].value == "") {
                    inputInfoList[i].classList.remove("input-value")
                }
                inputList[i].classList.remove("info-checked")
            
            } 
        })(i)
    }
}
inputInit ()
//发票选项
let ticketList = document.querySelectorAll(".ticket-list li")
let preTicketIndex = -1
function ticketActive (index) {
    ticketList[index].classList.remove("ticket-checked")
}

function ticketInit() {
    for (let i = 0; i < ticketList.length; i++) {
        (function (i) {
            ticketList[i].onclick = function () {
                if (preTicketIndex == -1) {
                    ticketList[i].classList.add("ticket-checked")
                    
                } else {
                    ticketActive(preTicketIndex)
                    ticketList[i].classList.add("ticket-checked")
                
                }
                preTicketIndex = i
            }
        })(i)
    }
}
ticketInit()

// 付款
let buyWayList = document.querySelectorAll(".buy-way li")
let preWayIndex = -1
function buyActive (index) {
    buyWayList[index].classList.remove("buy-checked")
}
function buyInit() {
    for (let i = 0; i < buyWayList.length; i++) {
        (function(i) {
            buyWayList[i].onclick = function () {
                if (preWayIndex == -1) {
                    buyWayList[i].classList.add("buy-checked")
                } else {
                    buyActive(preWayIndex)
                    buyWayList[i].classList.add("buy-checked")
                    
                }
                preWayIndex = i
            }
        })(i)
    }
}
buyInit()