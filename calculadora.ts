class calculadora{

public Calculadora(){}

public somar(): number {
    let result: number = 4+4;
    return result;
}

}

let calc: calculadora = new calculadora;
let soma = calc.somar();
console.log(soma);