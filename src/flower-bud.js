import { createWalker } from './walker';
import { clamp, randomizeAround } from './utility';

const flowerSteps = 100;
const FlowerBud = createWalker({
	rectSize: 3,
	getColor() {
		const r = clamp(randomizeAround(85, 32));
		const g = clamp(Math.random() * 52);
		const b = clamp(randomizeAround(139, 40));
		return r << 16 | g << 8 | b;
	},
	step() {
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
	},
});

export { FlowerBud as default };
