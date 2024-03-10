export type ColorCode = [number, number, number]

export function getColorCode([r, g, b]: ColorCode) {
	return `\x1b[38;2;${r};${g};${b}m`
}
