const form =
    document.querySelector("form");

form.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        form.querySelector(
            'input[type="text"]'
        ).value.trim();

    const email =
        form.querySelector(
            'input[type="email"]'
        ).value.trim();

    const message =
        form.querySelector(
            "textarea"
        ).value.trim();

    if (!name || !email || !message) {

        alert("Please complete all fields.");

        return;
    }

    alert("Message sent successfully.");

    form.reset();
});