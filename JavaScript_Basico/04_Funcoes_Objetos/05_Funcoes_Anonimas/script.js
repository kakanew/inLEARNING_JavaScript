// a = 5/7; Após os agumentos não é necessário as variáveis
// b = 18/25;

var theBiggest = function(a, b) {
    var result;
     a > b ? result = ["a: ", a] : result = ["b: ", b];
    return result;
};

console.log(theBiggest(7/9,13/25));
// console.log(theBiggest); Exibe a função