const {sum, nativeNull} = require('../src/task2');

describe('sum', () => {
    test('Sum should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4)
        expect(sum(3, 5)).toEqual(8)
    })
    
    test('Sum should return value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThan(4)
        expect(sum(3, 4)).toBeGreaterThanOrEqual(7)
        expect(sum(5, 5)).toBeLessThan(11)
    })
    
    test('Sum should sum 2 float values correctly', () => {
        expect(sum(0.3, 0.8)).toBe(1.1)
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)    
    })
})
describe('nativeNull', () => {
    test('Should return false value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})