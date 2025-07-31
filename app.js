const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 180,
    category: "tops",
    media: [
      {
        type: "image",
        src: "./media/image-shorts-1.jpeg",
      },
      {
        type: "image",
        src: "./media/image-shorts-2.jpeg",
      },
    ],
    details: `
            <ul>
              <li>Premium cotton blend fabric for comfort and durability</li>
              <li>Handcrafted in Ghana with sustainable practices</li>
              <li>Versatile all-season style with lightweight insulation</li>
              <li>Signature distressed detailing for authentic vintage look</li>
              <li>Available in 4 classic denim washes</li>
            </ul>
          `,
  },
  {
    id: 2,
    name: "Urban Street Hoodie",
    price: 230,
    category: "tops",
    media: [
      {
        type: "image",
        src: "./media/image-shorts-3.jpeg",
      },
      {
        type: "image",
        src: "./media/image-trouser-2.jpeg",
      },
    ],
    details: `
            <ul>
              <li>Ultra-soft fleece interior for maximum comfort</li>
              <li>Designed with unisex fit for versatile styling</li>
              <li>Perfect for cold evenings with thermal insulation</li>
              <li>Kangaroo pocket with hidden security compartment</li>
              <li>Adjustable drawstring hood for customizable fit</li>
            </ul>
          `,
  },
  {
    id: 3,
    name: "Minimalist White Sneakers",
    price: 320,
    category: "footwear",
    media: [
      {
        type: "video",
        src: "./media/video-trouser-1.mp4",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=800&q=80",
      },
    ],
    details: `
            <ul>
              <li>Durable rubber sole with superior traction pattern</li>
              <li>Breathable knit upper for all-day comfort</li>
              <li>Ortholite memory foam insole for support</li>
              <li>Water-resistant treatment protects against light rain</li>
              <li>Eco-friendly materials with recycled components</li>
            </ul>
          `,
  },
  {
    id: 4,
    name: "Sunset Crop Tee",
    price: 150,
    category: "tops",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1585386959984-a415522c6b09?auto=format&fit=crop&w=800&q=80",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80",
      },
    ],
    details: `
            <ul>
              <li>Premium soft-touch cotton for luxurious feel</li>
              <li>Vibrant sunset-inspired color fade pattern</li>
              <li>Designed for perfect summer vibes and comfort</li>
              <li>Tagless design to prevent skin irritation</li>
              <li>Ethically produced in fair-wage facilities</li>
            </ul>
          `,
  },
  {
    id: 5,
    name: "Luxury Leather Crossbody",
    price: 540,
    category: "accessories",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1555529669-e69c6b6ce151?auto=format&fit=crop&w=800&q=80",
      },
    ],
    details: `
            <ul>
              <li>100% genuine Italian leather with natural grain</li>
              <li>Adjustable strap with multiple carrying options</li>
              <li>Interior zip pocket for valuables organization</li>
              <li>RFID-blocking technology for security</li>
              <li>Hand-stitched details for premium craftsmanship</li>
            </ul>
          `,
  },
  {
    id: 6,
    name: "Summer Maxi Dress",
    price: 290,
    category: "dresses",
    media: [
      {
        type: "video",
        src: "https://player.vimeo.com/external/469391188.sd.mp4?s=1f2e0a2b8d0d4d6e5f1e7b2d5c4a3a1a4e9c5a2d&profile_id=139&oauth2_token_id=57447761",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d71?auto=format&fit=crop&w=800&q=80",
      },
    ],
    details: `
            <ul>
              <li>Flowy chiffon fabric for elegant movement</li>
              <li>Adjustable spaghetti straps for perfect fit</li>
              <li>Hidden side pockets for convenience</li>
              <li>Designed to flatter all body types</li>
              <li>Available in 8 vibrant summer colors</li>
            </ul>
          `,
  },
  {
    id: 7,
    name: "Slim Fit Jeans",
    price: 210,
    category: "bottoms",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1555529669-e69c6b6ce151?auto=format&fit=crop&w=800&q=80",
      },
    ],
    details: `
            <ul>
              <li>Premium stretch denim for comfort and flexibility</li>
              <li>Slim fit through hip and thigh</li>
              <li>Tapered leg opening for modern silhouette</li>
              <li>Classic five-pocket styling</li>
              <li>Available in dark wash and black</li>
            </ul>
          `,
  },
];

// Cart functionality
let cart = [];
let scrollPosition = 0;

// DOM elements
const cartIcon = document.getElementById("cart-icon");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartBadge = document.querySelector(".cart-badge");
const checkoutBtn = document.getElementById("checkout-btn");
const filterBtn = document.getElementById("filter-btn");
const filterDropdown = document.getElementById("filter-dropdown");
const filterList = document.querySelectorAll(".filter-list li");
const notificationContainer = document.getElementById("notification-container");

// Initialize app
function init() {
  renderProducts(products);
  loadCart();
  setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
  // Cart events
  cartIcon.addEventListener("click", openCart);
  closeCart.addEventListener("click", closeCartModal);
  cartOverlay.addEventListener("click", closeCartModal);
  checkoutBtn.addEventListener("click", checkoutViaWhatsApp);

  // Filter events
  filterBtn.addEventListener("click", toggleFilterDropdown);

  // Add click event to filter items
  filterList.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.dataset.category;
      filterProducts(category);

      // Update active class
      filterList.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");

      // Close dropdown on mobile
      if (window.innerWidth < 992) {
        filterDropdown.classList.remove("show");
      }
    });
  });
}

// Open cart modal
function openCart(e) {
  e.preventDefault();
  scrollPosition = window.scrollY;
  cartModal.classList.add("open");
  cartOverlay.classList.add("active");
  document.body.classList.add("scroll-lock");
  renderCartItems();
}

// Close cart modal
function closeCartModal() {
  cartModal.classList.remove("open");
  cartOverlay.classList.remove("active");
  document.body.classList.remove("scroll-lock");
  window.scrollTo(0, scrollPosition);
}

// Toggle filter dropdown
function toggleFilterDropdown() {
  filterDropdown.classList.toggle("show");
}

// Filter products by category
function filterProducts(category) {
  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);
  renderProducts(filtered);
}

// Add to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Check if product is already in cart
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.media.find((m) => m.type === "image").src,
      quantity: 1,
    });
  }

  saveCart();
  updateCartBadge();

  // Show notification
  showAddedToCartNotification(product);
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartBadge();
  }
}

// Update cart badge
function updateCartBadge() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartBadge.textContent = totalItems;
}

// Render cart items
function renderCartItems() {
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="empty-cart">
              <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 15px;"></i>
              <p>Your cart is empty</p>
            </div>
          `;
    cartTotal.textContent = "₵0";
    return;
  }

  let cartHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    cartHTML += `
            <div class="cart-item" data-id="${item.id}">
              <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₵${item.price.toLocaleString()} × ${
      item.quantity
    }</div>
                <button class="cart-item-remove" onclick="removeFromCart(${
                  item.id
                })">
                  <i class="fas fa-trash"></i> Remove
                </button>
              </div>
            </div>
          `;
  });

  cartItemsContainer.innerHTML = cartHTML;
  cartTotal.textContent = `₵${total.toLocaleString()}`;
}

// Show added to cart notification
function showAddedToCartNotification(product) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
          <div class="notification-icon">
            <i class="fas fa-check"></i>
          </div>
          <div class="notification-content">
            <div class="notification-title">Added to Cart</div>
            <div class="notification-message">${product.name} has been added to your shopping cart</div>
          </div>
          <button class="notification-close">
            <i class="fas fa-times"></i>
          </button>
        `;

  notificationContainer.appendChild(notification);

  // Trigger the animation
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 400);
  });

  // Auto-remove notification after 4 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 400);
  }, 4000);
}

// Checkout via WhatsApp
function checkoutViaWhatsApp() {
  if (cart.length === 0) return;

  let message =
    "Hello, I'd like to purchase the following items from The Denim Hub:%0A%0A";

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ₵${item.price} × ${
      item.quantity
    }%0A`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  message += `%0ATotal: ₵${total.toLocaleString()}%0A%0APlease let me know how to proceed with payment and delivery.`;

  const whatsappUrl = `https://wa.me/+233123456789?text=${message}`;
  window.open(whatsappUrl, "_blank");
}

// Render products
function renderProducts(products) {
  const reelMain = document.getElementById("reel-main");
  reelMain.innerHTML = "";

  products.forEach((p) => {
    reelMain.appendChild(createReel(p));
  });
}

// Create product reel
function createReel(product) {
  const reel = document.createElement("div");
  reel.className = "reel";

  const card = document.createElement("div");
  card.className = "reel-card";

  // Front of card
  const front = document.createElement("div");
  front.className = "reel-content";

  // Image/video container
  const imageBox = document.createElement("div");
  imageBox.className = "reel-image-container";

  const dotBox = document.createElement("div");
  dotBox.className = "reel-dots";

  // Create media elements
  product.media.forEach((media, i) => {
    let mediaElement;

    if (media.type === "video") {
      mediaElement = document.createElement("video");
      mediaElement.src = media.src;
      mediaElement.muted = true;
      mediaElement.playsInline = true;
      mediaElement.loop = true;
      // Add controls for better UX
      mediaElement.controls = true;
    } else {
      mediaElement = document.createElement("img");
      mediaElement.src = media.src;
    }

    mediaElement.alt = product.name;
    if (i === 0) mediaElement.classList.add("active");
    imageBox.appendChild(mediaElement);

    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => {
      showMedia(imageBox, dotBox, i);
    });
    dotBox.appendChild(dot);
  });

  // Navigation arrows only if multiple media items
  if (product.media.length > 1) {
    const leftArrow = document.createElement("div");
    leftArrow.className = "nav-arrow left";
    leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
    leftArrow.addEventListener("click", () => {
      const currentIndex = getCurrentMediaIndex(imageBox);
      const prevIndex =
        (currentIndex - 1 + product.media.length) % product.media.length;
      showMedia(imageBox, dotBox, prevIndex);
    });
    imageBox.appendChild(leftArrow);

    const rightArrow = document.createElement("div");
    rightArrow.className = "nav-arrow right";
    rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    rightArrow.addEventListener("click", () => {
      const currentIndex = getCurrentMediaIndex(imageBox);
      const nextIndex = (currentIndex + 1) % product.media.length;
      showMedia(imageBox, dotBox, nextIndex);
    });
    imageBox.appendChild(rightArrow);
  }

  // Swipe functionality for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  imageBox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  imageBox.addEventListener("touchend", (e) => {
    if (product.media.length <= 1) return;

    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    const currentIndex = getCurrentMediaIndex(imageBox);

    if (diff > 50) {
      // Swiped left
      const nextIndex = (currentIndex + 1) % product.media.length;
      showMedia(imageBox, dotBox, nextIndex);
    } else if (diff < -50) {
      // Swiped right
      const prevIndex =
        (currentIndex - 1 + product.media.length) % product.media.length;
      showMedia(imageBox, dotBox, prevIndex);
    }
  });

  // Product info
  const title = document.createElement("h2");
  title.className = "reel-title";
  title.textContent = product.name;

  const price = document.createElement("div");
  price.className = "reel-price";
  price.textContent = `₵${product.price.toLocaleString()}`;

  // Buttons container
  const buttons = document.createElement("div");
  buttons.className = "reel-buttons";

  const detailsBtn = document.createElement("button");
  detailsBtn.className = "details-btn";
  detailsBtn.textContent = "Details";
  detailsBtn.addEventListener("click", () => {
    const back = card.querySelector(".reel-back");
    back.classList.add("active");
  });

  const cartBtn = document.createElement("button");
  cartBtn.className = "cart-btn";
  cartBtn.textContent = "Add to Cart";
  cartBtn.addEventListener("click", () => {
    addToCart(product.id);
  });

  buttons.appendChild(detailsBtn);
  buttons.appendChild(cartBtn);

  front.appendChild(imageBox);
  front.appendChild(dotBox);
  front.appendChild(title);
  front.appendChild(price);
  front.appendChild(buttons);

  // Back of card
  const back = document.createElement("div");
  back.className = "reel-back";
  back.innerHTML = `
          <h3>Product Details</h3>
          ${product.details}
          <button class="back-btn">Back to Product</button>
        `;

  back.querySelector(".back-btn").addEventListener("click", () => {
    back.classList.remove("active");
  });

  card.appendChild(front);
  card.appendChild(back);
  reel.appendChild(card);

  return reel;
}

// Show specific media item
function showMedia(container, dotContainer, index) {
  const mediaElements = container.querySelectorAll("img, video");
  const dots = dotContainer.querySelectorAll(".dot");

  mediaElements.forEach((el, i) => {
    if (i === index) {
      el.classList.add("active");
      if (el.tagName === "VIDEO") {
        // Try to play video with error handling
        el.play().catch((error) => {
          console.log("Video play failed:", error);
        });
      }
    } else {
      el.classList.remove("active");
      if (el.tagName === "VIDEO") {
        el.pause();
      }
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Get current media index
function getCurrentMediaIndex(container) {
  const mediaElements = container.querySelectorAll("img, video");
  for (let i = 0; i < mediaElements.length; i++) {
    if (mediaElements[i].classList.contains("active")) {
      return i;
    }
  }
  return 0;
}

// Initialize the app
init();
