import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
    res.send({ message: 'Hello from server!' });
    });

app.use("/record", records);

// start the express server
app.listen(PORT, () => {
    console.log(`Server has started. Listening on port ${PORT} at http://localhost:${PORT}`);
});
