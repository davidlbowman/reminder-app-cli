import * as path from 'path'
import getRandomColor from './getRandomColor'

const soundFile = path.join(process.cwd(), 'bell.wav')

function getCurrentTime() {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
}

function makeNoise() {
    const currentTime = getCurrentTime()
    const randomColor = getRandomColor()
    const message = `[${currentTime}] Time to check for teeth grinding!`
    console.log(randomColor, message)
    Bun.spawn(['paplay', soundFile])
}

makeNoise()

const minutes = 15
setInterval(makeNoise, 1000 * 60 * minutes)
