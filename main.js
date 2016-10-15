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
	const yDev = 15;
	const y = 3 * canvas.height / 4 + (yDev - Math.random() * yDev * 2);
	sprouts.push(new Sprout(x, y));
}

let grassCount = 4000;
function drawGrass() {
	const deltaY = 40;
	const deltaX = 7;

	for (var i = 0; i < 30; ++i) {
		const x = Math.random() * canvas.width;
		const x2 = x - deltaX + Math.random() * deltaX * 2;

		const y = canvas.height - (Math.random() * canvas.height / 3);
		const y2 = y - deltaY + Math.random() * deltaY * 2;

		const r = formatColorChannel(Math.random() * 66);
		const g = formatColorChannel(195 + Math.random() * 66);
		const b = formatColorChannel(Math.random() * 66);

		ctx.strokeStyle = `#${r}${g}${b}`;

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
