// Show total price from localStorage cart items (sum prices)
const totalPriceEl = document.getElementById('total-price');

const cart = JSON.parse(localStorage.getItem('cart')) || [];
const total = cart.reduce((sum, item) => {
  // Price format: "1300 BDT" → extract number
  const priceNum = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
  return sum + priceNum;
}, 0);

totalPriceEl.textContent = total + ' BDT';

// Format card number input: add spaces every 4 digits
const cardNumberInput = document.getElementById('card-number');
cardNumberInput.addEventListener('input', () => {
  let val = cardNumberInput.value.replace(/\D/g, '').substring(0,16);
  let formatted = '';
  for(let i=0; i < val.length; i++) {
    if(i > 0 && i % 4 === 0) formatted += ' ';
    formatted += val[i];
  }
  cardNumberInput.value = formatted;
});

// Format expiry input: MM/YY
const expiryInput = document.getElementById('expiry');
expiryInput.addEventListener('input', () => {
  let val = expiryInput.value.replace(/\D/g, '').substring(0,4);
  if(val.length >= 3) {
    val = val.substring(0,2) + '/' + val.substring(2);
  }
  expiryInput.value = val;
});

// Show/hide loading spinner
const loadingSpinner = document.getElementById('loading-spinner');

function showLoading(show) {
  loadingSpinner.style.display = show ? 'flex' : 'none';
}

// Redirect with slide & loading
function redirectWithSlide(url) {
  document.body.classList.remove('transition-in');
  document.body.classList.add('transition-out');
  showLoading(true);
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

// Payment form submit
document.getElementById('pay-now').addEventListener('click', () => {
  const name = document.getElementById('card-name').value.trim();
  const number = cardNumberInput.value.replace(/\s/g, '');
  const expiry = expiryInput.value.trim();
  const cvv = document.getElementById('cvv').value.trim();

  // Simple validation
  if (!name) {
    alert('Please enter the name on the card.');
    return;
  }
  if (number.length !== 16) {
    alert('Please enter a valid 16-digit card number.');
    return;
  }
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
    alert('Please enter expiry in MM/YY format.');
    return;
  }
  if (cvv.length < 3 || cvv.length > 4) {
    alert('Please enter a valid CVV.');
    return;
  }
  if (total === 0) {
    alert('Your cart is empty.');
    return;
  }

  // Simulate payment success
  alert('Payment successful! 🎉 Thank you for shopping with Zoha Fashion.');

  // Clear cart
  localStorage.removeItem('cart');

  // Redirect to success page with animation & loading
  redirectWithSlide('success.html');
});

// Animate page load
document.body.classList.add('transition-in');
