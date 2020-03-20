const btn = document.querySelector(".button button");
const section2 = document.querySelector(".services");
const phone = document.querySelector(".fa-phone-square-alt");
const mail = document.querySelector(".fa-at");
const fb = document.querySelector(".facebook");
const arrow = document.querySelector(".fa-chevron-left");
const phoneNumber = document.querySelector(".phone");
const mailAdress = document.querySelector(".mail");

const photoOne = document.querySelector(".one");
const photoTwo = document.querySelector(".two");
const photoThree = document.querySelector(".three");
const DescriptionOne = document.querySelector(".DesOne");
const DescriptionTwo = document.querySelector(".DesTwo");
const DescriptionThree = document.querySelector(".DesThree");

photoOne.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    photoOne.classList.toggle("dark");
    DescriptionOne.classList.toggle("light");
  }
});
photoTwo.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    photoTwo.classList.toggle("dark");
    DescriptionTwo.classList.toggle("light");
  }
});
photoThree.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    photoThree.classList.toggle("dark");
    DescriptionThree.classList.toggle("light");
  }
});

DescriptionOne.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    photoOne.classList.toggle("dark");
    DescriptionOne.classList.toggle("light");
  }
});
DescriptionTwo.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    photoTwo.classList.toggle("dark");
    DescriptionTwo.classList.toggle("light");
  }
});
DescriptionThree.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    photoThree.classList.toggle("dark");
    DescriptionThree.classList.toggle("light");
  }
});

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
