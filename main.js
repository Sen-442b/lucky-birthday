const date = document.querySelector(".date");
const luckyNum = document.querySelector(".lucky-number");
const submitBtn = document.getElementById("btn-submit");
const result = document.querySelector(".result");
const showImg = document.querySelector(".show-img");
const paragraph = document.getElementById("para");
const modal = document.querySelector(".modal");
const closeBtn = document.getElementById("close-btn");


result.style.display = "none";
submitBtn.addEventListener("click", () => {
  let storeSum = 0;
  let luckyNumValue = Number(luckyNum.value);
  result.style.display = "block";
  const dateArray = date.value.split("-");


  dateArray.forEach((element) => {
    let intEle = parseInt(element, 10);
    storeSum = storeSum + intEle;
  });
  console.log(storeSum)
  getResultData(storeSum, luckyNumValue);
});


window.addEventListener("load", () => {
  setTimeout(() => {
    modal.style.top = "10%";
  }, 3000);
});
closeBtn.addEventListener("click", () => {
  modal.style.top="-100%";
});



function getResultData(sum, luckyNumber) {
  if(luckyNumber>0 && luckyNumber===parseInt(luckyNumber) && isNaN(sum)===false){
  if (sum % luckyNumber === 0) {
    showImg.src = "./images/happy_lucky.svg";
    paragraph.innerText = "You have a lucky birthday ";
  } else {
    showImg.src = "./images/un_lucky.svg";
    paragraph.innerText = "Your don't have a lucky birthday";
  }
}else{
  showImg.src="./images/invalid_input.svg"
  paragraph.innerText="Invalid input"
}
}
