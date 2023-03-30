const  bt_truk = document.querySelector(".bt-truck");
const  check = document.querySelector(".ckeck-item");
const  check_icon =  document.querySelector(".check-icon");




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