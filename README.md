# ORIGINL - Mode Streetwear Premium 🇩🇿

Une boutique en ligne moderne pour ORIGINL, une marque algérienne de vêtements streetwear premium.

## 🇩🇿 Basé en Algérie

- **Devise:** Dinar Algérien (DZD)
- **Langue:** Français
- **Modes de paiement:** 
  - Paiement à la livraison (COD)
  - CCP / BaridiMob
  - Edahabia
  - Virement bancaire
- **Livraison:** Partout en Algérie (3-5 jours)
- **Livraison gratuite:** Dès 10.000 د.ج

## Fonctionnalités

- 🛍️ **Catalogue Complet** - T-shirts, hoodies, sweatshirts, débardeurs
- 🛒 **Panier** - Ajouter avec sélection couleur et taille
- 💳 **Commande** - Formulaire complet avec adresse et paiement
- 📱 **Design Responsive** - Optimisé mobile (iPhone, Android)
- 🇩🇿 **Localization** - Prix en DZD, interface en français

## Stack Technique

- **Framework:** Next.js 14 (App Router)
- **Langage:** TypeScript
- **Styles:** Tailwind CSS
- **Animations:** Framer Motion
- **Icônes:** Lucide React

## Pour Commencer

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Démarrer le serveur de production
npm run start
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir la boutique.

## Structure du Projet

```
├── app/
│   ├── layout.tsx          # Layout avec providers
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css        # Styles globaux
│   ├── products/
│   │   └── page.tsx        # Catalogue produits
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx    # Détail produit
│   └── checkout/
│       └── page.tsx        # Page commande
├── components/
│   ├── Navbar.tsx          # Navigation
│   ├── Footer.tsx          # Pied de page
│   ├── Hero.tsx            # Section héro
│   ├── ProductCard.tsx     # Carte produit
│   └── CartDrawer.tsx      # Panneau panier
├── lib/
│   ├── types.ts            # Types TypeScript
│   ├── products.ts         # Données produits
│   ├── settings.ts         # Paramètres boutique
│   └── cart-context.tsx    # Gestion du panier
└── package.json
```

## Conversion de Prix

Les prix sont stockés en USD et convertis en DZD:
- Taux: ~1 USD = 135 DZD
- Exemple: 35 USD = 4.725 DZD

## Personnalisation

### Modifier les Paramètres

Éditez `lib/settings.ts` pour changer:
- Taux de conversion devise
- Seuil livraison gratuite
- Informations de contact
- Modes de paiement

### Ajouter des Produits

Éditez `lib/products.ts`:
```typescript
{
  id: 'nouveau-produit',
  name: 'ORIGINL Nouveau Tee',
  price: 39.99, // Prix en USD
  category: 't-shirt',
  description: 'Description du produit...',
  colors: ['Noir', 'Blanc', 'Gris'],
  sizes: ['S', 'M', 'L', 'XL'],
  images: ['https://...'],
}
```

## Licence

Propriétaire - Tous droits réservés © ORIGINL
