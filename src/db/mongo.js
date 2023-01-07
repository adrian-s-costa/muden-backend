import { MongoClient, ObjectId } from "mongodb";

const mongoClient = new MongoClient("mongodb+srv://dev:u268fDPETCPLX9zF@cluster0.gar4r1r.mongodb.net/?retryWrites=true&w=majority");
let db;

mongoClient.connect().then(() => {
	db = mongoClient.db("muden");
});

const objectId = ObjectId;

export { db, objectId };

