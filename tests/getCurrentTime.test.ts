import { describe, it, expect, mock } from 'bun:test'
import { getCurrentTime } from '@/utilities/getCurrentTime'

describe('getCurrentTime', () => {
    it('should return the current time in the format HH:mm:ss', () => {
        const mockDate = new Date('2023-06-08T10:30:45')
        const originalDate = globalThis.Date
        globalThis.Date = mock(() => mockDate) as any

        const currentTime = getCurrentTime()

        expect(currentTime).toBe('10:30:45')
        globalThis.Date = originalDate
    })

    it('should pad single-digit hours, minutes, and seconds with leading zeros', () => {
        const mockDate = new Date('2023-06-08T05:06:07')
        const originalDate = globalThis.Date
        globalThis.Date = mock(() => mockDate) as any

        const currentTime = getCurrentTime()

        expect(currentTime).toBe('05:06:07')
        globalThis.Date = originalDate
    })
})
