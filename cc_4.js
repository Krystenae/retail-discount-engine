let products = [
    { name: "Laptop", category: "electronics", price: 1000, inventory: 10 },
    { name: "T-Shirt", category: "apparel", price: 30, inventory: 20 },
    { name: "Milk", category: "groceries", price: 5, inventory: 50 },
    { name: "Detergent", category: "household", price: 12, inventory: 25 },
    { name: "Book", category: "other", price: 20, inventory: 15 }
];
for (let product of products) {

    switch (product.category) {

        case "electronics":
            product.discountedPrice = product.price * 0.80;
            break;

        case "apparel":
            product.discountedPrice = product.price * 0.85;
            break;

        case "groceries":
        case "household":
            product.discountedPrice = product.price * 0.90;
            break;

        default:
            product.discountedPrice = product.price;
            break;
    }
}
let customerType = "student";
let customerDiscount = 0;

if (customerType === "student") {
    customerDiscount = 0.05;
}
else if (customerType === "senior") {
    customerDiscount = 0.07;
}

for (let customer = 1; customer <= 3; customer++) {

    let total = 0;

    for (let product of products) {

        if (product.inventory > 0) {
            total += product.discountedPrice;
            product.inventory--;
        }
    }

    total = total * (1 - customerDiscount);

    console.log(`Customer ${customer} Total Cost: $${total.toFixed(2)}`);
}

for (let key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

for (let product of products) {

    for (let [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }

    console.log("----------------");
}
