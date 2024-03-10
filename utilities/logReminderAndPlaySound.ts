import type { Reminder } from "../reminderApp"
import { generateRandomColor } from "./generateRandomColor"
import { getColorCode } from "./getColorCode"
import { getCurrentTime } from "./getCurrentTime"

export function logReminderAndPlaySound(reminder: Reminder): void {
	const currentTime = getCurrentTime()
	const randomColor = generateRandomColor()
	const colorCode = getColorCode(randomColor)
	const message = `[${currentTime}] ${reminder.message}`
	console.log(colorCode, message)
	try {
		Bun.spawn(["paplay", reminder.soundFile])
	} catch (error) {
		console.error("Failed to play sound:", error)
	}
}
