// Default menu data (pang-initial load ng system)
let defaultMenu = [
  { id: 1, name: "Caramel Latte (12oz)", price: 85, category: "drinks" },
  { id: 2, name: "Caramel Latte (16oz)", price: 110, category: "drinks" },
  { id: 3, name: "Caramel Latte (22oz)", price: 139, category: "drinks" },
  { id: 4, name: "Americano Sunrise (12oz)", price: 95, category: "drinks" },
  { id: 5, name: "Americano Sunrise (16oz)", price: 125, category: "drinks" },
  { id: 6, name: "Americano Sunrise (22oz)", price: 145, category: "drinks" },
  { id: 7, name: "Cinnamon Latte (12oz)", price: 95, category: "drinks" },
  { id: 8, name: "Cinnamon Latte (16oz)", price: 110, category: "drinks" },
  { id: 9, name: "Cinnamon Latte (22oz)", price: 139, category: "drinks" },
  { id: 10, name: "Spanish Latte (12oz)", price: 95, category: "drinks" },
  { id: 11, name: "Spanish Latte (16oz)", price: 125, category: "drinks" },
  { id: 12, name: "Spanish Latte (22oz)", price: 145, category: "drinks" },
  { id: 13, name: "Mocha Latte (12oz)", price: 85, category: "drinks" },
  { id: 14, name: "Mocha Latte (16oz)", price: 110, category: "drinks" },
  { id: 15, name: "Mocha Latte (22oz)", price: 139, category: "drinks" },
  { id: 16, name: "Kape-densada (12oz)", price: 85, category: "drinks" },
  { id: 17, name: "Kape-densada (16oz)", price: 110, category: "drinks" },
  { id: 18, name: "Kape-densada (22oz)", price: 139, category: "drinks" },
  { id: 19, name: "Matcha Espresso (12oz)", price: 95, category: "drinks" },
  { id: 20, name: "Matcha Espresso (16oz)", price: 125, category: "drinks" },
  { id: 21, name: "Matcha Espresso (22oz)", price: 145, category: "drinks" },
  { id: 22, name: "Matcha Latte (12oz)", price: 90, category: "drinks" },
  { id: 23, name: "Matcha Latte (16oz)", price: 110, category: "drinks" },
  { id: 24, name: "Matcha Latte (22oz)", price: 139, category: "drinks" },
  { id: 25, name: "Blueberry Matcha (16oz)", price: 139, category: "drinks" },
  { id: 26, name: "Blueberry Matcha (22oz)", price: 159, category: "drinks" },
  { id: 27, name: "Strawberry Matcha (16oz)", price: 139, category: "drinks" },
  { id: 28, name: "Strawberry Matcha (22oz)", price: 159, category: "drinks" },
  { id: 29, name: "Mango Matcha (16oz)", price: 139, category: "drinks" },
  { id: 30, name: "Mango Matcha (22oz)", price: 159, category: "drinks" },

  // Fruit tea products
  {
    id: 31,
    name: "Strawberry Fruit Tea (16oz)",
    price: 65,
    category: "drinks",
  },
  {
    id: 32,
    name: "Strawberry Fruit Tea (22oz)",
    price: 80,
    category: "drinks",
  },
  { id: 33, name: "Passion Fruit Tea (16oz)", price: 75, category: "drinks" },
  { id: 34, name: "Passion Fruit Tea (22oz)", price: 90, category: "drinks" },

  // Yakult drinks
  { id: 43, name: "Yakult Strawberry (16oz)", price: 110, category: "drinks" },
  { id: 44, name: "Yakult Strawberry (22oz)", price: 134, category: "drinks" },

  // Snacks
  { id: 51, name: "Nachos", price: 79, category: "snacks" },
  { id: 52, name: "Fries", price: 49, category: "snacks" },

  // Add-ons
  { id: 63, name: "Nata", price: 10, category: "addons" },
];

// Load menu from LocalStorage para di mawala ang admin edits
let menu = JSON.parse(localStorage.getItem("popiMenu")) || defaultMenu;

// Cart ng customer
let order = [];

// UI state variables
let currentCategory = "drinks"; // default tab
let currentPage = 1; // pagination page
let orderType = "Dine-In"; // order mode

const itemsPerPage = 15; // items per page sa menu

// Auto run pag nag-load ang page
window.onload = () => {
  renderMenu(); // display menu items
  renderMaintenanceList(); // display admin list
};

// MENU DISPLAY

function renderMenu() {
  const container = document.getElementById("menuItems");

  // Filter products based sa category
  const filtered = menu.filter((item) => item.category === currentCategory);

  // Compute total pages
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  // Pagination logic
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(start, start + itemsPerPage);

  container.innerHTML = ""; // clear UI

  // Display each menu item
  paginatedItems.forEach((item) => {
    container.innerHTML += `
      <button onclick="addToOrder(${item.id})">
        <strong>${item.name}</strong>
        <span>₱${item.price.toFixed(2)}</span>
      </button>`;
  });

  // Update page info
  document.getElementById("pageDisplay").innerText = `Page ${currentPage} of ${
    totalPages || 1
  }`;

  // Disable buttons kapag wala nang page
  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = currentPage >= totalPages;
}

// ORDER SYSTEM

function addToOrder(id) {
  const item = menu.find((m) => m.id === id); // hanapin product
  const existing = order.find((o) => o.id === id); // check duplicate

  if (existing) {
    existing.qty++; // dagdag quantity
  } else {
    order.push({ ...item, qty: 1 }); // add new item
  }

  renderOrder(); // update UI
}

function renderOrder() {
  const list = document.getElementById("orderList");
  let subtotal = 0;
  list.innerHTML = "";

  order.forEach((item) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    list.innerHTML += `
      <div>
        <strong>${item.name}</strong>
        <button onclick="updateQty(${item.id}, -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="updateQty(${item.id}, 1)">+</button>
        <span>₱${itemTotal.toFixed(2)}</span>
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

// ADMIN MAINTENANCE

function renderMaintenanceList() {
  const dropdown = document.getElementById("deleteDropdown");
  if (!dropdown) return;

  dropdown.innerHTML = '<option value="">Select Item</option>';

  menu.forEach((item) => {
    dropdown.innerHTML += `
      <option value="${item.id}">${item.name}</option>`;
  });
}

function addItem() {
  const n = document.getElementById("itemName").value;
  const p = document.getElementById("itemPrice").value;
  const c = document.getElementById("itemCat").value;

  if (n === "" || p === "") {
    alert("Fill all fields");
    return;
  }

  menu.push({ id: Date.now(), name: n, price: parseFloat(p), category: c });

  localStorage.setItem("popiMenu", JSON.stringify(menu));

  renderMenu();
  renderMaintenanceList();
}

function deleteItemSelected() {
  const selectedId = document.getElementById("deleteDropdown").value;
  if (!selectedId) return alert("Select item first");

  menu = menu.filter((m) => m.id != selectedId);

  localStorage.setItem("popiMenu", JSON.stringify(menu));

  renderMenu();
  renderMaintenanceList();
}

// FINALIZE ORDER

function placeOrder() {
  if (order.length === 0) return alert("Empty order");

  window.print(); // print receipt
  alert("Order successful");
}

// HELPER FUNCTIONS

// Function para baguhin ang quantity ng item sa order
function updateQty(id, delta) {
  // Hinahanap ang item sa order list gamit ang ID
  const item = order.find((o) => o.id === id);

  // Kapag nakita ang item
  if (item) {
    // Dinadagdagan o binabawasan ang quantity
    item.qty += delta;

    // Kapag 0 o negative na ang quantity, tatanggalin sa order
    if (item.qty <= 0) {
      order = order.filter((o) => o.id !== id);
    }
  }

  // Ire-render ulit ang order list sa UI
  renderOrder();
}

// Function para palitan ang category ng menu (Drinks, Snacks, Add-ons)
function setCategory(cat, e) {
  // Itinatakda ang bagong category
  currentCategory = cat;

  // Babalik sa unang page ng menu
  currentPage = 1;

  // Tinatanggal ang "active" class sa lahat ng tab buttons
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));

  // Nilalagyan ng "active" ang pinindot na tab
  e.target.classList.add("active");

  // Ire-render ulit ang menu base sa category
  renderMenu();
}

// Function para maglipat ng page (Next / Previous)
function changePage(s) {
  // Dinadagdagan o binabawasan ang current page
  currentPage += s;

  // Ire-render ulit ang menu items
  renderMenu();
}

// Function para i-clear lahat ng items sa order
function clearOrder() {
  // Nirereset ang order list
  order = [];

  // Ire-render ulit ang empty order sa UI
  renderOrder();
}

// Function para palitan ang order type (Dine-In / Take-Out)
function setOrderType(t, e) {
  // Itinatakda ang bagong order type
  orderType = t;

  // Ina-update ang display text sa UI
  document.getElementById("modeDisplay").innerText = t;

  // Tinatanggal ang "active" class sa lahat ng type buttons
  document
    .querySelectorAll(".type-btn")
    .forEach((b) => b.classList.remove("active"));

  // Nilalagyan ng "active" ang pinindot na button
  e.target.classList.add("active");
}
