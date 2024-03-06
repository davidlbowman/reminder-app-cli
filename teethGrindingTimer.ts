const config = {
    reminderIntervalMinutes: 15,
    soundFile: 'bell.wav'
}

function getCurrentTime() {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return [r, g, b]
}

function getRandomColorCode([r, g, b]: number[] = [255, 255, 255]) {
    return `\x1b[38;2;${r};${g};${b}m`
}

function logReminderAndPlaySound() {
    const currentTime = getCurrentTime()
    const randomColor = generateRandomColor()
    const colorCode = getRandomColorCode(randomColor)
    const message = `[${currentTime}] Time to stop grinding your teeth!`
    console.log(colorCode, message)
    try {
        Bun.spawn(['paplay', config.soundFile])
    } catch (error) {
        console.error('Failed to play sound:', error)
    }
}

function startReminders() {
    logReminderAndPlaySound()
    const interval = 60000 * config.reminderIntervalMinutes
    setInterval(logReminderAndPlaySound, interval)
}

startReminders()
