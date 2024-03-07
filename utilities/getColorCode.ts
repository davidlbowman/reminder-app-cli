type GetColorCodeParams = [number, number, number]

export function getColorCode([r, g, b]: GetColorCodeParams) {
    return `\x1b[38;2;${r};${g};${b}m`
}
