/* 注册第一步*/
// localStorage.setItem("telNum", 18973582686);
let phoneText = document.querySelector(".phone-text")
let warringMs = document.querySelector(".warring")
function checkCellphone (cellphone) {
    let regex =  /^[0-9]*$/; 
    console.log(regex.test(cellphone))
    return regex.test(cellphone)
}
phoneText.oninput = function () {
    // phoneText
    if (phoneText.value != '' && checkCellphone(phoneText.value)) {
        warringMs.classList.add("hide-opacity")
    } else {
        warringMs.classList.remove("hide-opacity")
    }
   
}
//是否同意协议
let noteCheck = document.querySelector(".note-check")
//提交注册-去第二步
let submitBtn = document.querySelector(".submit-num")
let registerStep1 = document.querySelector(".register-step-1")
submitBtn.onclick = function () {
    submitBtn.classList.add("submit-click")
    if (!(phoneText.value != '' && checkCellphone(phoneText.value))) {
        window.confirm("请输入正确的电话号码！！")
        setTimeout(function() {
            submitBtn.classList.remove("submit-click")
        },100)   
    }  else if (!noteCheck.checked){
        window.confirm("请输阅读并同意小米的协议！！")
        setTimeout(function() {
            submitBtn.classList.remove("submit-click")
        },100)  
        
    }  else {
        //保存输入的电话号码，防止页面消失丢失
        localStorage.setItem("telNum", phoneText.value);
        registerStep1.classList.add("hide") 
        registerStep2.classList.remove("hide")
        countsInit()
    }
    

}

/*第二步 */
let telNumber = document.querySelector(".tel-number")
let ticketTime = document.querySelector(".ticket-time")
//从本地存储中读取电话号码
telNumber.innerHTML = "+86 " + localStorage.getItem("telNum")
let reTime = document.querySelector(".re-time")
let BaDate
let timeFlag = 0
let times
//初始化倒计时
function countsInit () {
    clearInterval(times)
    BaDate = new Date(new Date().getTime() + 61000)
    times =  setInterval(countsTicket, 1000)
}
countsInit()
function countsTicket() {
    timeFlag = 1
    let date = new Date()
    let sInDate = (BaDate.getTime() - date.getTime()) / 1000
    //秒
    let sec = parseInt(sInDate)
    console.log(sInDate)
    //添加成为00
    sec = sec < 10 ? "0" + sec : sec
    //给span赋值
    ticketTime.innerHTML = "(" + sec + " )"
    //关闭定时器，使时间变为00
    if (sInDate <= 0) {
        timeFlag = 0
        clearInterval(times)
        ticketTime.innerHTML = "(00)"
        reTime.classList.add("ticket-ms-active")
    }
  }
 

//重新倒计时
reTime.onclick = function () {
    if (!timeFlag) {
        countsInit()
    }
    reTime.classList.remove("ticket-ms-active")
}
let registerStep2 = document.querySelector(".register-step-2")
let submitNum2 = document.querySelector("#submit-num2")
//验证码
let ticketMsg = document.querySelector(".ticket-msg")
//校验验证码 
function checkTicket (ticketMsgs) {
    let regex =  /^\d{4}$/; 
    console.log(regex.test(ticketMsgs))
    return regex.test(ticketMsgs)
}
submitNum2.onclick = function () {
    if (!checkTicket(ticketMsg.value)) {
        window.confirm("请输入4位数的验证码！！")
    } else {
        registerStep2.classList.add("hide")
        registerStep3.classList.remove("hide") 
        console.log("skjdj")
    }
}
// 返回
let submitBack = document.querySelector(".submit-back")
submitBack.onclick = function () {
    registerStep2.classList.add("hide")
    registerStep1.classList.remove("hide")
}
/** 第三部分 */
let registerStep3 = document.querySelector(".register-step-3")
let telNumber02 = document.querySelectorAll(".tel-number")[1]
telNumber02.innerHTML = "+86 " + localStorage.getItem("telNum")
let regisPassword = document.querySelector(".regis-password ")
let rePassword = document.querySelector(".re-password")
let submitNum3 = document.querySelector("#submit-num3")
submitNum3.onclick = function () {
    if (!(regisPassword.value == rePassword.value)) {
        window.confirm("两次密码不相等，请重新输入！！")
    } else {
        registerStep3.classList.add("hide")
        registerStep4.classList.remove("hide")

    }
}
/* 第四部分*/
let registerStep4 = document.querySelector(".register-step-4")
let submitNum4 = document.querySelector("#submit-num4")
submitNum4.onclick = function () {
    window.location.href = "/"
}