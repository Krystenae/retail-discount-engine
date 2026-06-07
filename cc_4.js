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
