const btn = document.querySelector(".button button");
const section2 = document.querySelector(".services");
const phone = document.querySelector(".fa-phone-square-alt");
const mail = document.querySelector(".fa-at");
const fb = document.querySelector(".facebook");
const arrow = document.querySelector(".fa-chevron-left");
const phoneNumber = document.querySelector(".phone");
const mailAdress = document.querySelector(".mail");

// const photo = document.querySelectorAll(".photo");

// const clickedPhoto = () => {
//   const width = window.innerWidth;
//   console.log(width);
//   if (width >= 1024) {
//   }
// };

// photo.addEventListener("click", clickedPhoto);

btn.addEventListener("click", () => {
  const height = window.innerHeight;
  window.scroll(0, height);
});

phone.addEventListener("click", () => {
  phone.classList.add("hidden");
  mail.classList.add("hidden");
  fb.classList.add("hidden");
  arrow.classList.add("showPhone");
  phoneNumber.classList.add("showContent");
});

mail.addEventListener("click", () => {
  phone.classList.add("hidden");
  mail.classList.add("hidden");
  fb.classList.add("hidden");
  arrow.classList.add("showMail");
  mailAdress.classList.add("showContent");
});

arrow.addEventListener("click", () => {
  phone.classList.remove("hidden");
  mail.classList.remove("hidden");
  fb.classList.remove("hidden");
  arrow.classList.remove("showMail");
  arrow.classList.remove("showPhone");
  phoneNumber.classList.remove("showContent");
  mailAdress.classList.remove("showContent");
});
