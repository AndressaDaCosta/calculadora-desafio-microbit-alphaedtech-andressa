/**
 * Instruções:
 * 
 * - Ao iniciar todas as variáveis estão com valor 0;
 * 
 * - Botão A: Escolhe número em ordem decrescente(0,-1,-2,-3...) e mostra número na tela. 
 * 
 * - Botão B: Escolhe número em ordem crescente(0,1,2,3...) e mostra número na tela.
 * 
 *  - Botão A + B: (Verifica quantas operações já foram feitas) {
 * 
 *  
 * 
 *  (Se for 0 altera operação para 1);
 * 
 * ( Se não se for 1 altera os operadores matemáticos por 1 e chama a função mathOperators)
 * 
 * Função mathOperators { 
 * 
 * ( Se 1 mostra (+), se 2 mostra (-), se 3 mostra (*), se 4 mostra (/) , se 5 mostra (**) se não mostra %.)
 * 
 * }
 * 
 * (Se operação for 2 então {
 * 
 * chama a função resultado
 * 
 * }
 * 
 * Função resultado {
 * 
 * se for = 1 {  mostrar resultado de numero + numero }
 * 
 * se for = 2 { mostrar resultado de  numero - numero};
 * 
 * se for = 3 { mostrar resultado de  numero * numero};
 * 
 * se for = 4 { mostrar resultado de  numero / numero};
 * 
 * se for = 5 {mostrar resultado de  (numero ** numero)};
 * 
 * se for = 6 { mostrar resultado de  % de (numero / numero)};
 * 
 * - Zerar variáveis;
 * 
 * - Pausa e limpa a tela para o usuário fazer um novo cálculo.
 * 
 * }
 */
function Result () {
    if (operators == 1) {
        basic.clearScreen()
        basic.showString("" + numberOne + "+" + numberTwo + "=" + (numberOne + numberTwo))
    } else if (operators == 2) {
        basic.clearScreen()
        basic.showString("" + numberOne + "-" + numberTwo + "=" + (numberOne - numberTwo))
    } else if (operators == 3) {
        basic.clearScreen()
        basic.showString("" + numberOne + "*" + numberTwo + "=" + numberOne * numberTwo)
    } else if (operators == 4) {
        basic.clearScreen()
        basic.showString("" + numberOne + "/" + numberTwo + "=" + numberOne / numberTwo)
    } else if (operators == 5) {
        basic.clearScreen()
        basic.showString("" + numberOne + "**" + numberTwo + "=" + numberOne ** numberTwo)
    } else {
        basic.clearScreen()
        basic.showString("% " + numberOne + "/" + numberTwo + "=" + numberOne % numberTwo)
    }
    operators = 0
    operation = 0
    numberTwo = 0
    numberOne = 0
    basic.pause(2000)
    basic.clearScreen()
}
function mathOperators () {
    if (operators == 1) {
        // Adição  (+)
        // Addition operator
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (operators == 2) {
        // Subtração (-)  Subtraction operator
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (operators == 3) {
        // Multiplicação (*) Multiplication Operator
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (operators == 4) {
        // Divisão (/) - Division operator
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (operators == 5) {
        // Expoente (**) -
        // Exponentiation Operator
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (operators == 6) {
        // Resto da divisão % - Remainder Operator
        basic.showLeds(`
            # # . . #
            # . . # .
            . . # . .
            . # . . #
            # . . # #
            `)
        basic.pause(500)
        basic.clearScreen()
    } else {
        operators = 1
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    if (operation == 1) {
        numberOne = numberTwo
        numberTwo = 0
        operation = 2
    }
    numberTwo += -1
    basic.showNumber(numberTwo)
})
input.onButtonPressed(Button.AB, function () {
    if (operation == 0) {
        operation = 1
    } else if (operation == 1) {
        operators += 1
        mathOperators()
    } else if (operation == 2) {
        Result()
    }
})
input.onButtonPressed(Button.B, function () {
    if (operation == 1) {
        numberOne = numberTwo
        numberTwo = 0
        operation = 2
    }
    numberTwo += 1
    basic.showNumber(numberTwo)
})
let numberTwo = 0
let numberOne = 0
let operators = 0
let operation = 0
operation = 0
operators = 0
numberOne = 0
numberTwo = 0
basic.showNumber(numberOne)
