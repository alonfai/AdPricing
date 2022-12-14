import type { Customer } from '../types';
import { RULE_NAMES } from './pricing';

/**
 * Pre existing list of customers in the system
 */
export const customers: Customer[] = [
  {
    name: 'default',
    pricingRules: [],
  },
  {
    name: 'Second_Bite',
    pricingRules: [RULE_NAMES.THREE_FOR_TWO_ON_CLASSIC],
  },
  {
    name: 'Axil_Coffee_Roasters',
    pricingRules: [RULE_NAMES.STANDOUT_DISCOUNT],
  },
  {
    name: 'Myer',
    pricingRules: [RULE_NAMES.FIVE_FOR_FOUR_ON_STANDOUT, RULE_NAMES.PREIMUM_DISCOUNT],
  },
];
