const header = document.getElementById("header");
const main = document.querySelector("main");
const nawSell = document.querySelectorAll(".text_tabs");
const newBtn = document.getElementById("s_new");
const tabNew = document.getElementById("tab_new");
const tabSell = document.getElementById("tab_sell");
const infoButtons = document.querySelectorAll(".menu_info_product button");
const description = document.getElementById("description");
const descriptionBtn = document.querySelector(".description_btn");
const showReview = document.getElementById("show_review");
const contentReview = document.querySelector(".review_blok");
const mapReview = document.querySelector(".map_review");
const reviewSend = document.getElementById("review_send");
const secses = document.getElementById("secses");
const done = document.querySelector(".done");
const reviewInput = document.getElementById("review_input");
const full = document.getElementById("full");
const emti = document.getElementById("empti");
const reviewI = document.querySelector(".review_i");
const radios = document.querySelectorAll(".custom-radio");
const makeOrder = document.querySelector(".make_order");
const burgerIcon = document.querySelector(".burger_icon");

burgerIcon.addEventListener("click", function () {
  const burgeuArea = document.querySelector(".burgeu_area");
  burgeuArea.classList.toggle("show_");
});

if (makeOrder) {
  makeOrder.addEventListener("click", function (event) {
    const blockInfoInputs = document.querySelectorAll(".block_info input");
    const firstEmptyInput = Array.from(blockInfoInputs).find(
      (input) => input.value === ""
    );

    blockInfoInputs.forEach((input, index) => {
      const span = document.querySelectorAll(".block_info span")[index];
      if (input.value === "") {
        span.classList.add("show_");
      } else {
        span.classList.remove("show_");
      }
    });
  });
}
function hideAllForm() {
  const deliveryForm = document.getElementById("delivery-form");
  const mailForm = document.getElementById("mail-form");
  const officeForm = document.getElementById("office-form");

  if (deliveryForm) deliveryForm.style.display = "none";
  if (mailForm) mailForm.style.display = "none";
  if (officeForm) officeForm.style.display = "none";
}

function showForm(formId) {
  hideAllForm();
  document.getElementById(formId).style.display = "flex";
}
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const formId = radio.id + "-form";
    showForm(formId);
  });
});
hideAllForm();
if (showReview && contentReview && mapReview) {
  showReview.addEventListener("click", function () {
    contentReview.classList.add("show_");
  });

  document.addEventListener("click", function (event) {
    if (!mapReview.contains(event.target) && event.target !== showReview) {
      contentReview.classList.remove("show_");
    }
  });
}
if (reviewSend && reviewInput && secses && emti && full) {
  reviewSend.addEventListener("click", function () {
    if (reviewInput.value === "" || reviewI.value === "") {
      emti.style.display = "block";
      full.style.display = "none";
    } else {
      emti.style.display = "none";
      full.style.display = "block";
    }
    secses.classList.add("show_secses");
  });
}
if (done && reviewInput && secses) {
  done.addEventListener("click", function () {
    secses.classList.remove("show_secses");
    if (reviewInput.value !== "") {
      contentReview.classList.remove("show_");
      reviewInput.value = "";
      reviewI.value = "";
    }
  });
}
if (descriptionBtn) {
  descriptionBtn.classList.add("active");
}
if (description) {
  description.classList.add("active");
}
infoButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    infoButtons.forEach((button) => {
      button.classList.remove("active");
    });
    event.target.classList.toggle("active");
    const dataIdButton = event.target.getAttribute("data-id");
    const content = document.querySelectorAll(".conten_info_");

    content.forEach((section) => {
      section.classList.remove("active");
      if (section.id === dataIdButton) {
        section.classList.toggle("active");
      }
    });
  });
});
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

const menuFind = document.querySelector(".menu_find");
const contentFind = document.querySelector(".content_find");
const findBtn = document.getElementById("find_btn");
const closeLup = document.getElementById("close_lup");

function handleInput() {
  const findProduct = document.getElementById("find_product");
  const lupaTogo = document.getElementById("lupa_togo");
  const requestH1 = document.querySelector(".request");

  findProduct;
  if (findProduct) {
    findProduct.addEventListener("keypress", function (event) {
      if (event.key === "Enter" && findProduct.value.trim() !== "") {
        event.preventDefault();
        const searchText = encodeURIComponent(findProduct.value.trim());
        window.location.href = `find.html?search=${searchText}`;
      }
    });
  }
  if (lupaTogo) {
    lupaTogo.addEventListener("click", (event) => {
      event.preventDefault();
      if (lupaTogo) {
        redirectToSearch();
      }
    });
  }
}
function redirectToSearch(searchText) {
  const encodedSearchText = encodeURIComponent(searchText);
  window.location.href = `find.html?search=${encodedSearchText}`;
}
document.addEventListener("DOMContentLoaded", handleInput);

handleInput();
if (findBtn && menuFind) {
  findBtn.addEventListener("click", function (event) {
    event.preventDefault();
    menuFind.classList.toggle("find_");
  });
}
if (closeLup) {
  closeLup.addEventListener("click", () => {
    menuFind.classList.remove("find_");
  });
}
// other
const goods = [
  {
    dataId: 1,
    section: "new",
    img: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    name: "women's black chelsea",
    price: "81.00",
    category: "shoes",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "#",
    Images3: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    about:
      "Black leather chelsea boots with a woollen lining inside, a great choice for mild winters. Suitable for temperatures down to -5 degrees, with warm socks down to -10 degrees. ",
    info: "Are you used to classic winter boots? Try Chelsea boots for women. The elastic bands on the side are a small but important detail that can express the look and add interest to the boots themselves. They also go well with completely different styles of clothes: try on chelsea boots with sweatpants and a knitted dress - you'll get different but equally coherent looks!",
    info2: "",
    info3: "",
    info4: "  ",
    info5: "",
    info6: "",
    info7: "",
    info8: "",
    info9: "",
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
    about:
      " Straight-cut trousers in Petite length, for a height of 158 - 165 cm",
    info: "These trousers belong to the Kosivska Ceramics collection, with small embroideries on the back to remind you when to fall in love with Ukrainian things",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4: "Composition: 22% viscose, 73% polyester, 5% elastane.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XS.",
  },
  {
    dataId: 3,
    section: "new",
    img: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    name: "leather boots with fur",
    price: "68.50",
    category: "shoes",
    Images1: "img.product/shoes/c04123479b4b34230bb94a7c0efd1f26.jpg",
    Images2: "img.product/shoes/c5307c7a718e0144e37e4836b28a8cd0.jpg",
    Images3: "img.product/shoes/d240117620619a9af2c4fc901efc777a.webp",
    about:
      "Black leather chelsea boots with a woollen lining inside, a great choice for mild winters. Suitable for temperatures down to -5 degrees, with warm socks down to -10 degrees. ",
    info: "Are you used to classic winter boots? Try Chelsea boots for women. The elastic bands on the side are a small but important detail that can express the look and add interest to the boots themselves. They also go well with completely different styles of clothes: try on chelsea boots with sweatpants and a knitted dress - you'll get different but equally coherent looks!",
    info2: "",
    info3: "",
    info4: "  ",
    info5: "",
    info6: "",
    info7: "",
    info8: "",
    info9: "",
  },
  {
    dataId: 4,
    section: "new",

    img: "img.product/new.photo/936cf2b74a5cf487583d6023ccc97c05.webp",
    name: "classic trousers Petitle Novy",
    price: "22.00",
    category: "women",
    Images1: "img.product/new.photo/5bf0e697f60092234857380cb9d70b5a.jpg",
    Images2: "img.product/new.photo/3ca72eded3a0ddb8a764cd9ee3b18542.jpg",
    Images3: "img.product/new.photo/6ef1cc33a38524ac8db106fda5d377fa.jpg",
    about: " Straight trousers, for a height of 158 - 165 cm",
    info: "These trousers belong to the Kosivska Ceramics collection, with small embroideries on the back to remind you when to fall in love with Ukrainian things",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4: "Composition: 22% viscose, 73% polyester, 5% elastane.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XS.",
  },

  {
    dataId: 5,
    section: "new",

    img: "img.product/new.photo/1bccde4cceedcdac270a7f0e142e5bfc.webp",
    name: "grey women's skirt ",
    price: "38.50",

    category: "women",
    Images2: "img.product/new.photo/8d0d7799dde29a8bb3b31b5599ea957f.jpg",
    Images1: "img.product/new.photo/454def9ee32d39c3ad733ecb59af2b72.jpg",
    Images3: "img.product/new.photo/0640aa8db03991cad9cd49d0a9b0d040.webp",
    about: " Straight trousers, for a height of 158 - 165 cm",
    info: "These trousers belong to the Kosivska Ceramics collection, with small embroideries on the back to remind you when to fall in love with Ukrainian things",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4: "Composition: 22% viscose, 73% polyester, 5% elastane.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XS.",
  },
  {
    dataId: 30,
    img: "img.product/new.photo/7c4a6200907e2b357e5cb65af87318c3.webp",
    name: "baseball cap",
    price: "31.66",
    category: "accessories",
    Images1: "img.product/new.photo/48fade1da4c73ade4a0bcdea7d86a1be.jpg",
    Images2: "img.product/new.photo/41b698ed3dcae75e90b8e790d01f1c47.webp",
    Images3: "img.product/new.photo/81d9b5e1a32a24a95055c1fc9ebffcf4.jpg",
    about: "",
    info: "",
    info2: "",
    info3: "",
    info4: " ",
    info5: " ",
    info6: "",
    info7: "",
    info8: " ",
    info9: "",
  },
  {
    dataId: 6,
    section: "new",
    section: "menswear",

    img: "img.product/man/9c77380e70f6114970c91169f3b15a46.webp",
    name: "men's shorts Beigo",
    price: "28.20",

    category: "men",
    Images1: "img.product/man/216c5d7a99f65e7fde3bc78bcc1e1526.jpg",
    Images2: "img.product/man/05255b2f7675814fa0e4aa43e6eb3268.jpg",
    Images3: "img.product/man/87f75596bb9437ee9c87f7b11127d9a1.jpg",
    about: " Straight trousers, for a height of 158 - 165 cm",
    info: "These trousers belong to the Kosivska Ceramics collection, with small embroideries on the back to remind you when to fall in love with Ukrainian things",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4: "Composition: 22% viscose, 73% polyester, 5% elastane.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XS.",
  },
  {
    dataId: 7,
    section: "new",
    img: "    img.product/man/bccd4459f224e784ecd7f58858d619d7.webp    ",

    name: "men's shorts black",
    price: "31.66",
    category: "men",
    Images1: "img.product/man/3aba7a2070f46b6b41269da3c275b7f2.jpg",
    Images2: "img.product/man/5c040d7850cc5bf4806de843d614388b.jpg",
    Images3: "img.product/man/2c6b171ad3837937290ce8fa1ce68ca6.webp",
    about: " Shorts designed for active and meaningful days    ",
    info: "On the back pocket you will find an embroidery 206 - the height of Hoverla.    ",
    info2:
      "Wear these shorts to remember to climb Hoverla for the first time or again.     ",
    info3: "Ingredients: 70% cotton, 30% elastane   ",
    info4: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model's height: 182 cm.    ",
    info7: "Side seam length: 50 cm.    ",
    info8: "Size on the model: S.",
    info9: "Size on the model: XS.",
  },
  {
    dataId: 8,
    section: "new",

    Images3: "img.product/new.photo/3f85fe997dea52072108e730187ead5c.webp",
    name: "black corset ",
    price: "31.66",
    category: "women",
    img: "img.product/new.photo/157d6c227c8db586d1bb6ebfd804a644.webp",
    Images1: "img.product/new.photo/d09ab5c74193d558aed6697f2e3986ac.jpg",
    Images2: "img.product/new.photo/0cfa1ada496bc660e977efe3a7d51903.jpg",
    about: "Lack corset",
    info: "cartesian made to fall in love",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4:
      "Composition: 100% palister. Lining: 100% palister. Sceptepooh: insulation",
    info5: "length on the styne 34cm",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "",
    info9: "Size on the model: S.",
  },
  {
    dataId: 9,
    section: "new",

    Images1: "img.product/new.photo/4088f0e7fcd8c8c76a9082df462f9b14.jpg",
    name: "plaid Baige Big",
    price: "85.99",
    category: "home",
    Images2: "img.product/new.photo/5aa86e543856dc860432652daf87cec6.jpg",
    img: "img.product/new.photo/2c0a831afa6efc923841051db4cca61e.webp",
    Images3: "img.product/new.photo/1808908c8948f6193ce185d049006c1a.webp",
    about: "Large Hutsul lizhnyk    ",
    info: "It is woven by the hands of weaver Ivanna. The wool is sheared and washed by her sister Vasylyna.",
    info2:
      "The process of making the lizhnyk, from sheep in the pastures to weaving, is authentic, and the ornaments reflect the craftswoman's modern view.",
    info3: "The tag features a lamb made of tiles by Oleksa Bakhmatyuk.    ",
    info4:
      "A pelekhatyi lizhnyk is a traditional decoration of a Hutsul house.    ",
    info5: "It contains the soul of generations.    ",
    info6:
      "Made of natural wool, the blanket will have a slight smell of sheep's wool at first.",
    info7: "Composition: 100% wool.    ",
    info8: "Size: 150x150 cm ",
    info9: "",
  },
  {
    dataId: 10,

    img: "img.product/new.photo/72cdccf8075b1ec8b7d5c247eccab90b.webp",
    name: "plaid Baige Big",
    price: "85.99",
    category: "women",
    Images2: "img.product/new.photo/dd641fad6d1e8e0bdd1016c14baeb083.jpg",
    Images3: "img.product/new.photo/5a6a47b547ff891bf2710a1c55a3a029.jpg",
    Images1: "img.product/new.photo/056c6f224447f8718aa10d3a1683f73a.jpg",
    about: "Large Hutsul lizhnyk    ",
    info: "It is woven by the hands of weaver Ivanna. The wool is sheared and washed by her sister Vasylyna.",
    info2:
      "The process of making the lizhnyk, from sheep in the pastures to weaving, is authentic, and the ornaments reflect the craftswoman's modern view.",
    info3: "The tag features a lamb made of tiles by Oleksa Bakhmatyuk.    ",
    info4:
      "A pelekhatyi lizhnyk is a traditional decoration of a Hutsul house.    ",
    info5: "It contains the soul of generations.    ",
    info6:
      "Made of natural wool, the blanket will have a slight smell of sheep's wool at first.",
    info7: "Composition: 100% wool.    ",
    info8: "Size: 150x150 cm ",
    info9: "",
  },
  {
    dataId: 11,
    img: "img.product/man/294fe6aeb4fb7a39d6a28bb211fb4191.webp",
    name: "men's shorts white",
    NewPrice: "31.66",
    price: "22.10",
    section: "menswear",

    category: "men",
    Images1: "img.product/man/b24ed5f3007bdb004400ec5bedfbdbd4.jpg",
    Images2: "img.product/man/2a606ec3878adb2ca46b138f80f3af70.jpg",
    Images3: "img.product/man/141fad3cf9f662606ba3deaa00f9acf3.jpg",
    about: " Shorts designed for active and meaningful days    ",
    info: "On the back pocket you will find an embroidery 206 - the height of Hoverla.    ",
    info2:
      "Wear these shorts to remember to climb Hoverla for the first time or again.     ",
    info3: "Ingredients: 70% cotton, 30% elastane   ",
    info4: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model's height: 182 cm.    ",
    info7: "Side seam length: 50 cm.    ",
    info8: "Size on the model: S.",
    info9: "Size on the model: XS.",
  },
  {
    dataId: 12,
    Images2: "img.product/new.photo/fc7d211ca81d0207c713cda029a112df.jpg",
    name: "mesh flared longsleeves",
    price: "63.10",
    category: "home",
    img: "img.product/new.photo/2c0a831afa6efc923841051db4cca61e.webp",
    Images3: "img.product/new.photo/cbbfcbc93e2ce4b63506f9540aa667dc.webp",
    Images1: "img.product/new.photo/e8a7eedd36fc888f1828ef11a457d17c.jpg",
    about: " Straight trousers, for a height of 158 - 165 cm",
    info: "These trousers belong to the Kosivska Ceramics collection, with small embroideries on the back to remind you when to fall in love with Ukrainian things",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4: "Composition: 22% viscose, 73% polyester, 5% elastane.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XS.",
  },
  {
    dataId: 13,
    img: "img.product/new.photo/a3acfacde11eee197a9611edfdbda961.webp",
    name: "plaid middle brown",
    NewPrice: "50.25",
    price: "48.10",

    category: "home",
    Images1: "img.product/new.photo/b655de42fc36acb237fb54de18d4bf19.jpg",
    Images2: "img.product/new.photo/a247a55d3b6971b146e512872e0348f8.webp",
    Images3: "img.product/new.photo/dc97243d8e39dc87243ae7b4c6a57de5.jpg",
    about: "Large Hutsul lizhnyk    ",
    info: "It is woven by the hands of weaver Ivanna. The wool is sheared and washed by her sister Vasylyna.",
    info2:
      "The process of making the lizhnyk, from sheep in the pastures to weaving, is authentic, and the ornaments reflect the craftswoman's modern view.",
    info3: "The tag features a lamb made of tiles by Oleksa Bakhmatyuk.    ",
    info4:
      "A pelekhatyi lizhnyk is a traditional decoration of a Hutsul house.    ",
    info5: "It contains the soul of generations.    ",
    info6:
      "Made of natural wool, the blanket will have a slight smell of sheep's wool at first.",
    info7: "Composition: 100% wool.    ",
    info8: "Size: 150x150 cm ",
    info9: "",
  },

  {
    dataId: 14,
    img: "img.product/new.photo/b2a7c731d074a45ba02b5b7dcef50735.webp",
    name: "grey knit cordigan ",
    price: "22.00",
    category: "women",
    Images1: "img.product/new.photo/a0641f5ee9ae1d6a32283eb4a8d8ce45.jpg",
    Images2: "img.product/new.photo/96d842e59f5fb475952bdbc309e76076.jpg",
    Images3: "img.product/new.photo/80b416c24a83cb0eb33bb30f11b7d7d2.jpg",
    about: " Straight trousers, for a height of 158 - 165 cm",
    info: "These trousers belong to the Kosivska Ceramics collection, with small embroideries on the back to remind you when to fall in love with Ukrainian things",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4: "Composition: 22% viscose, 73% polyester, 5% elastane.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XS.",
  },

  {
    dataId: 16,
    section: "dobrush",
    Images3: "img.product/new.photo/6a66fe28a707859eae9d62d14326d5a2.jpg",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/new.photo/aa68f02de2c9fcf3e1e9e8a4d6024f90.jpg",
    Images2: "img.product/new.photo/b111d2512e68b21f69b78db8601a5094.webp",
    img: "img.product/new.photo/4de528d72b99e7e34eae0be6c6b5ddb9.webp",
    about: "A voluminous checked shirt    ",
    info: "A special item in the collection because it is warm and dedicated to Kosiv ceramics.",
    info2:
      "The shirt features an embroidered pattern of Kosiv ceramics. Pay attention to the details.",
    info3: "Composition: 100% cotton.    ",
    info4: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info5: "Model dimensions: 86/68/95 cm.",
    info6: "Model's height: 170 cm.",
    info7: "Back length: 50 cm.    ",
    info8: "Size on the model: XXS - XS. ",
    info9: "",
  },
  {
    dataId: 17,
    section: "dobrush",
    img: "img.product/new.photo/3ab9ae7b5d619495758ec1a76eda2d5f.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    Images2: "img.product/shoes/5947576d9d499afcac8e2f57e8e3f554.webp",
    Images3: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
    about: " Straight trousers, for a height of 158 - 165 cm",
    info: "These trousers belong to the Kosivska Ceramics collection, with small embroideries on the back to remind you when to fall in love with Ukrainian things",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4: "Composition: 22% viscose, 73% polyester, 5% elastane.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XS.",
  },

  {
    dataId: 19,
    img: "img.product/new.photo/eeef32093578698e4938692f69609146.webp",
    name: "silver ring",
    section: "shirt",

    price: "38.10",
    category: "jewellery",
    Images1: "img.product/new.photo/cac26df3ae1d464f4c42479e2da13e46.webp",
    Images2: "#",
    Images3: "#",
    about: "Falling in love with Ukrainian ornaments is our new mission.    ",
    info: "That's why the capsule collection of jewelry features a heart pattern, part of which looks like a cross-stitch pattern.    ",
    info2: "Choose a necklace with an ornament.    ",
    info3: "Fall in love with the Ukrainian.    ",
    info4:
      "The necklace is made of 925 sterling silver. The process of rhodium plating has been carried out. ",
    info5: "",
    info6: "",
    info7: "",
    info8: "",
    info9: "",
  },

  {
    dataId: 21,
    img: "img.product/new.photo/7c4a6200907e2b357e5cb65af87318c3.webp",
    name: "baseball cap",
    price: "31.66",
    category: "accessories",
    Images1: "img.product/new.photo/48fade1da4c73ade4a0bcdea7d86a1be.jpg",
    Images2: "img.product/new.photo/41b698ed3dcae75e90b8e790d01f1c47.webp",
    Images3: "img.product/new.photo/81d9b5e1a32a24a95055c1fc9ebffcf4.jpg",
    about: "",
    info: "",
    info2: "",
    info3: "",
    info4: " ",
    info5: " ",
    info6: "",
    info7: "",
    info8: " ",
    info9: "",
  },
  {
    dataId: 22,
    img: "img.product/new.photo/bac6da2972a045ccbc490134aa4e4821.webp",
    name: "black warm gloves ",
    price: "31.66",
    category: "women",
    Images1: "img.product/new.photo/f6f56872e5b53e655138a24af5a64758.jpg",
    Images2: "img.product/new.photo/9e224c7000c258f78119244986b9a4ad.jpg",
    Images3: "img.product/new.photo/e5b740a930f98bec7a6888777be8d327.jpg",
    about: "",
    info: "",
    info2: "",
    info3: "",
    info4: " ",
    info5: " ",
    info6: "",
    info7: "",
    info8: " ",
    info9: "",
  },
  {
    dataId: 23,
    section: "ornaments",
    img: "img.product/7ba88b91c692c9613522123a5d3bbe35.webp",
    name: "a top with an alcove of cream",
    price: "22.10",
    category: "women",
    Images1: "img.product/new.photo/520cc88d017b385cf51f66052b8bb321.jpg",
    Images2: "img.product/new.photo/99c319a93fea31e6879b63d1200a213f.jpg",
    Images3: "img.product/7ba88b91c692c9613522123a5d3bbe35.webp",
    about: " Tops are about the values that are always with you    ",
    info: "They feature embroidery from Podillia carpets.    ",
    info2: "lightness - for hot summer days.    ",
    info3:
      "It will become a cool base with a special meaning in your wardrobe.",
    info4: "Composition: 30% linen, 70% cotton.    ",
    info5: "Care: machine wash at t = 30°C, delicate spin and dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm  ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XXS - XS.",
  },
  {
    dataId: 30,
    img: "img.product/new.photo/7c4a6200907e2b357e5cb65af87318c3.webp",
    name: "baseball cap",
    price: "31.66",
    category: "accessories",
    Images1: "img.product/new.photo/48fade1da4c73ade4a0bcdea7d86a1be.jpg",
    Images2: "img.product/new.photo/41b698ed3dcae75e90b8e790d01f1c47.webp",
    Images3: "img.product/new.photo/81d9b5e1a32a24a95055c1fc9ebffcf4.jpg",
    about: "",
    info: "",
    info2: "",
    info3: "",
    info4: " ",
    info5: " ",
    info6: "",
    info7: "",
    info8: " ",
    info9: "",
  },
  {
    dataId: 25,
    img: "img.product/b8efed7119900c189f22a0821d119bb1.webp",
    name: "embroidered shirt",
    price: "22.10",
    category: "women",
    Images1: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    Images2: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    Images3: "img.product/a5deb5682dfa66e96c249e51bbef2513.webp",
    about: " Straight trousers, for a height of 158 - 165 cm",
    info: "These trousers belong to the Kosivska Ceramics collection, with small embroideries on the back to remind you when to fall in love with Ukrainian things",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4: "Composition: 22% viscose, 73% polyester, 5% elastane.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XS.",
  },
  {
    dataId: 26,
    Images1: "img.product/new.photo/c4b2a6317333c69b872f497ad89e6a77.jpg",
    name: "Blask Cream double-sided belt",
    price: "12.80",
    NewPrice: "17.25",
    section: "shevchenko",

    category: "accessories",
    Images3: "img.product/new.photo/f6e24b3b1a819d865e44aba80488f2d5.jpg",
    Images2: "img.product/new.photo/9734e0e97def695d9db3cc2c80e00a0c.webp",
    img: "img.product/new.photo/e8d2fb92a52ea5ce73751d853a75260b.webp",
    about: "Reversible strap    ",
    info: "Fall in love with versatility and practicality.    ",
    info2: "",
    info3:
      "Easily change the strap to the other side and get a different colour.  To do this:",
    info4:
      "1. ﻿﻿﻿take a screwdriver, unscrew the screw.﻿﻿﻿turn the buckle over and tighten the screw.    ",
    info5:
      "You're done! Now your belt will match any outfit .Choose from 95 cm and 105 cm lengths    ",
    info6: "",
    info7: "",
    info8: "",
    info9: "",
  },
  {
    dataId: 28,
    Images2: "img.product/new.photo/e7bb4652a4f4296c42a4cbb6e4b57624.webp",
    name: "embroidered shirt",
    price: "22.10",
    section: "shevchenko",

    category: "ccessories",
    Images1: "img.product/new.photo/d3bf8640c8930ab787924448e4357179.jpg",
    img: "img.product/new.photo/80be91a79ff20e839e0a445a7589ae01.webp",
    Images3: "img.product/new.photo/4ad5242d4172f81e269990e5888461b2.jpg",
    about: " Straight trousers, for a height of 158 - 165 cm",
    info: "These trousers belong to the Kosivska Ceramics collection, with small embroideries on the back to remind you when to fall in love with Ukrainian things",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4: "Composition: 22% viscose, 73% polyester, 5% elastane.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XS.",
  },
  {
    dataId: 29,
    Images2: "#",
    name: "925 sterling silver heart necklac",
    price: "112.10",
    category: "jewellery",
    img: "img.product/new.photo/some.webp",
    Images1: "img.product/new.photo/0a1d2ee6e1b7b523e187ca73b13e37ac.webp",
    Images3: "#",
    about: "Falling in love with Ukrainian ornaments is our new mission.    ",
    info: "That's why the capsule collection of jewelry features a heart pattern, part of which looks like a cross-stitch pattern.    ",
    info2: "Choose a necklace with an ornament.    ",
    info3: "Fall in love with the Ukrainian.    ",
    info4:
      "The necklace is made of 925 sterling silver. The process of rhodium plating has been carried out. ",
    info5: "",
    info6: "",
    info7: "",
    info8: "",
    info9: "",
  },
  {
    dataId: 30,
    Images2: "img.product/new.photo/7f7b1e93eb955ff2651ec7872cc9037a.webp",
    name: "long earring ",
    section: "",

    price: "19.10",
    NewPrice: "25.25",
    category: "jewellery",
    section: "hestories",
    Images1: "#",
    img: "img.product/new.photo/7f7b1e93eb955ff2651ec7872cc9037a.webp",
    Images3: "#",
    about: " [Let's dig up history?    ",
    info: "Ukrainian history has been buried under the imposed Russian history for a long time.",
    info2: "It's time to unearth it and know what we should cherish.    ",
    info3:
      "Beads with Donetsk cornflower will remind us to protect plants from the Red Book of Ukraine. ",
    info4: "Each bead was created by a craftswoman from Kharkiv.    ",
    info5: "Ingredients: natural river pearls, beads made of river shells.",
    info6: "",
    info7: "",
    info8: "",
    info9: "",
  },

  {
    dataId: 31,
    Images2: "#",
    name: "cafe with beads",
    price: "19.10",
    NewPrice: "25.25",
    section: "hestories",

    category: "jewellery",
    Images1: "img.product/new.photo/34fda6d7496d01e6d8be9f0d4c707148.webp",
    img: "img.product/new.photo/34fda6d7496d01e6d8be9f0d4c707148.webp",
    Images3: "img.product/new.photo/3551b2e494e353e5273fb3f3999c370c.jpg",
    about: "( details )    ",
    info: "Which create the content of the image. Pj    ",
    info2: "Necklaces, earrings and cuffs have rust-free steel fittings.    ",
    info3: "Choose your favorite jewelry that matches your mood and values.",
    info4: " ",
    info5: "",
    info6: " ",
    info7: "",
    info8: "    ",
    info9: "",
  },
  {
    dataId: 32,
    section: "kosovo",

    Images1: "img.product/new.photo/6876c1d42ddb76972f98188991d1d0e6.webp",
    name: "women's boots with fur in the middle",
    price: "77.50",
    NewPrice: "80.25",

    category: "women",
    Images2: "img.product/new.photo/89252c4b4c99b8b7a61702b3664e6129.jpg",
    Images3: "img.product/new.photo/thin2.webp",
    img: "img.product/new.photo/6c41c92948e11d297e8105fb87d976fe.webp",
    about: " Straight trousers, for a height of 158 - 165 cm",
    info: "These trousers belong to the Kosivska Ceramics collection, with small embroideries on the back to remind you when to fall in love with Ukrainian things",
    info2: "",
    info3: "The trousers go well with tops and long sleeves.",
    info4: "Composition: 22% viscose, 73% polyester, 5% elastane.    ",
    info5: "Care: machine wash at t=30°C, delicate spin and tumble dry.    ",
    info6: "Model dimensions: 83/64/93 cm.    ",
    info7: "Model's height: 170 cm (model wearing Long)    ",
    info8: "Length at side seam: 102 cm.    ",
    info9: "Size on the model: XS.",
  },
  {
    dataId: 33,
    Images2: "#",
    name: "gift certificate for 50$",

    price: "50",
    category: "certificates",
    Images1: "#",
    img: "img.product/new.photo/36a7fbfd667f6aba94549ca8c51be3a7.webp",
    Images3: "#",
    about: "Certificate with a nominal value of 50 USD    ",
    info: "Make your friends and family fall in love with Ukrainian.    ",
    info2:
      "Buy it as a gift. The regular customer discount is not valid when buying a network certificate.    ",
    info3:
      "The discount can be used when using the certificate by naming the mobile number for which the regular customer discount is valid.",
    info4: "",
    info5: "",
    info6: "",
    info7: "",
    info8: "",
    info9: "",
  },
  {
    dataId: 34,
    img: "img.product/new.photo/9a3da73403aaf06f463235d37ca2554f.webp",
    name: "gift certificate for 100$",
    price: "100",
    category: "certificates",
    Images1: "#",
    Images2: "#",
    Images3: "#",
    about: " Certificate with a nominal value of 100 USD ",
    info: "Make your friends and family fall in love with Ukrainian.    ",
    info2:
      "Buy it as a gift. The regular customer discount is not valid when buying a network certificate.    ",
    info3:
      "The discount can be used when using the certificate by naming the mobile number for which the regular customer discount is valid.",
    info4: "",
    info5: "",
    info6: "",
    info7: "",
    info8: "",
    info9: "",
  },
];
function renderFilteredProducts(filteredProducts) {
  const productsContainer = document.getElementById("products-container");
  let productsHTML = "";

  if (productsContainer) {
    filteredProducts.forEach((product) => {
      productsHTML += `<div data-id=${
        product.dataId
      } class="produci-trumblin all_products">
    <a href="#
    "> 
      <picture>
        <source srcset="#" type="#" />
        <source srcset="#" type="#" />
        <img src=${product.img} alt="${product.name}" width="198" />
      </picture>
    </a>
    <div class="product_body">
      <div class="description ">
        <a class="product_name" href="#">${product.name}</a>
        <div class="prise-date">
          <span class="cerrent_pruise">${product.price} USD</span>
          ${
            product.NewPrice
              ? `<span class="current_old in_all"> ${product.NewPrice} USD</span>`
              : ""
          }

        </div>
      </div>
    </div>
  </div>`;
    });

    productsContainer.innerHTML = productsHTML;
  }
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function renderRelatedProducts(products) {
  const container = document.getElementById("related_products");

  if (!container) return;
  let productsCopy = [...products];
  shuffleArray(productsCopy);

  const selectedProducts = productsCopy.slice(0, 4);
  const productsHtml = selectedProducts
    .map(
      (product) => `
      <div data-id=${product.dataId} class="produci-trumblin">
      <a href="#
      ">    <picture>
      <source srcset="#" type="#" />
      <source srcset="#" type="#" />
      <img src=${product.img} alt="${product.name}" width="198" />
    </picture>
  </a>
  <div class="product_body">
    <div class="description ">
      <a class="product_name" href="#">${product.name}</a>
      <div class="prise-date">
      <span class="cerrent_pruise">${product.price} USD</span>
      ${
        product.NewPrice
          ? `<span class="current_old in_all"> ${product.NewPrice} USD</span>`
          : ""
      }

      </div>
    </div>
  </div>
</div>
  `
    )
    .join("");
  container.innerHTML = productsHtml;
  addEventListenersToProducts();
}
function addEventListenersToProducts() {
  const clickableElements = document.querySelectorAll(
    ".produci-trumblin, .open_element"
  );
  clickableElements.forEach((element) => {
    element.addEventListener("click", function (event) {
      if (event.target.closest(".closeIcon")) {
        return;
      }
      const elementId = this.getAttribute("data-id");
      window.location.href = `product.html?productId=${elementId}`;
    });
  });
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
          <div data-id=${good.dataId} class="produci-trumblin all_products">
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
                  ${
                    good.NewPrice
                      ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
                      : ""
                  }

                </div>
              </div>
            </div>
          </div>
        `
      )
      .join("");

    productsContainer.innerHTML = productsHTML;
    addEventListenersToProducts();
  }
}
renderAllProducts();
function getProductData(productId) {
  return goods.find((item) => item.dataId.toString() === productId);
}
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");
  if (productId) {
    renderAllProducts();
  }
});
function renderProductInfo(product) {
  let sizeOptionsHtml;
  if (product.category === "shoes") {
    sizeOptionsHtml = `
      <option value="8">8</option>
      <option value="8.5">8.5</option>
      <option value="9">9</option>
      <option value="9.5">9.5</option>`;
  } else if (product.category === "jewellery" || product.category === "gifts") {
    sizeOptionsHtml = `<option value="one size">one size</option>`;
  } else if (product.category === "home") {
    sizeOptionsHtml = `<option value="300X300">300X300</option>`;
  } else {
    sizeOptionsHtml = `<option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>`;
  }

  const infoProductElement = document.querySelector(".page_product");
  infoProductElement.innerHTML = `
  <div id="${product.dataId}" class="product_mair">
  <div class="imges_area">
      <img class  class="mine_img" src=${product.img} alt="">
  </div>
  <div class="mini_imeges">
      <img src=${product.Images1} alt="">
      <img src=${product.Images2} alt="">
      <img src=${product.Images3} alt="">
  </div>
</div>
<div class="product_semiler">
<div class="title_goods">
  <h3>${product.name} </h3>
  <div class="prise-date">
      <span class="cerrent_pruise prise_good">${product.price} USD</span>
      ${
        product.NewPrice
          ? `<span class="current_old in_info"> ${product.NewPrice} USD</span>`
          : ""
      }

      <i class="fa-light fa-heart"></i>  
       </div>
  <div class="menu_product_">
      <label for="mySelect">Choose a size</label>
      <select id="mySelect" name="mySelect">
      ${sizeOptionsHtml}
    </select>
      <button id="beg_add">To basket</button>
  </div>
  <h3>augment the image</h3>
  <div class="product_offers"></div>
  <div id="related_products"></div>

  <div id='block_offer'></div>
  </div>
`;
  const description = document.getElementById("description");
  description.innerHTML = `<div class="tawar_text">
  <div class="tawar">
  <div class="content_tabs">
  <p>${product.about}</p>
  <p>${product.info}</p>
  <p>${product.info2}</p>
  <p>${product.info3}</p>
  <p>${product.info4}</p>
  <p>${product.info5}</p>
  <p>${product.info6}</p>
  <p>${product.info7}</p>
  <p>${product.info8}</p>
  <p>${product.info9}</p>
</div>
  </div>
  </div>`;
  //  toBeg
  const begAdd = document.getElementById("beg_add");
  if (begAdd) {
    begAdd.addEventListener("click", function () {
      const selectElement = document.getElementById("mySelect");
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      let size = selectedOption.textContent;
      let products = JSON.parse(localStorage.getItem("specificProduct")) || [];
      let productToAdd = { ...product, size: size };
      const isProductExists = products.some(
        (product) =>
          product.dataId === productToAdd.dataId && product.size === size
      );
      if (!isProductExists) {
        products.push(productToAdd);
        localStorage.setItem("specificProduct", JSON.stringify(products));
      }
    });
  }
  const category = product.category;
  const relatedProducts = goods.filter(
    (item) => item.category === category && item.dataId !== product.dataId
  );
  renderRelatedProducts(relatedProducts);
  addImageSwitchingEventListeners();
}
function updateTotalPrice() {
  let products = JSON.parse(localStorage.getItem("specificProduct")) || [];
  let totalPrice = products.reduce(
    (total, product) => total + parseFloat(product.price),
    0
  );
  const totalArea = document.getElementById("total_");
  if (totalArea) {
    totalArea.innerHTML = totalPrice.toFixed(2);
  }
}
updateTotalPrice();
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", function (event) {
    let products = JSON.parse(localStorage.getItem("specificProduct")) || [];
    if (event.target.classList.contains("closeIcon")) {
      event.preventDefault();
      event.stopPropagation();
      const productElement = event.target.closest(".product_in_beg");
      const productId = parseInt(productElement.getAttribute("data-id"), 10);

      const filteredProducts = products.filter(
        (product) => product.dataId !== productId
      );

      localStorage.setItem("specificProduct", JSON.stringify(filteredProducts));
      productElement.remove();
    }
    updateTotalPrice();
  });
  const contentBag = document.getElementById("product_area");
  const productBeg = document.querySelector(".product_beg");
  const savedProducts =
    JSON.parse(localStorage.getItem("specificProduct")) || [];
  if (savedProducts.length > 0 && contentBag) {
    // productBeg.classList.add("hasProducts");
    let productsHTML = "";
    savedProducts.forEach((product) => {
      productsHTML += ` <div data-id=${
        product.dataId
      } class="product_in_beg open_element
      ">
      <i class="fa-sharp fa-solid fa-xmark fa-2x closeIcon"></i>
      <div class="imges_area">
        <img class="mine_img" src=${product.img} alt="">
      </div>
      <div class="product_semiler">
        <div class="title_goods">
          <h3>${product.name}</h3>
          <div>Size: ${product.size ? product.size : "Not specified"}</div>
    
          <div class="prise-date">
            <span class="cerrent_pruise prise_good">${product.price} USD</span>
            ${
              product.NewPrice
                ? `<span class="current_old in_info">${product.NewPrice} USD</span>`
                : ""
            }
          </div>
        </div>
      </div>
    </div>
</div>
  `;
    });
    contentBag.innerHTML = productsHTML;
  }
});
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
          <img src="${product.img}" alt="${product.name}" width="300" />
        </picture>
        <div class="product_body product-dobrush">
          <div class="description">
            <a class="product_name" href="">${product.name}</a>
            <div class="prise-date">
              <span class="cerrent_pruise">${product.price} USD</span>
      ${
        product.NewPrice
          ? `<span class="current_old in_all"> ${product.NewPrice} USD</span>`
          : ""
      }
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

document.addEventListener("DOMContentLoaded", function () {
  function filterGoodsNew(category) {
    const product = document.getElementById("products-new");

    if (product) {
      const filterGoods = goods.filter((good) => good.section === "new");
      const productsHTML = filterGoods
        .map(
          (good) => ` <div data-id=${
            good.dataId
          } class="new_product_viwe open_element">
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
      ${
        good.NewPrice
          ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
          : ""
      }

      </div>
    </div>
  </div>
</div>
  `
        )
        .join("");
      addEventListenersToProducts();
      product.innerHTML = productsHTML;
    }
  }

  filterGoodsNew(category);
});
document.addEventListener("DOMContentLoaded", function () {
  function filterGoodsSell(category) {
    const product = document.getElementById("products-sell");
    if (product) {
      const filterGoods = goods.filter((good) => good.NewPrice);
      const productsHTML = filterGoods
        .map(
          (good) => ` <div data-id=${
            good.dataId
          } class="sell_product_viwe open_element">
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
      ${
        good.NewPrice
          ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
          : ""
      }

      </div>
    </div>
  </div>
</div>
  `
        )
        .join("");
      product.innerHTML = productsHTML;
    }
    addEventListenersToProducts();
  }
  filterGoodsSell(category);
});
// other
document.addEventListener("DOMContentLoaded", function () {
  function filterGoodsForWomen(category) {
    const product = document.getElementById("products-women");
    if (product) {
      const filterGoods = goods.filter((good) => good.category === "women");
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
      ${
        good.NewPrice
          ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
          : ""
      }

      </div>
    </div>
  </div>
</div>
  `
        )
        .join("");
      product.innerHTML = productsHTML;
      addEventListenersToProducts();
    }
  }

  filterGoodsForWomen(category);
});

document.addEventListener("DOMContentLoaded", function () {
  function filterGoodsForMen(category) {
    const product = document.getElementById("products-men");
    if (product) {
      const filterGoods = goods.filter((good) => good.category === "men");
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
      ${
        good.NewPrice
          ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
          : ""
      }

      </div>
    </div>
  </div>
</div>
  `
        )
        .join("");
      product.innerHTML = productsHTML;
      addEventListenersToProducts();
    }
  }

  filterGoodsForMen(category);
});

document.addEventListener("DOMContentLoaded", function () {
  function filterGoodsShoes(category) {
    const container = document.getElementById("products-shoes");
    if (container) {
      container.innerHTML = "Новое содержимое";
      const filterGoods = goods.filter((good) => good.category === "shoes");
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
      ${
        good.NewPrice
          ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
          : ""
      }

      </div>
    </div>
  </div>
</div>
  `
        )
        .join("");
      container.innerHTML = productsHTML;
      addEventListenersToProducts();
    }
  }

  filterGoodsShoes(category);
});

document.addEventListener("DOMContentLoaded", function () {
  function filterGoodsAcsesuaris(category) {
    const product = document.getElementById("products-accessories");
    if (product) {
      const filterGoods = goods.filter(
        (good) => good.category === "accessories"
      );
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
      ${
        good.NewPrice
          ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
          : ""
      }

      </div>
    </div>
  </div>
</div>
  `
        )
        .join("");
      product.innerHTML = productsHTML;
      addEventListenersToProducts();
    }
  }

  filterGoodsAcsesuaris(category);
});

document.addEventListener("DOMContentLoaded", function () {
  function filterGoodsJewellery(category) {
    const product = document.getElementById("products-jewellery");
    if (product) {
      const filterGoods = goods.filter((good) => good.category === "jewellery");
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
      ${
        good.NewPrice
          ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
          : ""
      }

      </div>
    </div>
  </div>
</div>
  `
        )
        .join("");
      product.innerHTML = productsHTML;
      addEventListenersToProducts();
    }
  }

  filterGoodsJewellery(category);
});

document.addEventListener("DOMContentLoaded", function () {
  function filterGoodsHome(category) {
    const product = document.getElementById("products-home");
    if (product) {
      const filterGoods = goods.filter((good) => good.category === "home");
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
      ${
        good.NewPrice
          ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
          : ""
      }

      </div>
    </div>
  </div>
</div>
  `
        )
        .join("");
      product.innerHTML = productsHTML;
      addEventListenersToProducts();
    }
  }
  filterGoodsHome(category);
});

document.addEventListener("DOMContentLoaded", function () {
  function filterGoodsCertificat(category) {
    const product = document.getElementById("products-certificat");

    if (product) {
      const filterGoods = goods.filter(
        (good) => good.category === "certificates"
      );
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
      ${
        good.NewPrice
          ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
          : ""
      }
      </div>
    </div>
  </div>
</div>
  `
        )
        .join("");

      product.innerHTML = productsHTML;
      addEventListenersToProducts();
    }
  }
  filterGoodsCertificat(category);
});

document.addEventListener("DOMContentLoaded", function () {
  function filterGoodsGifts(category) {
    const product = document.getElementById("products-gifts");
    if (product) {
      const filterGoods = goods.filter(
        (good) =>
          good.category === "certificates" ||
          good.category === "jewellery" ||
          good.category === "home"
      );
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
      ${
        good.NewPrice
          ? `<span class="current_old in_all"> ${good.NewPrice} USD</span>`
          : ""
      }

      </div>
    </div>
  </div>
</div>
  `
        )
        .join("");
      product.innerHTML = productsHTML;
      addEventListenersToProducts();
    }
  }

  filterGoodsGifts(category);
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Когда пользователь попадает на страницу `find.html`, вам нужно извлечь значение параметра `search` из URL,
//   //  чтобы знать, что именно пользователь пытался найти. Это делается с помощью JavaScript и Web API `URLSearchParams`.
//   const params = new URLSearchParams(window.location.search);
//   // Функция params.get('search') возвращает значение параметра search из URL, которое в нашем примере будет "кофемашина".
//   const searchText = params.get("search");
//   // Шаг 3: Декодирование и использование поискового запроса
//   const decodedSearchText = decodeURIComponent(searchText);
//   const filteredProducts = goods.filter((product) => {
//     product.name.toLowerCase().includes(decodedSearchText.toLowerCase());
//     // Шаг 4: Отображение результатов
//     const productsContainer = document.getElementById("products-container");
//     let productsHTML = "";
//     if (filteredProducts.length > 0) {
//       filteredProducts.forEach((product) => {
//         // code
//       });
//     } else {
//       productsHTML = "<p>По вашему запросу ничего не найдено.</p>";
//     }
//   });
// });
