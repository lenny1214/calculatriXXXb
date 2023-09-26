function calculateResult() {
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let operador = document.getElementById('operador').value;
    let resultado


  
        if (operador == '+') {
            resultado = num1 + num2;
        }else if(operador == '-'){
            resultado = num1-num2;
        }if (operador=='*'){
            resultado = num1*num2;
        }else if (operador =='/'){
            resultado = num1/num2;
        }else {
            resultado= 'eres tonto?'
        }

         
    

    document.querySelector("#result").innerHTML=resultado
}



















































