// let name = prompt("name:");

// let temp = document.querySelector("h1").innerText;
// document.querySelector("h1").innerText = temp + " " + name;

let n = Math.round(Math.random()*101);
console.log(n);
var guess = 0;
document.querySelector("button").addEventListener("click",work);


document.querySelectorAll("button")[1].addEventListener("click",function(){
    location.reload();
})


function work (){
    let ans = document.querySelector("input").value;
    if(ans>n) {

        document.querySelector("h2").innerText = "think a smaller number ";
        guess++;
    }
    else if(ans<n){
        document.querySelector("h2").innerText = "think a bigger number ";
        guess++;
    }
    else{
//         document.querySelector("div").innerText = "you win  ";
        guess++;
        document.querySelector("h2").innerText = "you guess the number in "+ guess + " times";
    }
    
}
