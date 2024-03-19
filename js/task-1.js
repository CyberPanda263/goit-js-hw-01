function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = pricePerDroid * quantity;
    return "You ordered " + quantity + " droids worth " + totalPrice + " credits!";
}