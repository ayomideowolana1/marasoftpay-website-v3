const loadAnimations = () => {
  let phones = document.querySelector(".phones");
  let popup = document.querySelector(".popup");
  let tfpopup = document.querySelector(".transfer-popup");
  let text = document.querySelector(".text");
  setTimeout(() => {
    phones.classList.add("animate");
    text.classList.add("animate");
  },500);
  setTimeout(() => {
    popup.classList.add("animate");
  },750);
  setTimeout(() => {
    tfpopup.classList.add("animate");
  },1000);
};
