const TAG = 'dahinwal90-21';
const AMAZON = 'https://www.amazon.in';

const PRODUCTS = [
    { name: 'boAt Nirvana Ivy ANC Earbuds', price: 1299, origPrice: 3499, category: 'electronics', search: 'boAt+Nirvana+Ivy+ANC', emoji: '🎧', rating: 4.1, reviews: 25000, bestseller: true, deal: true },
    { name: 'boAt Rockerz 255 Pro Neckband', price: 899, origPrice: 2999, category: 'electronics', search: 'boAt+Rockerz+255+Pro', emoji: '🎧', rating: 4.0, reviews: 50000, bestseller: true, deal: true },
    { name: 'Sony WH-1000XM4 Headphones', price: 14990, origPrice: 21990, category: 'electronics', search: 'Sony+WH-1000XM4', emoji: '', rating: 4.5, reviews: 15000, bestseller: false, deal: true },
    { name: 'boAt Stone 350 Bluetooth Speaker', price: 1499, origPrice: 3999, category: 'electronics', search: 'boat+Stone+350', emoji: '', rating: 4.2, reviews: 10000, bestseller: true, deal: true },
    { name: 'Noise ColorFit Pro Smart Watch', price: 1799, origPrice: 4999, category: 'electronics', search: 'Noise+ColorFit+Pro', emoji: '⌚', rating: 3.8, reviews: 30000, bestseller: true, deal: true },
    { name: 'Fire-Boltt Ninja Smart Watch', price: 1499, origPrice: 3999, category: 'electronics', search: 'Fire-Boltt+Ninja', emoji: '⌚', rating: 3.9, reviews: 20000, bestseller: true, deal: true },
    { name: 'Fastrack Ladies Analog Watch', price: 599, origPrice: 1599, category: 'fashion', search: 'Fastrack+Ladies+Watch', emoji: '⌚', rating: 3.5, reviews: 8000, bestseller: false, deal: true },
    { name: 'Sonata Women Analog Watch', price: 899, origPrice: 1999, category: 'fashion', search: 'Sonata+Analog+Watch', emoji: '⌚', rating: 4.0, reviews: 12000, bestseller: true, deal: false },
    { name: 'Titan Neo Men Watch', price: 2195, origPrice: 4500, category: 'fashion', search: 'Titan+Neo+Watch', emoji: '⌚', rating: 4.2, reviews: 20000, bestseller: false, deal: false },
    { name: 'Casio G-Shock Digital Watch', price: 4995, origPrice: 7500, category: 'fashion', search: 'Casio+G-Shock', emoji: '⌚', rating: 4.6, reviews: 5000, bestseller: true, deal: true },
    { name: 'Levis T-Shirt Pack of 2', price: 849, origPrice: 1499, category: 'fashion', search: 'Levis+T-Shirt+Men', emoji: '👕', rating: 4.0, reviews: 15000, bestseller: true, deal: true },
    { name: 'Men Cotton T-Shirt Pack', price: 599, origPrice: 999, category: 'fashion', search: 'Men+T-Shirt+Pack', emoji: '👕', rating: 3.8, reviews: 35000, bestseller: true, deal: true },
    { name: 'Jack Jones Branded T-Shirt', price: 699, origPrice: 1299, category: 'fashion', search: 'Jack+Jones+T-Shirt', emoji: '', rating: 4.1, reviews: 8000, bestseller: true, deal: true },
    { name: 'Roadster Casual T-Shirt', price: 449, origPrice: 899, category: 'fashion', search: 'Roadster+T-Shirt+Men', emoji: '👕', rating: 3.9, reviews: 12000, bestseller: true, deal: true },
    { name: 'Skechers Sport Shoes Men', price: 2499, origPrice: 4999, category: 'fashion', search: 'Skechers+Sport+Shoes', emoji: '', rating: 4.1, reviews: 8000, bestseller: false, deal: true },
    { name: 'Nike Air Max Running Shoes', price: 8999, origPrice: 12999, category: 'fashion', search: 'Nike+Air+Max', emoji: '👟', rating: 4.4, reviews: 5000, bestseller: false, deal: true },
    { name: 'Induction Cooktop 2000W', price: 1499, origPrice: 2999, category: 'home', search: 'Induction+Cooker+2000W', emoji: '🍳', rating: 3.9, reviews: 6000, bestseller: false, deal: true },
    { name: 'Instant Pot Electric Cooker 6L', price: 7995, origPrice: 12999, category: 'home', search: 'Instant+Pot+6L', emoji: '🍳', rating: 4.5, reviews: 3000, bestseller: false, deal: true },
    { name: 'Coffee Maker Machine', price: 2499, origPrice: 4999, category: 'home', search: 'Coffee+Maker+Machine', emoji: '☕', rating: 4.0, reviews: 9000, bestseller: true, deal: false },
    { name: 'Mixer Grinder 750W', price: 1899, origPrice: 3999, category: 'home', search: 'Mixer+Grinder+750W', emoji: '🔪', rating: 4.2, reviews: 25000, bestseller: true, deal: true },
    { name: 'LED Desk Lamp USB', price: 499, origPrice: 999, category: 'home', search: 'LED+Desk+Lamp', emoji: '💡', rating: 3.7, reviews: 15000, bestseller: false, deal: true },
    { name: 'Electric Kettle 1.8L Stainless', price: 799, origPrice: 1999, category: 'home', search: 'Electric+Kettle+1.8L', emoji: '🫖', rating: 4.1, reviews: 40000, bestseller: true, deal: true },
    { name: 'Face Serum Vitamin C Combo', price: 399, origPrice: 899, category: 'beauty', search: 'Face+Serum+Combo', emoji: '🧴', rating: 3.9, reviews: 20000, bestseller: true, deal: true },
    { name: 'Men Perfume 100ml Long Lasting', price: 299, origPrice: 699, category: 'beauty', search: 'Men+Perfume+100ml', emoji: '', rating: 3.5, reviews: 30000, bestseller: false, deal: true },
    { name: 'Professional Makeup Kit', price: 899, origPrice: 1999, category: 'beauty', search: 'Makeup+Kit+Professional', emoji: '💄', rating: 4.1, reviews: 12000, bestseller: true, deal: false },
    { name: 'Hair Dryer Professional 1200W', price: 699, origPrice: 1499, category: 'beauty', search: 'Hair+Dryer+1200W', emoji: '💇', rating: 4.0, reviews: 18000, bestseller: false, deal: true },
    { name: 'Body Lotion Moisturizer Set', price: 349, origPrice: 699, category: 'beauty', search: 'Body+Lotion+Set', emoji: '', rating: 4.2, reviews: 25000, bestseller: true, deal: true },
    { name: 'Classic Board Game Family', price: 399, origPrice: 799, category: 'toys', search: 'Board+Game+Classic', emoji: '', rating: 4.3, reviews: 15000, bestseller: true, deal: false },
    { name: 'UNO Card Game', price: 199, origPrice: 350, category: 'toys', search: 'UNO+Card+Game', emoji: '🎴', rating: 4.5, reviews: 50000, bestseller: true, deal: true },
    { name: 'Remote Control Racing Car', price: 1299, origPrice: 2999, category: 'toys', search: 'Remote+Control+Car', emoji: '🚗', rating: 4.2, reviews: 8000, bestseller: false, deal: false },
    { name: 'Soft Toys Plush Combo', price: 499, origPrice: 999, category: 'toys', search: 'Soft+Toys+Combo', emoji: '', rating: 4.1, reviews: 20000, bestseller: true, deal: true },
    { name: 'Python Programming Book', price: 450, origPrice: 699, category: 'books', search: 'Python+Programming+Book', emoji: '', rating: 4.4, reviews: 5000, bestseller: true, deal: false },
    { name: 'Atomic Habits by James Clear', price: 299, origPrice: 499, category: 'books', search: 'Atomic+Habits+Book', emoji: '📖', rating: 4.7, reviews: 100000, bestseller: true, deal: true },
    { name: 'Rich Dad Poor Dad', price: 199, origPrice: 399, category: 'books', search: 'Rich+Dad+Poor+Dad', emoji: '📖', rating: 4.5, reviews: 80000, bestseller: true, deal: true },
    { name: 'The Psychology of Money', price: 355, origPrice: 599, category: 'books', search: 'Psychology+Money+Book', emoji: '📖', rating: 4.6, reviews: 30000, bestseller: true, deal: true },
    { name: 'Men Full Sleeve Cotton T-Shirt', price: 549, origPrice: 999, category: 'fashion', search: 'Men+Full+Sleeve+T-Shirt', emoji: '👕', rating: 4.0, reviews: 6000, bestseller: true, deal: true },
    { name: 'Casual Shirt Men Cotton', price: 699, origPrice: 1499, category: 'fashion', search: 'Casual+Shirt+Men', emoji: '', rating: 4.1, reviews: 10000, bestseller: true, deal: true },
    { name: 'Slim Fit Jeans Men', price: 999, origPrice: 2499, category: 'fashion', search: 'Jeans+Men+Slim', emoji: '👖', rating: 4.2, reviews: 15000, bestseller: true, deal: true },
    { name: 'Wireless Mouse USB', price: 499, origPrice: 999, category: 'electronics', search: 'Wireless+Mouse+Computer', emoji: '🖱️', rating: 4.1, reviews: 25000, bestseller: true, deal: true },
    { name: 'Keyboard Mouse Wireless Combo', price: 799, origPrice: 1999, category: 'electronics', search: 'Keyboard+Mouse+Combo', emoji: '⌨️', rating: 4.2, reviews: 20000, bestseller: true, deal: true },
    { name: 'Pendrive 64GB USB 3.0', price: 399, origPrice: 699, category: 'electronics', search: 'Pendrive+64GB+USB', emoji: '💾', rating: 4.3, reviews: 30000, bestseller: true, deal: true },
    { name: 'Selfie Stick Tripod', price: 349, origPrice: 699, category: 'electronics', search: 'Selfie+Stick+Tripod', emoji: '🤳', rating: 3.8, reviews: 15000, bestseller: false, deal: true },
    { name: 'Mobile Phone Stand Desk', price: 249, origPrice: 499, category: 'electronics', search: 'Mobile+Stand+Desk', emoji: '📱', rating: 4.0, reviews: 10000, bestseller: true, deal: true },
    { name: 'Leather Belt Men Formal', price: 599, origPrice: 1299, category: 'fashion', search: 'Men+Belt+Leather', emoji: '👔', rating: 4.1, reviews: 8000, bestseller: true, deal: true },
    { name: 'Leather Wallet Men', price: 449, origPrice: 899, category: 'fashion', search: 'Wallet+Men+Leather', emoji: '👛', rating: 4.2, reviews: 12000, bestseller: true, deal: true },
    { name: 'Aviator Sunglasses Men', price: 399, origPrice: 799, category: 'fashion', search: 'Sunglasses+Men+Aviator', emoji: '🕶️', rating: 3.9, reviews: 10000, bestseller: true, deal: true },
    { name: 'Cotton Socks Pack of 6', price: 299, origPrice: 499, category: 'fashion', search: 'Socks+Men+Cotton+Pack', emoji: '🧦', rating: 4.0, reviews: 20000, bestseller: true, deal: true },
    { name: 'Cotton Vest Inner Wear', price: 249, origPrice: 399, category: 'fashion', search: 'Inner+Wear+Vest+Men', emoji: '🎽', rating: 4.1, reviews: 30000, bestseller: true, deal: true },
    { name: 'Leather Handbag Women', price: 899, origPrice: 1999, category: 'fashion', search: 'Handbag+Women+Leather', emoji: '👜', rating: 4.0, reviews: 8000, bestseller: true, deal: true },
    { name: 'Laptop Backpack Men', price: 799, origPrice: 1999, category: 'fashion', search: 'Backpack+Laptop+Men', emoji: '🎒', rating: 4.2, reviews: 15000, bestseller: true, deal: true },
    { name: 'Women Perfume 100ml', price: 399, origPrice: 899, category: 'beauty', search: 'Perfume+Women+100ml', emoji: '🌸', rating: 4.0, reviews: 15000, bestseller: true, deal: true },
    { name: 'Matte Lipstick Set', price: 349, origPrice: 699, category: 'beauty', search: 'Lipstick+Set+Matte', emoji: '', rating: 4.1, reviews: 10000, bestseller: true, deal: true },
    { name: 'Almond Hair Oil Natural', price: 299, origPrice: 499, category: 'beauty', search: 'Hair+Oil+Almond', emoji: '🧴', rating: 4.3, reviews: 20000, bestseller: true, deal: true },
    { name: 'Cricket Bat Kashmir Willow', price: 999, origPrice: 2499, category: 'toys', search: 'Cricket+Bat+Kashmir+Willow', emoji: '🏏', rating: 4.1, reviews: 6000, bestseller: false, deal: true },
    { name: 'Football Size 5', price: 399, origPrice: 799, category: 'toys', search: 'Football+Size+5', emoji: '⚽', rating: 4.2, reviews: 8000, bestseller: true, deal: true },
    { name: 'Badminton Racket Set', price: 599, origPrice: 1299, category: 'toys', search: 'Badminton+Racket+Set', emoji: '🏸', rating: 4.0, reviews: 10000, bestseller: true, deal: true },
    { name: 'Cooking Oil Refined Set', price: 499, origPrice: 899, category: 'home', search: 'Cooking+Oil+Set', emoji: '🛢️', rating: 4.2, reviews: 15000, bestseller: true, deal: true },
    { name: 'Basmati Rice 5kg Premium', price: 399, origPrice: 599, category: 'home', search: 'Basmati+Rice+5kg', emoji: '🍚', rating: 4.3, reviews: 30000, bestseller: true, deal: true },
    { name: 'Arabica Coffee Beans 1kg', price: 699, origPrice: 1299, category: 'home', search: 'Coffee+Beans+1kg', emoji: '☕', rating: 4.4, reviews: 8000, bestseller: true, deal: true },
    { name: 'Chocolate Gift Box Premium', price: 449, origPrice: 799, category: 'home', search: 'Chocolate+Gift+Box', emoji: '🍫', rating: 4.5, reviews: 12000, bestseller: true, deal: true },
    { name: 'Birthday Greeting Cards Set', price: 199, origPrice: 399, category: 'home', search: 'Greeting+Cards+Set', emoji: '🎴', rating: 4.1, reviews: 5000, bestseller: false, deal: true },
    { name: 'Gift Wrap Paper Roll', price: 249, origPrice: 499, category: 'home', search: 'Gift+Wrap+Paper', emoji: '🎁', rating: 4.0, reviews: 8000, bestseller: true, deal: true },
    { name: 'Aromatherapy Candle Set', price: 399, origPrice: 699, category: 'home', search: 'Candle+Aromatherapy+Set', emoji: '️', rating: 4.2, reviews: 6000, bestseller: true, deal: true }
];

function getAmazonUrl(search) {
    return `${AMAZON}/s?k=${search}&tag=${TAG}`;
}

function formatNumber(num) {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'K' : num;
}

function getDiscount(price, origPrice) {
    return origPrice ? Math.round((1 - price / origPrice) * 100) : 0;
}

function createProductCard(product) {
    const discount = getDiscount(product.price, product.origPrice);
    const url = getAmazonUrl(product.search);
    
    return `
        <div class="product-card">
            ${product.deal ? `<span class="card-badge deal">${discount}% OFF</span>` : ''}
            ${product.bestseller ? `<span class="card-badge bestseller">⭐ Best Seller</span>` : ''}
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-rating">
                    <span class="stars">★ ${product.rating}</span>
                    <span class="reviews">${formatNumber(product.reviews)} reviews</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price}</span>
                    ${product.origPrice ? `<span class="original-price">₹${product.origPrice}</span>` : ''}
                </div>
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="amazon-btn">View on Amazon →</a>
            </div>
        </div>
    `;
}

function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = products.map(createProductCard).join('');
}

function filterProducts(query = '', category = '', minPrice = 0, maxPrice = 99999, minRating = 0, bestsellerOnly = false, dealOnly = false) {
    return PRODUCTS.filter(p => {
        if (query) {
            const searchIn = (p.name + ' ' + p.category).toLowerCase();
            if (!searchIn.includes(query.toLowerCase())) return false;
        }
        if (category && p.category !== category) return false;
        if (p.price < minPrice || p.price >= maxPrice) return false;
        if (minRating && p.rating < minRating) return false;
        if (bestsellerOnly && !p.bestseller) return false;
        if (dealOnly && !p.deal) return false;
        return true;
    });
}

function searchGifts() {
    const query = document.getElementById('gift-search')?.value || '';
    const category = document.getElementById('gift-category')?.value || '';
    const minRating = document.getElementById('filter-4star')?.checked ? 4 : 0;
    const bestsellerOnly = document.getElementById('filter-bestseller')?.checked || false;
    const dealOnly = document.getElementById('filter-deal')?.checked || false;
    
    const activePriceBtn = document.querySelector('.price-btn.active');
    const minPrice = activePriceBtn ? parseInt(activePriceBtn.dataset.min) : 0;
    const maxPrice = activePriceBtn ? parseInt(activePriceBtn.dataset.max) : 99999;
    
    const filtered = filterProducts(query, category, minPrice, maxPrice, minRating, bestsellerOnly, dealOnly);
    displayProducts(filtered, 'gift-results');
}

function filterByBudget(min, max) {
    const filtered = filterProducts('', '', min, max);
    displayProducts(filtered, 'gift-results');
    document.getElementById('gift-finder')?.scrollIntoView({ behavior: 'smooth' });
    
    document.querySelectorAll('.price-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.price-btn[data-min="${min}"]`)?.classList.add('active');
}

function generateAffiliateLink() {
    const input = document.getElementById('product-input')?.value.trim();
    if (!input) return;
    
    let url = '';
    if (input.includes('amazon.in')) {
        if (input.includes('/dp/')) {
            const asin = input.match(/\/dp\/([A-Z0-9]{10})/);
            url = asin ? `${AMAZON}/dp/${asin[1]}?tag=${TAG}` : input;
        } else if (input.includes('/gp/product/')) {
            const asin = input.match(/\/gp\/product\/([A-Z0-9]{10})/);
            url = asin ? `${AMAZON}/gp/product/${asin[1]}?tag=${TAG}` : input;
        } else {
            url = input.includes('tag=') ? input : `${input}${input.includes('?') ? '&' : '?'}tag=${TAG}`;
        }
    } else {
        url = getAmazonUrl(input.replace(/ /g, '+'));
    }
    
    document.getElementById('affiliate-link').value = url;
    document.getElementById('generated-link')?.classList.remove('hidden');
    
    const encodedUrl = encodeURIComponent(url);
    document.getElementById('share-whatsapp').href = `https://wa.me/?text=${encodedUrl}`;
    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
}

function copyToClipboard(text, btnId) {
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.textContent = '✓ Copied';
            setTimeout(() => { btn.textContent = btnId === 'copy-btn' ? 'Copy' : '📋'; }, 2000);
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(PRODUCTS.filter(p => p.deal).slice(0, 8), 'deals-results');
    displayProducts(PRODUCTS.filter(p => p.bestseller).slice(0, 8), 'bestsellers-results');
    displayProducts(PRODUCTS, 'gift-results');
    
    document.getElementById('search-gifts')?.addEventListener('click', searchGifts);
    document.getElementById('gift-search')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchGifts();
    });
    
    document.querySelectorAll('.price-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.price-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            searchGifts();
        });
    });
    
    ['filter-4star', 'filter-bestseller', 'filter-deal'].forEach(id => {
        document.getElementById(id)?.addEventListener('change', searchGifts);
    });
    
    document.getElementById('generate-btn')?.addEventListener('click', generateAffiliateLink);
    document.getElementById('product-input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateAffiliateLink();
    });
    
    document.getElementById('copy-btn')?.addEventListener('click', () => {
        copyToClipboard(document.getElementById('affiliate-link').value, 'copy-btn');
    });
    
    document.getElementById('share-copy')?.addEventListener('click', () => {
        copyToClipboard(document.getElementById('affiliate-link').value, 'share-copy');
    });
    
    document.querySelector('.hamburger')?.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links')?.classList.remove('active');
        });
    });
});

console.log('DrawGifts loaded - ' + PRODUCTS.length + ' products');
