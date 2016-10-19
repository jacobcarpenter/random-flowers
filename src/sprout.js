import { formatColorChannel } from './utility';

const maxSteps = 150;

export default class Sprout {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.steps = 0;
		this.rectSize = 1;
		this.color = getSproutColor();
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

		++this.steps;
		return this.y >= 0 && this.steps < maxSteps;
	}
}

function getSproutColor() {
	const r = Math.floor(Math.random() * 128);
	const g = 0x99;
	const b = Math.floor(Math.random() * 128);
	return r << 16 | g << 8 | b;
}
