import { MongoClient, ObjectId } from "mongodb";

const mongoClient = new MongoClient("mongodb://localhost:27017");
let db;

mongoClient.connect().then(() => {
	db = mongoClient.db("muden");
});

const objectId = ObjectId;

export { db, objectId };

