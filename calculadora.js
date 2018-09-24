var calculadora = /** @class */ (function () {
    function calculadora() {
    }
    calculadora.prototype.Calculadora = function () { };
    calculadora.prototype.somar = function () {
        var result = 4 + 4;
        return result;
    };
    return calculadora;
}());
var calc = new calculadora;
var soma = calc.somar();
console.log(soma);
