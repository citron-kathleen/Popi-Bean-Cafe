// Ilang items ang lalabas kada page
const itemsPerPage = 9;

// Current page number (default ay page 1)
let currentPage = 1;

// Current selected category (default = drinks)
let currentCategory = "drinks";

// Search text ng user (empty sa simula)
let searchQuery = "";

// ===============================
// MENU DATA (STATIC DATA)
// ===============================
// Dito naka-store lahat ng menu items
// Walang database, naka-hardcode lang (static system)
const menuItems = [
  // bawat object ay isang menu item
  // id → unique identifier
  // name → pangalan ng item
  // price → presyo
  // category → pang-filter (drinks / snacks / addons)

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

  {
    id: 35,
    name: "Lychee Blueberry Tea (16oz)",
    price: 75,
    category: "drinks",
  },
  {
    id: 36,
    name: "Lychee Blueberry Tea (22oz)",
    price: 90,
    category: "drinks",
  },

  { id: 37, name: "Peach Mango Tea (16oz)", price: 75, category: "drinks" },
  { id: 38, name: "Peach Mango Tea (22oz)", price: 90, category: "drinks" },

  { id: 39, name: "Green Apple Tea (16oz)", price: 65, category: "drinks" },
  { id: 40, name: "Green Apple Tea (22oz)", price: 80, category: "drinks" },

  { id: 41, name: "Kiwi Tea (16oz)", price: 65, category: "drinks" },
  { id: 42, name: "Kiwi Tea (22oz)", price: 80, category: "drinks" },

  { id: 43, name: "Yakult Strawberry (16oz)", price: 110, category: "drinks" },
  { id: 44, name: "Yakult Strawberry (22oz)", price: 134, category: "drinks" },

  { id: 45, name: "Yakult Blueberry (16oz)", price: 110, category: "drinks" },
  { id: 46, name: "Yakult Blueberry (22oz)", price: 134, category: "drinks" },

  {
    id: 47,
    name: "Yakult Passion Fruit (16oz)",
    price: 110,
    category: "drinks",
  },
  {
    id: 48,
    name: "Yakult Passion Fruit (22oz)",
    price: 134,
    category: "drinks",
  },

  { id: 49, name: "Yakult Lemon (16oz)", price: 110, category: "drinks" },
  { id: 50, name: "Yakult Lemon (22oz)", price: 134, category: "drinks" },

  { id: 51, name: "Nachos", price: 79, category: "snacks" },
  { id: 52, name: "Fries", price: 49, category: "snacks" },
  { id: 53, name: "Nuggets (7pcs)", price: 65, category: "snacks" },
  { id: 54, name: "PB Meryenda Set", price: 170, category: "snacks" },

  { id: 55, name: "Crossfles Biscoff", price: 130, category: "snacks" },
  { id: 56, name: "Crossfles Banana Caramel", price: 130, category: "snacks" },
  { id: 57, name: "Crossfles Oreo", price: 130, category: "snacks" },

  { id: 58, name: "Hash Brown", price: 30, category: "snacks" },
  { id: 59, name: "Pansit Canton", price: 35, category: "snacks" },

  { id: 60, name: "Buldak Carbonara", price: 125, category: "snacks" },
  { id: 61, name: "Buldak Cheese", price: 125, category: "snacks" },
  { id: 62, name: "Shin Ramyun", price: 125, category: "snacks" },

  { id: 63, name: "Nata", price: 10, category: "addons" },
  { id: 64, name: "Fruit Jelly", price: 10, category: "addons" },
  { id: 65, name: "Yakult Add-on", price: 25, category: "addons" },
  { id: 66, name: "Egg", price: 15, category: "addons" },
];

// ===============================
// ORDER DATA
// ===============================

// Dito nilalagay ang mga inorder ng user
let order = [];

// Kinukuha ang HTML elements
const menuGrid = document.getElementById("menuGrid");
const pageInfo = document.getElementById("pageInfo");
const orderList = document.getElementById("orderList");

// ===============================
// FUNCTION: renderMenu
// ===============================
// Nagdi-display ng menu items sa screen
function renderMenu() {
  menuGrid.innerHTML = "";

  // Filter by category at search text
  const filtered = menuItems.filter(
    (i) =>
      i.category === currentCategory &&
      i.name.toLowerCase().includes(searchQuery)
  );

  // Pagination computation
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Loop items sa current page
  for (let i = start; i < end && i < filtered.length; i++) {
    const item = filtered[i];

    menuGrid.innerHTML += `
      <div class="menu-card">
        <h4>${item.name}</h4>
        <p>${item.price}</p>
        <button onclick="addToOrder(${item.id})">+</button>
      </div>
    `;
  }

  // Update page text
  pageInfo.textContent =
    "Page " +
    currentPage +
    " of " +
    Math.max(1, Math.ceil(filtered.length / itemsPerPage));
}

// ===============================
// FUNCTION: addToOrder
// ===============================
function addToOrder(id) {
  const found = order.find((i) => i.id === id);

  if (found) {
    found.qty++;
  } else {
    const item = menuItems.find((i) => i.id === id);
    order.push({ ...item, qty: 1 });
  }
  renderOrder();
}

// ===============================
// FUNCTION: renderOrder
// ===============================
function renderOrder() {
  orderList.innerHTML = "";
  let subtotal = 0;

  order.forEach((item) => {
    subtotal += item.price * item.qty;

    orderList.innerHTML += `
      <div class="order-item">
        <span>${item.name}</span>
        <div class="qty">
          <button onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    `;
  });

  const tax = subtotal * 0.06;
  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("tax").textContent = tax.toFixed(2);
  document.getElementById("total").textContent = (subtotal + tax).toFixed(2);

  // Clear order button
  const clearBtn = document.getElementById("clearBtn");
  clearBtn.onclick = () => {
    order = [];
    renderOrder();
  };
}

// ===============================
// FUNCTION: changeQty
// ===============================
function changeQty(id, change) {
  const item = order.find((i) => i.id === id);
  item.qty += change;

  if (item.qty <= 0) {
    order = order.filter((i) => i.id !== id);
  }
  renderOrder();
}

// ===============================
// PAGINATION
// ===============================
document.getElementById("nextBtn").onclick = () => {
  currentPage++;
  renderMenu();
};

document.getElementById("prevBtn").onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    renderMenu();
  }
};

// ===============================
// CATEGORY TABS
// ===============================
document.querySelectorAll(".tab").forEach((tab) => {
  tab.onclick = () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
    currentCategory = tab.dataset.category;
    currentPage = 1;
    renderMenu();
  };
});

// ===============================
// SEARCH
// ===============================
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase();
  currentPage = 1;
  renderMenu();
});

// ===============================
// INITIAL LOAD
// ===============================
renderMenu();
