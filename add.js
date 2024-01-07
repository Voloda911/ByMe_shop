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
    img: "img.product/man/294fe6aeb4fb7a39d6a28bb211fb4191.webp",
    name: "men's shorts Beigo",
    price: "38.15",
    category: "men",
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
    img: "img.product/man/42be7baef7fe9438de26738c2f57c4cb.webp",
    name: "men's T-shirt",
    price: "38.15",
    category: "men",
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
    img: "img.product/man/9c77380e70f6114970c91169f3b15a46.webp",
    name: "men's shorts white",
    price: "31.66",
    category: "men",
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
    img: "img.product/shoes/b39992d06bb5bb05e65bf90c76036978.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/shoes/908d3e436044239356b3eb2104cfab53.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
  },
  {
    id: 1,
    img: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
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
    img: "img.product/man/bccd4459f224e784ecd7f58858d619d7.webp",
    name: "men's shorts white",
    price: "31.66",
    category: "men",
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
    img: "img.product/man/c0737cc483c88cb7560d1c704b3ad92e.webp",
    name: "GULLIVER men's s",
    price: "36.90",
    category: "men",
  },
];

document.querySelectorAll(".sections_colention a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const category = event.target.getAttribute("data-category");
    filterElementsAndShow(category);
  });
});

function filterElementsAndShow(category) {
  const filterGoods = goods.filter((good) => good.category === category);
  const productsHTML = filterGoods
    .map(
      (good) => ` <div class="produci-trumblin">
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
  document.getElementById("products-container").innerHTML = productsHTML;
}

function renderAllProducts() {
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
  document.getElementById("products-container").innerHTML = productsHTML;
}

renderAllProducts();

const contentBlockLeft = document.querySelector(".content_block_left");

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
