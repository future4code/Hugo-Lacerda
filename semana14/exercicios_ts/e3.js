function arrayInfo(arr) {
    var oddArr = arr.filter(function (number) {
        if (number % 2 === 0) {
            return number;
        }
    });
    return {
        nums: arr.length,
        oddNums: oddArr.length,
        sum: arr.reduce(function (a, b) { return a + b; }, 0)
    };
}
console.log(arrayInfo([1, 2, 3, 4, 5]));
