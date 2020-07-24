let amount = document.getElementById('amount')

let to = document.getElementById('to')


let from = document.getElementById('from')



function currency(){
    let amountVal = amount.value;
    let toVal = to.options[to.selectedIndex].value;
    let fromVal = from.options[from.selectedIndex].value;
    let res = document.getElementById('resultDiv')
    res.innerHTML = "LOADING..."
    axios({
        "method":"GET",
        "url":"https://currency-exchange.p.rapidapi.com/exchange",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"currency-exchange.p.rapidapi.com",
        "x-rapidapi-key":"acde7d9edemsh8b1b9dcc1ff6b19p1dcab6jsn191a80232242",
        "useQueryString":true
        },"params":{
        "q":"1.0",
        "from":`${fromVal}`,
        "to":`${toVal}`
        }
        })
        .then((response)=>{
          console.log(response)
          let res = document.getElementById('resultDiv')
          if(amountVal>0 && response.data == 0){
            alert("OOPS! NOT FOUND.")
        }
         else if(amountVal == 1){
            res.innerHTML = amountVal+" "+fromVal+ " = "+ response.data+" "+toVal
          }
          else if(amountVal != 1){
              let n =  response.data*amountVal
              let num = n.toFixed(2)
              res.innerHTML = amountVal+" "+fromVal+ " = "+ num +" "+toVal
          }

         
        })
        .catch((error)=>{
          console.log(error)
        })
}

