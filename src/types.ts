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
 * Validates an input cart against a given pricing rule and return the updated cart after price adjustments.
 * Note: this method is immutable and not changing the original cart
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
   * List of special pricing rule keys mapped to items inside pricing module that are applied to the customer
   */
  pricingRules: string[];
}
