const shoppingCart = [
    {
        id: "001",
        name: "Copo",
        value: 0.5,
        quantity: 100,
    },
    {
        id: "002",
        name: "Xicara",
        value: 1.0,
        quantity: 100,
    },
    {
        id: "003",
        name: "Jarra",
        value: 1.5,
        quantity: 100.1,
    },
];
const isCartOk = (cart) => {
    const testCart = cart.filter((product) => {
        if (product.id &&
            product.name &&
            product.value > 0 &&
            product.quantity > 0 &&
            !product.quantity.toString().includes(".")) {
            return product;
        }
    });
    return cart.length === testCart.length;
};
console.log(isCartOk(shoppingCart));
//# sourceMappingURL=infex.js.map