document.getElementById('buy-button').addEventListener('click', function() {
    const productTitle = document.querySelector('[name="product-title"]').value;
    const productPrice = document.querySelector('[name="product-price"]').value;
    const productImage = document.querySelector('[name="product-image"]').value;
    const productSize = document.querySelector('[name="product-size"]').value;
    const productQuantity = document.querySelector('[name="product-quantity"]').value;
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    cartItems.push({
        title: productTitle,
        price: parseFloat(productPrice),
        image: productImage,
        size: productSize,
        quantity: parseInt(productQuantity)
    });
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    window.location.href = 'assets/html/carrito.html';
});

document.getElementById('add-to-cart-button').addEventListener('click', function() {
    const productTitle = document.querySelector('[name="product-title"]').value;
    const productPrice = document.querySelector('[name="product-price"]').value;
    const productImage = document.querySelector('[name="product-image"]').value;
    const productSize = document.querySelector('[name="product-size"]').value;
    const productQuantity = document.querySelector('[name="product-quantity"]').value;
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    cartItems.push({
        title: productTitle,
        price: parseFloat(productPrice),
        image: productImage,
        size: productSize,
        quantity: parseInt(productQuantity)
    });
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    alert('Producto añadido al carrito');
});

document.querySelectorAll('.btn-size').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('product-size').value = this.innerText;
        document.querySelectorAll('.btn-size').forEach(btn => btn.classList.remove('btn-dark'));
        this.classList.add('btn-dark');
    });
});

document.getElementById('btn-minus').addEventListener('click', function() {
    let quantity = parseInt(document.getElementById('product-quantity').value);
    if (quantity > 1) {
        document.getElementById('product-quantity').value = --quantity;
        document.getElementById('var-value').innerText = quantity;
    }
});

document.getElementById('btn-plus').addEventListener('click', function() {
    let quantity = parseInt(document.getElementById('product-quantity').value);
    document.getElementById('product-quantity').value = ++quantity;
    document.getElementById('var-value').innerText = quantity;
});