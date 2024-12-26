// Create API endpoints for the record resource routes
import express from "express";

// connect to the database
import db from "../db/connection.js";

// convert the id from string to ObjectId for the _id field
import { ObjectId } from "mongodb";

// create a new router instance of express router
// this will allow us to create and handle routes for the record resource
// the router will be used as middleware in the server.js file
// this will control the routes starting with the path /record
const router = express.Router();

// This route will get a list of all the records from the database
router.get("/", async (req, res) => {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});


// This route will get a single record from the database by its id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("records");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) {
        res.send("Record with that id does not exist").status(404);
    }
    else {
        res.send(result).status(200);
    }
});

// This route will create a new record in the database
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name,
            position: req.body.position,
            department: req.body.department,
        };
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (error) {
        console.error(error);
        res.status(500).send("There was an error creating the record");
    }
});

// This route will update a record in the database by its id
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates= {
            $set: {
                name: req.body.name,
                position: req.body.position,
                department: req.body.department,
            },
        };
        let collection = await db.collection("records");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).send("There was an error updating the record");
    }
});

// This route will delete a record from the database by its id
router.delete("/:id", async (req, res) => {
    try {
        let collection = await db.collection("records");
        let query = { _id: new ObjectId(req.params.id) };
        let result = await collection.deleteOne(query);
        res.send(result).status(204);
    } catch (error) {
        console.error(error);
        res.status(500).send("There was an error deleting the record");
    }
});

export default router;
