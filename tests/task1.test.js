const toPercentInRange = require('../src/task1');

describe('num is a number', () => {
    const list = [0, 1, 99, 100]
    const res = ['0%', '1%', '99%', '100%']

    for(let i = 0; i < list.length; i++){
        test(list[i], () => {
            expect(toPercentInRange(list[i])).toBe(res[i])
        })
}
})
describe('num is not a number', () => {
    const arr = [true, false, '5', '', undefined, null]
    for(let i = 0; i < arr.length; i++){
        test('num is not a number', () => {
            expect(()=>{toPercentInRange(arr[i])}).toThrowError('num is not a number')
        })
    }
})

describe('num is not a range from 0 to 100', () => {
    const outRange = [-1, 101, NaN, Infinity]
    for(let i = 0; i < outRange.length; i++)
        test('num is not a range from 0 to 100', () => {
            expect(()=>{toPercentInRange(outRange[i])}).toThrowError('num is not a range from 0 to 100')
    })
})