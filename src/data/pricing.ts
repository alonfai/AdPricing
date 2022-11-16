import type { Validator } from '../types';
import { PRODUCT_NAMES } from './products';

/**
 * Wrapper for keeping all different pricing rules
 */
class Rules {
  /**
   * List of pricing rules
   */
  _rules: Map<string, Validator>;

  constructor() {
    this._rules = new Map<string, Validator>();
  }

  /**
   * Adds a new pricing rule to the system
   * @param name unique name for the rule
   * @param validator
   */
  add(name: string, validator: Validator) {
    this._rules.set(name, validator);
  }

  /**
   * Remove a pricing rule from the system
   * @param name
   */
  remove(name: string) {
    this._rules.delete(name);
  }
}

/**
 * An object for
 */
const pricingRules = new Rules();

/**
 * List of predefined rule unique keys in the system
 */
export const RULE_NAMES = {
  THREE_FOR_TWO_ON_CLASSIC: '3 for 2 on Classic',
  STANDOUT_DISCOUNT: 'standout discount',
  FIVE_FOR_FOUR_ON_STANDOUT: '5 for 4 on Standout',
  PREIMUM_DISCOUNT: 'premium discount',
};

//define the logic for each of the pre-defined set of pricing rules

pricingRules.add(RULE_NAMES.THREE_FOR_TWO_ON_CLASSIC, (cart) => {
  const classicItems = cart.get(PRODUCT_NAMES.CLASSIC);
  if (classicItems) {
    const quotientItems = Math.floor(classicItems.length / 2) * 2;
    cart.set(PRODUCT_NAMES.CLASSIC, classicItems.slice(0, quotientItems));
  }

  return cart;
});

pricingRules.add(RULE_NAMES.STANDOUT_DISCOUNT, (cart) => {
  let standoutItems = cart.get(PRODUCT_NAMES.STANDOUT);
  if (standoutItems) {
    standoutItems = standoutItems.map((item) => ({ ...item, price: 299.99 }));
    cart.set(PRODUCT_NAMES.STANDOUT, standoutItems);
  }
  return cart;
});

pricingRules.add(RULE_NAMES.FIVE_FOR_FOUR_ON_STANDOUT, (cart) => {
  const standoutItems = cart.get(PRODUCT_NAMES.STANDOUT);
  if (standoutItems) {
    const quotientItems = Math.floor(standoutItems.length / 4) * 4;
    cart.set(PRODUCT_NAMES.STANDOUT, standoutItems.slice(0, quotientItems));
  }
  return cart;
});

pricingRules.add(RULE_NAMES.PREIMUM_DISCOUNT, (cart) => {
  let preimumItems = cart.get(PRODUCT_NAMES.PREMIUM);
  if (preimumItems) {
    preimumItems = preimumItems.map((item) => ({ ...item, price: 389.99 }));
    cart.set(PRODUCT_NAMES.PREMIUM, preimumItems);
  }
  return cart;
});

/**
 * List of pre-defined rules in the system
 */
export const rules = pricingRules._rules;
