import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
    ServerApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    // CONNECT THE CLIENT TO THE SERVER
    await client.connect();
    // SEND A PING TO THE SERVER TO CONFIRM IF THE CONNECTION IS SUCCESSFUL
    await client.db("admin").command({ ping: 1 });
    console.log("PING'ed your MongoDB deployment. You have Connected successfully to the server!");
} catch (error) {
    console.error("An error occurred while connecting to the server: ", error);
}

let db = client.db("employees");

export default db;
