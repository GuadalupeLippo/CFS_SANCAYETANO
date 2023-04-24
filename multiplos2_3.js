var result = "";
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0)
        if (i < 100) {
            result += "".concat(i, ",");
        }
        else {
            result += "".concat(i, ".");
        }
}
console.log(result);
