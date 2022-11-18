document.querySelector("#data-priority").onclick = priority;

function priority() {
  let center = document.querySelector(".center__row");
  document.querySelector("#data-priority").style.backgroundColor =
    "rgba(128, 128, 128, 0.436)";
  document.querySelector("#data-prise-low").style.backgroundColor =
    "rgba(128, 128, 128, 0.142)";
  document.querySelector("#data-prise-high").style.backgroundColor =
    "rgba(128, 128, 128, 0.142)";
  for (let i = 0; i < center.children.length; i++) {
    for (let j = i; j < center.children.length; j++) {
      if (
        +center.children[i].getAttribute("data-priority") >
        +center.children[j].getAttribute("data-priority")
      ) {
        replace = center.replaceChild(center.children[j], center.children[i]);
        after(replace, center.children[i]);
      }
    }
  }
}

function after(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

document.querySelector("#data-prise-low").onclick = low;

function low() {
  document.querySelector("#data-priority").style.backgroundColor =
    "rgba(128, 128, 128, 0.142)";
  document.querySelector("#data-prise-low").style.backgroundColor =
    "rgba(128, 128, 128, 0.436)";
  document.querySelector("#data-prise-high").style.backgroundColor =
    "rgba(128, 128, 128, 0.142)";
  let center = document.querySelector(".center__row");
  for (let i = 0; i < center.children.length; i++) {
    for (let j = i; j < center.children.length; j++) {
      if (
        +center.children[i].getAttribute("data-prise") >
        +center.children[j].getAttribute("data-prise")
      ) {
        replace = center.replaceChild(center.children[j], center.children[i]);
        after(replace, center.children[i]);
      }
    }
  }
}

document.querySelector("#data-prise-high").onclick = high;

function high() {
  document.querySelector("#data-priority").style.backgroundColor =
    "rgba(128, 128, 128, 0.142)";
  document.querySelector("#data-prise-low").style.backgroundColor =
    "rgba(128, 128, 128, 0.142)";
  document.querySelector("#data-prise-high").style.backgroundColor =
    "rgba(128, 128, 128, 0.436)";
  let center = document.querySelector(".center__row");
  for (let i = 0; i < center.children.length; i++) {
    for (let j = i; j < center.children.length; j++) {
      if (
        +center.children[i].getAttribute("data-prise") <
        +center.children[j].getAttribute("data-prise")
      ) {
        replace = center.replaceChild(center.children[j], center.children[i]);
        after(replace, center.children[i]);
      }
    }
  }
}

/////////////////////////////////
const object = document.querySelector(".wraper");
const body = document.body;

//////////////////////////////////
document.addEventListener("click", function (catalog) {
  if (catalog.target.closest(".blok__catalog")) {
    object.classList.toggle("_activCatalog");
    body.style.overflow = "hidden";
  }
});

document
  .querySelector(".blok__catalog-cross")
  .addEventListener("click", function () {
    object.classList.toggle("_activCatalog");
    body.style.overflow = "scroll";
  });

document.addEventListener("keydown", function (catalog) {
  if (catalog.code == "Escape") {
    object.classList.remove("_activCatalog");
    body.style.overflow = "scroll";
  }
});

document
  .querySelector(".menu-bar__overlay")
  .addEventListener("click", function () {
    object.classList.remove("_activCatalog");
  });

const menuCatalog = document.querySelector(".menu__catalog");

menuCatalog.addEventListener("click", function () {
  object.classList.add("_activCatalog");
  body.style.overflow = "hidden";
  object.classList.remove("_activMenu");
});

const exity = document.querySelector(".katalog__exity");

exity.addEventListener("click", function () {
  body.style.overflow = "scroll";
  object.classList.remove("_activCatalog");
});

/////////////////////////////////
document.addEventListener("click", function (menu) {
  if (menu.target.closest(".blok__menu")) {
    body.style.overflow = "hidden";
    object.classList.toggle("_activMenu");
    object.classList.remove("_activCatalog");
  }
  if (menu.target.closest(".cross")) {
    body.style.overflow = "scroll";
    object.classList.remove("_activMenu");
  }
  if (menu.target.closest(".menu-bar__overlay")) {
    body.style.overflow = "scroll";
    object.classList.remove("_activMenu");
  }
});

document.addEventListener("keydown", function (menu) {
  if (menu.code == "Escape") {
    body.style.overflow = "scroll";
    object.classList.remove("_activMenu");
  }
});
///////////////////////////
document.addEventListener("click", function (filter) {
  if (filter.target.closest(".under__filter")) {
    body.style.overflow = "hidden";
    object.classList.toggle("_activFilter");
  }

  if (filter.target.closest(".menu-bar__overlay")) {
    body.style.overflow = "scroll";
    object.classList.remove("_activFilter");
  }
});

document.querySelector(".filter-exit").addEventListener("click", function () {
  body.style.overflow = "scroll";
  object.classList.remove("_activFilter");
});
/////////////////////////
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

//////////////////////////////
const brend1 = document.querySelector("#brend1");

brend1.addEventListener("mouseover", function () {
  object.classList.add("_opasityBrend1");
});
brend1.addEventListener("mouseout", function () {
  object.classList.remove("_opasityBrend1");
});
brend1.addEventListener("click", function () {
  object.classList.toggle("_activeBrend1");
});

const brend2 = document.querySelector("#brend2");

brend2.addEventListener("mouseover", function () {
  object.classList.add("_opasityBrend2");
});
brend2.addEventListener("mouseout", function () {
  object.classList.remove("_opasityBrend2");
});
brend2.addEventListener("click", function () {
  object.classList.toggle("_activeBrend2");
});

const brend3 = document.querySelector("#brend3");

brend3.addEventListener("mouseover", function () {
  object.classList.add("_opasityBrend3");
});
brend3.addEventListener("mouseout", function () {
  object.classList.remove("_opasityBrend3");
});
brend3.addEventListener("click", function () {
  object.classList.toggle("_activeBrend3");
});

const brend4 = document.querySelector("#brend4");

brend4.addEventListener("mouseover", function () {
  object.classList.add("_opasityBrend4");
});
brend4.addEventListener("mouseout", function () {
  object.classList.remove("_opasityBrend4");
});
brend4.addEventListener("click", function () {
  object.classList.toggle("_activeBrend4");
});

///////////////////////////////
const gerts1 = document.querySelector("#gerts1");

gerts1.addEventListener("mouseover", function () {
  object.classList.add("_opasityGerts1");
});
gerts1.addEventListener("mouseout", function () {
  object.classList.remove("_opasityGerts1");
});
gerts1.addEventListener("click", function () {
  object.classList.toggle("_activeGerts1");
});

const gerts2 = document.querySelector("#gerts2");

gerts2.addEventListener("mouseover", function () {
  object.classList.add("_opasityGerts2");
});
gerts2.addEventListener("mouseout", function () {
  object.classList.remove("_opasityGerts2");
});
gerts2.addEventListener("click", function () {
  object.classList.toggle("_activeGerts2");
});

const gerts3 = document.querySelector("#gerts3");

gerts3.addEventListener("mouseover", function () {
  object.classList.add("_opasityGerts3");
});
gerts3.addEventListener("mouseout", function () {
  object.classList.remove("_opasityGerts3");
});
gerts3.addEventListener("click", function () {
  object.classList.toggle("_activeGerts3");
});

const gerts4 = document.querySelector("#gerts4");

gerts4.addEventListener("mouseover", function () {
  object.classList.add("_opasityGerts4");
});
gerts4.addEventListener("mouseout", function () {
  object.classList.remove("_opasityGerts4");
});
gerts4.addEventListener("click", function () {
  object.classList.toggle("_activeGerts4");
});

//////////////////////////
const size1 = document.querySelector("#size1");

size1.addEventListener("mouseover", function () {
  object.classList.add("_opasitySize1");
});
size1.addEventListener("mouseout", function () {
  object.classList.remove("_opasitySize1");
});
size1.addEventListener("click", function () {
  object.classList.toggle("_activeSize1");
});

const size2 = document.querySelector("#size2");

size2.addEventListener("mouseover", function () {
  object.classList.add("_opasitySize2");
});
size2.addEventListener("mouseout", function () {
  object.classList.remove("_opasitySize2");
});
size2.addEventListener("click", function () {
  object.classList.toggle("_activeSize2");
});

const size3 = document.querySelector("#size3");

size3.addEventListener("mouseover", function () {
  object.classList.add("_opasitySize3");
});
size3.addEventListener("mouseout", function () {
  object.classList.remove("_opasitySize3");
});
size3.addEventListener("click", function () {
  object.classList.toggle("_activeSize3");
});

const size4 = document.querySelector("#size4");

size4.addEventListener("mouseover", function () {
  object.classList.add("_opasitySize4");
});
size4.addEventListener("mouseout", function () {
  object.classList.remove("_opasitySize4");
});
size4.addEventListener("click", function () {
  object.classList.toggle("_activeSize4");
});
///////////////////////////
const matriks1 = document.querySelector("#matriks1");

matriks1.addEventListener("mouseover", function () {
  object.classList.add("_opasityMatriks1");
});
matriks1.addEventListener("mouseout", function () {
  object.classList.remove("_opasityMatriks1");
});
matriks1.addEventListener("click", function () {
  object.classList.toggle("_activeMatriks1");
});

const matriks2 = document.querySelector("#matriks2");

matriks2.addEventListener("mouseover", function () {
  object.classList.add("_opasityMatriks2");
});
matriks2.addEventListener("mouseout", function () {
  object.classList.remove("_opasityMatriks2");
});
matriks2.addEventListener("click", function () {
  object.classList.toggle("_activeMatriks2");
});

const matriks3 = document.querySelector("#matriks3");

matriks3.addEventListener("mouseover", function () {
  object.classList.add("_opasityMatriks3");
});
matriks3.addEventListener("mouseout", function () {
  object.classList.remove("_opasityMatriks3");
});
matriks3.addEventListener("click", function () {
  object.classList.toggle("_activeMatriks3");
});
