let quantity;
let pricePerDroid;
function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = pricePerDroid * quantity;
    console.log("You ordered " + quantity + " droids worth " + totalPrice + " credits!");
}