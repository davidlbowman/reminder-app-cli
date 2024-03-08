import { describe, expect, it } from 'bun:test'
import { type ColorCode, getColorCode } from '@/utilities/getColorCode'

describe('getColorCode', () => {
    it('should return the correct color code', () => {
        const params: ColorCode = [255, 128, 64]
        const expected = '\x1b[38;2;255;128;64m'
        const result = getColorCode(params)
        expect(result).toBe(expected)
    })

    it('should handle zero values correctly', () => {
        const params: ColorCode = [0, 0, 0]
        const expected = '\x1b[38;2;0;0;0m'
        const result = getColorCode(params)
        expect(result).toBe(expected)
    })

    it('should handle maximum values correctly', () => {
        const params: ColorCode = [255, 255, 255]
        const expected = '\x1b[38;2;255;255;255m'
        const result = getColorCode(params)
        expect(result).toBe(expected)
    })
})
