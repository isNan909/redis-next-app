import { Client, Entity, Schema } from 'redis-om';

const client = new Client();

async function connect() {
	if (!client.isOpen()) {
		await client.open(process.env.REDIS_URL);
	}
}

class Car extends Entity { }
let schema = new Schema(
	Car,
	{
		make: { type: 'string' },
		model: { type: 'string' },
		image: { type: 'string' },
		description: { type: 'string', textSearch: true },
	},
	{
		dataStructure: 'JSON',
	}
);

export async function createCar() {
	await connect();

	const repository = client.fetchRepository(schema);

	repository.createAndSave({
		make: 'Ford',
		model: 'Mustang',
		image: 'https://mustang.com/images/mustang.jpg',
		description: 'The Mustang is a American muscle car manufactured by Ford.',
	});
	client.close();
}

createCar();