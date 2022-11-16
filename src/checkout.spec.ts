import { customers, products, PRODUCT_NAMES, rules } from './data';
import { Checkout } from './checkout';
import { Validator } from './types';

describe('checkout for different customers', () => {
  it('default customer', () => {
    let validators: Validator[] = [];
    for (const rule of customers[0].pricingRules) {
      const validator = rules.get(rule);
      expect(validator).toBeDefined();
      validators = [...validators, validator!];
    }

    // create the checkout cart
    const co = Checkout.new(validators);

    // add items to the cart
    co.add(products.get(PRODUCT_NAMES.CLASSIC)!);
    co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
    co.add(products.get(PRODUCT_NAMES.PREMIUM)!);

    // validate the total price is correct
    expect(co.total()).toEqual(987.97);
  });

  it('SecondBite Customer', () => {
    let validators: Validator[] = [];
    for (const rule of customers[1].pricingRules) {
      const validator = rules.get(rule);
      expect(validator).toBeDefined();
      validators = [...validators, validator!];
    }

    // create the checkout cart
    const co = Checkout.new(validators);

    // add items to the cart
    co.add(products.get(PRODUCT_NAMES.CLASSIC)!);
    co.add(products.get(PRODUCT_NAMES.CLASSIC)!);
    co.add(products.get(PRODUCT_NAMES.CLASSIC)!);
    co.add(products.get(PRODUCT_NAMES.PREMIUM)!);

    expect(co.total()).toEqual(934.97);
  });

  it('Axil Coffee Roasters', () => {
    let validators: Validator[] = [];
    for (const rule of customers[2].pricingRules) {
      const validator = rules.get(rule);
      expect(validator).toBeDefined();
      validators = [...validators, validator!];
    }

    // create the checkout cart
    const co = Checkout.new(validators);

    // add items to the cart
    co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
    co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
    co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
    co.add(products.get(PRODUCT_NAMES.PREMIUM)!);

    // validate the total price is correct
    expect(co.total()).toEqual(1294.96);
  });

  it('Myer', () => {
    let validators: Validator[] = [];
    for (const rule of customers[3].pricingRules) {
      const validator = rules.get(rule);
      expect(validator).toBeDefined();
      validators = [...validators, validator!];
    }

    // create the checkout cart
    const co = Checkout.new(validators);

    // add items to the cart
    co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
    co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
    co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
    co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
    co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
    co.add(products.get(PRODUCT_NAMES.PREMIUM)!);

    // validate the total price is correct
    expect(co.total()).toEqual(1681.95);
  });
});
