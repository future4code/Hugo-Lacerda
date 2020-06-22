function doisNum(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    if (num1 !== num2) {
        if (num1 > num2) {
            console.log(num1 + " \u00E9 o maior");
        }
        else {
            console.log(num2 + " \u00E9 o maior");
        }
    }
    else {
        console.log("São iguais.");
    }
}
doisNum(2, 2);
