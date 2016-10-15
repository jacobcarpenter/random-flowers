
function formatColorChannel(num) {
	const color = Math.floor(Math.min(256, Math.max(num, 0))).toString(16);
	return color.length < 2 ? '0' + color : color;
}
