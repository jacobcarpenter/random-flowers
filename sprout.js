const maxSteps = 150;

class Sprout {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.steps = 0;

		const r = formatColorChannel(Math.random() * 128);
		const g = '99';
		const b = formatColorChannel(Math.random() * 128);
		this.color = `#${r}${g}${b}`;
	}

	step(context) {
		const roll = Math.floor(Math.random() * 6);
		if (roll < 3) {
			--this.y;
		} else if (roll === 3) {
			++this.y;
		} else if (roll === 4) {
			--this.x;
		} else if (roll === 5) {
			++this.x;
		}

		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, 1, 1);
		++this.steps;

		return this.y >= 0 && this.steps < maxSteps;
	}
}