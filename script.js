const xMarkButton = document.getElementById("x-mark");
const burgerButton = document.getElementById("burger")
const nav = document.getElementById("nav");
console.log(nav)


burgerButton.addEventListener("click", () => {
   burgerButton.classList.toggle("mobile-icon-visibility")
   xMarkButton.classList.toggle("mobile-icon-visibility")
   nav.classList.toggle("mobile-nav")
   }
)

xMarkButton.addEventListener("click", () => {
   burgerButton.classList.toggle("mobile-icon-visibility")
   xMarkButton.classList.toggle("mobile-icon-visibility")
   nav.classList.toggle("mobile-nav")
   }
)
