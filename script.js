// CONSTRUIR UMA CALCULADORA
// 1. Criar um array para guardar os valores OK.
// 2. Adicionar valores nos botões OK.
// 3. Mostrar os valores no ecrã OK.
// 4. Fazer as contas
// 5. Mostrar o resultado no ecrã
// 6. Dar a função dos operadores
// 7. Limpar o ecrã
// 8. Limpar o array
// BÓNUS: Fazer a calculadora funcionar com o teclado (já n sei)

    

let valorCalculadora = [];


numeros()
operadores()


let tela = document.getElementById('display');
console.log(valorCalculadora);



function numeros() {
    
buttonsNumeros = document.querySelectorAll('.numeros');
    buttonsNumeros.forEach(botao => {
        botao.addEventListener('click', evento => {
            let numeroClicado = evento.target.innerText;
            valorCalculadora.push(numeroClicado);
            tela.value += numeroClicado;
            console.log(numeroClicado);
            
    });
});
}


function operadores() {

botaoOperador = document.querySelectorAll('.operator');
    botaoOperador.forEach(botaoOperador => {
        botaoOperador.addEventListener('click', eventoOperador => {
            let click = eventoOperador.target.innerText;
            if (click === '+' || click === '-' || click === '*' || click === '/') {
                let ultimo = valorCalculadora[valorCalculadora.length - 1]
                if (ultimo === '+' || ultimo === '-' || ultimo === '*' || ultimo === '/') {
                    return;
                }
                valorCalculadora.push(click);
                tela.value += click;
                console.log(click);


            } else if (click === '='){

                let resultado = eval(valorCalculadora.join(''));
                tela.value = resultado;
                valorCalculadora = [];
                valorCalculadora.push(resultado);
                let calculo = resultado;
                console.log(calculo);

            } else if (click === 'c') {

                tela.value = ('');
                valorCalculadora = [];
                console.log('Limpo');

                
            }})});

};
                // BOTAO DE EXCLUIR UM CARACTERE
                // tela.value = tela.value.slice(0, -1);
                // valorCalculadora = valorCalculadora.slice(0, -1);
                // console.log('Limpo');

    



    