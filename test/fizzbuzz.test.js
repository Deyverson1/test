/* eslint-disable indent */
import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz.js'

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
