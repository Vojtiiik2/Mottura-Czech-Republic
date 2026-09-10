const products = [
  {
    title: "Venkovní systémy",
    desc: "Technické venkovní stínění pro terasy, pergoly a prosklené plochy.",
    detail:
      "Venkovní systémy Mottura pomáhají regulovat sluneční záření a tepelný komfort ještě před vstupem světla do interiéru. Jsou určené pro technicky náročné venkovní aplikace.",
    uses: [
      "terasy a pergoly",
      "venkovní prosklené plochy",
      "screenové stínění",
      "omezení přehřívání interiéru",
      "rezidenční i komerční objekty",
    ],
    img: "assets/img/products/venkovni-systemy.jpg",
    italyUrl: "https://mottura.com/en/outdoor/",
    catalogUrl: "assets/catalogs/Mottura_Depliant_OUTDOOR.pdf",
  },
  {
    title: "Motorické systémy",
    desc: "Pohodlné ovládání stínění pro rezidenční i komerční projekty.",
    detail:
      "Motorické systémy umožňují pohodlné ovládání závěsů, rolet a dalšího stínění tlačítkem, dálkovým ovladačem nebo prostřednictvím systému chytré domácnosti.",
    uses: [
      "motorické závěsy a rolety",
      "ovládání vypínačem",
      "dálkové nebo chytré ovládání",
      "větší prosklené plochy",
      "prémiové rezidenční a komerční interiéry",
    ],
    img: "assets/img/products/motoricke-systemy.jpg",
    italyUrl:
      "https://mottura.com/en/products/power/?famiglia=indoor-en&tipo=linea-futura",
    catalogUrl: "assets/catalogs/Mottura_Depliant_POWER.pdf",
  },
  {
    title: "Dřevěné žaluzie",
    desc: "Přirozený materiál, přesná regulace světla a výrazný detail.",
    detail:
      "Dřevěné žaluzie kombinují přesnou regulaci světla s přírodním materiálovým dojmem. V interiéru mohou fungovat jako výrazný a zároveň praktický prvek.",
    uses: [
      "regulace světla a soukromí",
      "obytné interiéry",
      "pracovny a kanceláře",
      "přírodní materiálový efekt",
      "výraznější designový detail",
    ],
    img: "assets/img/products/drevene-zaluzie.jpg",
    italyUrl: "https://mottura.com/en/families/venetian-blinds/",
    catalogUrl: "assets/catalogs/Mottura_Depliant_VENIWOOD.pdf",
  },
  {
    title: "Plissé",
    desc: "Kompaktní stínění pro atypická okna, špalety a detailní řešení.",
    detail:
      "Plissé je subtilní a variabilní stínění vhodné pro okna, kde je potřeba přesné osazení a flexibilní práce se světlem i soukromím.",
    uses: [
      "špaletová okna",
      "atypické tvary",
      "menší okna",
      "jemná regulace soukromí",
      "nenápadné technické řešení",
    ],
    img: "assets/img/products/plisse.jpg",
    italyUrl: "https://mottura.com/en/families/pleated-curtains/",
    catalogUrl: "assets/catalogs/Mottura_Depliant_PLI.pdf",
  },
  {
    title: "Střešní systémy",
    desc: "Stínění pro světlíky, šikmá a atypická prosklení.",
    detail:
      "Střešní systémy řeší regulaci světla a tepelného komfortu u světlíků, zimních zahrad a dalších vodorovných nebo šikmých prosklených ploch.",
    uses: [
      "světlíky",
      "zimní zahrady",
      "šikmá okna",
      "vodorovná prosklení",
      "technicky náročné realizace",
    ],
    img: "assets/img/products/stresni-systemy.jpg",
    italyUrl: "https://mottura.com/en/families/skylights-curtains/",
    catalogUrl: "assets/catalogs/Mottura_Depliant_GARDEN.pdf",
  },
  {
    title: "Římské rolety",
    desc: "Elegantní textilní stínění s technicky čistým ovládáním.",
    detail:
      "Římské rolety spojují měkkost textilu s přesným technickým systémem. Hodí se tam, kde má být okno řešené elegantně a s menším objemem látky než u závěsů.",
    uses: [
      "koupelny, kuchyně a obytné místnosti",
      "dekorativní textilní stínění",
      "manuální i motorické ovládání",
      "atypická a menší okna",
      "rezidenční i komerční interiéry",
    ],
    img: "assets/img/products/rimske-rolety.jpg",
    italyUrl: "https://mottura.com/en/families/roman-blinds/",
    catalogUrl: "assets/catalogs/Mottura_Depliant_TENDE_A_PACCHETTO.pdf",
  },
  {
    title: "Rolety",
    desc: "Látkové a technické rolety pro přesnou regulaci světla.",
    detail:
      "Rolety Mottura nabízejí praktické řešení pro regulaci světla, soukromí a tepelného komfortu v rezidenčních i komerčních interiérech.",
    uses: [
      "látkové rolety",
      "screenové a technické látky",
      "manuální i motorické ovládání",
      "rezidenční a komerční projekty",
      "standardní i atypická okna",
    ],
    img: "assets/img/products/rolety-interierove.jpg",
    italyUrl: "https://mottura.com/en/families/roller-blinds/",
    catalogUrl: "assets/catalogs/Mottura_Depliant_TENDE_A_RULLO.pdf",
  },
  {
    title: "Designové systémy",
    desc: "Dekorativní systémy, které propojují funkci s výrazným vzhledem.",
    detail:
      "Designové systémy řady Futura propojují technické řešení zavěšení textilu s dekorativním vzhledem. Mohou se stát viditelnou součástí návrhu interiéru.",
    uses: [
      "dekorativní kolejnice a garnýže",
      "pohledové systémy",
      "moderní i osobité interiéry",
      "záclony a závěsy",
      "vyšší nároky na detail",
    ],
    img: "assets/img/products/designove-systemy.jpg",
    italyUrl: "https://mottura.com/en/families/linea-futura/",
    catalogUrl: "assets/catalogs/Mottura_Depliant_Linea_Decorativa_Futura.pdf",
  },
  {
    title: "Vertikální žaluzie",
    desc: "Plynulá regulace světla pro vysoká okna a velké plochy.",
    detail:
      "Vertikální žaluzie jsou vhodné pro větší prosklené plochy a interiéry, kde je potřeba průběžně regulovat světlo, soukromí a směr dopadajících paprsků.",
    uses: [
      "vysoká okna",
      "velké prosklené plochy",
      "kanceláře a komerční prostory",
      "obytné interiéry",
      "plynulá regulace světla",
    ],
    img: "assets/img/products/vertikalni-zaluzie.jpg",
    italyUrl: "https://mottura.com/en/families/vertical-awnings/",
    catalogUrl: "assets/catalogs/Mottura_Depliant_TENDE-VERTICALI.pdf",
  },
  {
    title: "Japonské stěny",
    desc: "Panelové systémy pro velké prosklené plochy a členění prostoru.",
    detail:
      "Japonské stěny pracují s většími posuvnými textilními panely. Mohou sloužit jako stínění, jemné členění prostoru nebo minimalistický architektonický prvek.",
    uses: [
      "velké prosklené plochy",
      "posuvné textilní panely",
      "členění prostoru",
      "minimalistické interiéry",
      "rezidenční i komerční projekty",
    ],
    img: "assets/img/products/japonske-steny.jpg",
    italyUrl: "https://mottura.com/en/families/panel-curtains/",
    catalogUrl: "assets/catalogs/Mottura_Depliant_TENDE_A_PANNELLO.pdf",
  },
  {
    title: "Kolejnicové systémy",
    desc: "Technické systémy pro přesné a spolehlivé zavěšení textilu.",
    detail:
      "Kolejnicové systémy tvoří technický základ pro kvalitní zavěšení záclon a závěsů. Lze je přizpůsobit způsobu montáže, dispozici i hmotnosti textilu.",
    uses: [
      "záclony a závěsy",
      "jednokolejné i vícekolejné řešení",
      "stropní a nástěnná montáž",
      "rovné i atypické dispozice",
      "hotely, byty, domy a kanceláře",
    ],
    img: "assets/img/products/kolejnice.jpg",
    italyUrl: "https://mottura.com/en/families/curtains-with-slides/",
    catalogUrl: "assets/catalogs/Mottura_Depliant_TENDE_DRAPPEGGIATE.pdf",
  },
  {
    title: "Látky",
    desc: "Textilie pro práci se světlem, soukromím a atmosférou interiéru.",
    detail:
      "Výběr látky ovlivňuje propustnost světla, soukromí, akustiku i celkový charakter interiéru. Konkrétní textilie se volí podle funkce místnosti a požadovaného výsledku.",
    uses: [
      "záclony a dekorativní závěsy",
      "dimout a blackout řešení",
      "akustické textilie",
      "rezidenční a komerční interiéry",
      "individuální kombinace materiálů",
    ],
    img: "assets/img/products/latky.jpg",
    italyUrl: "https://mottura.com/en/fabrics/",
    catalogUrl: null,
  },
];

const catalogues = [
  {
    title: "OUTDOOR – Venkovní systémy",
    text: "Technické venkovní stínění pro terasy, pergoly a prosklené plochy.",
    url: "assets/catalogs/Mottura_Depliant_OUTDOOR.pdf",
    img: "assets/img/catalogs/Mottura-Depliant-OUTDOOR.png",
  },
  {
    title: "POWER – Motorické systémy",
    text: "Motory a příslušenství pro automatizované ovládání stínění.",
    url: "assets/catalogs/Mottura_Depliant_POWER.pdf",
    img: "assets/img/catalogs/Mottura-Depliant-POWER.png",
  },
  {
    title: "VENIWOOD – Dřevěné žaluzie",
    text: "Dřevěné horizontální žaluzie pro regulaci světla a soukromí.",
    url: "assets/catalogs/Mottura_Depliant_VENIWOOD.pdf",
    img: "assets/img/catalogs/Mottura-Depliant-VENIWOOD.png",
  },
  {
    title: "PLI – Plissé",
    text: "Plissé systémy pro standardní, atypická a špaletová okna.",
    url: "assets/catalogs/Mottura_Depliant_PLI.pdf",
    img: "assets/img/catalogs/Mottura-Depliant-PLI.png",
  },
  {
    title: "GARDEN – Střešní systémy",
    text: "Systémy pro světlíky, šikmé a vodorovné prosklené plochy.",
    url: "assets/catalogs/Mottura_Depliant_GARDEN.pdf",
    img: "assets/img/catalogs/Mottura-Depliant-GARDEN.png",
  },
  {
    title: "TENDE A PACCHETTO – Římské rolety",
    text: "Textilní římské rolety pro rezidenční i komerční interiéry.",
    url: "assets/catalogs/Mottura_Depliant_TENDE_A_PACCHETTO.pdf",
    img: "assets/img/catalogs/Mottura-Depliant-TENDE-A-PACCHETTO.png",
  },
  {
    title: "TENDE A RULLO – Rolety",
    text: "Látkové a technické rolety v manuálním i motorickém provedení.",
    url: "assets/catalogs/Mottura_Depliant_TENDE_A_RULLO.pdf",
    img: "assets/img/catalogs/Mottura-Depliant-TENDE-A-RULLO.png",
  },
  {
    title: "FUTURA – Designové systémy",
    text: "Dekorativní systémy pro funkční a vizuálně výrazné zavěšení textilu.",
    url: "assets/catalogs/Mottura_Depliant_Linea_Decorativa_Futura.pdf",
    img: "assets/img/catalogs/Miniatura_Futura-1-1.jpg",
  },
  {
    title: "TENDE VERTICALI – Vertikální žaluzie",
    text: "Vertikální žaluzie pro vysoká okna a velké prosklené plochy.",
    url: "assets/catalogs/Mottura_Depliant_TENDE-VERTICALI.pdf",
    img: "assets/img/catalogs/Mottura-Depliant-TENDE-VERTICALI.png",
  },
  {
    title: "TENDE A PANNELLO – Japonské stěny",
    text: "Panelové posuvné systémy pro velké plochy a členění interiéru.",
    url: "assets/catalogs/Mottura_Depliant_TENDE_A_PANNELLO.pdf",
    img: "assets/img/catalogs/Mottura-Depliant-TENDE-A-PANNELLO.png",
  },
  {
    title: "DRAPPEGGI – Kolejnicové systémy",
    text: "Kolejnicové systémy pro spolehlivé zavěšení záclon a závěsů.",
    url: "assets/catalogs/Mottura_Depliant_TENDE_DRAPPEGGIATE.pdf",
    img: "assets/img/catalogs/Mottura-Depliant-TENDE-DRAPPEGGIATE.png",
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
      <img class="catalogue-cover" src="${item.img}" alt="Obálka katalogu ${item.title}" loading="lazy">
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
  const catalogLink = document.querySelector("#modalCatalog");
  catalogLink.hidden = !item.catalogUrl;

  if (item.catalogUrl) {
    catalogLink.href = item.catalogUrl;
  } else {
    catalogLink.removeAttribute("href");
  }

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
