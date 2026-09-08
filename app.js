const products = [
  {
    title: "Rolety",
    desc: "Látkové a technické rolety pro interiérové stínění.",
    detail:
      "Rolety Mottura jsou technické systémy pro přesnou regulaci světla, soukromí a tepelného komfortu. Hodí se pro rezidenční interiéry, kanceláře, hotely i atypická okna.",
    uses: [
      "látkové rolety",
      "screenové a technické látky",
      "špaletová okna",
      "manuální i motorické ovládání",
      "rezidenční a komerční projekty",
    ],
    img: "assets/img/products/rolety-interierove.jpg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-roller-blinds.pdf",
  },
  {
    title: "Kolejnice",
    desc: "Dekorativní i technické systémy pro zavěšení textilu.",
    detail:
      "Garnýže a kolejnicové systémy jsou základ pro kvalitní zavěšení záclon a závěsů. Podle typu interiéru mohou být nenápadné technické, viditelné dekorativní nebo součástí architektonického detailu.",
    uses: [
      "záclony a závěsy",
      "jednokolejné i vícekolejné řešení",
      "stropní a nástěnná montáž",
      "rovné i atypické dispozice",
      "hotely, byty, domy a kanceláře",
    ],
    img: "assets/img/products/kolejnice.jpg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-drapery-track-systems.pdf",
  },
  {
    title: "Motorické systémy",
    desc: "Pohodlné ovládání závěsů pro rezidenční i komerční projekty.",
    detail:
      "Motorické systémy umožňují pohodlné ovládání závěsů a textilu tlačítkem, dálkovým ovladačem nebo přes chytrou domácnost. Jsou vhodné tam, kde je důležitý komfort, přesnost a reprezentativní provedení.",
    uses: [
      "motorické závěsy",
      "ovládání vypínačem",
      "dálkové nebo chytré ovládání",
      "větší prosklené plochy",
      "prémiové rezidenční a komerční interiéry",
    ],
    img: "assets/img/products/motoricke-systemy.jpg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-power.pdf",
  },
  {
    title: "Záclony",
    desc: "Lehkost, světlo a jemná práce s atmosférou interiéru.",
    detail:
      "Záclony změkčují světlo, vytváří soukromí a dodávají prostoru klidnější atmosféru. Výsledný efekt stojí nejen na textilu, ale i na správném systému zavěšení a proporcích prostoru.",
    uses: [
      "jemné rozptýlení světla",
      "moderní i klasické interiéry",
      "kolejnicové systémy",
      "minimalistické řešení",
      "rezidenční i komerční projekty",
    ],
    img: "assets/img/products/zaclony.jpg",
    italyUrl: "https://mottura.com/en/indoor-curtains/",
    catalogUrl: "assets/catalogs/mottura-drapery-track-systems.pdf",
  },
  {
    title: "Závěsy",
    desc: "Textilní vrstvy pro soukromí, akustiku a atmosféru interiéru.",
    detail:
      "Závěsy pomáhají regulovat světlo, zlepšují akustiku prostoru a dotváří celkový charakter interiéru. Důležitá je nejen látka, ale i technický systém a způsob řasení.",
    uses: [
      "blackout i dekorativní látky",
      "větší prosklené plochy",
      "kolejnice a skryté systémy",
      "akustický efekt",
      "rezidenční i hotelové projekty",
    ],
    img: "assets/img/products/zavesy.jpg",
    italyUrl: "https://mottura.com/en/indoor-curtains/",
    catalogUrl: "assets/catalogs/mottura-drapery-track-systems.pdf",
  },
  {
    title: "Japonské posuvné stěny",
    desc: "Panelové systémy pro velké prosklené plochy a členění prostoru.",
    detail:
      "Japonské posuvné stěny pracují s většími textilními panely. V interiéru mohou sloužit jako stínění, jemné členění prostoru nebo minimalistický architektonický prvek.",
    uses: [
      "velké prosklené plochy",
      "posuvné textilní panely",
      "členění prostoru",
      "minimalistické interiéry",
      "rezidenční i komerční projekty",
    ],
    img: "assets/img/products/japonske-steny.jpg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-panel-track-systems.pdf",
  },
  {
    title: "Římské rolety",
    desc: "Elegantní textilní stínění s technicky čistým ovládáním.",
    detail:
      "Římské rolety kombinují měkkost textilu s přesným technickým systémem. Jsou vhodné tam, kde má být okno řešené elegantně, čistě a s menším objemem látky než u klasických závěsů.",
    uses: [
      "římské rolety",
      "koupelny, kuchyně a obytné místnosti",
      "dekorativní textilní stínění",
      "manuální i motorické ovládání",
      "atypická a menší okna",
    ],
    img: "assets/img/products/rimske-rolety.jpg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-roman-shade-systems.pdf",
  },
  {
    title: "Vertikální žaluzie",
    desc: "Elegantní regulace světla pro moderní interiéry i velké plochy.",
    detail:
      "Moderní dekorativní systémy propojují technickou přesnost s čistým vzhledem. Hodí se pro interiéry, kde má být zavěšení textilu nenápadné, přesné a architektonicky klidné.",
    uses: [
      "minimalistické profily",
      "moderní kolejnice",
      "skryté nebo pohledové řešení",
      "současná architektura",
      "vyšší nároky na detail",
    ],
    img: "assets/img/products/vertikalni-zaluzie.jpg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-drapery-track-systems.pdf",
  },
  {
    title: "Střešní systémy",
    desc: "Stínění pro šikmá, střešní a atypická prosklení.",
    detail:
      "Systémy pro střešní a atypická okna řeší regulaci světla i tepelného komfortu u náročných architektonických realizací.",
    uses: [
      "šikmá okna",
      "světlíky",
      "zimní zahrady",
      "atypická prosklení",
      "technicky náročné realizace",
    ],
    img: "assets/img/products/stresni-systemy.jpg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-garden.pdf",
  },
  {
    title: "Horizontální dřevěné žaluzie",
    desc: "Přirozený materiál, regulace světla a výrazný interiérový detail.",
    detail:
      "Dřevěné horizontální žaluzie kombinují přesnou regulaci světla s teplejším materiálovým dojmem. Jsou vhodné tam, kde má stínění působit výrazněji a stát se součástí interiéru.",
    uses: [
      "regulace světla",
      "přírodní materiálový efekt",
      "obytné interiéry",
      "pracovny a kanceláře",
      "výraznější designový detail",
    ],
    img: "assets/img/products/drevene-zaluzie.jpg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-veniwood.pdf",
  },
  {
    title: "Plissé",
    desc: "Kompaktní stínění pro atypická okna, špalety a detailní řešení.",
    detail:
      "Plissé je kompaktní stínění pro okna, kde je potřeba subtilní systém, variabilní práce se světlem a přesné osazení. Hodí se pro špaletová, atypická i menší okna.",
    uses: [
      "špaletová okna",
      "atypické tvary",
      "menší okna",
      "jemná regulace soukromí",
      "nenápadné technické řešení",
    ],
    img: "assets/img/products/plisse.jpg",
    italyUrl: "https://mottura.com/en/products/",
    catalogUrl: "assets/catalogs/mottura-pleated-blinds.pdf",
  },
];

const catalogues = [
  {
    title: "FRAMES – Window technology",
    text: "Systémy pro instalaci přímo do rámu okna a specifická okenní řešení.",
    url: "assets/catalogs/mottura-frames.pdf",
  },
  {
    title: "GARDEN – Skylights",
    text: "Systémy pro světlíky, šikmé a horizontální prosklené plochy.",
    url: "assets/catalogs/mottura-garden.pdf",
  },
  {
    title: "OUTDOOR – Windproof technology",
    text: "Venkovní rolety a technické systémy s odolností proti větru.",
    url: "assets/catalogs/mottura-outdoor.pdf",
  },
  {
    title: "POWER – Motorized systems",
    text: "Motorické kolejnice a systémy pro ovládání závěsů.",
    url: "assets/catalogs/mottura-power.pdf",
  },
  {
    title: "ROLLBOX – Total technology",
    text: "Kazetové rolety a technické roletové systémy.",
    url: "assets/catalogs/mottura-rollbox.pdf",
  },
  {
    title: "STARBOX – Skylights indoor / outdoor",
    text: "Systémy pro světlíky a velké šikmé plochy v interiéru i exteriéru.",
    url: "assets/catalogs/mottura-starbox.pdf",
  },
  {
    title: "Tende a rullo – Roller blinds",
    text: "Látkové rolety, technické rolety a motorické varianty.",
    url: "assets/catalogs/mottura-roller-blinds.pdf",
  },
  {
    title: "Tende a pacchetto – Roman-shade systems",
    text: "Římské rolety a textilní systémy pro interiér.",
    url: "assets/catalogs/mottura-roman-shade-systems.pdf",
  },
  {
    title: "Tende a pannello – Panel track systems",
    text: "Panelové posuvné systémy pro velké plochy a členění interiéru.",
    url: "assets/catalogs/mottura-panel-track-systems.pdf",
  },
  {
    title: "Drappeggi – Drapery track systems",
    text: "Kolejnicové systémy pro záclony a závěsy.",
    url: "assets/catalogs/mottura-drapery-track-systems.pdf",
  },
  {
    title: "Plissé – Pleated blinds",
    text: "Plissé systémy pro detailní, atypická a špaletová okna.",
    url: "assets/catalogs/mottura-pleated-blinds.pdf",
  },
  {
    title: "Tende verticali – Vertical blinds",
    text: "Vertikální žaluzie a systémy pro komerční i rezidenční prostory.",
    url: "assets/catalogs/mottura-vertical-blinds.pdf",
  },
  {
    title: "TOPBOX 4140 – Concealed roller blinds",
    text: "Skryté roletové systémy pro čistý architektonický detail.",
    url: "assets/catalogs/mottura-topbox-4140.pdf",
  },
  {
    title: "VENIWOOD – Wood venetian blinds",
    text: "Dřevěné horizontální žaluzie a přírodní materiálový detail.",
    url: "assets/catalogs/mottura-veniwood.pdf",
  },
];

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

let modalTrigger = null;

function renderProducts() {
  const grid = document.querySelector("#productGrid");
  if (!grid) return;

  grid.innerHTML = products
    .map(
      (item, index) => `
    <button class="product-card reveal" type="button" data-product="${index}">
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <span>Zobrazit český detail →</span>
      </div>
    </button>
  `,
    )
    .join("");

  grid.querySelectorAll("[data-product]").forEach((button) => {
    button.addEventListener("click", () =>
      openProductModal(Number(button.dataset.product)),
    );
  });
}

function renderCatalogues() {
  const grid = document.querySelector("#catalogueGrid");
  if (!grid) return;

  grid.innerHTML = catalogues
    .map(
      (item) => `
    <a class="catalogue-card reveal" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <span class="pdf">PDF</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <strong>Otevřít katalog →</strong>
    </a>
  `,
    )
    .join("");
}

function openProductModal(index) {
  const item = products[index];
  const modal = document.querySelector("#productModal");
  const modalPanel = modal?.querySelector(".modal-panel");

  if (!item || !modal || !modalPanel) return;

  modalTrigger = document.activeElement;

  document.querySelector("#modalImage").src = item.img;
  document.querySelector("#modalImage").alt = item.title;
  document.querySelector("#modalTitle").textContent = item.title;
  document.querySelector("#modalDesc").textContent = item.detail;
  document.querySelector("#modalUses").innerHTML = item.uses
    .map((use) => `<li>${use}</li>`)
    .join("");
  document.querySelector("#modalNote").textContent =
    "Tento detail slouží jako české vysvětlení produktové skupiny. Přesné technické parametry, varianty profilů, motorů a příslušenství doporučujeme ověřit v katalogu nebo na oficiálním webu výrobce.";
  document.querySelector("#modalCatalog").href = item.catalogUrl;
  document.querySelector("#modalItaly").href = item.italyUrl;

  modal.classList.add("is-open");
  modal.hidden = false;
  modal.inert = false;
  document.body.classList.add("modal-open");
  modalPanel.focus();
}

function closeProductModal() {
  const modal = document.querySelector("#productModal");
  if (!modal?.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.hidden = true;
  modal.inert = true;
  document.body.classList.remove("modal-open");

  if (modalTrigger instanceof HTMLElement) {
    modalTrigger.focus();
  }
}

function initModal() {
  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeProductModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProductModal();
  });
}

function initMenu() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  els.forEach((el) => io.observe(el));
}

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length < 2 || prefersReducedMotion) return;

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
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
