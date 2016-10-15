const flowerSteps = 100;

class FlowerBud {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.steps = 0;

		const deltaR = 32;
		let r = formatColorChannel(85 - deltaR + (Math.random() * deltaR * 2));

		const g = formatColorChannel(Math.random() * 52);

		const deltaB = 40;
		const b = formatColorChannel(139 - deltaB + (Math.random() * deltaB * 2));

		this.color = `#${r}${g}${b}`;
	}

	step(context) {
		const direction = Math.floor(Math.random() * 4);
		if (direction === 0) {
			++this.x;
		} else if (direction === 1) {
			--this.x;
		} else if (direction === 2) {
			++this.y;
		} else if (direction === 3) {
			--this.y;
		}

		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, 3, 3);

		++this.steps;
		return this.steps < flowerSteps;
	}
}