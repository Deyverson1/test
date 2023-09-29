/* eslint-disable indent */
import { describe, expect, it } from 'vitest'
/*
Escribir una funcion que al pasarle un numero:
- Muestra 'fizz' si es multiplo de 3.
-Muestra 'buzz? si es multiplo de 5.
-Muestra 'fizzbuzz' si es multiplo de 3 y 5
-Muestra el numero si no es multiplo de ninguno de los anteiriores
*/

const fizzbuzz = (number) => {
    if (typeof number !== 'number') throw new Error('parameter provided must be a number')
    if (Number.isNaN(number)) throw new Error('parameter provided must be a number')

    // if (number === 3) return 'fizz'
    // if (number === 6) return 'fizz'
    if (number % 15 === 0) return 'fizzbuzz'
    if (number % 3 === 0) return 'fizz' // if the result of the number divided by 3 is equal to 0 return fizz
    if (number % 5 === 0) return 'buzz'

    return number
    // first you have to do the validation and then you can call return number
}
describe('fizzbuzz', () => {
    // was cover by other test more functional
    // it('should be a function', () => {
    //     expect(typeof fizzbuzz).toBe('function')
    // })

    it('should throw if not number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow()
    })

    it('should throw a specific error message if not number is provided as parameter', () => {
        expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
    })

    it('should throw a specific error message not a number is provided', () => {
        expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
    })

    it('should return 1 if number provided is 1', () => {
        expect(fizzbuzz(1)).toBe(1)
    })

    it('should return 2 if number provided is 1', () => {
        expect(fizzbuzz(2)).toBe(2)
    })

    // it('should return "fizz" if number provided is 3', () => {
    //     expect(fizzbuzz(3)).toBe('fizz')
    // })

    it('should return "fizz" if number provided is multiple of 3', () => {
        expect(fizzbuzz(6)).toBe('fizz')
        expect(fizzbuzz(9)).toBe('fizz')
        expect(fizzbuzz(12)).toBe('fizz')
    })

    // its cover already
    // it('should return 4 if number provided is 4', () => {
    //     expect(fizzbuzz(4)).toBe(4)
    // })

    it('should return "buzz" if number provided is multiple of 5', () => {
        expect(fizzbuzz(10)).toBe('buzz')
        expect(fizzbuzz(20)).toBe('buzz')
        expect(fizzbuzz(25)).toBe('buzz')
    })

    it('should return "fizzbuzz" if number provided is multiple of 15', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    })
})
