//js sliding menu

const xMarkButton = document.getElementById("x-mark");
const burgerButton = document.getElementById("burger")
const nav = document.getElementById("nav");


burgerButton.addEventListener("click", () => {
   burgerButton.classList.toggle("mobile-icon-visibility")
   xMarkButton.classList.toggle("mobile-icon-visibility")
   nav.classList.toggle("mobile-nav")
   }
)

xMarkButton.addEventListener("click", () => {
   burgerButton.classList.toggle("mobile-icon-visibility");
   xMarkButton.classList.toggle("mobile-icon-visibility");
   nav.classList.toggle("mobile-nav")
   }
)

const li = document.querySelectorAll("nav ul li");
const liArray = [...li];

liArray.forEach((item) => {
   item.addEventListener("click", () => {
      nav.classList.remove("mobile-nav");
      xMarkButton.classList.toggle("mobile-icon-visibility");
      burgerButton.classList.toggle("mobile-icon-visibility");
   })
})


