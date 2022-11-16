import { Checkout } from './checkout';
import { products, PRODUCT_NAMES, rules, RULE_NAMES } from './data';

const co = Checkout.new([rules.get(RULE_NAMES.STANDOUT_DISCOUNT)!]);

co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
co.add(products.get(PRODUCT_NAMES.STANDOUT)!);
co.add(products.get(PRODUCT_NAMES.PREMIUM)!);

console.log('Total price: $', co.total());
