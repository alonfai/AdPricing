/**
 * Options for supported currencies in the system
 */
export type Currency = 'AUD' | 'USD';

/**
 * A given Ad item in the system
 */
export interface Item {
  /**
   * Name of advertisment
   */
  name: string;
  /**
   * Description of the advertisment
   */
  description: string;
  /**
   * Price for the advertisment
   */
  price: number;
}

/**
 * Validates a given cart and return a updated cart with price adjustments
 */
export type Validator = (cart: Map<string, Item[]>) => Map<string, Item[]>;

/**
 * Customer type
 */
export interface Customer {
  /**
   * Customer name
   */
  name: string;
  /**
   * List of special pricing rule keys that are applicable to that customer
   */
  pricingRules: string[];
}
