const form = document.querySelector(".subscribe-form")
const input = document.querySelector("input")

form.addEventListener("submit", e => {
   e.preventDefault()
   const errorImg = document.querySelector(".alert-img")
   const noValidMessage = document.querySelector("small")

   if(!checkMail(input.value)){
      errorImg.style.opacity = 100;
      noValidMessage.style.opacity = 100;
   }else{
      errorImg.style.opacity = 0;
      noValidMessage.style.opacity = 0;
   }
})

function checkMail(email){
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}