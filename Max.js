
var minimo
var maximo
minimo=prompt ("Numero uno:")
maximo=prompt ("Numero dos:")
function numeroMaximoEntre(minimo, maximo) {
  
  
    return Math.max(maximo,minimo) ;
}

const valorMinimo = minimo;
const valorMaximo = maximo;

const numeroMaximo = numeroMaximoEntre(valorMinimo, valorMaximo);


console.log("Número Maximo entre " + valorMinimo + " y " + valorMaximo + ": " + numeroMaximo);


