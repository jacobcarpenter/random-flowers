import { clamp, randomizeAround } from './utility';

const flowerSteps = 100;

export default class FlowerBud {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.steps = 0;
		this.rectSize = 3;
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

		++this.steps;
		return this.steps < flowerSteps;
	}
}

function getFlowerColor() {
	const r = clamp(randomizeAround(85, 32));
	const g = clamp(Math.random() * 52);
	const b = clamp(randomizeAround(139, 40));
	return r << 16 | g << 8 | b;
}
