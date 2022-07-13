import { MongoClient } from 'mongodb'
const uri = 'mongodb+srv://alfa3a:Alfa3a@alfa3a.sik4a.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useUnifiedTopology: true})
// const client = new mongoClient(process.env.MONGODB_URI || "mongodb://localhost", {useUnifiedTopology: true})

export default client;