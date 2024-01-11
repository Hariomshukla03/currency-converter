const baseUrl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";
const dropDowns=document.querySelector(".dropDown select");
const dropDown2=document.querySelector("#box2")
 for(let select of dropDowns) {
     for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption)
    }
 }

