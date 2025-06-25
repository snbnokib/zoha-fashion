// Slideshow items
const slideshowItems = [
  {
    name: 'Elegant White Kurta Pajama',
    price: '1300 BDT',
    img: 'https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/white_simplistic_kurta_suit_for_festive_wear_17403983509144_1_5.jpg'
  },
  {
    name: 'Wine Art Silk Jama',
    price: '1450 BDT',
    img: 'https://peachmode.com/cdn/shop/products/wine-floral-embroidered-art-silk-kurti-pant-set-with-dupatta-peachmode-2.jpg?v=1669052125&width=2000'
  },
  {
    name: 'Grey Chikankari Kurta',
    price: '1250 BDT',
    img: 'https://5.imimg.com/data5/ECOM/Default/2023/5/308087407/IU/BI/XK/52326283/anokherang-combos-grey-chikankari-kurti-39160397005049.jpg'
  },
  {
    name: 'Summer Holiday Floral Print Beach Casual Shirt',
    price: '600 BDT',
    img: 'https://image.made-in-china.com/202f0j00ZKvRLMBIAUci/Men-s-Summer-Holiday-Floral-Print-Beach-Casual-Tops-Shirts.webp'
  },
  {
    name: 'White Embroidered Silk Designer Salwar Kameez',
    price: '1400 BDT',
    img: 'https://www.sareespalace.com/image/cache/data-2024/white-embroidered-silk-designer-salwar-kameez-307437-1000x1375.jpg'
  },
  {
    name: 'Black & White Check Shirt For Men',
    price: '550 BDT',
    img: 'https://static-01.daraz.com.bd/p/0a9967130f6b7c0c9739b237e9cb60e3.jpg'   
  }
];

const slideImg = document.getElementById('model-image');
const slideName = document.getElementById('product-name');
const slidePrice = document.getElementById('product-price');

let slideIndex = 0;

function showSlide(index) {
  slideImg.classList.add('fade-out');
  setTimeout(() => {
    slideImg.src = slideshowItems[index].img;
    slideName.textContent = slideshowItems[index].name;
    slidePrice.textContent = slideshowItems[index].price;
    slideImg.classList.remove('fade-out');
  }, 1000);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slideshowItems.length;
  showSlide(slideIndex);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize slideshow
showSlide(slideIndex);

// Products data
const products = [
  // Men
  {
    name: 'Elegant White Kurta Pajama',
    price: '1300 BDT',
    img: 'https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/white_simplistic_kurta_suit_for_festive_wear_17403983509144_1_5.jpg',
    rating: 4.5,
    discount: '20% OFF',
    category: 'men'
  },
  {
    name: 'Black & White Check Shirt For Men',
    price: '1450 BDT',
    img: 'https://static-01.daraz.com.bd/p/0a9967130f6b7c0c9739b237e9cb60e3.jpg',
    rating: 4.8,
    discount: '15% OFF',
    category: 'men'
  },
  {
    name: 'Summer Holiday Floral Print Beach Casual Shirt',
    price: '1600 BDT',
    img: 'https://image.made-in-china.com/202f0j00ZKvRLMBIAUci/Men-s-Summer-Holiday-Floral-Print-Beach-Casual-Tops-Shirts.webp',
    rating: 5.0,
    discount: '25% OFF',
    category: 'men'
  },

  // Women
  {
    name: 'Grey Chikankari Kurta',
    price: '1250 BDT',
    img: 'https://5.imimg.com/data5/ECOM/Default/2023/5/308087407/IU/BI/XK/52326283/anokherang-combos-grey-chikankari-kurti-39160397005049.jpg',
    rating: 4.0,
    discount: '10% OFF',
    category: 'men'
  },
  {
    name: 'Floral Embroidered Kurti',
    price: '1150 BDT',
    img: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24340866/2024/4/12/c1e6b43b-8269-4f40-92a0-e95208e579851712904163729-VAIRAGEE-Floral-Embroidered-Kurtis-6641712904163027-1.jpg',
    rating: 4.6,
    discount: '10% OFF',
    category: 'women'
  },
  {
    name: 'Casual Cotton Salwar Set',
    price: '980 BDT',
    img: 'https://5.imimg.com/data5/SELLER/Default/2022/5/CR/OU/LC/153147408/ladies-casual-salwar-suit.jpeg',
    rating: 4.3,
    discount: '15% OFF',
    category: 'women'
  },

  // Kids
  {
    name: 'Little Girl Party Dress',
    price: '850 BDT',
    img: 'https://m.media-amazon.com/images/I/61eV44zhJgL._AC_SX425_.jpg',
    rating: 4.7,
    discount: '20% OFF',
    category: 'kids'
  },
  {
    name: 'Boys Traditional Panjabi Set',
    price: '790 BDT',
    img: 'https://mainsailorimagebucket.s3.ap-southeast-1.amazonaws.com/uploads/all/5eHqukYPLnMEBqD30cF7nAnNc9uX2JTjP2MbLfvL.jpg',
    rating: 4.4,
    discount: '10% OFF',
    category: 'kids'
  }
];

const grid = document.getElementById('product-grid');
const sortSelect = document.getElementById('sort-select');
const searchBar = document.getElementById('search-bar');
const tabs = document.querySelectorAll('.tab');

let activeCategory = 'all';

function renderProducts(filtered) {
  grid.innerHTML = '';

  filtered.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product-item';
    div.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${product.img}" alt="${product.name}" class="product-img" />
        <div class="discount-badge">${product.discount}</div>
        <div class="overlay">
          <a href="#" class="buy-btn" onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</a>
        </div>
      </div>
      <h4>${product.name}</h4>
      <p>${product.price}</p>
      <div class="star-rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''}</div>
    `;
    grid.appendChild(div);
  });
}

function applyFilters() {
  const keyword = searchBar.value.toLowerCase();
  let filtered = products.filter(p => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(keyword);
    return matchCategory && matchSearch;
  });

  // Sorting
  const selected = sortSelect.value;
  if (selected === 'price-low') {
    filtered.sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } else if (selected === 'price-high') {
    filtered.sort((a, b) => parseInt(b.price) - parseInt(a.price));
  } else if (selected === 'rating-high') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
  // Hide load more button since showing all
  const loadBtn = document.getElementById('load-more');
  if (loadBtn) loadBtn.style.display = 'none';
}

// Events
searchBar.addEventListener('input', applyFilters);
sortSelect.addEventListener('change', applyFilters);
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.dataset.category;
    applyFilters();
  });
});

// Initial render
applyFilters();

// Cart popup & logic

const cartButton = document.getElementById('cart-button');
const cartPopup = document.getElementById('cart-popup');
const cartItemsList = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const closeCartBtn = document.getElementById('close-cart');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartUI() {
  cartItemsList.innerHTML = '';

  if (cart.length === 0) {
    cartItemsList.innerHTML = '<li>Your cart is empty</li>';
    cartTotalPrice.textContent = '0 BDT';
    cartCount.textContent = '0';
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    const priceNum = parseInt(item.price);
    total += priceNum;

    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - ${item.price} 
      <button class="remove-item" data-index="${index}">&times;</button>
    `;
    cartItemsList.appendChild(li);
  });

  cartTotalPrice.textContent = total + ' BDT';
  cartCount.textContent = cart.length;

  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.index);
      cart.splice(idx, 1);
      saveCart();
      updateCartUI();
    });
  });
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(name, price) {
  cart.push({ name, price });
  saveCart();
  updateCartUI();
  alert(`${name} added to cart!`);
}

cartButton.addEventListener('click', () => {
  cartPopup.style.display = 'flex';
  updateCartUI();
});

closeCartBtn.addEventListener('click', () => {
  cartPopup.style.display = 'none';
});

checkoutBtn.addEventListener('click', () => {
  window.location.href = './payment/payment.html';
});


// Dark mode toggle
const darkToggle = document.getElementById('toggle-dark');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
