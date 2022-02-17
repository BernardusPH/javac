


var play=[
    "Rock",
    "Paper",
    "Scissors"
];

var gen=Math.round(Math.random()*2);
var output="";
var buttonlink = document.querySelector("button");
var yourBet;

function checker(){
 yourBet=document.getElementById("input").value;
for(let i=0;i<play.length;i++){
    if (yourBet==play[i]){
       return output=
            `Your play: ${yourBet} \n My play: ${play[gen]}`;
    
    }
}return output="tik dit reg in";
}




let result="";


function doener(){
if(output==="tik dit reg in"){
     return  result="geen result nie";
}else if(yourBet===play[gen]){
     return  result="Tied";
}else if(yourBet==="Paper" && play[gen]==="Rock"){
     return  result="U win";
}else if(yourBet==="Rock" && play[gen]==="Scissors"){
     return  result="U win";
}else if(yourBet==="Scissors" && play[gen]==="Paper"){
     return  result="U win";
}else{  return result="I win :P"}
}

function returner(){
    document.getElementById("outputer").innerHTML=checker()
    document.getElementById("result").innerHTML=doener();
    gen=Math.round(Math.random()*2);
}
