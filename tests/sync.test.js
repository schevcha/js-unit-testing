const Lodash = require('../src/sync')

let _ = new Lodash()

describe('Lodash: compact', () => {
    
    let array

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello']
    })

    afterAll(() => {
        _ = new Lodash()
    })

    test('Should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })
    test('Remove falsy values from array', () => {
        const result = [42, true, 'hello']
        expect(_.compact(array)).toEqual(result)
    })
    test('Not contain falsy values', () => {
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(null)
    })
})

describe('Lodash: groupBy', () => {
    test('Should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })
    test('Group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            '2': [2.2, 2.4],
            '3': [3.1],
            '4': [4.2]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })
    test('Group array items by length', () => {
        const array = ['one', 'two', 'three']
        const result = { 
            '3': ['one', 'two'], 
            '5': ['three'] 
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })
    test('Not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})