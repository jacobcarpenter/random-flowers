
export function clamp(num, min = 0, max = 255) {
	return Math.floor(Math.min(max, Math.max(num, min)));
}

export function randomizeAround(value, spread) {
	return value - spread + Math.random() * spread * 2;
}
