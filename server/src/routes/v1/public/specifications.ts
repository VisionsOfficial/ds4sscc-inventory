import { Router } from "express";
import { Specification } from "../../../models";

const r = Router();

r.get("/", async (req, res, next) => {
	try {
		const { publisher } = req.query;

		const query = publisher ? { publisher: publisher } : {};

		const specifications = await Specification.find(query);
		return res.json(specifications);
	} catch (err) {
		next(err);
	}
});

r.get("/:id", async (req, res, next) => {
	try {
		const specification = await Specification.findById(req.params.id);
		if (!specification)
			return res.status(404).json({ error: "resource not found" });
		return res.json(specification);
	} catch (err) {
		next(err);
	}
});

export default r;
