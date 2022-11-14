const object = document.querySelector(".wraper");

// document.addEventListener("click", function (event) {
//   if (event.target.closest(".")) {
//     object.classList.toggle("_activCatalog");
//   }
// });

document.addEventListener("click", function (menu) {
  if (menu.target.closest(".blok__menu")) {
    object.classList.toggle("_activMenu");
  }
  if (menu.target.closest(".cross")) {
    object.classList.toggle("_activMenu");
  }
  if (menu.target.closest(".menu-bar__overlayA")) {
    object.classList.toggle("_activMenu");
  }
});

document.addEventListener("keydown", function (menu) {
  if (menu.code == "Escape") {
    object.classList.remove("_activMenu");
  }
});

document.addEventListener("click", function (filter) {
  if (filter.target.closest(".under__filter")) {
    object.classList.toggle("_activFilter");
  }

  if (filter.target.closest(".menu-bar__overlayB")) {
    object.classList.toggle("_activFilter");
  }
});

const brend = document.querySelector(".brend__list");
const brendHeader = brend.firstElementChild;

brendHeader.addEventListener("click", function () {
  object.classList.toggle("_activBrend");
  brendHeader.classList.add("anime");
});

brendHeader.addEventListener(
  "animationend",
  function () {
    brendHeader.classList.remove("anime");
  },
  false
);

const gerts = document.querySelector(".gerts__list");
const gertsHeader = gerts.firstElementChild;

gertsHeader.addEventListener("click", function () {
  object.classList.toggle("_activGerts");
  gertsHeader.classList.add("anime");
});

gertsHeader.addEventListener(
  "animationend",
  function () {
    gertsHeader.classList.remove("anime");
  },
  false
);

const size = document.querySelector(".size-screen__list");
const sizeHeader = size.firstElementChild;

sizeHeader.addEventListener("click", function () {
  object.classList.toggle("_activSize");
  sizeHeader.classList.add("anime");
});

sizeHeader.addEventListener(
  "animationend",
  function () {
    sizeHeader.classList.remove("anime");
  },
  false
);

const matriks = document.querySelector(".matriks__list");
const matriksHeader = matriks.firstElementChild;

matriksHeader.addEventListener("click", function () {
  object.classList.toggle("_activMatriks");
  matriksHeader.classList.add("anime");
});

matriksHeader.addEventListener(
  "animationend",
  function () {
    matriksHeader.classList.remove("anime");
  },
  false
);
