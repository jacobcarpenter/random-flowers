
class WalkerBase {
	constructor(x, y, rectSize, color) {
		this.steps = 0;
		this.x = x;
		this.y = y;
		this.rectSize = rectSize;
		this.color = color;
	}
}

export function createWalker(definition) {
	return class extends WalkerBase {
		constructor(x, y) {
			super(x, y, definition.rectSize, definition.getColor());
		}

		step() {
			return definition.step.call(this);
		}
	}
}