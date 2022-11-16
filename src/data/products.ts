import type { Item } from '../types';

/**
 * List of product names
 */
export const PRODUCT_NAMES = {
  CLASSIC: 'classic',
  STANDOUT: 'standout',
  PREMIUM: 'premium',
};

/**
 * Given product ad collection in the system
 */
const products = new Map<string, Item>();
products.set(PRODUCT_NAMES.CLASSIC, {
  name: PRODUCT_NAMES.CLASSIC,
  description: 'Offers the most basic level of advertisement',
  price: 269.99,
});
products.set(
  PRODUCT_NAMES.STANDOUT,

  {
    name: PRODUCT_NAMES.STANDOUT,
    description: 'Allows advertisers to use a company logo and use a longer presentation text',
    price: 322.99,
  },
);
products.set(PRODUCT_NAMES.PREMIUM, {
  name: PRODUCT_NAMES.PREMIUM,
  description:
    'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
  price: 394.99,
});

export { products };
