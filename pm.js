
const numeroUsuario = parseInt(prompt("Ingresa un número:"));


if (esPrimo(numeroUsuario)) {
    alert(numeroUsuario + " es un número primo.");
} else {
    alert(numeroUsuario + " no es un número primo.");
}


function esPrimo(numero) {
    if (numero <= 1) {
        return false;
       
    }
    if (numero === 2) {
        return true;
        
    }
    if (numero % 2 === 0) {
        return false;
      
    }

    const limite = Math.sqrt(numero);
    for (let i = 3; i <= limite; i += 2) {
        if (numero % i === 0) {
            return false;
           
        }
    }

    return true;
}
