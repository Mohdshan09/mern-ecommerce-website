import mongoose from 'mongoose'

const connectDB = async() => {
    const mongoUri = process.env.MONGODB_URI || process.env.mongodb_URI

    if (!mongoUri) {
        throw new Error('MongoDB URI is missing. Add MONGODB_URI to backendv3/.env')
    }

    const connectionPromise = mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 10000
    })

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('MongoDB connection timed out after 10 seconds. Add your current IP to Atlas Network Access and make sure port 27017 is not blocked.'))
        }, 10000)
    })

    await Promise.race([connectionPromise, timeoutPromise])
    console.log('Connected to MongoDB')
}

export default connectDB;
