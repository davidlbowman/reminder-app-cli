function getCurrentTime() {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
}

export default function getRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `\x1b[38;2;${r};${g};${b}m`
}

function logReminderAndPlaySound() {
    const currentTime = getCurrentTime()
    const randomColor = getRandomColor()
    const message = `[${currentTime}] Time to stop grinding your teeth!`
    console.log(randomColor, message)
    Bun.spawn(['paplay', 'bell.wav'])
}

logReminderAndPlaySound()

const minutes = 15
setInterval(logReminderAndPlaySound, 1000 * 60 * minutes)
