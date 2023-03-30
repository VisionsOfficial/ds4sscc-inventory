import { Router } from "express";
import { Standard } from "../../../models";

const r = Router();

r.get("/", async (req, res, next) => {
	try {
		const { publisher } = req.query;

		const query = publisher ? { publisher: publisher } : {};

		const standards = await Standard.find(query);
		return res.json(standards);
	} catch (err) {
		next(err);
	}
});

r.get("/:id", async (req, res, next) => {
	try {
		const standard = await Standard.findById(req.params.id);
		if (!standard) return res.status(404).json({ error: "resource not found" });
		return res.json(standard);
	} catch (err) {
		next(err);
	}
});

export default r;
