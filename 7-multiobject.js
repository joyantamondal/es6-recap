const products = [
      {name: 'water bottle', price: 50, color: 'noobie blue'},
      {name: 'mobile phone', price: 48000, color: 'black'},
      {name: 'smart watch', price: 5000, color: 'dark black'},
      {name: 'sun glass', price: 1200, color: 'night black'},
      {name: 'canon 70D DSLR', price: 78000, color: 'light black'}
];
const findPrice = products.find(product=>product.price==5000);
console.log(findPrice)
