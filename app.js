require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const pickuplinesRouter = require('./routes/pickupLines')
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())


app.use('/pickupLines', pickuplinesRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`server is listening on PORT ${PORT}`)
        });
    } catch (error) {
        console.log(error);
    }
}

start();
