const header = document.getElementById("header");
const main = document.querySelector("main");
const nawSell = document.querySelectorAll(".text_tabs");
const newBtn = document.getElementById("s_new");
const tabNew = document.getElementById("tab_new");
const tabSell = document.getElementById("tab_sell");

// newBtn.classList.add("active");
// tabNew.classList.add("active");

nawSell.forEach(function (item) {
  item.addEventListener("click", function () {
    nawSell.forEach(function (item) {
      item.classList.remove("active");
    });

    item.classList.add("active");

    let tabId = item.getAttribute("data-tab");

    tabNew.classList.remove("active");
    tabSell.classList.remove("active");
    document.querySelector(tabId).classList.add("active");
  });
});

window.addEventListener("scroll", function () {
  let scrollPos = window.scrollY;

  if (scrollPos > 0) {
    header.classList.add("header_move");
    main.classList.add("margin_main");
  } else {
    header.classList.remove("header_move");
    main.classList.remove("margin_main");
  }
});

// filter

const priceMin = document.getElementById("price-min");
const priceMax = document.getElementById("price-max");
const priceMinValue = document.getElementById("price-min-value");
const priceMaxValue = document.getElementById("price-max-value");

function updatePriceValue() {
  priceMinValue.textContent = priceMin.value;
  priceMaxValue.textContent = priceMax.value;
}

priceMin.addEventListener("input", updatePriceValue);

updatePriceValue();

const goods = [
  {
    id: 1,
    name: "",
    price: "",
    category: "",
  },
];
