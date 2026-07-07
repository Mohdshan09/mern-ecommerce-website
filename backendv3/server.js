import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

//App config
const app = express()
const port = process.env.PORT || 4000
connectCloudinary();

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.get('/', (req, res) => {
    res.send("API working")
})

const startServer = async() => {
    try {
        await connectDB();
        app.listen(port, ()=> console.log('Server started on port: ' + port));
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error.message);
        console.error('Check your MongoDB URI, Atlas Network Access IP allowlist, and whether port 27017 is blocked.');
        process.exit(1);
    }
}

startServer();
