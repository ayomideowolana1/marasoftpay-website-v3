const animate = () => {};

const loadAnimations = screen => {
  switch (screen) {
    case "mobile":
      loadMobileAnimations();
      break;
    case "desktop":
      loadDesktopAnimations();
      break;
  }
};
