function analizarEscena3D(matriz) {
    let suma = 0;
    let mayor = matriz[0][0];
    let menor = matriz[0][0];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            const valor = matriz[i][j];

            suma += valor;

            if (valor > mayor) {
                mayor = valor;
            }

            if (valor < menor) {
                menor = valor;
            }
        }
    }

    return {
        suma,
        mayor,
        menor
    };
}

// Ejemplo
const profundidadEscena = [
    [5, 8, 3],
    [7, 2, 9],
    [4, 6, 1]
];

console.log(analizarEscena3D(profundidadEscena));