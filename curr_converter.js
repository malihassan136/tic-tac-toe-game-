let dropdown1=document.querySelector("#d1");
let dropdown2=document.querySelector("#d2");
let img1=document.querySelector("#from_img");
let img2=document.querySelector("#to_img");


let api="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"

for(let curr in countryList){
    let option1=document.createElement("option");
    option1.innerText=curr;
    option1.value=curr;
    dropdown1.append(option1);
   
    let option2=document.createElement("option");
    option2.innerText=curr;
    option2.value=curr;
    dropdown2.append(option2);

}
dropdown1.addEventListener("change",(evt)=>{
    let val=evt.target.value
    img1.src=`https://flagsapi.com/${countryList[evt.target.value]}/flat/64.png`;

    
})
dropdown2.addEventListener("change",(evt)=>{
    
    img2.src=`https://flagsapi.com/${countryList[evt.target.value]}/flat/64.png`

})
let from_curr=dropdown1.value;
console.log(from_curr);
