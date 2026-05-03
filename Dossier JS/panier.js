// Système de Panier complet
class Panier {
    constructor() {
        this.items = this.loadFromStorage();
        this.updateCartCount();
    }

    // Sauvegarder dans localStorage
    saveToStorage() {
        localStorage.setItem('shopify_cart', JSON.stringify(this.items));
    }

    // Charger depuis localStorage
    loadFromStorage() {
        const saved = localStorage.getItem('shopify_cart');
        return saved ? JSON.parse(saved) : [];
    }

    // Ajouter un produit
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        this.saveToStorage();
        this.updateCartCount();
        this.showNotification(`${product.title} ajouté au panier !`);
        this.updateCartDisplay();
    }

    // Supprimer un produit
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToStorage();
        this.updateCartCount();
        this.updateCartDisplay();
    }

    // Modifier la quantité
    updateQuantity(productId, newQuantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
                this.saveToStorage();
                this.updateCartCount();
                this.updateCartDisplay();
            }
        }
    }

    // Vider le panier
    clearCart() {
        this.items = [];
        this.saveToStorage();
        this.updateCartCount();
        this.updateCartDisplay();
    }

    // Obtenir le total
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Compter le nombre d'articles
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Mettre à jour l'affichage du compteur
    updateCartCount() {
        const cartCounts = document.querySelectorAll('.cart-count');
        const totalItems = this.getTotalItems();
        cartCounts.forEach(el => {
            el.textContent = totalItems;
            if (totalItems > 0) {
                el.style.display = 'flex';
            } else {
                el.style.display = 'none';
            }
        });
    }

    // Afficher le panier dans la sidebar
    updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cartItemsContainer');
        const cartTotalSpan = document.getElementById('cartTotal');
        
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <p>Votre panier est vide</p>
                    <small>Ajoutez des produits pour commencer</small>
                </div>
            `;
            if (cartTotalSpan) cartTotalSpan.textContent = '0 DH';
            return;
        }

        cartItemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()} DH</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        if (cartTotalSpan) {
            cartTotalSpan.textContent = `${this.getTotal().toLocaleString()} DH`;
        }

        // Ajouter les événements aux boutons
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const item = this.items.find(i => i.id === id);
                if (item) this.updateQuantity(id, item.quantity - 1);
            });
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const item = this.items.find(i => i.id === id);
                if (item) this.updateQuantity(id, item.quantity + 1);
            });
        });

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                this.removeItem(id);
            });
        });
    }

    // Notification
    showNotification(message, isError = false) {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = `toast-notification ${isError ? 'error' : ''}`;
        toast.innerHTML = `
            <i class="fa-solid ${isError ? 'fa-circle-exclamation' : 'fa-circle-check'}"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

// Initialisation du panier
const panier = new Panier();

// Ouvrir le panier
function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('show');
    panier.updateCartDisplay();
}

// Fermer le panier
function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('show');
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Ajouter les événements aux boutons "acheter"
    const buyButtons = document.querySelectorAll('.achat');
    buyButtons.forEach((btn, index) => {
        // Supprimer l'ancien événement pour éviter les doublons
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const carte = newBtn.closest('.carte');
            
            // Générer un ID unique basé sur le titre
            const titleElement = carte.querySelector('.titre');
            const title = titleElement ? titleElement.innerText.trim() : `Produit ${index + 1}`;
            
            // Récupérer le prix
            let price = 0;
            const prixElement = carte.querySelector('.prix');
            if (prixElement) {
                price = parseInt(prixElement.innerText.replace(/[^0-9]/g, ''));
            }
            
            // Récupérer l'image
            let image = '';
            const imgElement = carte.querySelector('.img img');
            if (imgElement) {
                image = imgElement.getAttribute('src');
            }
            
            const product = {
                id: Date.now() + index,
                title: title,
                price: price,
                image: image
            };
            
            panier.addItem(product);
            
            // Animation du bouton
            newBtn.innerHTML = '<i class="fa-solid fa-check"></i> Ajouté !';
            setTimeout(() => {
                newBtn.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Acheter';
            }, 1500);
        });
    });
    
    // Écouteurs pour le panier
    const cartIcon = document.querySelector('.fa-cart-shopping')?.closest('a');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    }
    
    const closeBtn = document.querySelector('.close-cart');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCart);
    }
    
    const overlay = document.getElementById('cartOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeCart);
    }
    
    // Bouton commander
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (panier.getTotalItems() === 0) {
                panier.showNotification('Votre panier est vide !', true);
                return;
            }
            alert(`Merci pour votre commande !\nTotal: ${panier.getTotal().toLocaleString()} DH\n\nUn email de confirmation vous sera envoyé.`);
            panier.clearCart();
            closeCart();
        });
    }
});