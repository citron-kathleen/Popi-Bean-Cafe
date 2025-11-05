// Dito nakalagay lahat ng products sa menu.
// Bawat isa may id, category, name, price, at image.
// 'const' ginamit kasi hindi ito babaguhin.
const ITEMS = [
  {
    id: "c1", // unique ID para makilala
    cat: "coffee", // category ng item
    name: "caramel latte", // pangalan ng item
    price: 85, // presyo
    img: "espresso.png",
  },
  {
    id: "c2",
    cat: "coffee",
    name: "Cappuccino",
    price: 140,
    img: svgData("#a87652"),
  },
  {
    id: "c3",
    cat: "coffee",
    name: "Latte",
    price: 130,
    img: svgData("#c89e7a"),
  },
  {
    id: "c4",
    cat: "coffee",
    name: "Americano",
    price: 110,
    img: svgData("#8b6b4a"),
  },
  {
    id: "c5",
    cat: "coffee",
    name: "ice tea",
    price: 60,
    img: svgData("#8b6b4a"),
  },
  {
    id: "c6",
    cat: "coffee",
    name: "yakult",
    price: 60,
    img: svgData("#8b6b4a"),
  },

  {
    id: "s1",
    cat: "snack",
    name: "Cheesecake",
    price: 150,
    img: svgData("#f1d6c2"),
  },
  {
    id: "s2",
    cat: "snack",
    name: "Banana Bread",
    price: 95,
    img: svgData("#e4b97a"),
  },
  {
    id: "s3",
    cat: "snack",
    name: "Avocado Toast",
    price: 125,
    img: svgData("#a6c88a"),
  },
  {
    id: "s4",
    cat: "snack",
    name: "Blueberry Muffin",
    price: 100,
    img: svgData("#c7d0f2"),
  },
];

// DATE DISPLAY
// Kinukuha ang current date/time at ipinapakita sa top-right corner.
document.getElementById("today").textContent = new Date().toLocaleString();

// ELEMENT REFERENCES
// Para di na paulit-ulit mag-query sa Document Object Model (HTML elements)
const itemsGrid = document.getElementById("items-grid"); // kung saan ilalagay ang cards ng menu
const orderListEl = document.getElementById("order-list"); // kung saan ilalagay ang mga in-order

// TABS (Coffee / Snack)
// Kapag pinindot ang tab, papalitan kung anong category ng items ipapakita.
document.querySelectorAll(".tab").forEach((t) =>
  t.addEventListener("click", () => {
    // Alisin ang 'active' sa lahat ng tab
    document
      .querySelectorAll(".tab")
      .forEach((x) => x.classList.remove("active"));
    // dito nakalagay ang 'active' sa pinipindot
    t.classList.add("active");
    // I-render ulit ang items base sa category na pinili
    renderItems(t.dataset.cat);
  })
);

// SEARCH BAR FUNCTION
// Kapag nag-type ka sa search input, magfi-filter ng items na tugma sa type mo.
document.getElementById("search").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase(); // text na tinatype mo
  const active = document.querySelector(".tab.active").dataset.cat; // alamin kung anong category(coffee/snack)
  renderItems(active, q); // tawagin ulit ang render function para magpakita ng results
});

// BASKET / ORDER STORAGE
// Kinukuha ang basket data sa localStorage (para di mawala pag ni-refresh)
let basket = JSON.parse(localStorage.getItem("gg_basket") || "[]");
// Kinoconvert lahat ng numeric values para siguradong number type
basket = basket.map((i) => ({
  ...i,
  price: Number(i.price),
  qty: Number(i.qty),
  total: Number(i.total),
}));

// Function para i-save ulit sa localStorage
function save() {
  localStorage.setItem("gg_basket", JSON.stringify(basket));
}

// TEMPORARY IMAGE GENERATOR (PWEDE IDELETE KAPAG MAY IMAGE NA US)
// Dahil wala pa tayong totoong images, kulay na box lang ito
// Para may placeholder image sa bawat product
function svgData(color) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='140'><rect rx='12' width='100%' height='100%' fill='${color}'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='#fff'>Image</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// DISPLAYING (RENDERING) ITEMS
// Ito ang gumagawa ng cards ng bawat product sa screen.
function renderItems(cat = "coffee", q = "") {
  itemsGrid.innerHTML = ""; // PARA CLEAR MUNA KAPAG KAOPEN
  ITEMS.filter(
    (i) => i.cat === cat && (!q || i.name.toLowerCase().includes(q)) // filter by category at search
  ).forEach((i) => {
    // Gumagawa ng div para sa bawat item
    const card = document.createElement("div");
    card.className = "card";

    //kaya nakaganyan yung img src nyan para dependent sya dun sa nasa taas na image.
    card.innerHTML = `
      <img src="${i.img}" alt="${i.name}" /> 
      <div style="text-align:center">
        <div class="name">${i.name}</div>
        <div class="price">₱${i.price.toFixed(2)}</div>
      </div>
      <div>
        <button class="addbtn" onclick="addToBasket('${i.id}')">+</button>
      </div>
    `;
    itemsGrid.appendChild(card);
  });
}

// INITIAL RENDER
// Kapag unang bukas ang page, ipapakita agad ang coffee items
renderItems("coffee");
renderOrder();

// ADD ITEM TO BASKET
// Kapag pinindot ang '+' button sa card
function addToBasket(id) {
  const it = ITEMS.find((x) => x.id === id); // hanapin item sa list
  if (!it) return;
  const existing = basket.find((b) => b.id === id); // check kung meron na sa basket

  if (existing) {
    existing.qty += 1; // dagdagan quantity
    existing.total = existing.qty * existing.price;
  } else {
    basket.push({
      id: it.id,
      name: it.name,
      price: it.price,
      qty: 1,
      total: it.price,
      img: it.img,
    });
  }
  save();
  renderOrder(); // update display
}

// DISPLAY ORDER LIST (RIGHT SIDE)
// Dito lumalabas ang mga oorderin ni customer
function renderOrder() {
  orderListEl.innerHTML = ""; // pang clear lang ito

  // Kapag wala pang laman
  if (basket.length === 0) {
    orderListEl.innerHTML =
      '<div style="color:var(--muted);padding:12px;text-align:center">No items yet. Add from left.</div>';
  }

  let sub = 0; // subtotal
  basket.forEach((it, idx) => {
    sub += it.total;

    // Gumagawa ng row para sa bawat order item
    const row = document.createElement("div");
    row.className = "order-item";

    // Display ng order item
    row.innerHTML = `
      <div class="meta">
        <div style="font-weight:600">${it.name}</div>
        <div style="color:var(--muted);font-size:13px">₱${it.price.toFixed()} each</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:end;gap:6px">
        <div class="qty">
          <button onclick="changeQty(${idx},-1)">-</button>
          <div style="min-width:28px;text-align:center">${it.qty}</div>
          <button onclick="changeQty(${idx},1)">+</button>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <div style="font-weight:700">₱${it.total.toFixed(2)}</div>
          <button class="remove" onclick="removeItem(${idx})">Remove</button>
        </div>
      </div>
    `;
    orderListEl.appendChild(row);
  });

  // Tax at total computation
  const tax = sub * 0.06;
  document.getElementById("sub").textContent = `₱${sub.toFixed(2)}`;
  document.getElementById("tax").textContent = `₱${tax.toFixed(2)}`;
  document.getElementById("total").textContent = `₱${(sub + tax).toFixed(2)}`;
}

// CHANGE QUANTITY FUNCTION
// Kapag pinindot ang + or - sa order item mababawasan or madadagdagan ito
function changeQty(index, delta) {
  basket[index].qty += delta;
  if (basket[index].qty < 1) basket[index].qty = 1; // bawal bumaba sa 1
  basket[index].total = basket[index].qty * basket[index].price;
  save();
  renderOrder();
}

// REMOVE ITEM FUNCTION
// Kapag pinindot ang “Remove” button sa order list automatically mawawala ito.
function removeItem(index) {
  basket.splice(index, 1); // tanggalin yung item sa basket array
  save();
  renderOrder();
}

// CLEAR BASKET FUNCTION
// Kapag pinindot ang “Clear” button sa baba para maclear ang basket
function clearBasket() {
  if (!confirm("Clear all items?")) return; // may tanong muna bago burahin lahat
  basket = [];
  save();
  renderOrder();
}

// TOGGLE BUTTONS (DINE IN / TAKE OUT)
// Kapag pinindot ang dine o take button, magpapalit ng style (active)
const dineBtn = document.getElementById("dineBtn");
const takeBtn = document.getElementById("takeBtn");

dineBtn.addEventListener("click", () => {
  dineBtn.classList.add("active");
  takeBtn.classList.remove("active");
});
takeBtn.addEventListener("click", () => {
  takeBtn.classList.add("active");
  dineBtn.classList.remove("active");
});

// PLACE ORDER FUNCTION
// Kapag tapos na mag-order at gusto nang i-print ang resibo (TENTATIVE)
function placeOrder() {
  if (basket.length === 0) {
    alert("No items to place!");
    return;
  }

  const customer = prompt("Customer name (optional)", "Guest") || "Guest";
  const mode = dineBtn.classList.contains("active") ? "Dine In" : "Take Out";

  // Gumagawa ng text format ng resibo
  let receipt = `\n\n\tPOPI BEAN CAFE\n\tOrder Receipt\n\t${new Date().toLocaleString()}\n\tMode: ${mode}\n\tCustomer: ${customer}\n\n`;
  receipt += "Item\tQty\tPrice\tTotal\n";
  let sub = 0;
  basket.forEach((it) => {
    receipt += `${it.name}\t${it.qty}\t₱${it.price.toFixed(
      2
    )}\t₱${it.total.toFixed(2)}\n`;
    sub += it.total;
  });
  const tax = sub * 0.06;
  const tot = sub + tax;
  receipt += `\nSubtotal:\t₱${sub.toFixed(2)}\nTax (6%):\t₱${tax.toFixed(
    2
  )}\nTotal:\t₱${tot.toFixed(2)}\n\nThank you!`;

  // Bubuksan ang bagong window para sa print preview
  const w = window.open("", "_blank");
  w.document.write(
    `<pre style="font-family:monospace; font-size:20px">${receipt}</pre>`
  );
  w.print();
  w.close();

  // Pagkatapos magprint, linisin ulit ang basket
  basket = [];
  save();
  renderOrder();
}

// EXPOSE FUNCTIONS TO WINDOW
// Para magamit pa rin yung functions sa HTML onclick=""
window.addToBasket = addToBasket;
window.changeQty = changeQty;
window.removeItem = removeItem;
window.clearBasket = clearBasket;
window.placeOrder = placeOrder;
