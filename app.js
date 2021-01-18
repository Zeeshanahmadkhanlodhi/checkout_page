var btn = document.querySelectorAll("button")[1].addEventListener("click",  () =>{
   var num = Number(document.getElementById("num1").innerText)
    if(num > 0){
        num--
        document.getElementById("num1").innerHTML = num;
    }
    
});

var btn = document.querySelectorAll("button")[2].addEventListener("click",  () =>{
    var num = Number(document.getElementById("num1").innerText)
         num++
         document.getElementById("num1").innerHTML = num;
     
     
 });

 var btn = document.querySelectorAll("button")[3].addEventListener("click",  () =>{
    var num = Number(document.getElementById("num2").innerText)
     if(num > 0){
         num--
         document.getElementById("num2").innerHTML = num;
     }
     
 });

 var btn = document.querySelectorAll("button")[4].addEventListener("click",  () =>{
    var num = Number(document.getElementById("num2").innerText)
    
         num++
         document.getElementById("num2").innerHTML = num;
     
     
 });