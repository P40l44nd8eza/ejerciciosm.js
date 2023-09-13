
var minimo
var maximo
minimo=prompt ("Numero uno:")
maximo=prompt ("Numero dos:")
function numeroAleatorioEntre(minimo, maximo) {
  
  
    return Math.random() * (maximo - minimo) + minimo;
}

const valorMinimo = minimo;
const valorMaximo = maximo;

const numeroAleatorio = numeroAleatorioEntre(valorMinimo, valorMaximo);


alert("Número aleatorio entre " + valorMinimo + " y " + valorMaximo + ": " + numeroAleatorio);
