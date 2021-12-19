// 购物袋效果
let inputNode = document.querySelectorAll(".deal-num input")
let subList = document.querySelectorAll(".deal-num .sub")
let addList = document.querySelectorAll(".deal-num .add")
function inputInit () {
    for (let i = 0; i < inputNode.length; i++) {
        (function(i) {
            inputNode[i].onblur = function () {
                if (inputNode[i].value == "") {
                    inputNode[i].value = 1
                } 
            } 
        })(i)
       
    }
}
inputInit ()
function add() {
    for (let i = 0; i <addList.length; i++) {
        (function(i) {
            addList[i].onclick = function () {
                if (inputNode[i].value < 10) {
                    inputNode[i].value++
                }
            }
        })(i)
    }
}
add()
function sub() {
    for (let i = 0; i < subList.length; i++) {
        (function (i) {
            subList[i].onclick = function () {
                if (inputNode[i].value > 1) {
                    inputNode[i].value--
                }
            }
        })(i)
    }
}
sub() 