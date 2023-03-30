import { Router } from "express";
import { Implementation } from "../../../models";
import { adminCheck } from "../../middleware/auth";

const r = Router();

r.use(adminCheck);

r.post("/", async (req, res, next) => {
	const { brand_name, provider, link_reference_page, link_repository } =
		req.body;

	if (!brand_name || !provider)
		return res.status(400).json({ error: "missing required information" });

	const implementation = new Implementation({
		brand_name,
		provider,
		link_reference_page,
		link_repository,
	});

	await implementation.save();
	return res.status(201).json(implementation);
});

export default r;
