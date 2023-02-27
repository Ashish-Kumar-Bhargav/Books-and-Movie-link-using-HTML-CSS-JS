function app() {
    let ele = document.getElementsByName("choice")
    if(ele[0].checked){
        document.getElementById("service1").style.display="flex";
        document.getElementById("service2").style.display="none";

    }
    else{
        document.getElementById("service2").style.display="flex";
        document.getElementById("service1").style.display="none";

    }
}
