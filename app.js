const products = [
  {
    title: "Rolety",
    desc: "Látkové a technické rolety pro interiérové stínění.",
    detail: "Rolety Mottura jsou technické systémy pro přesnou regulaci světla, soukromí a tepelného komfortu. Hodí se pro rezidenční interiéry, kanceláře, hotely i atypická okna.",
    uses: ["látkové rolety", "screenové a technické látky", "špaletová okna", "manuální i motorické ovládání", "rezidenční a komerční projekty"],
    img: "assets/img/product-01.svg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-roller-blinds.pdf"
  },
  {
    title: "Garnýže",
    desc: "Dekorativní i technické systémy pro zavěšení textilu.",
    detail: "Garnýže a kolejnicové systémy jsou základ pro kvalitní zavěšení záclon a závěsů. Podle typu interiéru mohou být nenápadné technické, viditelné dekorativní nebo součástí architektonického detailu.",
    uses: ["záclony a závěsy", "jednokolejné i vícekolejné řešení", "stropní a nástěnná montáž", "rovné i atypické dispozice", "hotely, byty, domy a kanceláře"],
    img: "assets/img/product-02.svg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-drapery-track-systems.pdf"
  },
  {
    title: "Motorické garnýže",
    desc: "Pohodlné ovládání závěsů pro rezidenční i komerční projekty.",
    detail: "Motorické systémy umožňují pohodlné ovládání závěsů a textilu tlačítkem, dálkovým ovladačem nebo přes chytrou domácnost. Jsou vhodné tam, kde je důležitý komfort, přesnost a reprezentativní provedení.",
    uses: ["motorické závěsy", "ovládání vypínačem", "dálkové nebo chytré ovládání", "větší prosklené plochy", "prémiové rezidenční a komerční interiéry"],
    img: "assets/img/product-03.svg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-power.pdf"
  },
  {
    title: "Záclony, závěsy, dekorace",
    desc: "Systémy pro přesné a estetické vedení interiérových textilií.",
    detail: "Mottura nabízí technické systémy, na kterých stojí výsledný vzhled záclon a závěsů. Nejde jen o profil, ale o přesné vedení textilu, vhodný způsob řasení a dlouhodobě funkční detail.",
    uses: ["záclony", "závěsy", "vícevrstvé textilní řešení", "dekorativní i skryté systémy", "spolupráce s architekty a designéry"],
    img: "assets/img/product-04.svg",
    italyUrl: "https://mottura.com/en/indoor-curtains/",
    catalogUrl: "assets/catalogs/mottura-drapery-track-systems.pdf"
  },
  {
    title: "Japonské posuvné stěny",
    desc: "Panelové systémy pro velké prosklené plochy a členění prostoru.",
    detail: "Japonské posuvné stěny pracují s většími textilními panely. V interiéru mohou sloužit jako stínění, jemné členění prostoru nebo minimalistický architektonický prvek.",
    uses: ["velké prosklené plochy", "posuvné textilní panely", "členění prostoru", "minimalistické interiéry", "rezidenční i komerční projekty"],
    img: "assets/img/product-05.svg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-panel-track-systems.pdf"
  },
  {
    title: "Římské rolety",
    desc: "Elegantní textilní stínění s technicky čistým ovládáním.",
    detail: "Římské rolety kombinují měkkost textilu s přesným technickým systémem. Jsou vhodné tam, kde má být okno řešené elegantně, čistě a s menším objemem látky než u klasických závěsů.",
    uses: ["římské rolety", "koupelny, kuchyně a obytné místnosti", "dekorativní textilní stínění", "manuální i motorické ovládání", "atypická a menší okna"],
    img: "assets/img/product-06.svg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-roman-shade-systems.pdf"
  },
  {
    title: "Klasické dekorativní garnýže",
    desc: "Viditelné designové prvky pro tradiční i moderní interiéry.",
    detail: "Dekorativní garnýže jsou viditelnou součástí interiéru. Uplatní se tam, kde má být technický systém zároveň designovým prvkem a navázat na materiály, kovové detaily nebo styl prostoru.",
    uses: ["viditelné garnýže", "dekorativní koncovky", "tradiční i moderní interiéry", "závěsy a záclony", "designové ladění s interiérem"],
    img: "assets/img/product-07.svg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-drapery-track-systems.pdf"
  },
  {
    title: "Moderní dekorativní systémy",
    desc: "Minimalistické profily a kolejnice pro současnou architekturu.",
    detail: "Moderní dekorativní systémy propojují technickou přesnost s čistým vzhledem. Hodí se pro interiéry, kde má být zavěšení textilu nenápadné, přesné a architektonicky klidné.",
    uses: ["minimalistické profily", "moderní kolejnice", "skryté nebo pohledové řešení", "současná architektura", "vyšší nároky na detail"],
    img: "assets/img/product-08.svg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-drapery-track-systems.pdf"
  },
  {
    title: "Baldachýny",
    desc: "Specializované systémy pro horizontální nebo šikmé vedení textilu.",
    detail: "Baldachýnové systémy řeší situace, kde se textil nepohybuje jen svisle, ale také vodorovně nebo po šikmé rovině. Používají se pro světlíky, zimní zahrady a speciální architektonická řešení.",
    uses: ["světlíky", "zimní zahrady", "šikmé nebo horizontální vedení", "speciální textilní konstrukce", "individuální technické řešení"],
    img: "assets/img/product-09.svg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-garden.pdf"
  },
  {
    title: "Horizontální dřevěné žaluzie",
    desc: "Přirozený materiál, regulace světla a výrazný interiérový detail.",
    detail: "Dřevěné horizontální žaluzie kombinují přesnou regulaci světla s teplejším materiálovým dojmem. Jsou vhodné tam, kde má stínění působit výrazněji a stát se součástí interiéru.",
    uses: ["regulace světla", "přírodní materiálový efekt", "obytné interiéry", "pracovny a kanceláře", "výraznější designový detail"],
    img: "assets/img/product-10.svg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-veniwood.pdf"
  },
  {
    title: "Plissé",
    desc: "Kompaktní stínění pro atypická okna, špalety a detailní řešení.",
    detail: "Plissé je kompaktní stínění pro okna, kde je potřeba subtilní systém, variabilní práce se světlem a přesné osazení. Hodí se pro špaletová, atypická i menší okna.",
    uses: ["špaletová okna", "atypické tvary", "menší okna", "jemná regulace soukromí", "nenápadné technické řešení"],
    img: "assets/img/product-11.svg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-pleated-blinds.pdf"
  }
];

const catalogues = [
  { title: "FRAMES – Window technology", text: "Systémy pro instalaci přímo do rámu okna a specifická okenní řešení.", url: "assets/catalogs/mottura-frames.pdf" },
  { title: "GARDEN – Skylights", text: "Systémy pro světlíky, šikmé a horizontální prosklené plochy.", url: "assets/catalogs/mottura-garden.pdf" },
  { title: "OUTDOOR – Windproof technology", text: "Venkovní rolety a technické systémy s odolností proti větru.", url: "assets/catalogs/mottura-outdoor.pdf" },
  { title: "POWER – Motorized systems", text: "Motorické kolejnice a systémy pro ovládání závěsů.", url: "assets/catalogs/mottura-power.pdf" },
  { title: "ROLLBOX – Total technology", text: "Kazetové rolety a technické roletové systémy.", url: "assets/catalogs/mottura-rollbox.pdf" },
  { title: "STARBOX – Skylights indoor / outdoor", text: "Systémy pro světlíky a velké šikmé plochy v interiéru i exteriéru.", url: "assets/catalogs/mottura-starbox.pdf" },
  { title: "Tende a rullo – Roller blinds", text: "Látkové rolety, technické rolety a motorické varianty.", url: "assets/catalogs/mottura-roller-blinds.pdf" },
  { title: "Tende a pacchetto – Roman-shade systems", text: "Římské rolety a textilní systémy pro interiér.", url: "assets/catalogs/mottura-roman-shade-systems.pdf" },
  { title: "Tende a pannello – Panel track systems", text: "Panelové posuvné systémy pro velké plochy a členění interiéru.", url: "assets/catalogs/mottura-panel-track-systems.pdf" },
  { title: "Drappeggi – Drapery track systems", text: "Kolejnicové systémy pro záclony a závěsy.", url: "assets/catalogs/mottura-drapery-track-systems.pdf" },
  { title: "Plissé – Pleated blinds", text: "Plissé systémy pro detailní, atypická a špaletová okna.", url: "assets/catalogs/mottura-pleated-blinds.pdf" },
  { title: "Tende verticali – Vertical blinds", text: "Vertikální žaluzie a systémy pro komerční i rezidenční prostory.", url: "assets/catalogs/mottura-vertical-blinds.pdf" },
  { title: "TOPBOX 4140 – Concealed roller blinds", text: "Skryté roletové systémy pro čistý architektonický detail.", url: "assets/catalogs/mottura-topbox-4140.pdf" },
  { title: "VENIWOOD – Wood venetian blinds", text: "Dřevěné horizontální žaluzie a přírodní materiálový detail.", url: "assets/catalogs/mottura-veniwood.pdf" }
];

function renderProducts() {
  const grid = document.querySelector("#productGrid");
  grid.innerHTML = products.map((item, index) => `
    <button class="product-card reveal" type="button" data-product="${index}">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <span>Zobrazit český detail →</span>
      </div>
    </button>
  `).join("");

  grid.querySelectorAll("[data-product]").forEach(button => {
    button.addEventListener("click", () => openProductModal(Number(button.dataset.product)));
  });
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

function openProductModal(index) {
  const item = products[index];
  const modal = document.querySelector("#productModal");

  document.querySelector("#modalImage").src = item.img;
  document.querySelector("#modalImage").alt = item.title;
  document.querySelector("#modalTitle").textContent = item.title;
  document.querySelector("#modalDesc").textContent = item.detail;
  document.querySelector("#modalUses").innerHTML = item.uses.map(use => `<li>${use}</li>`).join("");
  document.querySelector("#modalNote").textContent = "Tento detail slouží jako české vysvětlení produktové skupiny. Přesné technické parametry, varianty profilů, motorů a příslušenství doporučujeme ověřit v katalogu nebo na oficiálním webu výrobce.";
  document.querySelector("#modalCatalog").href = item.catalogUrl;
  document.querySelector("#modalItaly").href = item.italyUrl;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  const modal = document.querySelector("#productModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initModal() {
  document.querySelectorAll("[data-close-modal]").forEach(el => {
    el.addEventListener("click", closeProductModal);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeProductModal();
  });
}

function initMenu() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (!slides.length) return;

  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("is-active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("is-active");
  }, 5200);
}

renderProducts();
renderCatalogues();
initMenu();
initHeroSlider();
initModal();
initReveal();
document.querySelector("#year").textContent = new Date().getFullYear();
