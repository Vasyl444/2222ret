function calculateTotalPrice(orderedQuantity, pricePerItem) {
  return orderedQuantity * pricePerItem
};
resulte = calculateTotalPrice(5, 100);
console.log(`total ${resulte}`);