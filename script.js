const AMAZON_AFFILIATE_TAG = 'dahinwal90-21';
const AMAZON_SEARCH_URL = 'https://www.amazon.in/s?k=';

const POPULAR_GIFTS = [
    { name: 'boAt Nirvana Ivy Earbuds', price: 1299, category: 'electronics', search: 'boAt+Nirvana+Ivy', image: '🎧', rating: 4.1, bestseller: true, deal: false },
    { name: 'boAt Rockerz 255 Pro', price: 899, category: 'electronics', search: 'boAt+Rockerz+255+Pro', image: '🎧', rating: 4.0, bestseller: true, deal: true },
    { name: 'Sony WH-1000XM4', price: 14990, category: 'electronics', search: 'Sony+WH-1000XM4', image: '🎧', rating: 4.5, bestseller: false, deal: false },
    { name: 'Noise ColorFit Pro', price: 1799, category: 'electronics', search: 'Noise+ColorFit+Pro', image: '⌚', rating: 3.8, bestseller: true, deal: false },
    { name: 'Fastrack Ladies Watch', price: 599, category: 'fashion', search: 'Fastrack+Ladies+Watch', image: '⌚', rating: 3.5, bestseller: false, deal: true },
    { name: 'Sonata Analog Watch', price: 899, category: 'fashion', search: 'Sonata+Analog+Watch', image: '⌚', rating: 4.0, bestseller: true, deal: false },
    { name: 'Titan Neo Watch', price: 2195, category: 'fashion', search: 'Titan+Neo+Watch', image: '⌚', rating: 4.2, bestseller: false, deal: false },
    { name: 'Casio G-Shock', price: 4995, category: 'fashion', search: 'Casio+G-Shock', image: '⌚', rating: 4.6, bestseller: true, deal: false },
    { name: 'Men T-Shirt Pack', price: 599, category: 'fashion', search: 'Men+T-Shirt+Pack', image: '👕', rating: 3.8, bestseller: true, deal: true },
    { name: 'Skechers Sport Shoes', price: 2499, category: 'fashion', search: 'Skechers+Sport+Shoes', image: '👟', rating: 4.1, bestseller: false, deal: false },
    { name: 'Induction Cooker', price: 1499, category: 'home', search: 'Induction+Cooker', image: '🍳', rating: 3.9, bestseller: false, deal: true },
    { name: 'Instant Pot', price: 7995, category: 'home', search: 'Instant+Pot', image: '🍳', rating: 4.5, bestseller: false, deal: false },
    { name: 'Coffee Maker', price: 2499, category: 'home', search: 'Coffee+Maker+Machine', image: '☕', rating: 4.0, bestseller: true, deal: false },
    { name: 'Mixer Grinder 750W', price: 1899, category: 'home', search: 'Mixer+Grinder+750W', image: '🔪', rating: 4.2, bestseller: true, deal: false },
    { name: 'LED Desk Lamp', price: 499, category: 'home', search: 'LED+Desk+Lamp', image: '💡', rating: 3.7, bestseller: false, deal: true },
    { name: 'Face Serum Combo', price: 399, category: 'beauty', search: 'Face+Serum+Combo', image: '🧴', rating: 3.9, bestseller: true, deal: true },
    { name: 'Men Perfume 100ml', price: 299, category: 'beauty', search: 'Men+Perfume+100ml', image: '🧴', rating: 3.5, bestseller: false, deal: true },
    { name: 'Makeup Kit', price: 899, category: 'beauty', search: 'Makeup+Kit+Professional', image: '💄', rating: 4.1, bestseller: true, deal: false },
    { name: 'Hair Dryer 1200W', price: 699, category: 'beauty', search: 'Hair+Dryer+1200W', image: '💇', rating: 4.0, bestseller: false, deal: true },
    { name: 'Board Game Classic', price: 399, category: 'toys', search: 'Board+Game+Classic', image: '🎲', rating: 4.3, bestseller: true, deal: false },
    { name: 'UNO Card Game', price: 199, category: 'toys', search: 'UNO+Card+Game', image: '🎴', rating: 4.5, bestseller: true, deal: true },
    { name: 'Remote Control Car', price: 1299, category: 'toys', search: 'Remote+Control+Car', image: '🚗', rating: 4.2, bestseller: false, deal: false },
    { name: 'Soft Toys Combo', price: 499, category: 'toys', search: 'Soft+Toys+Combo', image: '🧸', rating: 4.1, bestseller: true, deal: true },
    { name: 'Python Book', price: 450, category: 'books', search: 'Python+Programming+Book', image: '📚', rating: 4.4, bestseller: true, deal: false },
    { name: 'Atomic Habits', price: 299, category: 'books', search: 'Atomic+Habits+Book', image: '📖', rating: 4.7, bestseller: true, deal: true },
    { name: 'Rich Dad Poor Dad', price: 199, category: 'books', search: 'Rich+Dad+Poor+Dad', image: '📖', rating: 4.5, bestseller: true, deal: true }
];

let participants = [];
let exclusions = [];
let wishList = {};

// Mobile menu toggle
document.querySelector('.hamburger')?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('active');
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Secret Santa - Add participant
document.getElementById('add-participant')?.addEventListener('click', () => {
    const input = document.getElementById('participant-name');
    const name = input.value.trim();
    if (name && !participants.includes(name)) {
        participants.push(name);
        updateParticipantsList();
        updateExclusions();
        input.value = '';
    }
});

document.getElementById('participant-name')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('add-participant')?.click();
    }
});

function updateParticipantsList() {
    const list = document.getElementById('participants-list');
    list.innerHTML = participants.map((name, index) => `
        <li>
            <span>${name}</span>
            <button class="remove-btn" onclick="removeParticipant(${index})">×</button>
        </li>
    `).join('');
}

function removeParticipant(index) {
    participants.splice(index, 1);
    exclusions = exclusions.filter(e => e.from !== participants[index] && e.to !== participants[index]);
    updateParticipantsList();
    updateExclusions();
}

function updateExclusions() {
    const container = document.getElementById('exclusions-container');
    if (participants.length < 3) {
        container.innerHTML = '<p class="no-exclusions">Add at least 3 participants to set exclusions</p>';
        return;
    }

    container.innerHTML = participants.map(from => `
        <div class="exclusion-row">
            <strong>${from}</strong> can't draw 
            <select data-from="${from}" onchange="updateExclusion('${from}', this.value)">
                <option value="">Select person</option>
                ${participants.filter(p => p !== from).map(p => `
                    <option value="${p}" ${exclusions.some(e => e.from === from && e.to === p) ? 'selected' : ''}>${p}</option>
                `).join('')}
            </select>
        </div>
    `).join('');
}

function updateExclusion(from, to) {
    exclusions = exclusions.filter(e => e.from !== from);
    if (to) {
        exclusions.push({ from, to });
    }
}

// Secret Santa - Draw names
document.getElementById('secret-santa-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (participants.length < 3) {
        alert('Please add at least 3 participants!');
        return;
    }

    try {
        const results = drawNames(participants, exclusions);
        displayResults(results);
    } catch (error) {
        alert('Could not draw names. Please try again or adjust exclusions.');
    }
});

function drawNames(participants, exclusions) {
    const results = [];
    const available = [...participants];
    
    for (const from of participants) {
        const notAllowed = exclusions.filter(e => e.from === from).map(e => e.to);
        const allowed = available.filter(p => p !== from && !notAllowed.includes(p));
        
        if (allowed.length === 0) {
            throw new Error('Cannot complete draw');
        }
        
        const randomIndex = Math.floor(Math.random() * allowed.length);
        const to = allowed[randomIndex];
        results.push({ from, to });
        available.splice(available.indexOf(to), 1);
    }
    
    return results;
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results-list');
    resultsDiv.innerHTML = results.map(r => `
        <div><strong>${r.to}</strong> has ${r.from}</div>
    `).join('');
    
    document.getElementById('draw-results').classList.remove('hidden');
    
    // Generate shareable link
    const groupData = {
        group: document.getElementById('group-name').value || 'Secret Santa',
        date: document.getElementById('event-date').value,
        budget: document.getElementById('budget').value,
        results: results
    };
    const link = `${window.location.origin}${window.location.pathname}?group=${btoa(JSON.stringify(groupData))}`;
    document.getElementById('copy-link').dataset.link = link;
}

// Share on WhatsApp
document.getElementById('share-whatsapp')?.addEventListener('click', () => {
    const groupName = document.getElementById('group-name').value || 'Secret Santa';
    const date = document.getElementById('event-date').value;
    const text = `🎁 Join our Secret Santa!\n\nGroup: ${groupName}${date ? '\nDate: ' + date : ''}\n\nJoin here: ${document.getElementById('copy-link').dataset.link || window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
});

// Copy invite link
document.getElementById('copy-link')?.addEventListener('click', () => {
    const link = document.getElementById('copy-link').dataset.link || window.location.href;
    navigator.clipboard.writeText(link).then(() => {
        alert('Link copied!');
    });
});

// Wish List - Add item
document.getElementById('add-wish')?.addEventListener('click', () => {
    const itemInput = document.getElementById('wish-item');
    const linkInput = document.getElementById('wish-link');
    const item = itemInput.value.trim();
    
    if (item) {
        wishList.items = wishList.items || [];
        wishList.items.push({ item, link: linkInput.value.trim() });
        updateWishListDisplay();
        itemInput.value = '';
        linkInput.value = '';
    }
});

function updateWishListDisplay() {
    const list = document.getElementById('wish-list');
    if (!wishList.items) {
        list.innerHTML = '';
        return;
    }
    
    list.innerHTML = wishList.items.map((item, index) => `
        <li>
            <div>
                <strong>${item.item}</strong>
                ${item.link ? `<a href="${item.link}" target="_blank" style="color: var(--primary); margin-left: 8px;">🔗</a>` : ''}
            </div>
            <button class="remove-btn" onclick="removeWishItem(${index})">×</button>
        </li>
    `).join('');
}

function removeWishItem(index) {
    wishList.items.splice(index, 1);
    updateWishListDisplay();
}

// Save wish list
document.getElementById('wishlist-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('your-name').value.trim();
    if (!name || !wishList.items?.length) {
        alert('Please enter your name and add at least one item!');
        return;
    }
    
    wishList.name = name;
    const code = generateWishListCode();
    localStorage.setItem(`wishlist_${code}`, JSON.stringify(wishList));
    
    const link = `${window.location.origin}${window.location.pathname}?wishlist=${code}`;
    document.getElementById('wishlist-link').value = link;
    document.getElementById('wishlist-result').classList.remove('hidden');
});

function generateWishListCode() {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
}

// Copy wish list link
document.getElementById('copy-wishlist-link')?.addEventListener('click', () => {
    const link = document.getElementById('wishlist-link').value;
    navigator.clipboard.writeText(link).then(() => {
        alert('Link copied!');
    });
});

// Share wish list on WhatsApp
document.getElementById('share-wishlist-whatsapp')?.addEventListener('click', () => {
    const name = document.getElementById('your-name').value;
    const link = document.getElementById('wishlist-link').value;
    const text = `🎁 Here's my wish list!\n\n${name}'s Wish List\n\n${link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
});

// View someone's wish list
document.getElementById('view-wishlist-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const code = document.getElementById('view-wishlist-code').value.trim();
    const data = localStorage.getItem(`wishlist_${code}`);
    
    if (data) {
        const wishListData = JSON.parse(data);
        const resultDiv = document.getElementById('view-wishlist-result');
        resultDiv.innerHTML = `
            <h3>${wishListData.name}'s Wish List</h3>
            <ul>
                ${wishListData.items.map(item => `
                    <li>
                        <strong>${item.item}</strong>
                        ${item.link ? `<a href="${item.link}" target="_blank">View on Amazon</a>` : ''}
                    </li>
                `).join('')}
            </ul>
        `;
        resultDiv.classList.remove('hidden');
    } else {
        alert('Wish list not found! Maybe it was created on a different device.');
    }
});

// Gift Finder search
document.getElementById('search-gifts')?.addEventListener('click', searchGifts);
document.getElementById('gift-search')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchGifts();
});

// Quick filter buttons
document.querySelectorAll('.filter-tag').forEach(btn => {
    btn.addEventListener('click', () => {
        filterByQuickTag(btn.dataset.filter);
    });
});

function searchGifts() {
    const query = document.getElementById('gift-search').value.toLowerCase();
    const category = document.getElementById('gift-category').value;
    const priceFilter = document.getElementById('gift-price').value;
    const ratingFilter = document.getElementById('gift-rating').value;
    
    let products = POPULAR_GIFTS;
    
    if (query) {
        products = products.filter(p => p.name.toLowerCase().includes(query));
    }
    
    if (category) {
        products = products.filter(p => p.category === category);
    }
    
    if (priceFilter === '500') {
        products = products.filter(p => p.price < 500);
    } else if (priceFilter === '500-1000') {
        products = products.filter(p => p.price >= 500 && p.price <= 1000);
    } else if (priceFilter === '1000') {
        products = products.filter(p => p.price >= 1000);
    }
    
    if (ratingFilter) {
        products = products.filter(p => p.rating >= parseFloat(ratingFilter));
    }
    
    displayGifts(products, query);
}

function filterByQuickTag(filterType) {
    let products = POPULAR_GIFTS;
    
    if (filterType === 'bestseller') {
        products = products.filter(p => p.bestseller);
    } else if (filterType === 'under500') {
        products = products.filter(p => p.price < 500);
    } else if (filterType === '4star') {
        products = products.filter(p => p.rating >= 4);
    } else if (filterType === 'deals') {
        products = products.filter(p => p.deal);
    }
    
    document.querySelectorAll('.filter-tag').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${filterType}"]`).classList.add('active');
    displayGifts(products);
}

function displayGifts(products, searchQuery = '') {
    const container = document.getElementById('gift-results');
    
    if (products.length === 0 && searchQuery) {
        const amazonUrl = `https://www.amazon.in/s?k=${searchQuery.replace(/ /g, '+')}&tag=${AMAZON_AFFILIATE_TAG}`;
        container.innerHTML = `
            <div class="gift-card" style="grid-column: 1/-1; text-align: center;">
                <div class="gift-image">🔍</div>
                <div class="gift-info">
                    <h4>Search on Amazon</h4>
                    <p class="gift-price">Find "${searchQuery}" on Amazon</p>
                    <a href="${amazonUrl}" target="_blank" class="gift-link">View on Amazon</a>
                </div>
            </div>
        `;
        return;
    }
    
    if (products.length === 0) {
        container.innerHTML = '<p class="search-hint">No products found. Try different filters.</p>';
        return;
    }
    
    container.innerHTML = products.map(p => {
        const searchUrl = `https://www.amazon.in/s?k=${p.search}&tag=${AMAZON_AFFILIATE_TAG}`;
        return `
            <div class="gift-card">
                ${p.bestseller ? '<span class="badge bestseller">★ Best Seller</span>' : ''}
                ${p.deal ? '<span class="badge deal">🔥 Deal</span>' : ''}
                <div class="gift-image">${p.image}</div>
                <div class="gift-info">
                    <h4>${p.name}</h4>
                    <div class="gift-meta">
                        <span class="gift-price">₹${p.price.toLocaleString()}</span>
                        <span class="gift-rating">★ ${p.rating}</span>
                    </div>
                    <a href="${searchUrl}" target="_blank" class="gift-link">View on Amazon</a>
                </div>
            </div>
        `;
    }).join('');
}

// Check URL for shared links
function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    
    // Check for group invite
    if (params.has('group')) {
        try {
            const groupData = JSON.parse(atob(params.get('group')));
            document.getElementById('secret-santa-form').classList.add('hidden');
            displayResults(groupData.results);
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        } catch (e) {
            console.log('Invalid group data');
        }
    }
    
    // Check for wish list
    if (params.has('wishlist')) {
        const code = params.get('wishlist');
        document.getElementById('view-wishlist-code').value = code;
        document.getElementById('view-wishlist-form').dispatchEvent(new Event('submit'));
        document.getElementById('wish-lists').scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkUrlParams();
    
// Show some gifts initially
displayGifts(POPULAR_GIFTS.slice(0, 8));
});

// Make functions globally available
window.removeParticipant = removeParticipant;
window.removeWishItem = removeWishItem;
window.updateExclusion = updateExclusion;