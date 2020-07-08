const shoppingCart = [
    {
        id: "001",
        name: "Copo",
        value: 0.5,
        quantity: 100,
        discount: 50,
    },
    {
        id: "002",
        name: "Jarra",
        value: 2.0,
        quantity: 100,
        discount: 25,
    },
    {
        id: "001",
        name: "Bandeja",
        value: 1.5,
        quantity: 100,
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
const cartNoDiscount = (cart) => {
    let sum = 0;
    cart.forEach((product) => {
        sum += product.quantity * product.value;
    });
    return sum;
};
const cartWithDiscount = (cart) => {
    let sum = 0;
    cart.forEach((product) => {
        if (product.discount) {
            sum += product.quantity * product.value * (1 - product.discount / 100);
        }
        else {
            sum += product.quantity * product.value;
        }
    });
    return sum;
};
console.log(cartNoDiscount(shoppingCart));
console.log(cartWithDiscount(shoppingCart));
//# sourceMappingURL=challenge.js.map