const toggle = document.querySelector(".switch-toggle")

const monthlyPriceList = ["&dollar;19.99", "&dollar;24.99", "&dollar;39.99"]
const annualyPriceList = ["&dollar;199.99", "&dollar;249.99", "&dollar;399.99"]

toggle.addEventListener("click", () => {
   toggle.classList.toggle("active")
   const priceList = document.querySelectorAll(".price")

   if(toggle.classList.contains("active")){
      priceList.forEach((item,index) => {
         item.innerHTML = annualyPriceList[index]
      })
   }else{
      priceList.forEach((item,index) => {
         item.innerHTML = monthlyPriceList[index]
      })
   }
   

})