import PIXI, { Container, Graphics, utils } from 'pixi.js';
import Sprout from './sprout';
import FlowerBud from './flower-bud';
import { formatColorChannel, formatColorChannel2, randomizeAround } from './utility';

const renderer = PIXI.autoDetectRenderer(600, 400, { antialias: true, backgroundColor: 0xF0FFFF });
document.body.appendChild(renderer.view);

const scene = new Container();
const grassGfx = new Graphics();
const sproutsGfx = new Graphics();
scene.addChild(grassGfx, sproutsGfx);

let sprouts = [];
for (let i = 0; i < 7; ++i) {
	const x = Math.random() * renderer.width;
	const y = randomizeAround(3 * renderer.height / 4, 15);
	sprouts.push(new Sprout(x, y));
}

function getGrassColor() {
	const r = Math.floor(Math.random() * 66);
	const g = Math.floor(Math.min(255, 195 + Math.random() * 66));
	const b = Math.floor(Math.random() * 66);
	return r << 16 | g << 8 | b;
}

let grassCount = 4000;
function drawGrass() {
	// TODO: front grass and back grass?
	for (let i = 0; i < 30; ++i) {
		const x = Math.random() * renderer.width;
		const x2 = randomizeAround(x, 7);

		const y = renderer.height - (Math.random() * renderer.height / 3);
		const y2 = randomizeAround(y, 40);

		grassGfx.lineStyle(1, getGrassColor(), 1);
		grassGfx.moveTo(x, y);
		grassGfx.lineTo(x2, y2);

		--grassCount;
	}

	renderer.render(scene);

	if (grassCount > 0) {
		requestAnimationFrame(drawGrass);
	} else {
		requestAnimationFrame(drawFlowers);
	}
}

function drawFlowers() {
	for (let i = 0; i < 2; ++i) {
		sprouts = sprouts.reduce((ws, w) => {
			const { x, y } = w;
			const canSprout = w.step(sproutsGfx);
			if (!canSprout) {
				// add a flower
				if (w instanceof Sprout && Math.random() < 0.3) {
					return [...ws, new FlowerBud(x, y)];
				}

				return [...ws];
			}

			const shouldSplit = Math.random() < 0.005;
			if (shouldSplit) {
				return [...ws, w, new Sprout(x, y)];
			}

			return [...ws, w];
		}, []);
	}

	renderer.render(scene);

	if (sprouts.length) {
		requestAnimationFrame(drawFlowers);
	}
}

drawGrass();
