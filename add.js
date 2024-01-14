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
    img: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    name: "women's black chelsea",
    price: "81.00",
    category: "shoes",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/2eaae4daa757353de5d8303fdd183cc1 (1).jpg",
    Images3: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
  },
  {
    dataId: 2,
    img: "img.product/new.photo/7af9c2b4c8c21c6bf14ef479a7685c74.webp",
    name: "classic trousers Petite Gray",
    price: "21.80",
    category: "women",
    Images1: "img.product/new.photo/b7c1ca389e8c5986dc058ab2218b441b.jpg",
    Images2: "img.product/new.photo/30caf75e9bbf815b683392fbe531d566.webp",
    Images3: "img.product/new.photo/349e2e81a0f0e21c409c44c139839c70.jpg",
  },
  {
    dataId: 3,
    img: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    name: "leather boots with fur",
    price: "81.00",
    category: "shoes",
    Images1: "img.product/shoes/c04123479b4b34230bb94a7c0efd1f26.jpg",
    Images2: "img.product/shoes/c5307c7a718e0144e37e4836b28a8cd0.jpg",
    Images3: "img.product/shoes/d240117620619a9af2c4fc901efc777a.webp",
  },
  {
    dataId: 4,
    img: "img.product/new.photo/936cf2b74a5cf487583d6023ccc97c05.webp",
    name: "classic trousers Petitle Novy",
    price: "22.00",
    category: "women",
    Images1: "img.product/new.photo/5bf0e697f60092234857380cb9d70b5a.jpg",
    Images2: "img.product/new.photo/3ca72eded3a0ddb8a764cd9ee3b18542.jpg",
    Images3: "img.product/new.photo/6ef1cc33a38524ac8db106fda5d377fa.jpg",
  },
  {
    dataId: 5,
    img: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
    name: "women's boots with fur in the middle",
    price: "77.50",
    category: "shoes",
    Images1: "img.product/shoes/908d3e436044239356b3eb2104cfab53.webp",
    Images2: "img.product/shoes/87064353b2c996927146e9337d21618d.jpg",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 6,
    img: "img.product/new.photo/1bccde4cceedcdac270a7f0e142e5bfc.webp",
    name: "grey women's skirt ",
    price: "49.10",
    category: "women",
    Images2: "img.product/new.photo/8d0d7799dde29a8bb3b31b5599ea957f.jpg",
    Images1: "img.product/new.photo/454def9ee32d39c3ad733ecb59af2b72.jpg",
    Images3: "img.product/new.photo/0640aa8db03991cad9cd49d0a9b0d040.webp",
  },
  {
    dataId: 7,
    img: "img.product/man/9c77380e70f6114970c91169f3b15a46.webp",
    name: "men's shorts Beigo",
    price: "31.15",
    category: "men",
    Images1: "img.product/man/216c5d7a99f65e7fde3bc78bcc1e1526.jpg",
    Images2: "img.product/man/05255b2f7675814fa0e4aa43e6eb3268.jpg",
    Images3: "img.product/man/87f75596bb9437ee9c87f7b11127d9a1.jpg",
  },
  {
    dataId: 8,
    img: "img.product/man/294fe6aeb4fb7a39d6a28bb211fb4191.webp",
    name: "men's shorts black",
    price: "31.66",
    category: "women",
    Images1: "img.product/man/3aba7a2070f46b6b41269da3c275b7f2.jpg",
    Images2: "img.product/man/5c040d7850cc5bf4806de843d614388b.jpg",
    Images3: "img.product/man/2c6b171ad3837937290ce8fa1ce68ca6.webp",
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
    img: "img.product/man/ff5b85f06c6fd88b4ddd74d9f9cc2db8.webp",
    name: "men's shirt GOVERLA",
    price: "31.66",
    category: "men",
    Images2: "img.product/man/d7674e6dfd6ae3d863f071169490a44d.jpg",
    Images1: "img.product/man/c2fbc2176185e18e39aca6cc55c8e551.jpg",
    Images3: "img.product/man/030a215f23a50cf2c51bcd6abae52325.jpg",
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

  {
    dataId: 23,
    section: "kosovo",
    img: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    name: "alibaba",
    price: "31.66",
    category: "women",
    Images1: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    Images2: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    Images3: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
  },
  {
    dataId: 24,
    section: "kosovo",
    img: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 25,
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
    dataId: 26,
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
    dataId: 27,
    section: "shirt",
    img: "img.product/e4db02a20010c59064cb57f4e3b006a8.webp",
    name: "embroidered shirt",
    price: "15.10",
    category: "women",
    Images1: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    Images2: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    Images3: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
  },
  {
    dataId: 28,
    section: "menswear",
    img: "img.product/39aff594d959af0a26e4bbb021251faf.webp",
    name: "embroidered shirt",
    price: "18.10",
    category: "men",
    Images1: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    Images2: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    Images3: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
  },
  {
    dataId: 29,
    section: "menswear",
    img: "img.product/8658852a86ecf89288a64eab08c23119.webp",
    name: "embroidered shirt",
    price: "22.10",
    category: "men",
    Images1: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    Images2: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    Images3: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
  },
  {
    dataId: 30,
    section: "hestories",
    img: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 31,
    section: "hestories",
    img: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
  },
  {
    dataId: 32,
    section: "ornaments",
    img: "img.product/7ba88b91c692c9613522123a5d3bbe35.webp",
    name: "embroidered shirt",
    price: "22.10",
    category: "women",
    Images1: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    Images2: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    Images3: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
  },
  {
    dataId: 33,
    section: "shevchenko",
    img: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    name: "embroidered shirt",
    price: "22.10",
    category: "women",
    Images1: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    Images2: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    Images3: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
  },
  {
    dataId: 34,
    section: "shevchenko",
    img: "img.product/b8efed7119900c189f22a0821d119bb1.webp",
    name: "embroidered shirt",
    price: "22.10",
    category: "women",
    Images1: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    Images2: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    Images3: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
  },
];
function addEventListenersToProducts() {
  const products = document.querySelectorAll(".produci-trumblin");
  products.forEach((product) => {
    product.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      window.location.href = `product.html?productId=${productId}`;
    });
  });
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
  addEventListenersToProducts();
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
    addEventListenersToProducts();
    addEventListenersToProducts();
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
      <img class  class="mine_img" src=${goods.img} alt="">
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
</div>`;
  const relatedGoods = goods.filter(
    (good) =>
      good.category === selectedGoods.category &&
      good.dataId !== selectedGoods.dataId
  );
  const relatedGoodsHtml = relatedGoods
    .map(
      (good) =>
        `
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
</div>
`
    )
    .join("");
  addImageSwitchingEventListeners();
}
function addImageSwitchingEventListeners() {
  const mainImg = document.querySelector(".imges_area img");
  const smallImgs = document.querySelectorAll(".mini_imeges img");

  smallImgs.forEach((image) => {
    image.addEventListener("click", (event) => {
      const smallImgSrc = event.target.src;
      const mainImgSrc = mainImg.src;
      mainImg.src = smallImgSrc;
      event.target.src = mainImgSrc;
    });
  });
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

function addClickToProducts() {
  document.querySelectorAll(".dobrush-picture").forEach((productElement) => {
    productElement.addEventListener("click", function () {
      const productId = productElement.getAttribute("data-id");
      window.location.href = `product.html?productId=${productId}`;
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  if (productId) {
    const productData = goods.find(
      (product) => product.dataId.toString() === productId
    );
    if (productData) {
      renderProductInfo(productData);
    }
  }
});

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
const dobrushProducts = goods.filter(
  (product) => product.section === "dobrush"
);
const kosovoProducts = goods.filter((product) => product.section === "kosovo");
const shirtProducts = goods.filter((product) => product.section === "shirt");
const menswearProducts = goods.filter(
  (product) => product.section === "menswear"
);
const hestoriesProducts = goods.filter(
  (product) => product.section === "hestories"
);
const ornamentsProducts = goods.filter(
  (product) => product.section === "ornaments"
);
const shevchenkoProducts = goods.filter(
  (product) => product.section === "shevchenko"
);
const dobrushContainer = document.getElementById("dobrush_area");
const kosovoContainer = document.getElementById("kosovo_area");
const shirtContainer = document.getElementById("shirt");
const menswearContainer = document.getElementById("menswear");
const hestoriesContainer = document.getElementById("hestories");
const ornamentsContainer = document.getElementById("ornaments");
const shevchenkoContainer = document.getElementById("shevchenko");
if (dobrushContainer) {
  renderProductsInSection(dobrushProducts, dobrushContainer);
}
if (kosovoContainer) {
  renderProductsInSection(kosovoProducts, kosovoContainer);
}
if (shirtContainer) {
  renderProductsInSection(shirtProducts, shirtContainer);
}
if (menswearContainer) {
  renderProductsInSection(menswearProducts, menswearContainer);
}
if (hestoriesContainer) {
  renderProductsInSection(hestoriesProducts, hestoriesContainer);
}
if (ornamentsContainer) {
  renderProductsInSection(ornamentsProducts, ornamentsContainer);
}

if (shevchenkoContainer) {
  renderProductsInSection(shevchenkoProducts, shevchenkoContainer);
}
