let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Clam flavored mint", price: 1.25},
    {product: "Jelly belly", price: 2.50},
    {product: "gummy Bears", price: 4.50},
    {product: "Tuna Pops", price: 3.20},
    {product: "peanut Cups", price: 5.50},
    {product: "Cherry Boats", price: 2.50},
    {product: "Sour Limes", price: 4.50},
]

// which candies cost less than 4.00

let someProducts = products.filter(product => product.price <= 4.00);

function getPrice(arrayElement) {
    console.log(arrayElement.price );
}
someProducts.forEach(someProducts);