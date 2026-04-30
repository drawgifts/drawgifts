const AMAZON_AFFILIATE_TAG = 'dahinwal90-21';
const AMAZON_SEARCH_URL = 'https://www.amazon.in/s?k=';

const PRODUCTS = [
    { name: 'boAt Nirvana Ivy Earbuds with ANC', price: 1299, origPrice: 3499, category: 'electronics', search: 'boAt+Nirvana+Ivy+ANC', image: '🎧', rating: 4.1, reviews: 25000, bestseller: true, deal: true },
    { name: 'boAt Rockerz 255 Pro', price: 899, origPrice: 2999, category: 'electronics', search: 'boAt+Rockerz+255+Pro', image: '🎧', rating: 4.0, reviews: 50000, bestseller: true, deal: true },
    { name: 'Sony WH-1000XM4 Headphones', price: 14990, origPrice: 21990, category: 'electronics', search: 'Sony+WH-1000XM4', image: '🎧', rating: 4.5, reviews: 15000, bestseller: false, deal: true },
    { name: 'Noise ColorFit Pro Watch', price: 1799, origPrice: 4999, category: 'electronics', search: 'Noise+ColorFit+Pro', image: '⌚', rating: 3.8, reviews: 30000, bestseller: true, deal: true },
    { name: 'boat Stone 350 Speaker', price: 1499, origPrice: 3999, category: 'electronics', search: 'boat+Stone+350', image: '🔊', rating: 4.2, reviews: 10000, bestseller: true, deal: true },
    { name: 'Fastrack Ladies Watch', price: 599, origPrice: 1599, category: 'fashion', search: 'Fastrack+Ladies+Watch', image: '⌚', rating: 3.5, reviews: 8000, bestseller: false, deal: true },
    { name: 'Sonata Analog Watch', price: 899, origPrice: 1999, category: 'fashion', search: 'Sonata+Analog+Watch', image: '⌚', rating: 4.0, reviews: 12000, bestseller: true, deal: false },
    { name: 'Titan Neo Watch', price: 2195, origPrice: 4500, category: 'fashion', search: 'Titan+Neo+Watch', image: '⌚', rating: 4.2, reviews: 20000, bestseller: false, deal: false },
    { name: 'Casio G-Shock', price: 4995, origPrice: 7500, category: 'fashion', search: 'Casio+G-Shock', image: '⌚', rating: 4.6, reviews: 5000, bestseller: true, deal: true },
    { name: 'Levi\'s T-Shirt Pack of 2', price: 849, origPrice: 1499, category: 'fashion', search: 'Levis+T-Shirt+Men', image: '👕', rating: 4.0, reviews: 15000, bestseller: true, deal: true },
    { name: 'Men T-Shirt Pack', price: 599, origPrice: 999, category: 'fashion', search: 'Men+T-Shirt+Pack', image: '👕', rating: 3.8, reviews: 35000, bestseller: true, deal: true },
    { name: 'Skechers Sport Shoes', price: 2499, origPrice: 4999, category: 'fashion', search: 'Skechers+Sport+Shoes', image: '👟', rating: 4.1, reviews: 8000, bestseller: false, deal: true },
    { name: 'Induction Cooker 2000W', price: 1499, origPrice: 2999, category: 'home', search: 'Induction+Cooker+2000W', image: '🍳', rating: 3.9, reviews: 6000, bestseller: false, deal: true },
    { name: 'Instant Pot 6L', price: 7995, origPrice: 12999, category: 'home', search: 'Instant+Pot+6L', image: '🍳', rating: 4.5, reviews: 3000, bestseller: false, deal: true },
    { name: 'Coffee Maker Machine', price: 2499, origPrice: 4999, category: 'home', search: 'Coffee+Maker+Machine', image: '☕', rating: 4.0, reviews: 9000, bestseller: true, deal: false },
    { name: 'Mixer Grinder 750W', price: 1899, origPrice: 3999, category: 'home', search: 'Mixer+Grinder+750W', image: '🔪', rating: 4.2, reviews: 25000, bestseller: true, deal: true },
    { name: 'LED Desk Lamp', price: 499, origPrice: 999, category: 'home', search: 'LED+Desk+Lamp', image: '💡', rating: 3.7, reviews: 15000, bestseller: false, deal: true },
    { name: 'Electric Kettle 1.8L', price: 799, origPrice: 1999, category: 'home', search: 'Electric+Kettle+1.8L', image: '🫖', rating: 4.1, reviews: 40000, bestseller: true, deal: true },
    { name: 'Face Serum Combo', price: 399, origPrice: 899, category: 'beauty', search: 'Face+Serum+Combo', image: '🧴', rating: 3.9, reviews: 20000, bestseller: true, deal: true },
    { name: 'Men Perfume 100ml', price: 299, origPrice: 699, category: 'beauty', search: 'Men+Perfume+100ml', image: '🧴', rating: 3.5, reviews: 30000, bestseller: false, deal: true },
    { name: 'Makeup Kit Professional', price: 899, origPrice: 1999, category: 'beauty', search: 'Makeup+Kit+Professional', image: '💄', rating: 4.1, reviews: 12000, bestseller: true, deal: false },
    { name: 'Hair Dryer 1200W', price: 699, origPrice: 1499, category: 'beauty', search: 'Hair+Dryer+1200W', image: '💇', rating: 4.0, reviews: 18000, bestseller: false, deal: true },
    { name: 'Body Lotion Set', price: 349, origPrice: 699, category: 'beauty', search: 'Body+Lotion+Set', image: '🧼', rating: 4.2, reviews: 25000, bestseller: true, deal: true },
    { name: 'Board Game Classic', price: 399, origPrice: 799, category: 'toys', search: 'Board+Game+Classic', image: '🎲', rating: 4.3, reviews: 15000, bestseller: true, deal: false },
    { name: 'UNO Card Game', price: 199, origPrice: 350, category: 'toys', search: 'UNO+Card+Game', image: '🎴', rating: 4.5, reviews: 50000, bestseller: true, deal: true },
    { name: 'Remote Control Car', price: 1299, origPrice: 2999, category: 'toys', search: 'Remote+Control+Car', image: '🚗', rating: 4.2, reviews: 8000, bestseller: false, deal: false },
    { name: 'Soft Toys Combo', price: 499, origPrice: 999, category: 'toys', search: 'Soft+Toys+Combo', image: '🧸', rating: 4.1, reviews: 20000, bestseller: true, deal: true },
    { name: 'Python Programming Book', price: 450, origPrice: 699, category: 'books', search: 'Python+Programming+Book', image: '📚', rating: 4.4, reviews: 5000, bestseller: true, deal: false },
    { name: 'Atomic Habits', price: 299, origPrice: 499, category: 'books', search: 'Atomic+Habits+Book', image: '📖', rating: 4.7, reviews: 100000, bestseller: true, deal: true },
    { name: 'Rich Dad Poor Dad', price: 199, origPrice: 399, category: 'books', search: 'Rich+Dad+Poor+Dad', image: '📖', rating: 4.5, reviews: 80000, bestseller: true, deal: true },
    { name: 'The Psychology of Money', price: 355, origPrice: 599, category: 'books', search: 'Psychology+Money+Book', image: '📖', rating: 4.6, reviews: 30000, bestseller: true, deal: true }
];

let currentFilters = {
    query: '',
    category: '',
    minPrice: 0,
    maxPrice: 99999,
    minRating: 0,
    bestseller: false,
    deal: false
};

function searchGifts() {
    currentFilters = {
        query: document.getElementById('gift-search').value.toLowerCase(),
        category: document.getElementById('gift-category').value,
        minPrice: 0,
        maxPrice: 99999,
        minRating: document.getElementById('filter-4star').checked ? 4 : 0,
        bestseller: document.getElementById('filter-bestseller').checked,
        deal: document.getElementById('filter-deal').checked
    };
    
    displayProducts(PRODUCTS, 'gift-results');
}

function filterByBudget(min, max) {
    currentFilters = { minPrice: min, maxPrice: max, query: '', category: '', minRating: 0, bestseller: false, deal: false };
    const filtered = PRODUCTS.filter(p => p.price >= min && p.price < max);
    displayProducts(filtered, 'gift-results');
    document.getElementById('gift-finder').scrollIntoView({ behavior: 'smooth' });
}

function displayProducts(products, containerId) {
    let filtered = products.filter(p => {
        if (currentFilters.query && !p.name.toLowerCase().includes(currentFilters.query)) return false;
        if (currentFilters.category && p.category !== currentFilters.category) return false;
        if (p.price < currentFilters.minPrice || p.price > currentFilters.maxPrice) return false;
        if (currentFilters.minRating && p.rating < currentFilters.minRating) return false;
        if (currentFilters.bestseller && !p.bestseller) return false;
        if (currentFilters.deal && !p.deal) return false;
        return true;
    });
    
    const container = document.getElementById(containerId);
    
    if (filtered.length === 0) {
        const searchUrl = `https://www.amazon.in/s?k=${currentFilters.query || 'gift'}+&tag=${AMAZON_AFFILIATE_TAG}`;
        container.innerHTML = `
            <div class="product-card" style="grid-column: 1/-1;">
                <div class="product-image">🔍</div>
                <div class="product-info">
                    <h4>Search on Amazon</h4>
                    <p>Not found? Search directly on Amazon</p>
                    <a href="${searchUrl}" target="_blank" class="amazon-btn">View on Amazon ↗</a>
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(p => {
        const discount = Math.round((1 - p.price / p.origPrice) * 100);
        const searchUrl = `https://www.amazon.in/s?k=${p.search}&tag=${AMAZON_AFFILIATE_TAG}`;
        
        return `
            <div class="product-card">
                ${p.deal ? `<span class="badge deal">${discount}% OFF</span>` : ''}
                ${p.bestseller ? `<span class="badge bestseller">★ Best Seller</span>` : ''}
                <div class="product-image">${p.image}</div>
                <div class="product-info">
                    <h4>${p.name}</h4>
                    <div class="product-rating">
                        <span class="stars">★ ${p.rating}</span>
                        <span class="reviews">${p.reviews.toLocaleString()} reviews</span>
                    </div>
                    <div class="product-price">
                        <span class="current">₹${p.price.toLocaleString()}</span>
                        <span class="original">₹${p.origPrice.toLocaleString()}</span>
                    </div>
                    <a href="${searchUrl}" target="_blank" class="amazon-btn">View on Amazon ↗</a>
                </div>
            </div>
        `;
    }).join('');
}

document.getElementById('search-gifts')?.addEventListener('click', searchGifts);

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilters.minPrice = parseInt(btn.dataset.min);
        currentFilters.maxPrice = parseInt(btn.dataset.max);
        const filtered = PRODUCTS.filter(p => p.price >= currentFilters.minPrice && p.price < currentFilters.maxPrice);
        displayProducts(filtered, 'gift-results');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dealProducts = PRODUCTS.filter(p => p.deal);
    displayProducts(dealProducts, 'deals-results');
    
    const bestProducts = PRODUCTS.filter(p => p.bestseller).slice(0, 8);
    displayProducts(bestProducts, 'bestsellers-results');
});

console.log('DrawGifts loaded - Amazon Affiliate: dahinwal90-21');