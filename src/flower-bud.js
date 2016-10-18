import { formatColorChannel, randomizeAround } from './utility';

const flowerSteps = 100;

export default class FlowerBud {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.steps = 0;
		this.color = getFlowerColor();
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

function getFlowerColor() {
	const r = formatColorChannel(randomizeAround(85, 32));
	const g = formatColorChannel(Math.random() * 52);
	const b = formatColorChannel(randomizeAround(139, 40));

	return `#${r}${g}${b}`;
}
