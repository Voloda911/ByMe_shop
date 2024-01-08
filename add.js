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

const goods = [
  {
    dataId: "1",
    img: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    name: "alibaba",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "2",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "3",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "4",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "5",
    img: "img.product/man/294fe6aeb4fb7a39d6a28bb211fb4191.webp",
    name: "men's shorts Beigo",
    price: "38.15",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "6",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "7",
    img: "img.product/man/42be7baef7fe9438de26738c2f57c4cb.webp",
    name: "men's T-shirt",
    price: "38.15",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "8",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "9",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "10",
    img: "img.product/man/9c77380e70f6114970c91169f3b15a46.webp",
    name: "men's shorts white",
    price: "31.66",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "11",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "home",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "12",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "13",
    img: "img.product/shoes/b39992d06bb5bb05e65bf90c76036978.webp",
    name: "cream chelsea bows",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "14",
    img: "img.product/shoes/908d3e436044239356b3eb2104cfab53.webp",
    name: "women's shoes ",
    price: "31.66",
    category: "shoes",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "15",
    img: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
    name: "women's shoes ",
    price: "31.66",
    category: "shoes",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "16",
    img: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    name: "women's shoes ",
    price: "31.66",
    category: "shoes",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "17",
    img: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    name: "women's shoes ",
    price: "31.66",
    category: "shoes",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "18",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "19",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "20",
    img: "img.product/man/bccd4459f224e784ecd7f58858d619d7.webp",
    name: "men's shorts white",
    price: "31.66",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "21",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: "22",
    img: "img.product/man/c0737cc483c88cb7560d1c704b3ad92e.webp",
    name: "GULLIVER men's s",
    price: "36.90",
    category: "men",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
];
// product html of localStorage

localStorage.setItem("products", JSON.stringify(goods));
document.querySelectorAll(".produci-trumblin").forEach((item) => {
  item.addEventListener("click", function () {
    const produciId = this.getAttribute("data-id");
    localStorage.setItem("selectedProductId", produciId);

    window.location.href = `product.html?productId=${produciId}`;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const selectedProductId = localStorage.getItem("selectedProductId");
  const goods = JSON.parse(localStorage.getItem("products"));
  const selectedProduct = goods.find(
    (good) => good.dataId.toString() === selectedProductId
  );

  if (selectedProduct) {
    const productImages = [
      selectedProduct.img,
      selectedProduct.Images1,
      selectedProduct.Images2,
      selectedProduct.Images3,
    ];
    document.querySelector(".imges_area img").src = selectedProduct.img;
    document.querySelector(".imges_area img").alt = selectedProduct.name;
    document.querySelector(".mini_imeges").innerHTML = `
    <img src="${selectedProduct.Images1}" alt="${selectedProduct.name}">
    <img src="${selectedProduct.Images2}" alt="${selectedProduct.name}">
    <img src="${selectedProduct.Images3}" alt="${selectedProduct.name}">
  `;

    document.querySelector(".title_goods h3").textContent =
      selectedProduct.name;
    document.querySelector(
      ".cerrent_pruise"
    ).textContent = `${selectedProduct.price} USD`;
  }
});
try {
  const products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    console.log("yes");
  }
} catch (e) {
  console.log("Ошибка при чтении или анализе данных из localStorage", e);
}
//другой код
function filterElementsAndShow(category) {
  const filterGoods = goods.filter((good) => good.category === category);
  const productsHTML = filterGoods
    .map(
      (good) => ` <div data-id=${good.dataId} class="produci-trumblin">
      <a href="product.html?productId=${good.dataId}">    <picture>
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
      <div data-id=${good.dataId} class="produci-trumblin">
      <a href="product.html?productId=${good.dataId}"> 
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

// link product.HTML
// function renderInfoProduct() {
//   const infoProduct = document.getElementById("info_product");
//   const productInfo = goods
//     .map((item) => {
//       return `  <div class="imges_area">
//       <img src="img.product/shoes/908d3e436044239356b3eb2104cfab53.webp" alt="">
//   </div>
//   <div class="mini_imeges">
//       <img src="img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp" alt="">
//       <img src="img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp" alt="">
//       <img src="img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp" alt="">
//   </div>
//              `;
//     })
//     .join("");

//   document.querySelector(".product_mair").innerHTML = productInfo;
// }
// renderInfoProduct();
