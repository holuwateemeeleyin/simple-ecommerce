document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: "Lumina Studio Pro",
            category: "Over-ear Headphones",
            price: 299.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800&h=600",
            tag: "Best Seller"
        },
        {
            id: 2,
            name: "AeroPods Max",
            category: "Wireless Earbuds",
            price: 199.50,
            image: "https://images.unsplash.com/photo-1590658268037-6f14012d90eb?auto=format&fit=crop&q=80&w=800&h=600",
            tag: "New Arrival"
        },
        {
            id: 3,
            name: "BassTrekker ANC",
            category: "Noise Cancelling",
            price: 349.00,
            image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800&h=600",
            tag: "Premium"
        },
        {
            id: 4,
            name: "Volt Stream Duo",
            category: "Bluetooth Speaker",
            price: 129.99,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800&h=600",
            tag: ""
        },
        {
            id: 5,
            name: "Audiophile DAC AMP",
            category: "Audio Equipment",
            price: 450.00,
            image: "https://images.unsplash.com/photo-1546435770-a3e426fa99f5?auto=format&fit=crop&q=80&w=800&h=600",
            tag: "Pro Gear"
        },
        {
            id: 6,
            name: "EchoSphere Mini",
            category: "Smart Speaker",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1589003071688-6625fb18a7a2?auto=format&fit=crop&q=80&w=800&h=600",
            tag: ""
        }
    ];

    const productGrid = document.getElementById('product-grid');

    function renderProducts() {
        productGrid.innerHTML = '';
        products.forEach((product, index) => {
            // Stagger animation delay
            const delay = index * 100;
            
            const card = document.createElement('div');
            // Adding a unique class `product-item` for E2E testing to grab them easily
            card.className = `product-item product-card glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/20 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] animate-fade-in-up`;
            card.style.animationDelay = `${delay}ms`;

            const tagHtml = product.tag ? `<span class="absolute top-4 left-4 glass-card text-brand-100 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg backdrop-blur-md">${product.tag}</span>` : '';

            card.innerHTML = `
                <div class="relative w-full h-56 overflow-hidden bg-gray-800">
                    ${tagHtml}
                    <!-- Placeholder gradient if image fails, and sleek hover scale effect -->
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80 z-0"></div>
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out opacity-80 group-hover:opacity-100 mix-blend-overlay">
                </div>
                <!-- Content Area -->
                <div class="p-6 relative z-10">
                    <p class="text-brand-400 text-xs font-semibold tracking-wide uppercase mb-1">${product.category}</p>
                    <h3 class="product-name text-xl font-bold text-white mb-2 leading-tight">${product.name}</h3>
                    <div class="flex items-center justify-between mt-4">
                        <p class="product-price text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">$${product.price.toFixed(2)}</p>
                        <button class="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-500 text-white flex items-center justify-center transition-colors duration-300 shadow-lg">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    renderProducts();
});
