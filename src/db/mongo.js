import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

mongoClient.connect().then(() => {
	db = mongoClient.db(process.env.MONGO_DB);
});

const objectId = ObjectId;

export { db, objectId };

