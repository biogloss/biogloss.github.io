// Datele pentru cele 10 produse cu noile denumiri de fișiere
// Înlocuiește link-urile de mai jos cu link-urile tale reale de plată din Stripe
const products = [
    { id: "NP001", name: "Nude Soft", img: "NP001.png", stripeLink: "https://buy.stripe.com/28E6oG9A8cdVbwkau59ws01" },
    { id: "NP002", name: "Pink Ballet", img: "NP002.png", stripeLink: "https://buy.stripe.com/28E6oG9A8cdVbwkau59ws01" },
    { id: "NP003", name: "Rose Petal", img: "NP003.png", stripeLink: "https://buy.stripe.com/28E6oG9A8cdVbwkau59ws01" },
    { id: "NP012", name: "Dusty Rose", img: "NP012.png", stripeLink: "https://buy.stripe.com/28E6oG9A8cdVbwkau59ws01" },
    { id: "NP015", name: "Dusty Rose", img: "NP015.png", stripeLink: "https://buy.stripe.com/28E6oG9A8cdVbwkau59ws01" },
    { id: "NP023", name: "Coral Kiss", img: "NP023.png", stripeLink: "https://buy.stripe.com/28E6oG9A8cdVbwkau59ws01" },
    { id: "NP031", name: "Mauve Blush", img: "NP031.png", stripeLink: "https://buy.stripe.com/28E6oG9A8cdVbwkau59ws01" },
    { id: "NP032", name: "Lilac Dream", img: "NP032.png", stripeLink: "https://buy.stripe.com/28E6oG9A8cdVbwkau59ws01" },
    { id: "NP087", name: "Wine Berry", img: "NP087.png", stripeLink: "https://buy.stripe.com/28E6oG9A8cdVbwkau59ws01" },
    { id: "NP089", name: "Plum Delight", img: "NP089.png", stripeLink: "https://buy.stripe.com/28E6oG9A8cdVbwkau59ws01" }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('juiceGrid');

    if (grid) {
        // Generarea structurii pentru fiecare produs
        products.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${item.img}" alt="${item.name} ${item.id}">
                <a href="${item.stripeLink}" target="_blank" class="stripe-btn">Cumpără ${item.id}</a>
            `;
            grid.appendChild(card);
        });
    }
});
