function calculadora(){
    while(true){
        let resultado = 0.00;
        let operando1;
        let operando2;
        let operador;
        let continua;

        operando1 = parseFloat( prompt("Digite o PRIMEIRO número:  ") );
        operando2 = parseFloat( prompt("Digite o SEGUNDO número:  ") );
        operador = prompt("Digite uma das operaçõees ( + - * / )");

        if (operador === "+"  ) {
            resultado = operando1 + operando2;
        } else if ( operador === "-" ) {
            resultado = operando1 - operando2;
        } else if (operador === "*") {
            resultado = operando1 * operando2;
        } else if (operador === "/") {
            if (operando2 == 0){
                alert("Não é possivel dividir por zero");
                continua = prompt ("Digite 'sim' para continuar e 'não' para encerrar")
                if(continua === "não"){
                    return
                } 
            } else {
                 resultado = operando1 / operando2
            }
           
        } else { 
            alert("Operador Inválido");
                return
                return
        }
        if(operador !="/" || operando2 != 0)
        alert("Resultado: " +  
            operando1 + " " + operador + " " + operando2 + " = " + resultado);
   }   
}   
