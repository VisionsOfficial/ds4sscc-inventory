import { Router } from "express";
import { FilterQuery } from "mongoose";
import { BuildingBlock } from "../../../models";

const r = Router();

r.get("/", async (req, res, next) => {
	try {
		const {
			related_standards,
			related_specifications,
			reference_implementations,
			implemented_mims,
			recommended_by_dssc,
			scope,
			maturity,
		} = req.query;

		const query: any = { $and: [] };

		if (related_standards) {
			query.$and.push({
				related_standards: {
					$in: JSON.parse(decodeURIComponent(related_standards as string)),
				},
			});
		}

		if (related_specifications) {
			query.$and.push({
				related_specifications: {
					$in: JSON.parse(decodeURIComponent(related_specifications as string)),
				},
			});
		}

		if (reference_implementations) {
			query.$and.push({
				reference_implementations: {
					$in: JSON.parse(
						decodeURIComponent(reference_implementations as string)
					),
				},
			});
		}

		if (implemented_mims) {
			query.$and.push({
				implemented_mims: {
					$in: JSON.parse(decodeURIComponent(implemented_mims as string)),
				},
			});
		}

		if (recommended_by_dssc) {
			query.$and.push({
				recommended_by_dssc: JSON.parse(recommended_by_dssc as string),
			});
		}

		if (scope) {
			query.$and.push({
				scope: scope,
			});
		}

		if (maturity) {
			query.$and.push({
				maturity: maturity,
			});
		}

		const finalQuery = query.$and.length ? query : {};

		const bbs = await BuildingBlock.find(finalQuery).populate([
			"related_standards",
			"related_specifications",
			"reference_implementations",
		]);
		return res.json(bbs);
	} catch (err) {
		next(err);
	}
});

r.get("/:id", async (req, res, next) => {
	try {
		const bb = await BuildingBlock.findById(req.params.id).populate([
			"related_standards",
			"related_specifications",
			"reference_implementations",
		]);
		if (!bb) return res.status(404).json({ error: "resource not found" });
		return res.json(bb);
	} catch (err) {
		next(err);
	}
});

export default r;
