# Plantilla de solucion

## Analisis

- Entrada:
  - Una matriz con valores numéricos que representan información de una escena 3D.

- Proceso:
  - Recorrer cada posición de la matriz.
  - Acumular la suma de todos los valores.
  - Identificar el valor máximo y mínimo dentro de la matriz.

- Salida:
  - Suma total de valores.
  - Valor mayor encontrado.
  - Valor menor encontrado.

## Reglas identificadas

1. La matriz debe recorrerse por filas y columnas.
2. Todos los valores deben participar en el cálculo.
3. Se debe conservar el mayor y menor valor encontrado.

## Pruebas

### Caso normal

Entrada:

- Matriz:
  - [5, 8, 3]
  - [7, 2, 9]
  - [4, 6, 1]

Resultado esperado:

- Suma: 45
- Mayor: 9
- Menor: 1

### Caso borde

Entrada:

- Matriz:
  - [10]

Resultado esperado:

- Suma: 10
- Mayor: 10
- Menor: 10

## Explicacion final

La solución funciona porque utiliza ciclos anidados para recorrer una matriz completa. Durante el recorrido acumula los valores y compara cada elemento para encontrar el mayor y menor valor, permitiendo analizar información organizada en una estructura bidimensional.