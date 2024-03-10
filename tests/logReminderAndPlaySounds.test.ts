import { describe, expect, mock, spyOn, test } from "bun:test"
import { logReminderAndPlaySound } from "@/utilities/logReminderAndPlaySound"

// Mock the dependencies
const mockGetCurrentTime = mock(() => "12:00")
const mockGenerateRandomColor = mock(() => [255, 0, 0])
const mockGetColorCode = mock(() => "#ff0000")
const mockSpawn = spyOn(Bun, "spawn")

// Replace the actual modules with the mocks
mock.module("./getCurrentTime", () => ({ getCurrentTime: mockGetCurrentTime }))
mock.module("./generateRandomColor", () => ({
	generateRandomColor: mockGenerateRandomColor
}))
mock.module("./getColorCode", () => ({ getColorCode: mockGetColorCode }))

describe("logReminderAndPlaySound", () => {
	test.todo(
		"should log the reminder with the current time and a color code",
		() => {
			const consoleLogSpy = spyOn(console, "log")
			const reminder = {
				message: "Test reminder",
				soundFile: "../sounds/chime.wav",
				interval: 15
			}

			logReminderAndPlaySound(reminder)

			expect(mockGetCurrentTime).toHaveBeenCalled()
			expect(mockGenerateRandomColor).toHaveBeenCalled()
			expect(mockGetColorCode).toHaveBeenCalled()
			expect(consoleLogSpy).toHaveBeenCalledWith(
				"#ff0000",
				"[12:00] Test reminder"
			)
			consoleLogSpy.mockRestore()
		}
	)

	test.todo("should attempt to play the sound file", () => {
		const reminder = {
			message: "Test reminder",
			soundFile: "../sounds/chime.wav",
			interval: 15
		}

		logReminderAndPlaySound(reminder)

		expect(mockSpawn).toHaveBeenCalledWith(["paplay", "../sounds/chime.wav"])
	})

	test.todo("should log an error if playing the sound fails", () => {
		const consoleErrorSpy = spyOn(console, "error")
		const reminder = {
			message: "Test reminder",
			soundFile: "../sounds/chime.wav",
			interval: 15
		}
		const error = new Error("Failed to play sound")
		mockSpawn.mockImplementation(() => {
			throw error
		})

		logReminderAndPlaySound(reminder)

		expect(consoleErrorSpy).toHaveBeenCalledWith("Failed to play sound:", error)
		consoleErrorSpy.mockRestore()
	})
})
