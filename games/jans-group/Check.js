const  bt_truk = document.querySelector(".bt-truck");
const  bt_truk2 = document.querySelector(".bt-truck2");

const  check = document.querySelector(".ckeck-item");
const  check_icon =  document.querySelector(".check-icon");
const  check2 = document.querySelector(".ckeck-item2");
const  check_icon2 =  document.querySelector(".check-icon2");




bt_truk.addEventListener("click", function(){
    if (check.getAttribute("data-visible") === "visible")
    {
        check.setAttribute("data-visible", "not-visible")
        console.log("visible")
        check_icon.setAttribute("aria-hidden", "true");
    }
    else{
        check.setAttribute("data-visible", "visible")
        console.log("not visible")
        check_icon.setAttribute("aria-hidden", "false");
    }
})

bt_truk2.addEventListener("click", function(){
    if (check2.getAttribute("data-visible") === "visible")
    {
        check2.setAttribute("data-visible", "not-visible")
        console.log("visible")
        check_icon2.setAttribute("aria-hidden", "true");
    }
    else{
        check2.setAttribute("data-visible", "visible")
        console.log("not visible")
        check_icon2.setAttribute("aria-hidden", "false");
    }
})