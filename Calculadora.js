function Calculadora(){
    const operacao = Number(prompt(`Escolha a operação: \n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**) `));

    
    if(!operacao || operacao >= 7){
        alert('Erro - Operação inválida');
        Calculadora();
    } else{
        let n1 = Number(prompt("Insira o primeiro valor: "));
        let n2 = Number(prompt("Insira o segundo valor: "));
        let resultado;

        if(!n1 || !n2){
            alert('Erro - parâmetro inválido');
            Calculadora();

        } else{

            function Soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function Subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function Multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function DivisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function DivisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
    
            function Potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao(){
                let opcao = prompt("Deseja fazer outra operação\n 1 - Sim\n 2 - Não");
    
                if(opcao == 1){
                    Calculadora();
                } else if(opcao == 2){
                    alert('Até mais')
                }else{
                    alert('Digite uma opção válida');
                    novaOperacao();
                }
            }
    
            switch(operacao){
                case 1:
                    Soma();
                    break;
                case 2:
                    Subtracao();
                    break;
                case 3:
                    Multiplicacao();
                    break;
                case 4:
                    DivisaoReal();
                    break;
                case 5:
                    DivisaoInteira();
                    break;
                case 6:
                    Potenciacao();
                    break
            }
        }

       
    }
    
    

}
Calculadora();

