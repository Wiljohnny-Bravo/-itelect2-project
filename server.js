import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import morgan from "morgan";
import { fetchSampleUsers } from "./src/api.js";

const app = express();
// app.set("json spaces", 2);
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const users = await fetchSampleUsers();
app.locals.users = users;

app.use("/api", router);

app.use((req, res) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.originalUrl}` });
});

app.use((err, req, res, next) => {
  console.error(err.message);
  const status = err.status || 500;
  res.status(status).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
