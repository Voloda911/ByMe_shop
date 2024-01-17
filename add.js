const header = document.getElementById("header");
const main = document.querySelector("main");
const nawSell = document.querySelectorAll(".text_tabs");
const newBtn = document.getElementById("s_new");
const tabNew = document.getElementById("tab_new");
const tabSell = document.getElementById("tab_sell");
const infoButtons = document.querySelectorAll(".menu_info_product button");
const description = document.getElementById("description");
const descriptionBtn = document.querySelector(".description_btn");

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
    about:
      "Black leather chelsea boots with a woollen lining inside, a great choice for mild winters. Suitable for temperatures down to -5 degrees, with warm socks down to -10 degrees. ",
    info: "Are you used to classic winter boots? Try Chelsea boots for women. The elastic bands on the side are a small but important detail that can express the look and add interest to the boots themselves. They also go well with completely different styles of clothes: try on chelsea boots with sweatpants and a knitted dress - you'll get different but equally coherent looks!",
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
    img: "img.product/shoes/18ebde5378a72c31dd0f8f5e7409c445.webp",
    name: "leather boots with fur",
    price: "81.00",
    category: "shoes",
    Images1: "img.product/shoes/c04123479b4b34230bb94a7c0efd1f26.jpg",
    Images2: "img.product/shoes/c5307c7a718e0144e37e4836b28a8cd0.jpg",
    Images3: "img.product/shoes/d240117620619a9af2c4fc901efc777a.webp",
    about:
      "Black leather chelsea boots with a woollen lining inside, a great choice for mild winters. Suitable for temperatures down to -5 degrees, with warm socks down to -10 degrees. ",
    info: "Are you used to classic winter boots? Try Chelsea boots for women. The elastic bands on the side are a small but important detail that can express the look and add interest to the boots themselves. They also go well with completely different styles of clothes: try on chelsea boots with sweatpants and a knitted dress - you'll get different but equally coherent looks!",
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
    img: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
    name: "women's boots with fur in the middle",
    price: "77.50",
    category: "shoes",
    Images1: "img.product/shoes/908d3e436044239356b3eb2104cfab53.webp",
    Images2: "img.product/shoes/87064353b2c996927146e9337d21618d.jpg",
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
    dataId: 6,
    img: "img.product/new.photo/1bccde4cceedcdac270a7f0e142e5bfc.webp",
    name: "grey women's skirt ",
    price: "49.10",
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
    dataId: 7,
    img: "img.product/man/9c77380e70f6114970c91169f3b15a46.webp",
    name: "men's shorts Beigo",
    price: "31.15",
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
    dataId: 8,
    img: "img.product/man/294fe6aeb4fb7a39d6a28bb211fb4191.webp",
    name: "men's shorts black",
    price: "31.66",
    category: "women",
    Images1: "img.product/man/3aba7a2070f46b6b41269da3c275b7f2.jpg",
    Images2: "img.product/man/5c040d7850cc5bf4806de843d614388b.jpg",
    Images3: "img.product/man/2c6b171ad3837937290ce8fa1ce68ca6.webp",
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
    dataId: 9,
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
    dataId: 10,
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
    dataId: 20,
    img: "img.product/man/bccd4459f224e784ecd7f58858d619d7.webp",
    name: "men's shorts white",
    price: "31.66",
    category: "men",
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
    dataId: 21,
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
    dataId: 22,
    img: "img.product/new.photo/a3acfacde11eee197a9611edfdbda961.webp",
    name: "plaid middle brown",
    price: "50.25",
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
    dataId: 23,
    section: "kosovo",
    img: "img.product/new.photo/e93223bca31ac524dd16943c9a3ee5b5.webp",
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
    dataId: 24,
    section: "kosovo",

    Images1: "img.product/shoes/82b79545b00f4d35d149f9e8ddf8eae1.webp",
    name: "women's boots with fur in the middle",
    price: "77.50",
    category: "shoes",
    Images1: "img.product/shoes/908d3e436044239356b3eb2104cfab53.webp",
    img: "img.product/shoes/87064353b2c996927146e9337d21618d.jpg",
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
    dataId: 25,
    section: "dobrush",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "men",
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
    dataId: 26,
    section: "dobrush",
    img: "img.product/9c1ede212a4dcb2494771a4626ebc8c7.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "men",
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
    dataId: 27,
    section: "shirt",
    img: "img.product/e4db02a20010c59064cb57f4e3b006a8.webp",
    name: "embroidered shirt",
    price: "15.10",
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
    dataId: 28,
    section: "menswear",
    img: "img.product/39aff594d959af0a26e4bbb021251faf.webp",
    name: "embroidered shirt",
    price: "18.10",
    category: "men",
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
    dataId: 29,
    section: "menswear",
    img: "img.product/8658852a86ecf89288a64eab08c23119.webp",
    name: "embroidered shirt",
    price: "22.10",
    category: "men",
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
    dataId: 30,
    section: "hestories",
    img: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
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
    dataId: 31,
    section: "hestories",
    img: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
    name: "mesh flared longsleeves",
    price: "31.66",
    category: "women",
    Images1: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
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
    dataId: 32,
    section: "ornaments",
    img: "img.product/7ba88b91c692c9613522123a5d3bbe35.webp",
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
    dataId: 33,
    section: "shevchenko",
    img: "img.product/d2e3272fddfd38279106883ae541a5cd.webp",
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
    dataId: 34,
    section: "shevchenko",
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
function filterMenuAndShow(goods) {
  const filterGoods = goods.filter((good) => good.category === category);
  const menuBtn = document.querySelectorAll(".item-btm a");
  menuBtn.addEventListener("click", function (event) {
    if (filterGoods) {
    }
  });
}
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
let minPrice = 150;
let maxPrice = 5499;

function updatePriceValue(value, id) {
  if (id === "price-min-value") {
    minPrice = value;
  } else {
    maxPrice = value;
  }
  renderAllProducts(minPrice, maxPrice);
}
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
  <div class="product_offers"></div>
</div>

`;
  const description = document.getElementById("description");
  description.innerHTML = `<div class="tawar_text">
  <div class="tawar">
  <div class="content_tabs">
  <p>${goods.about}</p>
  <p>${goods.info}</p>
  <p>${goods.info2}</p>
  <p>${goods.info3}</p>
  <p>${goods.info4}</p>
  <p>${goods.info5}</p>
  <p>${goods.info6}</p>
  <p>${goods.info7}</p>
  <p>${goods.info8}</p>
  <p>${goods.info9}</p>



  
</div>
  </div>
  </div>`;
  addImageSwitchingEventListeners();
}
// function renderOffersToProducts(goods) {
//   const renderAreaOffers = document.querySelector(".product_offers");
//   const relatedProductsHtml = goods
//     .map(
//       (product) => `
//       <div data-id=${goods.dataId} class="produci-trumblin">
//         <a href="#">
//           <img src=${goods.img} alt="${goods.name}" width="198" />
//         </a>
//         <div class="product_body">
//           <div class="description ">
//             <a class="product_name" href="#">${goods.name}</a>
//             <div class="prise-date">
//               <span class="cerrent_pruise">${goods.price} USD</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     `
//     )
//     .join("");
//   renderAreaOffers.innerHTML = relatedProductsHtml;
// }
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
