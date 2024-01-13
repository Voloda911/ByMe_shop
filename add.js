const header = document.getElementById("header");
const main = document.querySelector("main");
const nawSell = document.querySelectorAll(".text_tabs");
const newBtn = document.getElementById("s_new");
const tabNew = document.getElementById("tab_new");
const tabSell = document.getElementById("tab_sell");

if (newBtn) {
  newBtn.classList.add("active");
}

if (tabNew) {
  tabNew.classList.add("active");
}
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

// other
const goods = [
  {
    dataId: 1,
    img: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    name: "alibaba",
    price: "31.66",
    category: "women",
    Images1: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    Images2: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    Images3: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
  },
  {
    dataId: 2,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 3,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 4,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 5,
    img: "img.product/man/294fe6aeb4fb7a39d6a28bb211fb4191.webp",
    name: "men's shorts Beigo",
    price: "38.15",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 6,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 7,
    img: "img.product/man/42be7baef7fe9438de26738c2f57c4cb.webp",
    name: "men's T-shirt",
    price: "38.15",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 8,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 9,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 10,
    img: "img.product/man/9c77380e70f6114970c91169f3b15a46.webp",
    name: "men's shorts white",
    price: "31.66",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 11,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "home",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 12,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 13,
    img: "img.product/shoes/b39992d06bb5bb05e65bf90c76036978.webp",
    name: "cream chelsea bows",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 14,
    img: "img.product/shoes/908d3e436044239356b3eb2104cfab53.webp",
    name: "women's shoes ",
    price: "31.66",
    category: "shoes",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 15,
    img: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
    name: "women's shoes ",
    price: "31.66",
    category: "shoes",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 16,
    img: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    name: "women's shoes ",
    price: "31.66",
    category: "shoes",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 17,
    img: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    name: "women's shoes ",
    price: "31.66",
    category: "shoes",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 18,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 19,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 20,
    img: "img.product/man/bccd4459f224e784ecd7f58858d619d7.webp",
    name: "men's shorts white",
    price: "31.66",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 21,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 22,
    img: "img.product/man/c0737cc483c88cb7560d1c704b3ad92e.webp",
    name: "GULLIVER men's s",
    price: "36.90",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
];
function renderProductsInSection(products, container) {
  const productsHTML = products
    .map(
      (product) => `
    <div class="dobrush-picture">
      <a href="#">
        <picture>
          <source srcset="#" type="#" />
          <source srcset="#" type="#" />
          <img src="${product.img}" alt="${product.name}" width="275" />
        </picture>
        <div class="product_body product-dobrush">
          <div class="description">
            <a class="product_name" href="">${product.name}</a>
            <div class="prise-date">
              <span class="cerrent_pruise">${product.price} USD</span>
            </div>
          </div>
        </div>
    </div>
  `
    )
    .join("");

  container.innerHTML = productsHTML;
}

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
      (good) => ` <div data-id=${good.dataId} class="produci-trumblin">
      <a href="#
      ">    <picture>
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
document.addEventListener("DOMContentLoaded", () => {
  renderAllProducts();

  const rendingProducts = document.querySelectorAll(".produci-trumblin");
  rendingProducts.forEach((product) => {
    product.addEventListener("click", function (event) {
      const productId = this.getAttribute("data-id");
      window.location.href = `product.html?productId=${productId}`;
    });
  });
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");
  if (productId) {
    const productData = getProductData(productId);
    renderProductInfo(productData);
  }
});

function renderAllProducts() {
  const productsContainer = document.getElementById("products-container");
  if (productsContainer) {
    const productsHTML = goods
      .map(
        (good) => `
          <div data-id=${good.dataId} class="produci-trumblin">
            <a href="#
            "> 
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

    productsContainer.innerHTML = productsHTML;
  }
}
renderAllProducts();
function getProductData(productId) {
  return goods.find((item) => item.dataId.toString() === productId);
}
function renderProductInfo(goods) {
  const infoProductElement = document.querySelector(".page_product");
  infoProductElement.innerHTML = `
   
  <div class="product_mair">
  <div class="imges_area">
      <img src=${goods.img} alt="">
  </div>
  <div class="mini_imeges">
      <img src=${goods.Images1} alt="">
      <img src=${goods.Images2} alt="">
      <img src=${goods.Images3} alt="">
  </div>
</div>
<div class="product_semiler">
<div class="title_goods">
  <h3>${goods.name} </h3>
  <div class="prise-date">
      <span class="cerrent_pruise prise_good">${goods.price} USD</span>
      <i class="fa-light fa-heart"></i>  
       </div>
  <div class="menu_product_">
      <label for="mySelect">Choose a size</label>
      <select id="mySelect" name="mySelect">
          <i class="fas fa-chevron-down"></i>
          <option value="option1">8</option>
          <option value="option2">8.5</option>
          <option value="option3">9</option>
          <option value="option3">9.5</option>
      </select>
      <button>To basket</button>
  </div>
  <h3>augment the image</h3>
</div>
</div>`;
}

const category = document.querySelector(".caterogy");
if (category) {
  category.addEventListener("click", () => {
    const colention = document.querySelector(".sections_colention");
    const fasFa = document.querySelector(".fas");

    if (colention) {
      colention.classList.toggle("toggle_nav");
    }

    if (fasFa) {
      if (fasFa.classList.contains("fa-chevron-down")) {
        fasFa.classList.remove("fa-chevron-down");
        fasFa.classList.add("fa-chevron-up");
      } else {
        fasFa.classList.remove("fa-chevron-up");
        fasFa.classList.add("fa-chevron-down");
      }
    }
  });
}

const mairGoods = [
  {
    dataId: 1,
    section: "kosovo",
    img: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    name: "alibaba",
    price: "31.66",
    category: "women",
    Images1: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    Images2: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    Images3: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
  },
  {
    dataId: 2,
    section: "kosovo",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 3,
    section: "dobrush",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 4,
    section: "dobrush",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
];

function addClickToProducts() {
  document.querySelectorAll(".dobrush-picture").forEach((productElement) => {
    productElement.addEventListener("click", function () {
      const productId = productElement.getAttribute("data-id");
      window.location.href = `product.html?productId=${productId}`;
    });
  });
}

function renderProductsInSection(products, container) {
  const productsHTML = products
    .map(
      (product) => `
    <div data-id=${product.dataId} class="dobrush-picture">
      <a href="#">
        <picture>
          <source srcset="#" type="#" />
          <source srcset="#" type="#" />
          <img src="${product.img}" alt="${product.name}" width="275" />
        </picture>
        <div class="product_body product-dobrush">
          <div class="description">
            <a class="product_name" href="">${product.name}</a>
            <div class="prise-date">
              <span class="cerrent_pruise">${product.price} USD</span>
            </div>
          </div>
        </div>
    </div>
  `
    )
    .join("");

  container.innerHTML = productsHTML;
  addClickToProducts();
}
addClickToProducts();
const dobrushProducts = mairGoods.filter(
  (product) => product.section === "dobrush"
);
const kosovoProducts = mairGoods.filter(
  (product) => product.section === "kosovo"
);

const dobrushContainer = document.getElementById("dobrush_area");
const kosovoContainer = document.getElementById("kosovo_area");

if (dobrushContainer) {
  renderProductsInSection(dobrushProducts, dobrushContainer);
}
if (kosovoContainer) {
  renderProductsInSection(kosovoProducts, kosovoContainer);
}
