const AMAZON_AFFILIATE_TAG = 'dahinwal90-21';
const AMAZON_SEARCH_URL = 'https://www.amazon.in/s?k=';
const API_URL = '/api';

let useAPI = false;

async function fetchFromAmazon(query) {
    try {
        const res = await fetch(`${API_URL}?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        if (data.products && data.products.length > 0) {
            useAPI = true;
            return data.products.map(p => ({
                name: p.name,
                price: parseInt(p.price.replace(/[^0-9]/g, '')) || 0,
                origPrice: 0,
                category: 'electronics',
                keywords: query,
                search: query.replace(/ /g, '+'),
                image: p.image ? `<img src="${p.image}" alt="product">` : '📦',
                rating: 0,
                reviews: 0,
                bestseller: false,
                deal: false,
                amazonUrl: p.url
            }));
        }
    } catch (e) {
        console.log('API not available, using local data');
    }
return null;
}

const PRODUCTS = [
    { name: 'boAt Nirvana Ivy ANC Earbuds', price: 1299, origPrice: 3499, category: 'electronics', keywords: 'earbuds wireless bluetooth headphones', search: 'boAt+Nirvana+Ivy+ANC', image: '🎧', rating: 4.1, reviews: 25000, bestseller: true, deal: true },
    { name: 'boAt Rockerz 255 Pro', price: 899, origPrice: 2999, category: 'electronics', keywords: 'neckband earphones wireless', search: 'boAt+Rockerz+255+Pro', image: '🎧', rating: 4.0, reviews: 50000, bestseller: true, deal: true },
    { name: 'Sony WH-1000XM4 Headphones', price: 14990, origPrice: 21990, category: 'electronics', keywords: 'noise cancelling headphones premium', search: 'Sony+WH-1000XM4', image: '🎧', rating: 4.5, reviews: 15000, bestseller: false, deal: true },
    { name: 'boAt Stone 350 Speaker', price: 1499, origPrice: 3999, category: 'electronics', keywords: 'bluetooth speaker portable', search: 'boat+Stone+350', image: '🔊', rating: 4.2, reviews: 10000, bestseller: true, deal: true },
    { name: 'Noise ColorFit Pro Watch', price: 1799, origPrice: 4999, category: 'electronics', keywords: 'smart watch fitness tracker', search: 'Noise+ColorFit+Pro', image: '⌚', rating: 3.8, reviews: 30000, bestseller: true, deal: true },
    { name: 'Fire-Boltt Ninja Watch', price: 1499, origPrice: 3999, category: 'electronics', keywords: 'smart watch bluetooth calling', search: 'Fire-Boltt+Ninja', image: '⌚', rating: 3.9, reviews: 20000, bestseller: true, deal: true },
    { name: 'Fastrack Ladies Watch', price: 599, origPrice: 1599, category: 'fashion', keywords: 'women watch analog', search: 'Fastrack+Ladies+Watch', image: '⌚', rating: 3.5, reviews: 8000, bestseller: false, deal: true },
    { name: 'Sonata Analog Watch', price: 899, origPrice: 1999, category: 'fashion', keywords: 'women watch analog', search: 'Sonata+Analog+Watch', image: '⌚', rating: 4.0, reviews: 12000, bestseller: true, deal: false },
    { name: 'Titan Neo Watch', price: 2195, origPrice: 4500, category: 'fashion', keywords: 'men watch analog', search: 'Titan+Neo+Watch', image: '⌚', rating: 4.2, reviews: 20000, bestseller: false, deal: false },
    { name: 'Casio G-Shock', price: 4995, origPrice: 7500, category: 'fashion', keywords: 'men watch digital', search: 'Casio+G-Shock', image: '⌚', rating: 4.6, reviews: 5000, bestseller: true, deal: true },
    { name: 'Levis T-Shirt Pack of 2', price: 849, origPrice: 1499, category: 'fashion', keywords: 'tshirt men cotton round neck', search: 'Levis+T-Shirt+Men', image: '👕', rating: 4.0, reviews: 15000, bestseller: true, deal: true },
    { name: 'Men T-Shirt Pack Cotton', price: 599, origPrice: 999, category: 'fashion', keywords: 'tshirt men cotton', search: 'Men+T-Shirt+Pack', image: '👕', rating: 3.8, reviews: 35000, bestseller: true, deal: true },
    { name: 'Jack Jones T-Shirt', price: 699, origPrice: 1299, category: 'fashion', keywords: 'tshirt men branded', search: 'Jack+Jones+T-Shirt', image: '👕', rating: 4.1, reviews: 8000, bestseller: true, deal: true },
    { name: 'Roadster T-Shirt Men', price: 449, origPrice: 899, category: 'fashion', keywords: 'tshirt cotton casual', search: 'Roadster+T-Shirt+Men', image: '👕', rating: 3.9, reviews: 12000, bestseller: true, deal: true },
    { name: 'Skechers Sport Shoes', price: 2499, origPrice: 4999, category: 'fashion', keywords: 'sneakers sport shoes men', search: 'Skechers+Sport+Shoes', image: '👟', rating: 4.1, reviews: 8000, bestseller: false, deal: true },
    { name: 'Nike Air Max', price: 8999, origPrice: 12999, category: 'fashion', keywords: 'running shoes men', search: 'Nike+Air+Max', image: '👟', rating: 4.4, reviews: 5000, bestseller: false, deal: true },
    { name: 'Induction Cooker 2000W', price: 1499, origPrice: 2999, category: 'home', keywords: 'induction cooktop electric', search: 'Induction+Cooker+2000W', image: '🍳', rating: 3.9, reviews: 6000, bestseller: false, deal: true },
    { name: 'Instant Pot 6L', price: 7995, origPrice: 12999, category: 'home', keywords: 'electric pressure cooker', search: 'Instant+Pot+6L', image: '🍳', rating: 4.5, reviews: 3000, bestseller: false, deal: true },
    { name: 'Coffee Maker Machine', price: 2499, origPrice: 4999, category: 'home', keywords: 'coffee maker drip', search: 'Coffee+Maker+Machine', image: '☕', rating: 4.0, reviews: 9000, bestseller: true, deal: false },
    { name: 'Mixer Grinder 750W', price: 1899, origPrice: 3999, category: 'home', keywords: 'mixer grinder wet dry', search: 'Mixer+Grinder+750W', image: '🔪', rating: 4.2, reviews: 25000, bestseller: true, deal: true },
    { name: 'LED Desk Lamp', price: 499, origPrice: 999, category: 'home', keywords: 'table lamp led USB', search: 'LED+Desk+Lamp', image: '💡', rating: 3.7, reviews: 15000, bestseller: false, deal: true },
    { name: 'Electric Kettle 1.8L', price: 799, origPrice: 1999, category: 'home', keywords: 'kettle electric stainless steel', search: 'Electric+Kettle+1.8L', image: '🫖', rating: 4.1, reviews: 40000, bestseller: true, deal: true },
    { name: 'Face Serum Combo', price: 399, origPrice: 899, category: 'beauty', keywords: 'face serum vitamin C', search: 'Face+Serum+Combo', image: '🧴', rating: 3.9, reviews: 20000, bestseller: true, deal: true },
    { name: 'Men Perfume 100ml', price: 299, origPrice: 699, category: 'beauty', keywords: 'men perfume fragrance', search: 'Men+Perfume+100ml', image: '🧴', rating: 3.5, reviews: 30000, bestseller: false, deal: true },
    { name: 'Makeup Kit Professional', price: 899, origPrice: 1999, category: 'beauty', keywords: 'makeup kit cosmetics', search: 'Makeup+Kit+Professional', image: '💄', rating: 4.1, reviews: 12000, bestseller: true, deal: false },
    { name: 'Hair Dryer 1200W', price: 699, origPrice: 1499, category: 'beauty', keywords: 'hair dryer professional', search: 'Hair+Dryer+1200W', image: '💇', rating: 4.0, reviews: 18000, bestseller: false, deal: true },
    { name: 'Body Lotion Set', price: 349, origPrice: 699, category: 'beauty', keywords: 'body lotion moisturizer', search: 'Body+Lotion+Set', image: '🧼', rating: 4.2, reviews: 25000, bestseller: true, deal: true },
    { name: 'Board Game Classic', price: 399, origPrice: 799, category: 'toys', keywords: 'board game family', search: 'Board+Game+Classic', image: '🎲', rating: 4.3, reviews: 15000, bestseller: true, deal: false },
    { name: 'UNO Card Game', price: 199, origPrice: 350, category: 'toys', keywords: 'card game uno', search: 'UNO+Card+Game', image: '🎴', rating: 4.5, reviews: 50000, bestseller: true, deal: true },
    { name: 'Remote Control Car', price: 1299, origPrice: 2999, category: 'toys', keywords: 'rc car toy', search: 'Remote+Control+Car', image: '🚗', rating: 4.2, reviews: 8000, bestseller: false, deal: false },
    { name: 'Soft Toys Combo', price: 499, origPrice: 999, category: 'toys', keywords: 'soft toys plush teddy', search: 'Soft+Toys+Combo', image: '🧸', rating: 4.1, reviews: 20000, bestseller: true, deal: true },
    { name: 'Python Programming Book', price: 450, origPrice: 699, category: 'books', keywords: 'python programming learn', search: 'Python+Programming+Book', image: '📚', rating: 4.4, reviews: 5000, bestseller: true, deal: false },
    { name: 'Atomic Habits', price: 299, origPrice: 499, category: 'books', keywords: 'self help habits improvement', search: 'Atomic+Habits+Book', image: '📖', rating: 4.7, reviews: 100000, bestseller: true, deal: true },
    { name: 'Rich Dad Poor Dad', price: 199, origPrice: 399, category: 'books', keywords: 'finance investing', search: 'Rich+Dad+Poor+Dad', image: '📖', rating: 4.5, reviews: 80000, bestseller: true, deal: true },
    { name: 'The Psychology of Money', price: 355, origPrice: 599, category: 'books', keywords: 'finance money psychology', search: 'Psychology+Money+Book', image: '📖', rating: 4.6, reviews: 30000, bestseller: true, deal: true },
    { name: 'Men Full Sleeve T-Shirt', price: 549, origPrice: 999, category: 'fashion', keywords: 'tshirt men full sleeve cotton', search: 'Men+Full+Sleeve+T-Shirt', image: '👕', rating: 4.0, reviews: 6000, bestseller: true, deal: true },
    { name: 'Casual Shirt Men', price: 699, origPrice: 1499, category: 'fashion', keywords: 'shirt men casual cotton', search: 'Casual+Shirt+Men', image: '👔', rating: 4.1, reviews: 10000, bestseller: true, deal: true },
    { name: 'Jeans Men Slim', price: 999, origPrice: 2499, category: 'fashion', keywords: 'jeans men slim fit', search: 'Jeans+Men+Slim', image: '👖', rating: 4.2, reviews: 15000, bestseller: true, deal: true },
    { name: 'Wireless Mouse', price: 499, origPrice: 999, category: 'electronics', keywords: 'mouse wireless usb', search: 'Wireless+Mouse+Computer', image: '🖱️', rating: 4.1, reviews: 25000, bestseller: true, deal: true },
    { name: 'Keyboard Mouse Combo', price: 799, origPrice: 1999, category: 'electronics', keywords: 'keyboard mouse wireless', search: 'Keyboard+Mouse+Combo', image: '⌨️', rating: 4.2, reviews: 20000, bestseller: true, deal: true },
    { name: 'Pendrive 64GB', price: 399, origPrice: 699, category: 'electronics', keywords: 'pendrive usb 64gb', search: 'Pendrive+64GB+USB', image: '💾', rating: 4.3, reviews: 30000, bestseller: true, deal: true },
    { name: 'Selfie Stick', price: 349, origPrice: 699, category: 'electronics', keywords: 'selfie stick tripod', search: 'Selfie+Stick+Tripod', image: '🤳', rating: 3.8, reviews: 15000, bestseller: false, deal: true },
    { name: 'Mobile Stand', price: 249, origPrice: 499, category: 'electronics', keywords: 'phone stand desk', search: 'Mobile+Stand+Desk', image: '📱', rating: 4.0, reviews: 10000, bestseller: true, deal: true },
    { name: 'Belt Men Leather', price: 599, origPrice: 1299, category: 'fashion', keywords: 'belt men leather formal', search: 'Men+Belt+Leather', image: '👔', rating: 4.1, reviews: 8000, bestseller: true, deal: true },
    { name: 'Wallet Men Leather', price: 449, origPrice: 899, category: 'fashion', keywords: 'wallet men leather', search: 'Wallet+Men+Leather', image: '👛', rating: 4.2, reviews: 12000, bestseller: true, deal: true },
    { name: 'Sunglasses Men', price: 399, origPrice: 799, category: 'fashion', keywords: 'sunglasses men aviator', search: 'Sunglasses+Men+Aviator', image: '🕶️', rating: 3.9, reviews: 10000, bestseller: true, deal: true },
    { name: 'Socks Pack of 6', price: 299, origPrice: 499, category: 'fashion', keywords: 'socks men cotton', search: 'Socks+Men+Cotton+Pack', image: '🧦', rating: 4.0, reviews: 20000, bestseller: true, deal: true },
    { name: 'Inner Wear Vest', price: 249, origPrice: 399, category: 'fashion', keywords: 'vest inner wear cotton', search: 'Inner+Wear+Vest+Men', image: '🎽', rating: 4.1, reviews: 30000, bestseller: true, deal: true },
    { name: 'Handbag Women', price: 899, origPrice: 1999, category: 'fashion', keywords: 'handbag women leather', search: 'Handbag+Women+Leather', image: '👜', rating: 4.0, reviews: 8000, bestseller: true, deal: true },
    { name: 'Backpack Men', price: 799, origPrice: 1999, category: 'fashion', keywords: 'backpack laptop men', search: 'Backpack+Laptop+Men', image: '🎒', rating: 4.2, reviews: 15000, bestseller: true, deal: true },
    { name: 'Perfume Women 100ml', price: 399, origPrice: 899, category: 'beauty', keywords: 'women perfume fragrance', search: 'Perfume+Women+100ml', image: '🌸', rating: 4.0, reviews: 15000, bestseller: true, deal: true },
    { name: 'Lipstick Set', price: 349, origPrice: 699, category: 'beauty', keywords: 'lipstick matte set', search: 'Lipstick+Set+Matte', image: '💄', rating: 4.1, reviews: 10000, bestseller: true, deal: true },
    { name: 'Hair Oil Almond', price: 299, origPrice: 499, category: 'beauty', keywords: 'hair oil almond', search: 'Hair+Oil+Almond', image: '🧴', rating: 4.3, reviews: 20000, bestseller: true, deal: true },
    { name: 'Cricket Bat', price: 999, origPrice: 2499, category: 'toys', keywords: 'cricket bat willow', search: 'Cricket+Bat+Kashmir+Willow', image: '🏏', rating: 4.1, reviews: 6000, bestseller: false, deal: true },
    { name: 'Football', price: 399, origPrice: 799, category: 'toys', keywords: 'football size 5', search: 'Football+Size+5', image: '⚽', rating: 4.2, reviews: 8000, bestseller: true, deal: true },
    { name: 'Badminton Set', price: 599, origPrice: 1299, category: 'toys', keywords: 'badminton racket shuttle', search: 'Badminton+Racket+Set', image: '🏸', rating: 4.0, reviews: 10000, bestseller: true, deal: true },
    { name: 'Cooking Oil Set', price: 499, origPrice: 899, category: 'home', keywords: 'cooking oil refine', search: 'Cooking+Oil+Set', image: '🛢️', rating: 4.2, reviews: 15000, bestseller: true, deal: true },
    { name: 'Rice 5kg Bag', price: 399, origPrice: 599, category: 'home', keywords: 'basmati rice', search: 'Basmati+Rice+5kg', image: '米', rating: 4.3, reviews: 30000, bestseller: true, deal: true },
    { name: 'Coffee Beans 1kg', price: 699, origPrice: 1299, category: 'home', keywords: 'coffee beans arabica', search: 'Coffee+Beans+1kg', image: '☕', rating: 4.4, reviews: 8000, bestseller: true, deal: true },
    { name: 'Chocolate Set Gift', price: 449, origPrice: 799, category: 'home', keywords: 'chocolate gift box', search: 'Chocolate+Gift+Box', image: '🍫', rating: 4.5, reviews: 12000, bestseller: true, deal: true },
    { name: 'Greeting Card Set', price: 199, origPrice: 399, category: 'home', keywords: 'greeting cards birthday', search: 'Greeting+Cards+Set', image: '🎴', rating: 4.1, reviews: 5000, bestseller: false, deal: true },
    { name: 'Gift Wrap Paper', price: 249, origPrice: 499, category: 'home', keywords: 'gift wrapping paper', search: 'Gift+Wrap+Paper', image: '🎁', rating: 4.0, reviews: 8000, bestseller: true, deal: true },
    { name: 'Candle Set Aromatherapy', price: 399, origPrice: 699, category: 'home', keywords: 'candle scented Aromatherapy', search: 'Candle+Aromatherapy+Set', image: '🕯️', rating: 4.2, reviews: 6000, bestseller: true, deal: true }
];

async function searchGifts() {
    const query = document.getElementById('gift-search').value.toLowerCase().trim();
    const category = document.getElementById('gift-category').value;
    const minRating = document.getElementById('filter-4star').checked ? 4 : 0;
    
    if (!query && !category && minRating === 0) {
        showAllProducts();
        return;
    }

    const apiResults = await fetchFromAmazon(query);
    if (apiResults && useAPI) {
        displayProducts(apiResults, 'gift-results', query);
        return;
    }
    
    let filtered = PRODUCTS.filter(p => {
        if (query) {
            const searchIn = (p.name + ' ' + p.keywords).toLowerCase();
            if (!searchIn.includes(query)) return false;
        }
        if (category && p.category !== category) return false;
        if (minRating && p.rating < minRating) return false;
        return true;
    });
    
    displayProducts(filtered, 'gift-results', query);
}

function showAllProducts() {
    displayProducts(PRODUCTS, 'gift-results');
}

function displayProducts(products, containerId, searchQuery = '') {
    const container = document.getElementById(containerId);
    
    if (products.length === 0) {
        const related = PRODUCTS.slice(0, 6).map(p => {
            const searchUrl = `https://www.amazon.in/s?k=${p.search}&tag=${AMAZON_AFFILIATE_TAG}`;
            return `
                <div class="product-card">
                    <div class="product-image">${p.image}</div>
                    <div class="product-info">
                        <h4>${p.name}</h4>
                        <div class="product-price">
                            <span class="current">₹${p.price}</span>
                            <span class="original">₹${p.origPrice}</span>
                        </div>
                        <a href="${searchUrl}" target="_blank" class="amazon-btn">View on Amazon ↗</a>
                    </div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = `
            <div class="no-results">
                <h3>No exact match found for "${searchQuery}"</h3>
                <p>But here are some popular gifts you might like:</p>
            </div>
            <div class="gift-results">${related}</div>
        `;
        return;
    }
    
    container.innerHTML = products.map(p => {
        const discount = p.origPrice ? Math.round((1 - p.price / p.origPrice) * 100) : 0;
        const productUrl = p.amazonUrl || `https://www.amazon.in/s?k=${p.search}&tag=${AMAZON_AFFILIATE_TAG}`;
        
        return `
            <div class="product-card">
                ${p.deal ? `<span class="badge deal">${discount}% OFF</span>` : ''}
                ${p.bestseller ? `<span class="badge bestseller">★ Best Seller</span>` : ''}
                <div class="product-image">${p.image}</div>
                <div class="product-info">
                    <h4>${p.name}</h4>
                    ${p.rating ? `<div class="product-rating"><span class="stars">★ ${p.rating}</span><span class="reviews">${formatNumber(p.reviews)}</span></div>` : ''}
                    <div class="product-price">
                        <span class="current">${typeof p.price === 'number' ? '₹' + p.price : p.price}</span>
                        ${p.origPrice ? `<span class="original">₹${p.origPrice}</span>` : ''}
                    </div>
                    <a href="${productUrl}" target="_blank" class="amazon-btn">View on Amazon ↗</a>
                </div>
            </div>
        `;
    }).join('');
}

function formatNumber(num) {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
}

function filterByBudget(min, max) {
    const filtered = PRODUCTS.filter(p => p.price >= min && p.price < max);
    displayProducts(filtered, 'gift-results', `₹${min}-${max}`);
    document.getElementById('gift-finder').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('search-gifts')?.addEventListener('click', searchGifts);
document.getElementById('gift-search')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchGifts();
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const min = parseInt(btn.dataset.min);
        const max = parseInt(btn.dataset.max);
        const filtered = PRODUCTS.filter(p => p.price >= min && p.price < max);
        displayProducts(filtered, 'gift-results');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dealProducts = PRODUCTS.filter(p => p.deal).slice(0, 8);
    displayProducts(dealProducts, 'deals-results');
    
    const bestProducts = PRODUCTS.filter(p => p.bestseller).slice(0, 8);
    displayProducts(bestProducts, 'bestsellers-results');
    
    showAllProducts();
});

console.log('DrawGifts loaded - ' + PRODUCTS.length + ' products');

// Affiliate Link Generator
document.getElementById('generate-btn')?.addEventListener('click', generateAffiliateLink);
document.getElementById('product-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateAffiliateLink();
});

function generateAffiliateLink() {
    const input = document.getElementById('product-input').value.trim();
    if (!input) {
        alert('Please enter a product URL or name!');
        return;
    }
    
    let affiliateLink = '';
    let productName = input;
    
    if (input.includes('amazon.in')) {
        if (input.includes('/dp/')) {
            const asin = input.match(/\/dp\/([A-Z0-9]{10})/);
            if (asin) {
                affiliateLink = `https://www.amazon.in/dp/${asin[1]}?tag=${AMAZON_AFFILIATE_TAG}`;
            }
        } else if (input.includes('/gp/product/')) {
            const asin = input.match(/\/gp\/product\/([A-Z0-9]{10})/);
            if (asin) {
                affiliateLink = `https://www.amazon.in/gp/product/${asin[1]}?tag=${AMAZON_AFFILIATE_TAG}`;
            }
        } else {
            const searchTerm = input.split('?')[0].split('/').pop();
            affiliateLink = `https://www.amazon.in/s?k=${searchTerm}&tag=${AMAZON_AFFILIATE_TAG}`;
            productName = searchTerm.replace(/-/g, ' ');
        }
    } else {
        const searchTerm = input.replace(/ /g, '+');
        affiliateLink = `https://www.amazon.in/s?k=${searchTerm}&tag=${AMAZON_AFFILIATE_TAG}`;
    }
    
    document.getElementById('affiliate-link').value = affiliateLink;
    document.getElementById('generated-link').classList.remove('hidden');
    
    // Update share buttons
    const link = encodeURIComponent(affiliateLink);
    const text = encodeURIComponent(`Check this product: ${affiliateLink}`);
    
    document.getElementById('share-whatsapp').href = `https://wa.me/?text=${text}`;
    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
}

document.getElementById('copy-btn')?.addEventListener('click', () => {
    const link = document.getElementById('affiliate-link').value;
    navigator.clipboard.writeText(link);
    document.getElementById('copy-btn').textContent = '✓ Copied';
    setTimeout(() => {
        document.getElementById('copy-btn').textContent = 'Copy';
    }, 2000);
});

document.getElementById('share-copy')?.addEventListener('click', () => {
    const link = document.getElementById('affiliate-link').value;
    navigator.clipboard.writeText(link);
    document.getElementById('share-copy').textContent = '✓ Copied';
    setTimeout(() => {
        document.getElementById('share-copy').textContent = 'Copy';
    }, 2000);
});