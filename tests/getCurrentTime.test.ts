import { beforeAll, describe, expect, setSystemTime, test } from "bun:test"
import { getCurrentTime } from "@/utilities/getCurrentTime"

beforeAll(() => {
	setSystemTime(new Date("2020-01-01T00:00:00.000Z"))
})

describe("getCurrentTime", () => {
	test("should return the current time in the format HH:MM:SS", () => {
		const currentTime = getCurrentTime()
		expect(currentTime).toBe("00:00:00")
	})
})
