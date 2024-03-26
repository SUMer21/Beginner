
function generateCaptcha() {
    const value = Math.floor((Math.random()*1000000)+1);
    if(value>100000){
        document.getElementById("output").textContent = value;
    }
}
function validateCaptcha() {
   var input = document.getElementById("input").value;
   var test = document.getElementById("output").textContent;
    if(input==test){
        window.alert("welcome!");
    } else {
        window.alert("enter correct captcha");

    }
}
generateCaptcha();
