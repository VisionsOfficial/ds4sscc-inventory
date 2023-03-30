import { Router } from "express";
import { Implementation, Specification, Standard } from "../../../models";

const r = Router();

r.use((req, res, next) => {
	const devKey = req.header("x-dev-api-key");
	if (!devKey || devKey !== process.env.X_DEV_API_KEY)
		return res.status(401).json({ error: "unauthorized" });

	return next();
});

r.post("/standards", async (req, res, next) => {
	const { standards } = req.body;

	const newStandards = [];

	for (const standard of standards) {
		const ns = new Standard({
			name: standard.name,
			relevance: standard.relevance,
			publisher: standard.publisher,
			link: standard.link,
		});
		newStandards.push(ns);
	}

	await Promise.all(newStandards.map((el) => el.save()));

	return res.json({ success: true });
});

r.post("/specifications", async (req, res, next) => {
	const { specifications } = req.body;

	const newSpecs = [];

	for (const spec of specifications) {
		const ns = new Specification({
			name: spec.name,
			relevance: spec.relevance,
			publisher: spec.publisher,
			link: spec.link,
		});
		newSpecs.push(ns);
	}

	await Promise.all(newSpecs.map((el) => el.save()));

	return res.json({ success: true });
});

r.post("/implementations", async (req, res, next) => {
	const { implementations } = req.body;

	const newIs = [];

	for (const i of implementations) {
		const ni = new Implementation({
			brand_name: i.brand_name,
			provider: i.provider,
			link_reference_page: i.link_reference_page,
			link_repository: i.link_repository,
		});
		newIs.push(ni);
	}

	await Promise.all(newIs.map((el) => el.save()));

	return res.json({ success: true });
});

export default r;
