import type { Item, Validator } from './types';

export class Checkout {
  private _cart: Map<string, Item[]>;
  private _rules: Validator[];

  /**
   * Private constructor so no instance can be created except using the "new" static method
   * @param rules 
   */
  private constructor(rules?: Validator[]) {
    this._rules = rules ?? [];
    this._cart = new Map<string, Item[]>();
  }

  /**
   * Create a new instance of the Checkout cart
   * @param rules Optional list of pricing rules to apply
   * @returns new Checkout object
   */
  public static new(rules?: Validator[]): Checkout {
    return new Checkout(rules);
  }

  /**
   * Adds a new item product to the cart
   * @param item 
   */
  add(item: Item): void {
    this._cart.set(item.name, [...(this._cart.get(item.name) ?? []), item]);
  }

  /**
   * get total price of the package
   * @returns number
   */
  get total(): number {
    /**
     * Apply the pricing rules on the cart
     */
    for (const rule of this._rules) {
      this._cart = rule(this._cart);
    }
    const products = Array.from(this._cart.values());
    let sum = 0;
    for (const productItems of products) {
      const productTotal = productItems.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);

      sum += productTotal;
    }
    return sum;
  }
}
