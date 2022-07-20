// NAV
let navToggle = document.querySelector("#nav-toggle");
let navToggleIcon = document.querySelector("#nav-toggle img");
let navDropdown = document.querySelector("#nav-dropdown");

navToggle.addEventListener("click", () => {
  // change nav visibility state
  const toggleDropdown = state => {
    navDropdown.style.visibility = state;
  };
  // add | remove class from toggle
  const addClass = state => {
    navToggle.classList.add(state);
    navDropdown.classList.remove(state);
  };
  const removeClass = state => {
    navToggle.classList.remove(state);
    navDropdown.classList.add(state);
  };
  // set toggle icon
  const setToggleIcon = state => {
    navToggleIcon.src = state;
  };
  // logic
  if (navToggle.classList.contains("open")) {
    // toggleDropdown("visible");
    removeClass("open");
    addClass("close");
    setToggleIcon("/assets/svgs/nav-toggle-close.svg");
  } else {
    // toggleDropdown("hidden");
    removeClass("close");
    addClass("open");
    setToggleIcon("/assets/svgs/nav-toggle-open.svg");
  }
});

// FOOTER
let headers = Array.from(document.querySelectorAll("footer .container-lg h4"));
let toggleItems = Array.from(
  document.querySelectorAll("footer .container-lg .toggle-body")
);
headers.forEach(header => {
  header.addEventListener("click", e => {
    let current = document.querySelector(`#${e.target.dataset.toggleId}`);

        if (current.classList.contains("active")) {
          current.classList.remove("active");
        } else {
          toggleItems.forEach(item => {
            item.classList.remove("active");
          });
          current.classList.add("active");
        }







  });
});
