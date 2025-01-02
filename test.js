// currying function
const getDiscunt = (discunt) => (price) => price - price * discunt;

const withDiscount = getDiscunt(.3);
console.log(withDiscount(2300));