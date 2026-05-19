// --- Database: 25 Products (5 per category) ---
const products = [
    // --- ELECTRONICS CATEGORY (5 Items) ---
    { id: 1, title: "Samsung Galaxy S26 Ultra", category: "electronics", price: 129999, image: "SGS26U.jpg", gallery: ["SGS26U.jpg", "SGS26U2.jpg"], desc: "The ultimate flagship smartphone featuring advanced AI capabilities, an industry-leading camera system, and S-Pen support." },
    { id: 2, title: "IQOO Neo 10", category: "electronics", price: 35999, image: "IQOO.jpg", gallery: ["IQOO.jpg", "IQOO2.jpg"], desc: "A powerhouse gaming smartphone with a high-refresh-rate AMOLED display, flagship processor, and ultra-fast charging." },
    { id: 3, title: "Samsung Galaxy Book 6", category: "electronics", price: 105999, image: "SGB6.jpg", gallery: ["SGB6.jpg", "SGB62.jpg"], desc: "Ultra-thin and lightweight laptop featuring a stunning AMOLED screen, powerful Intel Core processor, and seamless Galaxy ecosystem integration." },
    { id: 4, title: "Lenovo LOQ Gaming Laptop", category: "electronics", price: 74999, image: "LLOQ.jpg", gallery: ["LLOQ.jpg", "LLOQ2.jpg"], desc: "Dominate the arena with this powerful gaming laptop, equipped with an RTX series GPU, advanced cooling, and a 144Hz display." },
    { id: 5, title: "Samsung Galaxy Tab S11 Ultra", category: "electronics", price: 115999, image: "SGTS11U.jpg", gallery: ["SGTS11U.jpg", "SGTS11U2.jpg"], desc: "A massive, stunning display meets unmatched productivity. Includes the S-Pen and features PC-like multitasking with Samsung DeX." },

    // --- FASHION CATEGORY (5 Items) ---
    { id: 6, title: "Men Shirt Cotton with Modern Fashion Dark Blue", category: "fashion", price: 1299, image: "Shirt.jpg", gallery: ["Shirt.jpg", "Shirt2.jpg"], desc: "A premium 100% cotton dark blue shirt perfect for casual outings or semi-formal office wear. Breathable and comfortable." },
    { id: 7, title: "Ultra-Light Performance Sneakers Sports Shoes", category: "fashion", price: 2499, image: "Shoes.jpg", gallery: ["Shoes.jpg", "Shoes2.jpg"], desc: "Engineered for maximum comfort and speed. Features a breathable mesh upper and a responsive shock-absorbing sole." },
    { id: 8, title: "Men Cotton Track Pant Black", category: "fashion", price: 999, image: "Track.jpg", gallery: ["Track.jpg", "Track2.jpg"], desc: "Stay comfortable during workouts or lounging with these stretchable, premium cotton track pants featuring deep zip pockets." },
    { id: 9, title: "Black Sunglasses with Silver Frame", category: "fashion", price: 899, image: "Glass.jpg", gallery: ["Glass.jpg", "Glass2.jpg"], desc: "Classic retro style meets modern UV400 protection. Lightweight silver metallic frame with polarized black lenses." },
    { id: 10, title: "Men Belt with Alphabet Logo Buckle", category: "fashion", price: 599, image: "Belt.jpg", gallery: ["Belt.jpg", "Belt2.jpg"], desc: "A stylish and durable synthetic leather belt featuring a bold metallic alphabet logo buckle to elevate your everyday look." },

    // --- ACCESSORIES CATEGORY (5 Items) ---
    { id: 11, title: "Ant Esports Gaming Headphones Wired", category: "accessories", price: 1499, image: "ANTEH.jpg", gallery: ["ANTEH.jpg", "ANTEH2.jpg"], desc: "Immersive 7.1 surround sound gaming headset with a noise-canceling microphone, RGB lighting, and plush memory foam earcups." },
    { id: 12, title: "Ant Esports Keyboard Mouse Combo", category: "accessories", price: 1299, image: "ANTEKM.jpg", gallery: ["ANTEKM.jpg", "ANTEKM2.jpg"], desc: "A complete gaming setup featuring a tactile backlit membrane keyboard and a high-DPI ergonomic RGB gaming mouse." },
    { id: 13, title: "Type C OTG", category: "accessories", price: 299, image: "OTG.jpg", gallery: ["OTG.jpg", "OTG2.jpg"], desc: "High-speed USB Type-C to USB-A OTG adapter. Seamlessly connect flash drives, keyboards, and mice to your smartphone or tablet." },
    { id: 14, title: "Samsung Galaxy Buds 4 Pro", category: "accessories", price: 14999, image: "SGB4P.jpg", gallery: ["SGB4P.jpg", "SGB4P2.jpg"], desc: "Next-generation true wireless earbuds featuring intelligent active noise cancellation, 360-degree spatial audio, and studio-quality sound." },
    { id: 15, title: "Samsung Galaxy Watch 8 LTE", category: "accessories", price: 34999, image: "SGW8L.jpg", gallery: ["SGW8L.jpg", "SGW8L2.jpg"], desc: "Your ultimate health and fitness companion. Features LTE connectivity, advanced sleep tracking, ECG, and a premium display." },

    // --- GROCERY CATEGORY (5 Items) ---
    { id: 16, title: "Aashirvaad Shudh Chakki Atta (5kg)", category: "grocery", price: 220, image: "AA.jpg", gallery: ["AA.jpg", "AA2.jpg"], desc: "100% pure whole wheat premium atta, ground using the traditional chakki method for soft, fluffy, and nutritious rotis." },
    { id: 17, title: "Fortune Rice Bran Oil (1 Litre)", category: "grocery", price: 140, image: "FO.jpg", gallery: ["FO.jpg", "FO2.jpg"], desc: "Physically refined rice bran oil enriched with Oryzanol to help reduce cholesterol. A healthy choice for everyday cooking." },
    { id: 18, title: "Wagh Bakri Premium Leaf Tea (500g)", category: "grocery", price: 260, image: "WBT.jpg", gallery: ["WBT.jpg", "WBT2.jpg"], desc: "A rich and robust blend of premium tea leaves, handpicked from the best tea gardens for a perfect, refreshing morning cup." },
    { id: 19, title: "TATA Salt Iodised (1kg)", category: "grocery", price: 28, image: "TNamak.jpg", gallery: ["TNamak.jpg", "TNamak2.jpg"], desc: "India's most trusted iodised salt. Vacuum evaporated for purity, ensuring the right amount of iodine for mental development." },
    { id: 20, title: "Cadbury Hot Chocolate Powder (200g)", category: "grocery", price: 175, image: "CC.jpg", gallery: ["CC.jpg", "CC2.jpg"], desc: "Make every moment sweeter with the rich, smooth, and creamy taste of classic Cadbury hot chocolate. Just add hot milk." },

    // --- HOME APPLIANCES CATEGORY (5 Items) ---
    { id: 21, title: "Havells Smart BLDC Fan", category: "home appliances", price: 3499, image: "HF.jpg", gallery: ["HF.jpg", "HF2.jpg"], desc: "Super energy-efficient BLDC motor ceiling fan with smart remote control, aerodynamically designed blades, and silent operation." },
    { id: 22, title: "Samsung 1.5 Ton 5 Star Inverter Split AC", category: "home appliances", price: 42999, image: "SAC.jpg", gallery: ["SAC.jpg", "SAC2.jpg"], desc: "Experience ultra-fast cooling with Digital Inverter Technology, 100% copper condenser, and a built-in PM 2.5 anti-bacterial filter." },
    { id: 23, title: "Samsung 8kg Front Load Washing Machine", category: "home appliances", price: 36990, image: "SWM.jpg", gallery: ["SWM.jpg", "SWM2.jpg"], desc: "Gentle yet powerful fabric care featuring Eco Bubble technology, Hygiene Steam wash, and a highly durable Digital Inverter motor." },
    { id: 24, title: "Samsung 256L Double Door Refrigerator", category: "home appliances", price: 26499, image: "SR.jpg", gallery: ["SR.jpg", "SR2.jpg"], desc: "Keep your food fresher for longer. Features a convertible freezer, digital inverter compressor, and all-around cooling technology." },
    { id: 25, title: "Samsung 55-inch Crystal 4K Smart TV", category: "home appliances", price: 47990, image: "STV.webp", gallery: ["STV.webp", "STV2.jpg"], desc: "Immerse yourself in lifelike colors and crystal-clear 4K resolution. Features a bezel-less design, voice assistant, and Tizen OS." }
];
// --- App State Tracking ---
let cart = JSON.parse(localStorage.getItem('limecart_basket')) || [];
let currentCategory = 'all';
let maxPriceSetting = 150000;
let searchQuery = '';

const container = document.getElementById('products-container');
const searchInput = document.getElementById('search-input');
const formatINR = (price) => '₹' + price.toLocaleString('en-IN');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Splash Screen Timer
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if(splash) splash.classList.add('fade-out');
    }, 2000); 

    // Render initial data
    renderProducts();
    updateCartUI();
    
    // Setup Search Listener
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        goHome(e);
        renderProducts();
    });
});

// --- Core UI Functions ---
function renderProducts() {
    const filtered = products.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesPrice = product.price <= maxPriceSetting;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesPrice && matchesSearch;
    });

    document.getElementById('product-count-meta').innerText = `Showing ${filtered.length} products`;

    if(filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:60px 20px; font-weight:600; opacity:0.6;">
                <i class="fa-solid fa-cloud-moon" style="font-size:3rem; margin-bottom:15px; display:block; opacity: 0.5;"></i>
                No items match your specified filter parameters.
            </div>`;
        return;
    }

    container.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="openDetails(${product.id})">
            <div class="img-container">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/200?text=J.png'">
            </div>
            <span class="product-category">${product.category}</span>
            <h4 class="product-title">${product.title}</h4>
            <div class="card-footer-row">
                <span class="product-price">${formatINR(product.price)}</span>
                <button class="add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fa-solid fa-plus"></i> Add
                </button>
            </div>
        </div>
    `).join('');
}

function goHome(event) {
    if(event) event.preventDefault(); 
    document.getElementById('details-view').classList.remove('active-view');
    document.getElementById('details-view').classList.add('hidden-view');
    document.getElementById('catalog-view').classList.remove('hidden-view');
    document.getElementById('catalog-view').classList.add('active-view');
}

function openDetails(productId) {
    const product = products.find(p => p.id === productId);
    if(!product) return;

    document.getElementById('catalog-view').classList.remove('active-view');
    document.getElementById('catalog-view').classList.add('hidden-view');
    document.getElementById('details-view').classList.remove('hidden-view');
    document.getElementById('details-view').classList.add('active-view');

    let thumbnailsHTML = '';
    if (product.gallery && product.gallery.length > 0) {
        thumbnailsHTML = product.gallery.map((img, index) => 
            `<img src="${img}" class="${index === 0 ? 'active-thumb' : ''}" 
                  onclick="changeMainImage(this, '${img}')" 
                  onerror="this.src='https://via.placeholder.com/80?text=J.png'">`
        ).join('');
    }

    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
        <div class="details-gallery">
            <div class="main-image-box">
                <img id="main-detail-img" src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/400?text=J.png'">
            </div>
            <div class="thumbnail-row">
                ${thumbnailsHTML}
            </div>
        </div>
        <div class="details-info">
            <span class="details-category">${product.category}</span>
            <h2>${product.title}</h2>
            <div class="details-price">${formatINR(product.price)}</div>
            <p class="details-desc">${product.desc}</p>
            <button class="details-add-btn" onclick="addToCart(${product.id})">
                <i class="fa-solid fa-cart-plus"></i> Add to Basket
            </button>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeMainImage(element, newSrc) {
    document.getElementById('main-detail-img').src = newSrc;
    document.querySelectorAll('.thumbnail-row img').forEach(img => img.classList.remove('active-thumb'));
    element.classList.add('active-thumb');
}

// --- Popup Modal Controls ---
function toggleFilterModal() {
    document.getElementById('filter-modal').classList.toggle('active');
    document.getElementById('filter-overlay').classList.toggle('active');
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('active');
    document.getElementById('cart-overlay').classList.toggle('active');
}

function toggleAbout() {
    const card = document.getElementById('about-card');
    card.style.display = (card.style.display === "block") ? "none" : "block";
}

// --- Filtering Logic ---
function filterCategory(categoryName) {
    currentCategory = categoryName;
    const formattedTitle = categoryName === 'all' 
        ? "All Products Collection" 
        : categoryName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + " Collection";
    
    document.getElementById('current-category-title').innerText = formattedTitle;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        const btnText = btn.innerText.toLowerCase();
        btn.classList.toggle('active', btnText === categoryName || (categoryName === 'all' && btnText.includes('all')));
    });
    renderProducts();
}

function updatePriceFilter(value) {
    maxPriceSetting = parseFloat(value);
    document.getElementById('price-max-label').innerText = `Max: ${formatINR(maxPriceSetting)}`;
    renderProducts();
}

// --- Cart Logic ---
function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);
    if(existingItem) {
        existingItem.quantity += 1;
    } else {
        const productData = products.find(p => p.id === productId);
        cart.push({ ...productData, quantity: 1 });
    }
    syncCartData();
    
    const cartIcon = document.querySelector('.cart-toggle-btn');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => cartIcon.style.transform = 'scale(1)', 200);
}

function updateQuantity(productId, modifier) {
    const targetItem = cart.find(item => item.id === productId);
    if(!targetItem) return;

    targetItem.quantity += modifier;
    if(targetItem.quantity <= 0) {
        cart = cart.filter(item => item.id !== productId);
    }
    syncCartData();
}

function syncCartData() {
    localStorage.setItem('limecart_basket', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const totalCount = cart.reduce((acc, current) => acc + current.quantity, 0);
    const totalPrice = cart.reduce((acc, current) => acc + (current.price * current.quantity), 0);

    document.getElementById('cart-count').innerText = totalCount;
    document.getElementById('cart-drawer-count').innerText = totalCount;
    document.getElementById('cart-total-price').innerText = formatINR(totalPrice);

    const itemsContainer = document.getElementById('cart-items-container');
    if(cart.length === 0) {
        itemsContainer.innerHTML = `<p style="opacity:0.6; text-align:center; padding-top:40px; font-weight:600;">Your shopping basket is empty</p>`;
        return;
    }

    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/65?text=J.png'">
            <div class="item-details">
                <h5 class="item-title">${item.title}</h5>
                <span class="item-price">${formatINR(item.price * item.quantity)}</span>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span><strong>${item.quantity}</strong></span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

function checkoutAlert() {
    if(cart.length === 0) {
        alert("Your basket is empty!");
        return;
    }
    alert("Transaction Processed! Order summary saved.");
    cart = [];
    syncCartData();
    toggleCart();
}