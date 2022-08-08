
function sumar(){
    
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA']; // esto nos regresa todo el input tetx elemento del operandoA
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)){document.getElementById('forma').innerHTML = `Por favor ingresa dos valores`;}
    else {

        document.getElementById('forma').innerHTML = `Resultado de la operación ${resultado}`;
    }
    
}