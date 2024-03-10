import { describe, expect, test } from "bun:test"
import { generateRandomColor } from "@/utilities/generateRandomColor"

describe("generateRandomColor", () => {
	test("should return an array of three numbers", () => {
		const color = generateRandomColor()
		expect(Array.isArray(color)).toBe(true)
		expect(color.length).toBe(3)
	})

	test("should return numbers between 0 and 255", () => {
		const color = generateRandomColor()
		for (const component of color) {
			expect(component).toBeGreaterThanOrEqual(0)
			expect(component).toBeLessThanOrEqual(255)
		}
	})

	test("should return different colors on multiple calls", () => {
		const color1 = generateRandomColor()
		const color2 = generateRandomColor()
		expect(color1).not.toEqual(color2)
	})
})
