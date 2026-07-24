// ORIGINL Store Settings - Algeria

export const storeSettings = {
  // Store Info
  storeName: 'ORIGINL',
  storeTagline: 'Premium Streetwear - Algerian Quality',
  
  // Currency - Algerian Dinar
  currency: 'DZD',
  currencySymbol: 'DA',
  currencyCode: 'DZD',
  
  // Format: Shows price in DZD (conversion rate ~1 USD = 135 DZD)
  currencyConversionRate: 135,
  
  // Shipping - Free over 8,000 DZD (~60 USD)
  freeShippingThreshold: 8000,
  defaultShippingCost: 600,
  expressShippingCost: 1200,
  
  // Location
  country: 'Algeria',
  countryCode: 'DZ',
  city: 'Algiers',
  
  // Contact
  email: 'contact@originl.dz',
  phone: '+213 XXX XXX XXX',
  whatsapp: '+213 XXX XXX XXX',
  
  // Payment Methods
  paymentMethods: [
    'CCP (Baridi Mob)',
    'Edahabia',
    'Cash on Delivery',
    'Bank Transfer'
  ],
  
  // Delivery Times
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

// Get shipping cost based on cart total
export function getShippingCost(cartTotalUSD: number): { 
  costUSD: number; 
  costDZD: number;
  display: string; 
  isFree: boolean 
} {
  const thresholdUSD = storeSettings.freeShippingThreshold / storeSettings.currencyConversionRate;
  
  if (cartTotalUSD >= thresholdUSD) {
    return { 
      costUSD: 0, 
      costDZD: 0,
      display: 'Gratuit', 
      isFree: true 
    };
  }
  
  return { 
    costUSD: storeSettings.defaultShippingCost / storeSettings.currencyConversionRate,
    costDZD: storeSettings.defaultShippingCost,
    display: `${storeSettings.defaultShippingCost.toLocaleString('fr-DZ')} ${storeSettings.currencySymbol}`,
    isFree: false 
  };
}

// Calculate total in USD
export function calculateTotal(cartTotalUSD: number): {
  subtotalUSD: number;
  subtotalDZD: number;
  shippingUSD: number;
  shippingDZD: number;
  totalUSD: number;
  totalDZD: number;
  isFreeShipping: boolean;
} {
  const shipping = getShippingCost(cartTotalUSD);
  const totalUSD = cartTotalUSD + shipping.costUSD;
  
  return {
    subtotalUSD: cartTotalUSD,
    subtotalDZD: Math.round(cartTotalUSD * storeSettings.currencyConversionRate),
    shippingUSD: shipping.costUSD,
    shippingDZD: shipping.costDZD,
    totalUSD: totalUSD,
    totalDZD: Math.round(totalUSD * storeSettings.currencyConversionRate),
    isFreeShipping: shipping.isFree,
  };
}
