import express from "express";
import router from "./routes/index.js"
import { fetchSampleUsers } from "./src/api.js";

const app  = express();
app.set("json spaces", 2);

app.use(express.json());
const users = await fetchSampleUsers();
app.locals.users = users;

app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});