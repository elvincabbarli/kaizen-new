const openMenyu = document.getElementById("open-menu");
openMenyu.addEventListener("click", () => {
  let hiddenMenu = document.querySelector(".hidden-menyu");
  hiddenMenu.classList.add("hidden-active");
});

const closeMenyu = document.querySelector(".close-hidden");
closeMenyu.addEventListener("click", () => {
  let hiddenMenu = document.querySelector(".hidden-menyu");
  hiddenMenu.classList.remove("hidden-active");
});


const openSearch = document.getElementById('open-search')
openSearch.addEventListener('click', () => {
  let hiddenSearch = document.querySelector('.search-bar')
  hiddenSearch.classList.toggle('open-searchbar')
})


const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function () {
  fileChosen.textContent = this.files[0].name
})

// Change option selected
const label = document.querySelector(".dropdown__filter-selected");
const options = Array.from(
  document.querySelectorAll(".dropdown__select-option")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    label.textContent = option.textContent;
  });
});

// Close dropdown onclick outside
document.addEventListener("click", (e) => {
  const toggle = document.querySelector(".dropdown__switch");
  const element = e.target;

  if (element == toggle) return;

  const isDropdownChild = element.closest(".dropdown__filter");

  if (!isDropdownChild) {
    toggle.checked = false;
  }
});

const label2 = document.querySelector(".dropdown__filter-selected2");
const options2 = Array.from(
  document.querySelectorAll(".dropdown__select-option2")
);

options2.forEach((option) => {
  option.addEventListener("click", () => {
    label2.textContent = option.textContent;
  });
});

// Close dropdown onclick outside
document.addEventListener("click", (e) => {
  const toggle2 = document.querySelector(".dropdown__switch2");
  const element2 = e.target;

  if (element2 == toggle2) return;

  const isDropdownChild = element2.closest(".dropdown__filter2");

  if (!isDropdownChild) {
    toggle2.checked = false;
  }
});