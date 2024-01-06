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
const colention = document.querySelector(".sections_colention");
const categories = document.querySelector(".categories_toggle");

// up down
categories.addEventListener("click", () => {
  const fasFa = document.querySelector(".fas");

  if (colention) {
    colention.classList.toggle("show_nav");

    if (fasFa.classList.contains("fa-chevron-down")) {
      fasFa.classList.remove("fa-chevron-down");
      fasFa.classList.add("fa-chevron-up");
    } else {
      fasFa.classList.remove("fa-chevron-up");
      fasFa.classList.add("fa-chevron-down");
    }
  }
});

const priceMin = document.getElementById("price-min");
const priceMinValue = document.getElementById("price-min-value");
const priceMaxValue = document.getElementById("price-max-value");

function updatePriceValue() {
  priceMinValue.textContent = priceMin.value;
}
priceMin.addEventListener("input", updatePriceValue);
updatePriceValue();
const goods = [
  {
    id: 1,
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "Long Gray classic trousers",
    price: " 31.66 ",
    category: "women",
  },
  {
    id: 2,
    img: "img.product/e4db02a20010c59064cb57f4e3b006a8.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },

  {
    id: 3,
    img: "img.product/fcb83eff1b845d7518b8c2f38cf3bb68.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },
  {
    id: 4,
    img: "img.product/8449852e6fa0672a21b0e2501b8a55f8.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },

  {
    id: 5,
    img: "img.product/01c2474e2015a4b3401b289a63186283.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },

  {
    id: 6,
    img: "img.product/c6e7f167a34a53736c59e733ca71e300.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },
  {
    id: 7,
    img: "img.product/cf34877433cc931548e7a6bb5fdbffe5.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },

  {
    id: 8,
    img: "img.product/9bb69df0741889814e3da7c6c1e266a2.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "shoes",
  },
  {
    id: 9,
    img: "img.product/518e8faecce718adb7080da192090de7.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },
  {
    id: 2,
    img: "img.product/39aff594d959af0a26e4bbb021251faf.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "men's",
  },
  {
    id: 10,
    img: "img.product/4c0a75de59f72760b9953e3daf7f7078.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },
  {
    id: 11,
    img: "img.product/4754defd4ed3e5a90f4f894d9d62a00a.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },
  {
    id: 12,
    img: "img.product/0ab37336324e99ac64296b895ed2358f.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },
  {
    id: 13,
    img: "img.product/7e8b354668082ef8d297504c9d62a263.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },
  {
    id: 14,
    img: "img.product/9eadd541ea12044729c0c4bd70c502d2.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },
  {
    id: 15,
    img: "img.product/22a910ab404dd23fc800a984f31569d8.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },
  {
    id: 16,
    img: "img.product/92a235a592ce390b263ccf23aeaf01f2.webp",
    name: "mesh flared longsleeves",
    price: " 31.66 ",
    category: "women",
  },
];
document.querySelectorAll(".sections_colention a").forEach((link) => {
  link.addEventListener("click", (event) => {
    console.log(event.target);
    event.preventDefault();
    const category = event.target.getAttribute("data-category");
    filterElementsAndShow(category);
  });
});
function filterElementsAndShow(category) {
  console.log("me too");
  const filterGoods = goods.filter((good) => good.category === category);
  const productsHTML = filterGoods
    .map(
      (good) => `    <div class="produci-trumblin">
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
  document.querySelector(".filter_rendring").innerHTML = productsHTML;
}

const contentBlockLeft = document.querySelector(".content_block_left");

// const productsHTML = goods
//   .map(
//     (good) => `
//     <div class="produci-trumblin">
//       <a href="#">
//         <picture>
//           <source srcset="#" type="#" />
//           <source srcset="#" type="#" />
//           <img src=${good.img} alt="${good.name}" width="198" />
//         </picture>
//       </a>
//       <div class="product_body">
//         <div class="description ">
//           <a class="product_name" href="#">${good.name}</a>
//           <div class="prise-date">
//             <span class="cerrent_pruise">${good.price} USD</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   `
//   )
//   .join("");
