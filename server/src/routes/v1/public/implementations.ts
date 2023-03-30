import { Router } from "express";
import { Implementation } from "../../../models";

const r = Router();

r.get("/", async (req, res, next) => {
	try {
		const { provider } = req.query;

		const query = provider ? { provider: provider } : {};

		const implentations = await Implementation.find(query);
		return res.json(implentations);
	} catch (err) {
		next(err);
	}
});

r.get("/:id", async (req, res, next) => {
	try {
		const implementation = await Implementation.findById(req.params.id);
		if (!implementation)
			return res.status(404).json({ error: "resource not found" });
		return res.json(implementation);
	} catch (err) {
		next(err);
	}
});

export default r;
