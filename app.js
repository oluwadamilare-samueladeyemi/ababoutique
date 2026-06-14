document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
});

function renderProducts(items) {

    const container = document.getElementById("products-container");

    container.textContent = "";

    items.forEach(product => {

        const card = document.createElement("div");

        card.className =
            "shadow-lg rounded p-4 hover:scale-105 transition";

        const image = document.createElement("img");

        image.src = product.image;
        image.alt = product.name;

        image.className =
            "w-full h-60 object-cover rounded";

        const title = document.createElement("h4");

        title.className =
            "mt-3 font-semibold";

        title.textContent = product.name;

        const price = document.createElement("p");

        price.className =
            "text-indigo-600 font-bold mt-3";

        price.textContent = `$${product.price}`;

        const button = document.createElement("button");

        button.className =
            "mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700";

        button.textContent = "Add to Cart";

        button.addEventListener("click", () => {
            addToCart(product.id);
        });

        card.append(
            image,
            title,
            price,
            button
        );

        container.appendChild(card);
    });
}

const filter =
    document.getElementById("category-filter");

filter.addEventListener("change", event => {

    const selected =
        event.target.value;

    if (selected === "all") {

        renderProducts(products);

        return;
    }

    const filtered =
        products.filter(product =>
            product.category === selected
        );

    renderProducts(filtered);
});