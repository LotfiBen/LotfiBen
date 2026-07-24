// ORIGINL Store Settings - Algeria

export const storeSettings = {
  // Store Info
  storeName: 'ORIGINL',
  storeTagline: 'Premium Streetwear - Algerian Quality',
  
  // Currency - Algerian Dinar
  currency: 'DZD',
  currencySymbol: 'د.ج',
  currencyCode: 'DZD',
  
  // Format: Shows price in DZD (conversion rate ~1 USD = 135 DZD)
  // Prices stored in USD equivalent for easy updates
  currencyConversionRate: 135, // 1 USD = 135 DZD (approximate)
  
  // Shipping - Free over 10,000 DZD (~74 USD)
  freeShippingThreshold: 10000, // DZD
  defaultShippingCost: 600, // DZD
  expressShippingCost: 1200, // DZD
  
  // Location
  country: 'Algeria',
  countryCode: 'DZ',
  city: 'Algiers',
  
  // Contact
  email: 'contact@originl.dz',
  phone: '+213 XX XXX XXXX',
  whatsapp: '+213 XXX XXX XXX',
  
  // Social
  instagram: '@originl.dz',
  tiktok: '@originl.dz',
  
  // Payment Methods (for future integration)
  paymentMethods: [
    'CCP (Baridi Mob)',
    'Edahabia',
    'Cash on Delivery',
    'Bank Transfer'
  ],
  
  // Delivery Times (in days)
  standardDelivery: '3-5 jours',
  expressDelivery: '1-2 jours',
  
  // Return Policy
  returnDays: 14,
};

// Helper function to format price in DZD
export function formatPrice(usdPrice: number): string {
  const dzdPrice = Math.round(usdPrice * storeSettings.currencyConversionRate);
  return `${dzdPrice.toLocaleString('fr-DZ')} ${storeSettings.currencySymbol}`;
}

// Helper function to get shipping cost display
export function getShippingCost(subtotal: number): { cost: number; display: string; isFree: boolean } {
  if (subtotal >= storeSettings.freeShippingThreshold) {
    return { cost: 0, display: 'Gratuit', isFree: true };
  }
  return { 
    cost: storeSettings.defaultShippingCost, 
    display: `${storeSettings.defaultShippingCost.toLocaleString('fr-DZ')} ${storeSettings.currencySymbol}`,
    isFree: false 
  };
}
