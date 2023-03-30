import { Router } from "express";
import {
	BuildingBlock,
	Implementation,
	ImplementationSuggestion,
	Specification,
	Standard,
	StandardSpecificationSuggestion,
} from "../../../models";
import { adminCheck } from "../../middleware/auth";

const r = Router();

r.use(adminCheck);

r.delete("/:id/deny/:type", async (req, res, next) => {
	const { id, type } = req.params;

	if (type === "implementation")
		await ImplementationSuggestion.findByIdAndRemove(id);
	if (type === "standard" || type === "specification")
		await StandardSpecificationSuggestion.findByIdAndRemove(id);

	return res.status(200).json({ success: true });
});

r.post("/:id/validate/:type", async (req, res, next) => {
	try {
		const { id, type } = req.params;
		const { buildingBlock } = req.body;

		const bb = await BuildingBlock.findById(buildingBlock);

		if (type === "implementation") {
			const { brand_name, provider, link_reference_page, link_repository } =
				req.body;

			const impl = new Implementation({
				brand_name,
				provider,
				link_reference_page,
				link_repository,
			});

			await impl.save();

			if (bb) {
				bb.reference_implementations.push(impl.id);
				await bb.save();
			}

			await ImplementationSuggestion.findByIdAndRemove(id);

			return res.status(201).json(impl);
		} else {
			const { name, relevance, publisher, link } = req.body;

			if (type === "standard") {
				const std = new Standard({
					name,
					relevance,
					publisher,
					link,
				});

				await std.save();

				if (bb) {
					bb.related_standards.push(std.id);
					await bb.save();
				}

				await StandardSpecificationSuggestion.findByIdAndRemove(id);

				return res.status(201).json(std);
			} else {
				const spec = new Specification({
					name,
					relevance,
					publisher,
					link,
				});

				await spec.save();

				if (bb) {
					bb.related_specifications.push(spec.id);
					await bb.save();
				}

				await StandardSpecificationSuggestion.findByIdAndRemove(id);

				return res.status(201).json(spec);
			}
		}
	} catch (err) {
		return next(err);
	}
});

export default r;
