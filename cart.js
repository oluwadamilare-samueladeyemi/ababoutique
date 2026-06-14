let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    function addToCart(productId) {

    const existingItem =
        cart.find(item => item.id === productId);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart();

    updateCartCount();
}

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

function updateCartCount() {

    const badge =
        document.getElementById("cart-count");

    if (!badge) return;

    const totalItems =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

    badge.textContent = totalItems;
}