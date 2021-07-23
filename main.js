const date = document.querySelector('.date');
const luckyNum = document.querySelector('.lucky-number');
const submitBtn = document.querySelector('button');
const result = document.querySelector('.result');
const showImg = document.querySelector('.show-img');
const  paragraph = document.getElementById('para');
const modal = document.querySelector('.modal');
modal.open()

result.style.display = "none";
submitBtn.addEventListener('click',()=>{
  let storeSum=0;
  let luckyNumValue = parseInt(luckyNum.value,10);
  result.style.display="block";


 
  dateArray = date.value.split("-");

  dateArray.forEach((element)=>{
      let intEle =parseInt(element,10);
      storeSum= storeSum+intEle
    
      

  })
  getResultData(storeSum,luckyNumValue);
})



function getResultData(sum,luckyNumber)
{
 if(sum %luckyNumber ===0){
  showImg.src="./images/happy_lucky.svg"
  paragraph.innerText="You have a lucky birthday "

 }else{
   showImg.src="paragraph.innerText"
   paragraph.innerText="Your don't have a lucky birthday"
   
 }
}