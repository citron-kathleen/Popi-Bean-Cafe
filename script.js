// 1. DATA INITIALIZATION
// ======================================================

const defaultMenu = [
  // --- DRINKS WITH SIZES ---
  {
    id: 1,
    name: "Caramel Latte",
    category: "drinks",
    img: "images/caramel_latte.png",
    sizes: [
      { label: "12oz", price: 85 },
      { label: "16oz", price: 110 },
      { label: "22oz", price: 139 },
    ],
  },

  {
    id: 4,
    name: "Americano Sunrise",
    category: "drinks",
    img: "images/americano_sunrise.png",
    sizes: [
      { label: "12oz", price: 95 },
      { label: "16oz", price: 125 },
      { label: "22oz", price: 145 },
    ],
  },

  {
    id: 7,
    name: "Cinnamon Latte",
    category: "drinks",
    img: "images/cinnamon_latte.png",
    sizes: [
      { label: "12oz", price: 95 },
      { label: "16oz", price: 110 },
      { label: "22oz", price: 139 },
    ],
  },

  {
    id: 10,
    name: "Spanish Latte",
    category: "drinks",
    img: "images/spanish_latte.png",
    sizes: [
      { label: "12oz", price: 95 },
      { label: "16oz", price: 125 },
      { label: "22oz", price: 145 },
    ],
  },

  {
    id: 13,
    name: "Mocha Latte",
    category: "drinks",
    img: "images/mocha_latte.png",
    sizes: [
      { label: "12oz", price: 85 },
      { label: "16oz", price: 110 },
      { label: "22oz", price: 139 },
    ],
  },

  {
    id: 16,
    name: "Kape-densada",
    category: "drinks",
    img: "images/kape-densada.png",
    sizes: [
      { label: "12oz", price: 85 },
      { label: "16oz", price: 110 },
      { label: "22oz", price: 139 },
    ],
  },

  {
    id: 19,
    name: "Matcha Espresso",
    category: "drinks",
    img: "images/matcha_espresso.png",
    sizes: [
      { label: "12oz", price: 95 },
      { label: "16oz", price: 125 },
      { label: "22oz", price: 145 },
    ],
  },

  {
    id: 22,
    name: "Matcha Latte",
    category: "drinks",
    img: "images/matcha_latte.jpg",
    sizes: [
      { label: "12oz", price: 90 },
      { label: "16oz", price: 110 },
      { label: "22oz", price: 139 },
    ],
  },

  {
    id: 25,
    name: "Blueberry Matcha",
    category: "drinks",
    img: "images/blueberry_matcha.png",
    sizes: [
      { label: "16oz", price: 139 },
      { label: "22oz", price: 159 },
    ],
  },

  {
    id: 27,
    name: "Strawberry Matcha",
    category: "drinks",
    img: "images/stawberry_matcha.png",
    sizes: [
      { label: "16oz", price: 139 },
      { label: "22oz", price: 159 },
    ],
  },

  {
    id: 29,
    name: "Mango Matcha",
    category: "drinks",
    img: "images/mango_matcha.png",
    sizes: [
      { label: "16oz", price: 139 },
      { label: "22oz", price: 159 },
    ],
  },

  {
    id: 31,
    name: "Strawberry Fruit Tea",
    category: "drinks",
    img: "images/strawberry.png",
    sizes: [
      { label: "16oz", price: 65 },
      { label: "22oz", price: 80 },
    ],
  },

  {
    id: 33,
    name: "Passion Fruit Tea",
    category: "drinks",
    img: "images/passion.png",
    sizes: [
      { label: "16oz", price: 75 },
      { label: "22oz", price: 90 },
    ],
  },

  {
    id: 35,
    name: "Lychee Blueberry Tea",
    category: "drinks",
    img: "images/lychee.png",
    sizes: [
      { label: "16oz", price: 75 },
      { label: "22oz", price: 90 },
    ],
  },

  {
    id: 37,
    name: "Peach Mango Tea",
    category: "drinks",
    img: "images/peach.png",
    sizes: [
      { label: "16oz", price: 75 },
      { label: "22oz", price: 90 },
    ],
  },

  {
    id: 39,
    name: "Green Apple Tea",
    category: "drinks",
    img: "images/green_apple.png",
    sizes: [
      { label: "16oz", price: 65 },
      { label: "22oz", price: 80 },
    ],
  },

  {
    id: 41,
    name: "Kiwi Tea",
    category: "drinks",
    img: "images/kiwi.png",
    sizes: [
      { label: "16oz", price: 65 },
      { label: "22oz", price: 80 },
    ],
  },

  {
    id: 43,
    name: "Yakult Strawberry",
    category: "drinks",
    img: "images/yakult_strawberry.png",
    sizes: [
      { label: "16oz", price: 110 },
      { label: "22oz", price: 134 },
    ],
  },

  {
    id: 45,
    name: "Yakult Blueberry",
    category: "drinks",
    img: "images/yakult_blueberry.png",
    sizes: [
      { label: "16oz", price: 110 },
      { label: "22oz", price: 134 },
    ],
  },

  {
    id: 47,
    name: "Yakult Passion Fruit",
    category: "drinks",
    img: "images/yakult_passion.png",
    sizes: [
      { label: "16oz", price: 110 },
      { label: "22oz", price: 134 },
    ],
  },

  {
    id: 49,
    name: "Yakult Lemon",
    category: "drinks",
    img: "images/yakult_lemon.png",
    sizes: [
      { label: "16oz", price: 110 },
      { label: "22oz", price: 134 },
    ],
  },

  // --- SNACKS ---
  {
    id: 51,
    name: "Nachos",
    price: 79,
    category: "snacks",
    img: "images/nachos.png",
  },
  {
    id: 52,
    name: "Fries",
    price: 49,
    category: "snacks",
    img: "images/fries.png",
  },
  {
    id: 53,
    name: "Nuggets (7pcs)",
    price: 65,
    category: "snacks",
    img: "images/nuggets.png",
  },
  {
    id: 54,
    name: "PB Meryenda Set",
    price: 170,
    category: "snacks",
    img: "images/meryenda_set.png",
  },
  {
    id: 55,
    name: "Crossfles Biscoff",
    price: 130,
    category: "snacks",
    img: "images/crossfle_biscoff.png",
  },
  {
    id: 56,
    name: "Crossfles Banana Caramel",
    price: 130,
    category: "snacks",
    img: "images/crossfle_banana.png",
  },
  {
    id: 57,
    name: "Crossfles Oreo",
    price: 130,
    category: "snacks",
    img: "images/crossfle_oreo.png",
  },
  {
    id: 58,
    name: "Hash Brown",
    price: 30,
    category: "snacks",
    img: "images/hashbrown.png",
  },
  {
    id: 59,
    name: "Pansit Canton",
    price: 35,
    category: "snacks",
    img: "images/pancit_canton.png",
  },
  {
    id: 60,
    name: "Buldak Carbonara",
    price: 125,
    category: "snacks",
    img: "images/buldak_carbonara.png",
  },
  {
    id: 61,
    name: "Buldak Cheese",
    price: 125,
    category: "snacks",
    img: "images/buldak_cheese.png",
  },
  {
    id: 62,
    name: "Shin Ramyun",
    price: 125,
    category: "snacks",
    img: "images/shin_ramyun.png",
  },

  // --- ADD-ONS ---
  {
    id: 63,
    name: "Nata",
    price: 10,
    category: "addons",
    img: "images/nata.png",
  },
  {
    id: 64,
    name: "Fruit Jelly",
    price: 10,
    category: "addons",
    img: "images/fruit_jelly.png",
  },
  {
    id: 65,
    name: "Yakult Add-on",
    price: 25,
    category: "addons",
    img: "images/yakult.png",
  },
  {
    id: 66,
    name: "Egg",
    price: 15,
    category: "addons",
    img: "images/egg.png",
  },
];

let menu = JSON.parse(localStorage.getItem("popiBeanMenu")) || defaultMenu;
let order = [];
let currentCategory = "drinks";
let currentPage = 1;
const itemsPerPage = 9;

window.onload = () => {
  renderMenu();
  renderMaintenanceList();
};

function saveToLocalStorage() {
  localStorage.setItem("popiBeanMenu", JSON.stringify(menu));
}

function renderMenu() {
  const container = document.getElementById("menuItems");
  if (!container) return;

  const filtered = menu.filter((item) => item.category === currentCategory);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(start, start + itemsPerPage);

  container.innerHTML = "";

  paginatedItems.forEach((item) => {
    const itemImg = item.img ? item.img : "logo.png";
    let priceSection = "";
    let actionSection = "";

    if (item.sizes) {
      priceSection = `<span id="price-target-${
        item.id
      }" style="color: var(--green-main); font-weight: 800; font-size: 22px;">₱${item.sizes[0].price.toFixed(
        2
      )}</span>`;
      actionSection = `
        <div style="display: flex; gap: 8px; margin-top: 10px;">
          <select id="size-select-${
            item.id
          }" class="custom-dropdown" onchange="updateCardPrice(${item.id})" 
                  style="padding: 6px; border-radius: 8px; border: 1px solid var(--green-main); font-weight: bold;">
            ${item.sizes
              .map((s) => `<option value="${s.price}">${s.label}</option>`)
              .join("")}
          </select>
          <button class="btn-primary" onclick="addSelectedSizeToOrder(${
            item.id
          })" style="padding: 5px 15px; font-size: 12px;">ADD</button>
        </div>`;
    } else {
      priceSection = `<span style="color: var(--green-main); font-weight: 800; font-size: 22px;">₱${item.price.toFixed(
        2
      )}</span>`;
      actionSection = `
        <div style="margin-top: 10px;">
          <button class="btn-primary" onclick="addToOrder(${item.id})" style="padding: 5px 15px; font-size: 12px; width: 100%;">ADD</button>
        </div>`;
    }

    // ITO ANG FIX: Ginamit ang .item-img-container para laging perfect circle
    container.innerHTML += `
      <div class="menu-item-card" style="background: #fff; padding: 20px; border-radius: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); display: flex; align-items: center; gap: 20px;">
          <div class="item-img-container">
            <img src="${itemImg}" alt="${item.name}" onerror="this.src='logo.png'">
          </div>
          <div class="item-details" style="text-align: left; flex: 1;">
            <strong style="display: block; font-size: 18px; color: var(--green-dark); margin-bottom: 5px;">${item.name}</strong>
            ${priceSection}
            ${actionSection}
          </div>
      </div>`;
  });

  document.getElementById("pageDisplay").innerText = `Page ${currentPage} of ${
    totalPages || 1
  }`;
  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = currentPage >= totalPages;
}

// 3. SMART PRICE UPDATE & ADDING
// ======================================================
function updateCardPrice(id) {
  const select = document.getElementById(`size-select-${id}`);
  const priceDisplay = document.getElementById(`price-target-${id}`);
  priceDisplay.innerText = `₱${parseFloat(select.value).toFixed(2)}`;
}

function addSelectedSizeToOrder(id) {
  const item = menu.find((m) => m.id === id);
  const select = document.getElementById(`size-select-${id}`);
  const selectedLabel = select.options[select.selectedIndex].text;
  const selectedPrice = parseFloat(select.value);

  const orderItem = {
    id: `${item.id}-${selectedLabel}`,
    name: `${item.name} (${selectedLabel})`,
    price: selectedPrice,
    qty: 1,
  };

  const existing = order.find((o) => o.id === orderItem.id);
  if (existing) {
    existing.qty++;
  } else {
    order.push(orderItem);
  }
  renderOrder();
}

function addToOrder(id) {
  const item = menu.find((m) => m.id === id);
  const existing = order.find((o) => o.id === id);
  if (existing) {
    existing.qty++;
  } else {
    order.push({ ...item, qty: 1 });
  }
  renderOrder();
}

// 4. ORDER & CALCULATION LOGIC
// ======================================================
function updateQty(id, delta) {
  const item = order.find((o) => o.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) order = order.filter((o) => o.id !== id);
  }
  renderOrder();
}

function renderOrder() {
  const list = document.getElementById("orderList");
  let subtotal = 0;
  list.innerHTML = "";

  order.forEach((item) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    list.innerHTML += `
      <div class="order-item" style="display: flex; align-items: center; padding: 18px 0; border-bottom: 2px dashed #eee; width: 100%;">
          <div style="width: 45%; min-width: 0; flex-shrink: 1; text-align: left;">
            <strong style="display: block; font-size: 18px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--green-dark); letter-spacing: 0.5px;">
              ${item.name}
            </strong>
            <small style="color: #777; font-size: 14px; font-weight: 600;">₱${item.price.toFixed(
              2
            )}</small>
          </div>
          <div class="no-print" style="width: 30%; display: flex; align-items: center; justify-content: center; gap: 12px; flex-shrink: 0;">
              <button class="qty-btn" onclick="updateQty('${item.id}', -1)" 
                      style="width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--green-main); background: #fff; cursor: pointer; font-weight: 900; font-size: 18px; display: flex; align-items: center; justify-content: center; color: var(--green-main);">-</button>
              <span style="font-weight: 800; width: 25px; text-align: center; font-size: 20px; color: #333;">${
                item.qty
              }</span>
              <button class="qty-btn" onclick="updateQty('${item.id}', 1)" 
                      style="width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--green-main); background: #fff; cursor: pointer; font-weight: 900; font-size: 18px; display: flex; align-items: center; justify-content: center; color: var(--green-main);">+</button>
          </div>
          <div style="width: 25%; text-align: right; font-weight: 900; font-size: 20px; flex-shrink: 0; color: #111;">
            ₱${itemTotal.toFixed(2)}
          </div>
      </div>`;
  });

  const tax = subtotal * 0.06;
  const total = subtotal + tax;

  document.getElementById("subtotalDisplay").innerText = `₱${subtotal.toFixed(
    2
  )}`;
  document.getElementById("taxDisplay").innerText = `₱${tax.toFixed(2)}`;
  document.getElementById("totalDisplay").innerText = `₱${total.toFixed(2)}`;
}

// 5. NAVIGATION & MODALS
// ======================================================
function setCategory(cat, e) {
  currentCategory = cat;
  currentPage = 1;
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  e.target.classList.add("active");
  renderMenu();
}

function changePage(s) {
  currentPage += s;
  renderMenu();
}

function clearOrder() {
  const modal = document.getElementById("confirmModal");
  const confirmBtn = document.getElementById("confirmActionBtn");
  modal.style.display = "flex";

  confirmBtn.onclick = function () {
    order = [];
    renderOrder();
    closeConfirmModal();
  };
}

function closeConfirmModal() {
  document.getElementById("confirmModal").style.display = "none";
}

function placeOrder() {
  if (order.length > 0) window.print();
  else alert("Please add items first.");
}

function openMaintenance() {
  document.getElementById("maintenanceModal").style.display = "flex";
}

function closeMaintenance() {
  document.getElementById("maintenanceModal").style.display = "none";
}

function renderMaintenanceList() {
  const dropdown = document.getElementById("deleteDropdown");
  if (!dropdown) return;
  dropdown.innerHTML = '<option value="">-- Select Item to Delete --</option>';
  menu.forEach((item) => {
    dropdown.innerHTML += `<option value="${item.id}">${item.name}</option>`;
  });
}

function addItem() {
  const n = document.getElementById("itemName").value;
  const p = document.getElementById("itemPrice").value;
  const c = document.getElementById("itemCat").value;
  if (!n || !p) return alert("Punan lahat!");

  menu.push({
    id: Date.now(),
    name: n,
    price: parseFloat(p),
    category: c,
    img: "logo.png",
  });
  saveToLocalStorage();
  renderMenu();
  renderMaintenanceList();
  alert("Added!");
}

function deleteItemSelected() {
  const id = document.getElementById("deleteDropdown").value;
  if (!id) return;
  menu = menu.filter((m) => m.id != id);
  saveToLocalStorage();
  renderMenu();
  renderMaintenanceList();
  alert("Deleted!");
}

function confirmLogout() {
  document.getElementById("logoutModal").style.display = "flex";
}

function closeLogoutModal() {
  document.getElementById("logoutModal").style.display = "none";
}

function executeLogout() {
  location.href = "index.html";
}

window.addEventListener("click", function (event) {
  const logoutModal = document.getElementById("logoutModal");
  const confirmModal = document.getElementById("confirmModal");
  if (event.target == logoutModal) closeLogoutModal();
  if (event.target == confirmModal) closeConfirmModal();
});
