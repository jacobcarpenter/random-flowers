import PIXI, { Container, Graphics, utils } from 'pixi.js';
import Sprout from './sprout';
import FlowerBud from './flower-bud';
import { formatColorChannel, formatColorChannel2, randomizeAround } from './utility';

const renderer = PIXI.autoDetectRenderer(600, 400, { antialias: true, backgroundColor: 0xF0FFFF });
document.body.appendChild(renderer.view);

const scene = new Container();

const canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'azure';

ctx.fillRect(0, 0, canvas.width, canvas.height);

let sprouts = [];
for (let i = 0; i < 7; ++i) {
	const x = Math.random() * canvas.width;
	const y = randomizeAround(3 * canvas.height / 4, 15);
	sprouts.push(new Sprout(x, y));
}

function getGrassColor() {
	const r = formatColorChannel(Math.random() * 66);
	const g = formatColorChannel(195 + Math.random() * 66);
	const b = formatColorChannel(Math.random() * 66);

	return `#${r}${g}${b}`;
}

function getGrassColor2() {
	const r = Math.floor(Math.random() * 66);
	const g = Math.floor(Math.min(255, 195 + Math.random() * 66));
	const b = Math.floor(Math.random() * 66);
	return r << 16 | g << 8 | b;
}

const grassGraphics = new Graphics();
scene.addChild(grassGraphics);

let grassCount2 = 4000;
function drawGrass2() {
	for (let i = 0; i < 30; ++i) {
		const x = Math.random() * renderer.width;
		const x2 = randomizeAround(x, 7);

		const y = renderer.height - (Math.random() * renderer.height / 3);
		const y2 = randomizeAround(y, 40);

		grassGraphics.lineStyle(1, getGrassColor2(), 1);
		grassGraphics.moveTo(x, y);
		grassGraphics.lineTo(x2, y2);
	}

	renderer.render(scene);
}

let grassCount = 4000;
function drawGrass() {
	drawGrass2();
	for (var i = 0; i < 30; ++i) {
		const x = Math.random() * canvas.width;
		const x2 = randomizeAround(x, 7);

		const y = canvas.height - (Math.random() * canvas.height / 3);
		const y2 = randomizeAround(y, 40);

		ctx.strokeStyle = getGrassColor();

		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x2, y2);
		ctx.stroke();

		--grassCount;
	}

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
			const canSprout = w.step(ctx);
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

	if (sprouts.length) {
		requestAnimationFrame(drawFlowers);
	}
}

drawGrass();
