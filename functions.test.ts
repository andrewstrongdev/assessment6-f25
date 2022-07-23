const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('returns same length array as given ', () => {
        let array = [1,2,3,4,5]
        let originalLength = array.length

        let shuffledArray = shuffleArray(array)
        let shuffleLength = shuffledArray.length

        expect(shuffleLength).toEqual(originalLength)
    }),
    test('shuffleArray should return an array', () => { 
        let arr = [1,2,3,4,5]
        let typeArr = []
        typeArr = shuffleArray(arr)

        expect(typeof typeArr).toBe('array')
    })
})