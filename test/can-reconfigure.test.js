/* eslint-disable indent */
import { describe, it, expect } from 'vitest'

const canReConfigure = (from, to) => {
    // if (from === undefined) throw new Error('from is required')
    if (typeof from !== 'string') throw new Error('from is not a string')
    if (typeof to !== 'string') throw new Error('to is not a string')

    if (from.length !== to.length) return false

    const hasSameUniqueLetter = new Set(from).size === new Set(to).size

    if (!hasSameUniqueLetter) return false

    return true
}

describe('canReconfigure', () => {
    // it('should be a function', () => {
    //     expect(canReConfigure).toBeTypeOf('function')
    // })

    it('should throw if first parameter is missing', () => {
        expect(() => canReConfigure()).toThrow()
    })

    it('should throw if first parameter is not a string', () => {
        expect(() => canReConfigure(2)).toThrow()
    })

    it('should throw if second parameter is not a string', () => {
        expect(() => canReConfigure('a')).toThrow()
    })

    it('should return a boolean', () => {
        expect(canReConfigure('a', 'b')).toBeTypeOf('boolean')
    })

    it('should return false if strings provided have different length', () => {
        expect(canReConfigure('abc', 'de')).toBe(false)
    })

    it('should return false if strings provided have different number of unique letters', () => {
        expect(canReConfigure('abd', 'ddd')).toBe(false)
    })
})
