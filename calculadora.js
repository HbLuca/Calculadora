function calculadora(){
    const operacao = Number(prompt('Escolha uma operação: \n 1- Soma (+) \n 2- Subtração (-) \n 3- Multiplicação (*)\n 4- Divisão real (/)\n 5- Divisão Inteira (%)\n 6- Potenciação (**)'));
    
    if(!operacao || operacao >=7){
        alert('Erro- Operação Inválida');
        calculadora();
    }else
    {
            let n1 = Number(prompt('Insira o Primeiro Valor:'));
            let n2 = Number(prompt('Insira o Segundo Valor:'));
            let resultado;
            
            if (!n1 || !n2){
                alert('Erro - Parâmetros Inválidos');
                calculadora();
            } else{
                function soma(){
                    resultado = n1+n2;
                    alert(`${n1} + ${n2} = ${resultado}`)
                    novaOperacao();
                    }
                    function Subtração(){
                    resultado = n1-n2;
                    alert(`${n1} - ${n2} = ${resultado}`)
                    novaOperacao();
                    }
                    function Multiplicação(){
                     resultado = n1*n2;
                    alert(`${n1} * ${n2} = ${resultado}`)
                    novaOperacao();
                     }
                    function DivisãoReal(){
                    resultado = n1/n2;
                    alert(`${n1} / ${n2} = ${resultado}`)
                    novaOperacao();
                    }
                    function DivisãoInteira(){
                    resultado = n1%n2;
                    alert(`O resto de divisao entre ${n1} e ${n2} é igual a ${resultado}`)
                    novaOperacao();
                    }
                    function Potenciação(){
                    resultado = n1**n2;
                    alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
                    novaOperacao();
                    }
                
                    function novaOperacao(){
                        let opcao = prompt('Deseja Fazer uma nova operação? \n 1- Sim \n 2- Não');
                
                        if (opcao==1){
                            calculadora();
                        }else if (opcao==2){
                            alert ('até mais');
                        }else{
                                alert ('Digite uma opção válida!')
                                novaOperacao();
                        }
                 
            }
        
            
                }
                switch (operacao){
                    case 1:
                        soma();
                        break;
                    case 2:
                        Subtração();
                        break;
                    case 3:
                        Multiplicação();
                        break;
                    case 4:
                        DivisaoReal();
                        break;
                    case 5:
                        DivisaoInteira();
                        break;
                    case 6:
                        Potenciação();
                        break;

                }

                }
       }   
calculadora();
