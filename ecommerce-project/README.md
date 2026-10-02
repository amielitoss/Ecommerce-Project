# 🛒 Ecommerce Project

A responsive ecommerce web application built while following the **SuperSimpleDev React Course**, used as a hands-on project for learning React and modern frontend development.

The application was originally developed with **JavaScript and JSX** throughout the course and was later migrated to **TypeScript and TSX** as part of my continued learning and practice.

Throughout the project, I worked with React components, routing, API integration, cart and checkout functionality, orders, package tracking, automated testing, and TypeScript.

---

## ✨ Features

### 🏠 Products

- Display products retrieved from an API
- Product images, ratings, prices, and quantities
- Search for products
- Select product quantities
- Add products to the cart
- Visual confirmation when a product is added

### 🛒 Cart & Checkout

- Display products added to the cart
- Update product quantities
- Delete products from the cart
- Choose delivery options
- Display estimated delivery dates
- Calculate product and shipping costs
- Display tax and total order cost
- Place an order

### 📦 Orders

- Display previous orders
- Show order date and total cost
- Display products and quantities from each order
- Add previously ordered products back to the cart
- Navigate to package tracking

### 🚚 Order Tracking

- Track individual products from an order
- Display estimated delivery dates
- Show delivery progress
- Display delivery status:
  - Preparing
  - Shipped
  - Delivered

### 🧪 Testing

- Unit tests
- Component tests
- Integration tests
- User interaction testing
- API mocking

---

## 🛠️ Technologies

### Frontend

- React
- TypeScript
- JavaScript
- HTML5
- CSS3

### Libraries

- React Router
- Axios
- Day.js

### Development Tools

- Vite
- npm
- Git
- GitHub

### Testing

- Vitest
- React Testing Library
- Testing Library User Event
- Jest DOM

---

## 🔷 TypeScript Migration

The application was initially written using **JavaScript and JSX**.

After building the React version, I migrated the existing codebase to **TypeScript and TSX** rather than recreating the project from a TypeScript template.

During the migration, I worked with:

- Component prop types
- Shared application data types
- Product types
- Cart item types
- Delivery option types
- Order and ordered product types
- Payment summary types
- React state typing
- Event handler typing
- Union types
- Type inference
- Async function types
- Test data typing
- Vitest mock typing

Shared application types are organized in:

```text
src/types.ts
```

TypeScript validation can be run with:

```bash
npx tsc --noEmit
```

The migrated project passes TypeScript validation without type errors.

---

## 🧪 Automated Testing

The project contains automated tests using **Vitest** and **React Testing Library**.

Tests cover parts of the application such as:

- Product components
- Product rendering
- Adding products to the cart
- Quantity selection
- Homepage integration
- Payment summary
- Money formatting
- User interactions
- API behavior through mocks

Run the test suite with:

```bash
npx vitest run
```

---

## 📁 Project Structure

```text
src/
├── assets/
│   └── images/
│
├── components/
│   ├── CheckoutHeader.tsx
│   └── Header.tsx
│
├── pages/
│   ├── checkout/
│   │   ├── CartItemDetails.tsx
│   │   ├── CheckoutPage.tsx
│   │   ├── DeliveryDate.tsx
│   │   ├── DeliveryOptions.tsx
│   │   ├── OrderSummary.tsx
│   │   ├── PaymentSummary.test.tsx
│   │   └── PaymentSummary.tsx
│   │
│   ├── home/
│   │   ├── HomePage.test.tsx
│   │   ├── HomePage.tsx
│   │   ├── Product.test.tsx
│   │   ├── Product.tsx
│   │   └── ProductsGrid.tsx
│   │
│   └── orders/
│       ├── OrderDetails.tsx
│       ├── OrderHeader.tsx
│       ├── OrdersGrid.tsx
│       └── OrdersPage.tsx
│
├── utils/
│   ├── money.test.ts
│   └── money.ts
│
├── App.tsx
├── main.tsx
├── types.ts
└── vite-env.d.ts
```

---

## 🌐 API Integration

The frontend communicates with the application's API using **Axios**.

API requests are used for operations including:

- Loading products
- Searching products
- Loading the cart
- Adding cart items
- Updating cart quantities
- Removing cart items
- Loading delivery options
- Updating delivery options
- Loading payment information
- Creating orders
- Loading previous orders
- Loading tracking information

Example:

```ts
const response = await axios.get("/api/products");
```

---

## ⚛️ React Concepts Practiced

This project helped me practice React concepts including:

- Components
- JSX and TSX
- Props
- `useState`
- `useEffect`
- Event handling
- Conditional rendering
- Rendering arrays with `.map()`
- Component composition
- React Router
- URL parameters
- Search parameters
- Async / await
- API requests with Axios
- State updates
- Shared application data
- TypeScript with React

---

## 💻 Installation

Clone the repository:

```bash
git clone https://github.com/amielitoss/ecommerce-project.git
```

Move into the project directory:

```bash
cd ecommerce-project
```

Install the dependencies:

```bash
npm install
```

---

## ▶️ Running the Project

Start the Vite development server:

```bash
npm run dev
```

Then open the local URL displayed by Vite in the terminal.

> The application relies on API endpoints for product, cart, checkout, order, and tracking data. These endpoints must be available for the complete ecommerce flow to work.

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✅ Type Checking

Check the TypeScript code without generating output files:

```bash
npx tsc --noEmit
```

---

## 🧪 Running Tests

Run the automated test suite:

```bash
npx vitest run
```

---

## 📚 What I Learned

This project helped me move from smaller React exercises toward understanding how different parts of a larger React application connect together.

Some of the main areas I practiced were:

- Structuring a React application into reusable components
- Passing data between components with props
- Managing and updating state
- Working with asynchronous API requests
- Using Axios with React
- Implementing routing between multiple pages
- Building cart, checkout, order, and tracking flows
- Writing automated tests for React components
- Mocking API requests during tests
- Debugging React applications
- Migrating an existing JavaScript React application to TypeScript
- Creating shared TypeScript types for application data
- Understanding TypeScript type inference
- Working with union types such as `Type | null` and `Type | undefined`
- Typing React props, state, arrays, events, and test mocks

---

## 🚀 Future Improvements

Possible future improvements include:

- Additional loading and error states
- More automated test coverage
- Improved accessibility
- Further responsive design improvements
- Authentication and user accounts
- Connecting the frontend to a complete independently developed backend
- Deployment of a complete full-stack version

---

## 🙏 Credits

This project was originally built while following the **SuperSimpleDev React Course**.

The course provided the main ecommerce project, structure, lessons, and guidance used to learn and practice React concepts.

I used the project throughout the course to practice the concepts being taught and later migrated the existing JavaScript/JSX codebase to **TypeScript/TSX** as part of my continued learning.

Special thanks to **SuperSimpleDev** for creating the course and providing the project used as the foundation for this learning experience.

### SuperSimpleDev

YouTube: https://www.youtube.com/@SuperSimpleDev

---

## 👨‍💻 Author

**Carl Amiel Balita**

Web developer currently developing my skills in modern frontend and full-stack web development.

- GitHub: https://github.com/amielitoss
- Portfolio: https://carl-balita.netlify.app/

---

## 📌 Project Status

**Completed React learning project — migrated from JavaScript/JSX to TypeScript/TSX.**

- ✅ React
- ✅ TypeScript
- ✅ API integration
- ✅ React Router
- ✅ Cart and checkout
- ✅ Orders and package tracking
- ✅ Automated testing
- ✅ JavaScript → TypeScript migration
- ✅ TypeScript validation with 0 errors
- ✅ Passing test suite
- ✅ Successful production build