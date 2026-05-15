const products = [
  { title: "Rolety", desc: "Látkové a technické rolety pro interiérové stínění.", img: "assets/img/product-01.svg", url: "https://mottura.com/en/products/" },
  { title: "Garnýže", desc: "Dekorativní i technické systémy pro zavěšení textilu.", img: "assets/img/product-02.svg", url: "https://mottura.com/en/products/" },
  { title: "Motorické garnýže", desc: "Pohodlné ovládání závěsů pro rezidenční i komerční projekty.", img: "assets/img/product-03.svg", url: "https://mottura.com/en/products/" },
  { title: "Záclony, závěsy, dekorace", desc: "Systémy pro přesné a estetické vedení interiérových textilií.", img: "assets/img/product-04.svg", url: "https://mottura.com/en/indoor-curtains/" },
  { title: "Japonské posuvné stěny", desc: "Panelové systémy pro velké prosklené plochy a členění prostoru.", img: "assets/img/product-05.svg", url: "https://mottura.com/en/products/" },
  { title: "Římské rolety", desc: "Elegantní textilní stínění s technicky čistým ovládáním.", img: "assets/img/product-06.svg", url: "https://mottura.com/en/products/" },
  { title: "Klasické dekorativní garnýže", desc: "Viditelné designové prvky pro tradiční i moderní interiéry.", img: "assets/img/product-07.svg", url: "https://mottura.com/en/products/" },
  { title: "Moderní dekorativní systémy", desc: "Minimalistické profily a kolejnice pro současnou architekturu.", img: "assets/img/product-08.svg", url: "https://mottura.com/en/products/" },
  { title: "Baldachýny", desc: "Specializované systémy pro horizontální nebo šikmé vedení textilu.", img: "assets/img/product-09.svg", url: "https://mottura.com/en/products/" },
  { title: "Horizontální dřevěné žaluzie", desc: "Přirozený materiál, regulace světla a výrazný interiérový detail.", img: "assets/img/product-10.svg", url: "https://mottura.com/en/products/" },
  { title: "Plissé", desc: "Kompaktní stínění pro atypická okna, špalety a detailní řešení.", img: "assets/img/product-11.svg", url: "https://mottura.com/en/products/" }
];

const catalogues = [
  { title: "Indoor systems", text: "Kolejnice, garnýže, římské rolety a interiérové systémy.", url: "assets/catalogs/mottura-indoor.pdf" },
  { title: "Motorized systems", text: "Motorické kolejnice, ovládání a technické specifikace.", url: "assets/catalogs/mottura-motorized.pdf" },
  { title: "Decorative systems", text: "Dekorativní profily, garnýže a designové systémy.", url: "assets/catalogs/mottura-decorative.pdf" }
];

function renderProducts() {
  const grid = document.querySelector("#productGrid");
  grid.innerHTML = products.map(item => `
    <a class="product-card reveal" href="${item.url}" target="_blank" rel="noopener">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <span>Více na mottura.com →</span>
      </div>
    </a>
  `).join("");
}

function renderCatalogues() {
  const grid = document.querySelector("#catalogueGrid");
  grid.innerHTML = catalogues.map(item => `
    <a class="catalogue-card reveal" href="${item.url}" target="_blank" rel="noopener">
      <span class="pdf">PDF</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <strong>Otevřít katalog →</strong>
    </a>
  `).join("");
}

function initMenu() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("is-open")));
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

renderProducts();
renderCatalogues();
initMenu();
initReveal();
document.querySelector("#year").textContent = new Date().getFullYear();
