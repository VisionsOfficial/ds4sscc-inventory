import { Schema, Types } from "mongoose";

export const schema = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		related_standards: [{ type: Types.ObjectId, ref: "Standard" }],
		related_specifications: [{ type: Types.ObjectId, ref: "Specification" }],
		reference_implementations: [
			{ type: Types.ObjectId, ref: "Implementation" },
		],
		implemented_mims: [{ type: String }],
		recommended_by_dssc: { type: Boolean, required: true },
		scope: { type: String },
		maturity: { type: String, required: true },
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
