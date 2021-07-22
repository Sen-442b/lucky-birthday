const date = document.querySelector('.date');
const luckyNum = document.querySelector('.lucky-number');
const submitBtn = document.querySelector('button');



submitBtn.addEventListener('click',()=>{
  let storeSum=0;
  let luckyNumValue = parseInt(luckyNum.value,10);
 
  dateArray = date.value.split("-");

  dateArray.forEach((element)=>{
      let intEle =parseInt(element,10);
      storeSum= storeSum+intEle
    
      

  })

 if(storeSum %luckyNumValue ===0){
   console.log("Lucky");
 }
})