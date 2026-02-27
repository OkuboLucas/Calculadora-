function calculadora(){
    while(true){
        let resultado = 0.00;
        let operando1;
        let operando2;
        let operador;

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
                alert("Não é possivel dividir por zero")
                //return
            }
            resultado = operando1 / operando2
        } else { 
            alert("Operador Inválido");
                //return
        }
        alert("Resultado: " +  
            operando1 + " " + operador + " " + operando2 + " = " + resultado);
   }   
}   
