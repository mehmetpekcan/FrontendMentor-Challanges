/* Features Section Tab Menu */

const tabNames = document.querySelectorAll("[data-tab-name]")
const tabBodies = document.querySelectorAll(".tm-body")

tabNames.forEach(tab => {
   tab.addEventListener("click", () => {
      let tabBody = document.getElementById(tab.dataset.tabName)

      tabBodies.forEach(tabBody => {
         tabBody.classList.remove("active")
      })

      tabNames.forEach(tab => {
         tab.classList.remove("active")
      })

      tab.classList.add("active")
      tabBody.classList.add("active")
   })
})

/* Features Section Tab Menu */

/* FAQ Section Accordion */

const faq_tabs = document.querySelectorAll("[data-faq-name]")
const faq_tabContents = document.querySelectorAll(".faq-detail")


faq_tabs.forEach(faq_tab => {
   faq_tab.addEventListener("click", () => {
      let faq_tabContent = document.getElementById(faq_tab.dataset.faqName)

      if (faq_tabContent.classList.contains("active")) {
         faq_tabContent.classList.remove("active")
         faq_tab.childNodes[3].classList.remove("active")
      } else {
         faq_tabContents.forEach(item => {
            item.classList.remove("active")
         })

         faq_tabs.forEach(item => {
            item.childNodes[3].classList.remove("active")
         })

         faq_tabContent.classList.add("active")
         faq_tab.childNodes[3].classList.add("active")
      }
   })
})

/* FAQ Section Accordion */


/* Email Validation */

const form = document.querySelector("form")

form.addEventListener("submit", e => {
   e.preventDefault()
   if (!validateEmail(e.target[0].value)) {
      form.childNodes[1].childNodes[1].classList.add("error")
      form.childNodes[1].childNodes[5].style.display = "block"
      form.childNodes[1].childNodes[7].style.display = "block"
   } else {
      form.childNodes[1].childNodes[1].classList.remove("error")
      form.childNodes[1].childNodes[5].style.display = "none"
      form.childNodes[1].childNodes[7].style.display = "none"
   }
})


function validateEmail(email) {
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

/* Email Validation */

/* Mobile Menu */

const mobileOpenToggle = document.querySelector(".nav-mobile-toggle")
const mobileMenuContent = document.querySelector(".nav-mobile")
const mobileCloseToggle = document.querySelector(".fa-times")

mobileOpenToggle.addEventListener("click", () => {
   mobileMenuContent.style.display = "Block"
   mobileOpenToggle.style.display = "None"
})

mobileCloseToggle.addEventListener("click", () => {
   mobileMenuContent.style.display = "None"
   mobileOpenToggle.style.display = "Block"
})

/* Mobile Menu */