import { config } from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { connect } from "./config/db";
import routes from "./routes";

config();
connect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
	// Without this, we get a MIME type check error loading js files
	app.use(express.static(path.join(__dirname, "..", "..", "client", "dist")));
}

routes(app);

if (process.env.NODE_ENV === "production") {
	// Let react handle all routing for client
	app.get("*", async (req, res) => {
		res.sendFile(path.join(__dirname, "..", "..", "client", "dist/index.html"));
	});
}

app.use((err, req, res, next) => {
	try {
		console.log(err);
		return res.status(500).json({ error: "internal server error" });
	} catch (error) {
		return res.status(500).json({ error: "internal server error" });
	}
});

const PORT = process.env.PORT || 4257;

app.listen(PORT, () => {
	console.log("Running on http://localhost:" + PORT);
});
