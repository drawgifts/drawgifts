// Amazon Affiliate ID
const AMAZON_AFFILIATE_TAG = 'dahinwal90-21';

// Amazon Search URLs for popular gifts
const AMAZON_SEARCH_URL = 'https://www.amazon.in/s?k=';

const POPULAR_GIFTS = [
    { name: 'boAt Nirvana Ivy Earbuds', price: '₹1,299', category: 'electronics', search: 'boAt+Nirvana+Ivy', image: '🎧' },
    { name: 'boAt Rockerz 255 Pro', price: '₹899', category: 'electronics', search: 'boAt+Rockerz+255+Pro', image: '🎧' },
    { name: 'Sony WH-1000XM4 Headphones', price: '₹14,990', category: 'electronics', search: 'Sony+WH-1000XM4', image: '🎧' },
    { name: 'Noise ColorFit Pro Watch', price: '₹1,799', category: 'electronics', search: 'Noise+ColorFit+Pro', image: '⌚' },
    { name: 'Fastrack Ladies Watch', price: '₹599', category: 'fashion', search: 'Fastrack+Ladies+Watch', image: '⌚' },
    { name: 'Sonata Analog Watch', price: '₹899', category: 'fashion', search: 'Sonata+Analog+Watch', image: '⌚' },
    { name: 'Titan Neo Watches', price: '₹2,195', category: 'fashion', search: 'Titan+Neo+Watch', image: '⌚' },
    { name: 'Casio G-Shock', price: '₹4,995', category: 'fashion', search: 'Casio+G-Shock', image: '⌚' },
    { name: 'Men T-Shirt Pack of 3', price: '₹599', category: 'fashion', search: 'Men+T-Shirt+Pack', image: '👕' },
    { name: 'Skechers Sport Shoes', price: '₹2,499', category: 'fashion', search: 'Skechers+Sport+Shoes', image: '👟' },
    { name: 'Kitchen Induction Cooker', price: '₹1,499', category: 'home', search: 'Induction+Cooker', image: '🍳' },
    { name: 'Instant Pot 5-in-1', price: '₹7,995', category: 'home', search: 'Instant+Pot', image: '🍳' },
    { name: 'Coffee Maker Machine', price: '₹2,499', category: 'home', search: 'Coffee+Maker+Machine', image: '☕' },
    { name: 'Mixer Grinder 750W', price: '₹1,899', category: 'home', search: 'Mixer+Grinder+750W', image: '🔪' },
    { name: 'LED Desk Lamp', price: '₹499', category: 'home', search: 'LED+Desk+Lamp', image: '💡' },
    { name: 'Face Serum Combo', price: '₹399', category: 'beauty', search: 'Face+Serum+Combo', image: '🧴' },
    { name: 'Perfume for Men 100ml', price: '₹299', category: 'beauty', search: 'Men+Perfume+100ml', image: '🧴' },
    { name: 'Makeup Kit Professional', price: '₹899', category: 'beauty', search: 'Makeup+Kit+Professional', image: '💄' },
    { name: 'Hair Dryer 1200W', price: '₹699', category: 'beauty', search: 'Hair+Dryer+1200W', image: '💇' },
    { name: 'Board Game Classic', price: '₹399', category: 'toys', search: 'Board+Game+Classic', image: '🎲' },
    { name: 'UNO Card Game', price: '₹199', category: 'toys', search: 'UNO+Card+Game', image: '🎴' },
    { name: 'Remote Control Car', price: '₹1,299', category: 'toys', search: 'Remote+Control+Car', image: '🚗' },
    { name: 'Soft Toys Combo', price: '₹499', category: 'toys', search: 'Soft+Toys+Combo', image: '🧸' },
    { name: 'Python Programming Book', price: '₹450', category: 'books', search: 'Python+Programming+Book', image: '📚' },
    { name: 'Atomic Habits', price: '₹299', category: 'books', search: 'Atomic+Habits+Book', image: '📖' },
    { name: 'Rich Dad Poor Dad', price: '₹199', category: 'books', search: 'Rich+Dad+Poor+Dad', image: '📖' }
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

function searchGifts() {
    const query = document.getElementById('gift-search').value.toLowerCase();
    const category = document.getElementById('gift-category').value;
    
    let products = POPULAR_GIFTS;
    
    if (category) {
        products = products.filter(p => p.category === category);
    }
    
    if (query) {
        products = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.includes(query)
        );
    }
    
    displayGifts(products, query);
}

function displayGifts(products, searchQuery = '') {
    const container = document.getElementById('gift-results');
    
    if (products.length === 0 && searchQuery) {
        const amazonUrl = `${AMAZON_SEARCH_URL}${searchQuery.replace(/ /g, '+')}&tag=${AMAZON_AFFILIATE_TAG}`;
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
        container.innerHTML = '<p class="search-hint">Try: "headphones", "watch", "perfume", "coffee maker", etc.</p>';
        return;
    }
    
    container.innerHTML = products.map(p => {
        const searchUrl = `${AMAZON_SEARCH_URL}${p.search}&tag=${AMAZON_AFFILIATE_TAG}`;
        return `
            <div class="gift-card">
                <div class="gift-image">${p.image}</div>
                <div class="gift-info">
                    <h4>${p.name}</h4>
                    <p class="gift-price">${p.price}</p>
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