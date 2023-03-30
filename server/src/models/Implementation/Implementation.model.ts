import { Schema } from "mongoose";

export const schema = new Schema(
	{
		brand_name: { type: String, required: true },
		provider: { type: String },
		link_reference_page: { type: String },
		link_repository: { type: String },
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
