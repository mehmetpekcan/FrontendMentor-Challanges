const form = document.querySelector("form")
const input = document.querySelector(".form-control input")
const alertMessage = document.querySelector(".form-control small")

form.addEventListener("submit", e => {
   e.preventDefault()

   if(!isEmailValid(input.value)){
      input.classList.add("alert")
      alertMessage.style.opacity = 1;
   }else{
      input.classList.remove("alert")
      alertMessage.style.opacity = 0;
   }
})

function isEmailValid(email){
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}