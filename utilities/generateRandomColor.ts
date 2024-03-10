export function generateRandomColor(): [number, number, number] {
	const r = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)
	return [r, g, b]
}
