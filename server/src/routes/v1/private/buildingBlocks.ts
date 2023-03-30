import { Router } from "express";
import { BuildingBlock } from "../../../models";
import { adminCheck } from "../../middleware/auth";

const r = Router();

r.use(adminCheck);

r.post("/", async (req, res, next) => {
	const {
		name,
		description,
		related_standards,
		related_specifications,
		reference_implementations,
		implemented_mims,
		recommended_by_dssc,
		maturity,
		scope,
	} = req.body;

	if (!name || !description || !maturity)
		return res.status(400).json({ error: "missing parameters" });

	const bb = new BuildingBlock({
		name,
		description,
		recommended_by_dssc,
		reference_implementations,
		related_specifications,
		related_standards,
		implemented_mims,
		maturity,
		scope,
	});

	await bb.save();
	return res.json(bb);
});

r.put("/:id", async (req, res, next) => {
	try {
		const bb = await BuildingBlock.findById(req.params.id);

		const {
			name,
			description,
			related_standards,
			related_specifications,
			reference_implementations,
			implemented_mims,
			recommended_by_dssc,
			maturity,
			scope,
		} = req.body;

		bb.name = name || bb.name;
		bb.description = description || bb.description;
		bb.related_standards = related_standards || bb.related_standards;
		bb.related_specifications =
			related_specifications || bb.related_specifications;
		bb.reference_implementations =
			reference_implementations || bb.reference_implementations;
		bb.implemented_mims = implemented_mims || bb.implemented_mims;
		bb.recommended_by_dssc = recommended_by_dssc || bb.recommended_by_dssc;
		bb.maturity = maturity || bb.maturity;
		bb.scope = scope || bb.scope;

		await bb.save();
		return res.json(bb);
	} catch (err) {
		next(err);
	}
});

export default r;
