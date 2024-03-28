
function generateCaptcha() {
        var  array =["A","B","C","D","E", "a", "b", "c", "d","e","f","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","g","h"];
        var sumer = ["1","2","3","4","6","7","8","9","0","1","2","3","4","6","7","8","9","0","1","2","3","4","6","7","8","9","0","1","2","3","4","6","7","8","9","0","1","2","3","4","6","7","8","9","0","1","2"];
        var value;
        var varun;
        var shravan;
        for( var i =1; i<=3; i++){
     value = Math.floor((Math.random() * 51) + 1);
     varun = Math.floor((Math.random() * 51) + 1);
     shravan = Math.floor((Math.random() * 51) + 1);
            var captchaGenerator = [];
    captchaGenerator.push(array[value]);
    captchaGenerator.push(sumer[value]);
    captchaGenerator.push(array[varun]);
    captchaGenerator.push(sumer[varun]);
    captchaGenerator.push(array[shravan]);
    captchaGenerator.push(sumer[shravan]);
        }
        if(captchaGenerator.length >= 6){
     document.getElementById("output").textContent = `${captchaGenerator[0]}${captchaGenerator[1]}${captchaGenerator[2]}${captchaGenerator[3]}${captchaGenerator[4]}${captchaGenerator[5]}`;
        }
}
function validateCaptcha() {
   var input = document.getElementById("input").value;
   var test = document.getElementById("output").textContent;
    if(input===test){
        window.alert("welcome!");
    } else {
        window.alert("enter correct captcha");

    }
}
generateCaptcha();
