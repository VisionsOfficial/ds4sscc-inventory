import { Router } from "express";
import {
	ImplementationSuggestion,
	StandardSpecificationSuggestion,
} from "../../../models";

const r = Router();

r.get("/", async (req, res, next) => {
	try {
		const [stds, impl] = await Promise.all([
			StandardSpecificationSuggestion.find(),
			ImplementationSuggestion.find(),
		]);

		const result = {
			standards: stds.filter((s) => s.type === "standard"),
			specifications: stds.filter((s) => s.type === "specification"),
			implementations: impl,
		};

		return res.status(200).json(result);
	} catch (err) {
		next(err);
	}
});

r.get("/:id/:type", async (req, res, next) => {
	try {
		const { id, type } = req.params;
		if (type === "standard" || type === "specification") {
			const sug = await StandardSpecificationSuggestion.findById(id).populate(
				"related_building_block"
			);
			return res.json(sug);
		} else {
			const sug = await ImplementationSuggestion.findById(id).populate(
				"related_building_block"
			);
			return res.json(sug);
		}
	} catch (err) {
		next(err);
	}
});

r.post("/standardspec/:type", async (req, res, next) => {
	try {
		const { buildingBlock, name, relevance, publisher, link, contact } =
			req.body;
		if (
			!buildingBlock ||
			!name ||
			!relevance ||
			!publisher.length ||
			!link ||
			!contact
		)
			return res
				.status(400)
				.json({ error: "missing mandatory fields in body" });

		const obj = new StandardSpecificationSuggestion({
			type: req.params.type,
			name,
			relevance,
			publisher,
			link,
			related_building_block: buildingBlock,
			contact: {
				name: contact?.name || "",
				organization: contact?.organization || "",
				email: contact?.email || "",
			},
		});

		await obj.save();

		return res.status(201).json(obj);
	} catch (err) {
		next(err);
	}
});

r.post("/implementation", async (req, res, next) => {
	try {
		const {
			buildingBlock,
			brand_name,
			provider,
			link_reference_page,
			link_repository,
			contact,
		} = req.body;
		if (
			!buildingBlock ||
			!brand_name ||
			!provider ||
			!link_reference_page ||
			!contact
		)
			return res
				.status(400)
				.json({ error: "missing mandatory fields in body" });

		const obj = new ImplementationSuggestion({
			brand_name,
			provider,
			link_reference_page,
			link_repository,
			related_building_block: buildingBlock,
			contact: {
				name: contact?.name || "",
				organization: contact?.organization || "",
				email: contact?.email || "",
			},
		});

		await obj.save();

		return res.status(201).json(obj);
	} catch (err) {
		next(err);
	}
});

export default r;
