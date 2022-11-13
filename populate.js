require('dotenv').config();
const connectDB = require('./db/connect');
const PickupLine = require('./models/pickupLines');
const jsonProducts = require('./pickupLines.json');

console.log(jsonProducts)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await PickupLine.deleteMany();
        await PickupLine.create(jsonProducts);
        console.log('sucess!!!');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1)

    }
}

start();