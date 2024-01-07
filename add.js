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
const goods = [
  {
    id: 1,
    img: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    name: "alibaba",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/new.photo/7af9c2b4c8c21c6bf14ef479a7685c74.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
];

const productsHTML = goods
  .map(
    (good) => `
    <div class="produci-trumblin">
      <a href="#">
        <picture>
          <source srcset="#" type="#" />
          <source srcset="#" type="#" />
          <img src=${good.img} alt="${good.name}" width="198" />
        </picture>
      </a>
      <div class="product_body">
        <div class="description ">
          <a class="product_name" href="#">${good.name}</a>
          <div class="prise-date">
            <span class="cerrent_pruise">${good.price} USD</span>
          </div>
        </div>
      </div>
    </div>
  `
  )
  .join("");

const contentBlockLeft = document.querySelector(".content_block_left");
contentBlockLeft.innerHTML = productsHTML;

const caterogy = document.querySelector(".caterogy");
const colention = document.querySelector(".sections_colention");
const fasFa = document.querySelector(".fas");

caterogy.addEventListener("click", () => {
  if (colention) {
    colention.classList.toggle("toggle_nav");
  }
  if (fasFa.classList.contains("fa-chevron-down")) {
    fasFa.classList.remove("fa-chevron-down");
    fasFa.classList.add("fa-chevron-up");
  } else {
    fasFa.classList.remove("fa-chevron-up");
    fasFa.classList.add("fa-chevron-down");
  }
});
