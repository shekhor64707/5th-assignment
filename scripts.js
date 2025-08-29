const loveNumber=document.getElementById("loveNumber");
const loves=document.querySelectorAll("#love");

var count=0;

for(let love of loves){
   love.addEventListener("click",function(){
    count++;
    loveNumber.innerText=count;
});
}

const btn2All=document.querySelectorAll(".btn2")
var coin=document.getElementById("coinNumber");
var coins=parseInt(coin.innerText);

for(let btn2 of btn2All){
    let card=btn2.parentNode.parentNode;
    let sNode=card.querySelector("h1").innerText;
    let pNode=card.querySelector(".card-jamela span").innerText;
    let allNode=`Calling ${sNode} ${pNode}`;
    btn2.addEventListener("click",function(){
         alert(allNode);
         coins -= 20;
         coin.innerText=coins;
          if (coins < 20) {
         alert("You don't have sufficient coins!");
          return; 

    }
      
    });
      
    
}

const copyBtns=document.querySelectorAll(".btn1");
var copy=document.getElementById("copyNumber");
var copyNumber=parseInt(copy.innerText);
console.log(copyNumber); 
var count2=0;
 
for(let copyBtn of copyBtns){
    copyBtn.addEventListener("click",function(){
       count2+=1
       copy.innerText=count2;
    });
}




