import { Checkout } from './checkout';
import { products, PRODUCT_NAMES, rules, RULE_NAMES } from './data';

console.log(`Creating a cart with the following price rules: ${RULE_NAMES.STANDOUT_DISCOUNT}`);
const co = Checkout.new([rules.get(RULE_NAMES.STANDOUT_DISCOUNT)!]);

console.log(`Adding item ${PRODUCT_NAMES.STANDOUT}`);
co.add(products.get(PRODUCT_NAMES.STANDOUT)!);

console.log(`Adding item ${PRODUCT_NAMES.STANDOUT}`);
co.add(products.get(PRODUCT_NAMES.STANDOUT)!);

console.log(`Adding item ${PRODUCT_NAMES.STANDOUT}`);
co.add(products.get(PRODUCT_NAMES.STANDOUT)!);

console.log(`Adding item ${PRODUCT_NAMES.PREMIUM}`);
co.add(products.get(PRODUCT_NAMES.PREMIUM)!);

console.log('Total price for the package: $', co.total);
