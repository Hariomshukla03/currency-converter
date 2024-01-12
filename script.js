const baseUrl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropDowns=document.querySelectorAll(".dropDown select");
const btn=document.querySelector("#btn")
const fromCurr=document.querySelector("#from select")
const toCurr=document.querySelector("#box3 select")

 for(let select of dropDowns) {
     for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerHTML=currCode;
        newOption.value=currCode;
        if(select.name==="from"&&currCode==="USD"){
            newOption.selected="selected";
        }
        if(select.name==="to"&&currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption)
    }
    select.addEventListener("click",(evt)=>{
        updateFlag(evt.target);
        
     })
 }
 
 const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newScr=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img =element.parentElement.querySelector("img");
    img.src=newScr;
}
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amt=document.querySelector("input")
    let amtVal=amt.value;
    console.log(amtVal)
    if(amtVal===""||amtVal<1){
        amtVal=1;
        amt.value=1;
    }
    console.log(fromCurr.value,toCurr.value)
    const URL=`${baseUrl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response=await fetch(URL);
    let data=await response.json()
    let exchangeVal=data[toCurr.value.toLowerCase()];
    let finalVal=amtVal*exchangeVal;
    console.log(finalVal);
    let input=document.querySelector("#input input")
    input.value=finalVal;
});  




