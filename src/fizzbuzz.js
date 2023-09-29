/* eslint-disable indent */
/*
Escribir una funcion que al pasarle un numero:
- Muestra 'fizz' si es multiplo de 3.
-Muestra 'buzz? si es multiplo de 5.
-Muestra 'fizzbuzz' si es multiplo de 3 y 5
-Muestra el numero si no es multiplo de ninguno de los anteiriores
*/

export const fizzbuzz = (number) => {
    if (typeof number !== 'number') throw new Error('parameter provided must be a number')
    if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

    // if (number === 3) return 'fizz'
    // if (number === 6) return 'fizz'
    // if (number % 15 === 0) return 'fizzbuzz'
    // if (number % 3 === 0) return 'fizz' // if the result of the number divided by 3 is equal to 0 return fizz
    // if (number % 5 === 0) return 'buzz'

    const multiplies = { 3: 'fizz', 5: 'buzz' }
    let output = ''

    // making better
    Object
        .entries(multiplies)
        .forEach(([multiplier, word]) => {
            if (number % multiplier === 0) output += word
        })

    return output === '' ? number : output
    // first you have to do the validation and then you can call return number
}
