Aba Boutique E-Commerce Store

Project Overview

Aba Boutique E-Commerce Store is a responsive online shopping platform developed as part of a Digital Capstone Project. The application showcases a modern African fashion brand, allowing customers to browse products, filter categories, and manage their shopping cart through a dynamic and interactive user interface.

The project demonstrates the practical application of HTML, Tailwind CSS, and JavaScript to create a client-side e-commerce experience that aligns with the project rubric requirements.

Features
Product Catalogue

- Dynamic product rendering using JavaScript.
- Product information stored in structured data objects.
- Responsive product grid layout.
- Product images, descriptions, prices, and ratings.

Shopping Cart

- Add products to cart.
- Update product quantities.
- Cart item counter displayed in the navigation bar.
- Persistent cart data using LocalStorage.
- Cart contents retained after page refresh.

Product Filtering

- Filter products by category.
- Real-time updates without reloading the page.
- Improved user shopping experience.

Responsive Design

- Mobile-first approach.
- Tablet-friendly layouts.
- Desktop optimisation.
- Built entirely using Tailwind CSS utility classes.

Contact Form

- Client-side form validation.
- Required field checks.
- Prevents submission of incomplete forms.
- User feedback through alerts.

Technologies Used

| Technology        | Purpose                       |
| ----------------- | ----------------------------- |
| HTML5             | Semantic page structure       |
| Tailwind CSS      | Styling and responsive design |
| JavaScript (ES6+) | Dynamic functionality         |
| LocalStorage API  | State persistence             |
| Font Awesome      | Icons                         |
| Google Fonts      | Typography                    |

Project Structure

```text
African-Fashion-Store/
│
├── index.html
├── products.html
├── about.html
├── contact.html
│
├── js/
│   ├── products.js
│   ├── app.js
│   ├── cart.js
│   └── contact.js
│
├── assets/
│   ├── men/
│   ├── women/
│   └── images/
│
└── README.md
```

Implementation Details

Dynamic Product Rendering

Instead of hardcoding products into HTML, product information is stored in JavaScript arrays of objects.

Example:

```javascript
const products = [
  {
    id: 1,
    name: "Baked Jedd Kaftan",
    price: 35.99,
    image: "assets/men/kaftan.jpg",
    category: "Men",
  },
];
```

The products are rendered dynamically using JavaScript loops and DOM manipulation.

Event Handling

Interactive functionality is achieved using event listeners.

Examples include:

- Add to Cart buttons
- Category filters
- Contact form submissions

LocalStorage Persistence

Shopping cart data is saved using LocalStorage.

Benefits include:

- Cart remains after page refresh.
- Improved user experience.
- Demonstrates state management techniques.

Accessibility Considerations

The project incorporates accessibility best practices by:

- Using semantic HTML elements.
- Providing descriptive alt text for images.
- Ensuring keyboard-accessible buttons.
- Maintaining readable colour contrast.

Future Improvements

Potential enhancements include:

- User authentication.
- Checkout and payment integration.
- Product search functionality.
- Wishlist support.
- Backend database integration.
- Order history tracking.
- Product reviews and ratings.

Learning Outcomes

This project demonstrates competency in:

- Structuring responsive web applications.
- Manipulating the DOM dynamically.
- Managing application state.
- Working with browser storage APIs.
- Building maintainable JavaScript applications.
- Applying modern frontend development practices.

Author

Developed as part of a Digital Capstone Project.

Author: Samuel Adeyemi

Year: 2026
