# ORIGINL - Premium Print on Demand Store

A modern e-commerce website for ORIGINL, a premium print-on-demand clothing brand.

## Features

- 🛍️ **Full Product Catalog** - Browse t-shirts, hoodies, sweatshirts, and tank tops
- 🛒 **Shopping Cart** - Add items with color and size selection
- 💳 **Checkout Flow** - Complete purchase with shipping and payment forms
- 📱 **Responsive Design** - Mobile-first, works on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed
- 🎨 **Beautiful Animations** - Smooth transitions and micro-interactions

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the store.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── globals.css        # Global styles
│   ├── products/
│   │   └── page.tsx        # Products catalog
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx    # Product detail page
│   └── checkout/
│       └── page.tsx        # Checkout page
├── components/
│   ├── Navbar.tsx          # Navigation with cart
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Homepage hero section
│   ├── ProductCard.tsx     # Product grid card
│   └── CartDrawer.tsx      # Sliding cart drawer
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   ├── products.ts         # Product data
│   └── cart-context.tsx    # Cart state management
├── public/                  # Static assets
└── package.json
```

## Product Categories

- **T-Shirts** - Classic tees, vintage washes, long sleeves
- **Hoodies** - Oversized, zip-up, and crop styles
- **Sweatshirts** - Essential crewnecks
- **Tank Tops** - Performance and casual styles

## Customization

### Adding Products

Edit `lib/products.ts` to add or modify products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 49.99,
  category: 't-shirt', // or 'hoodie', 'sweatshirt', 'tank-top'
  description: 'Product description...',
  colors: ['Black', 'White'],
  sizes: ['S', 'M', 'L', 'XL'],
  images: ['https://...'],
  featured: true, // optional - shows on homepage
}
```

### Connecting to a Real Backend

The current implementation uses local state. To connect to a real backend (Shopify, Stripe, etc.), update the following:

1. **Cart Context** (`lib/cart-context.tsx`) - Replace local state with API calls
2. **Product Data** (`lib/products.ts`) - Fetch from your product API
3. **Checkout** (`app/checkout/page.tsx`) - Integrate with your payment provider

## License

Private - All rights reserved © ORIGINL
