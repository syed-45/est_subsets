import { removeDuplicates } from "./skeleton";


test('removes duplicates from an array', () => {
    expect(removeDuplicates([1,2,3,2,3,2])).toBe([1,2,3])
})