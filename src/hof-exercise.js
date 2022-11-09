/**********/
// EXAMPLES
/**********/

// numbers: [number]
const numbers = [1, 2, 3];

// pricedItem: {price: number, taxable: boolean}
const pricedItem = { price: 10, taxable: false };

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem];

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0;
  for (const item of items) {
    const { price, taxable } = item;
    if (taxable) {
      result += price * Math.abs(tax);
    }
    result += price;
  }
  return result;
};

/**********/
// ASSIGNMENT
/**********/

// prices: (items: [{price: number}]) -> [number]
// returns an array of numbers containing the values of object key 'price' in array 'items'
const prices = (items) => items.map(item => item.price);

// sum: (numbers: [number]) -> number
// returns the sum of all index values of prices
const sum = (prices) => prices.reduce((total, value) => { return total + value; }, 0);

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = (items) => items.filter((item) => item["taxable"]);

// applyTax: (prices: [number], tax: number) -> [number]
// returns an array of numbers, each representing the tax amount for each price index.
const applyTax = (prices, tax) => prices.map(price => price *= tax);

// baseSum: (items: [{price: number, taxable: boolean}]) -> number
// returns the sum of all prices before adding tax
const baseSum = items => sum(prices(items));

// taxSum: (items: [{price: number, taxable: boolean}], tax: number) -> number
// returns the sum of all additional tax to be applied
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));

// calculateTotalDeclarative: (items: [{price: number, taxable: boolean}], tax: number) -> number
// returns the sum of all taxed prices
const calculateTotalDeclarative = (items, tax) =>
  baseSum(items) + taxSum(items, Math.abs(tax));

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative
};
