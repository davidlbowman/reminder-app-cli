import { describe, expect, it } from 'bun:test'
import { generateRandomColor } from '@/utilities/generateRandomColor'

describe('generateRandomColor', () => {
    it('should return an array of three numbers', () => {
        const color = generateRandomColor()
        expect(Array.isArray(color)).toBe(true)
        expect(color.length).toBe(3)
    })

    it('should return numbers between 0 and 255', () => {
        const color = generateRandomColor()
        color.forEach(component => {
            expect(component).toBeGreaterThanOrEqual(0)
            expect(component).toBeLessThanOrEqual(255)
        })
    })

    it('should return different colors on multiple calls', () => {
        const color1 = generateRandomColor()
        const color2 = generateRandomColor()
        expect(color1).not.toEqual(color2)
    })
})
