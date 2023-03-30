import { Router } from "express";
import { Specification, Standard } from "../../../models";
import { adminCheck } from "../../middleware/auth";

const r = Router();

r.use(adminCheck);

r.post("/", async (req, res, next) => {
	const { name, relevance, publisher, link } = req.body;

	if (!name)
		return res
			.status(400)
			.json({ error: "missing required information: name" });

	const spec = new Specification({
		name,
		relevance,
		publisher,
		link,
	});

	await spec.save();
	return res.status(201).json(spec);
});

export default r;
