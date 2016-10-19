import PIXI, { Container } from 'pixi.js';
import Sprout from './sprout';
import FlowerBud from './flower-bud';
import { formatColorChannel, randomizeAround } from './utility';

const renderer = PIXI.autoDetectRenderer(640, 480, { backgroundColor: 0xF0FFFF });
document.body.appendChild(renderer.view);

const scene = new Container();
renderer.render(scene);

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

let grassCount = 4000;
function drawGrass() {
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
