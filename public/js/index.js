const loadAnimations = () => {
  let phones = document.querySelector(".phones");
  let popup = document.querySelector(".popup");
  let tfpopup = document.querySelector(".transfer-popup");
  let text = document.querySelector(".text");
  let frame = document.querySelector(".frame");
  let features = document.querySelector(".features");

  setTimeout(() => {
    phones.classList.add("animate");
    frame.classList.add("animate");
    text.classList.add("animate");
  }, 500);
  setTimeout(() => {
    popup.classList.add("animate");
  }, 1050);
  setTimeout(() => {
    tfpopup.classList.add("animate");
  }, 1250);
  setTimeout(() => {
    features.classList.add("animate");
  }, 2000);
};
