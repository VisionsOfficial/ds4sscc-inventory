import { Schema } from "mongoose";

export const schema = new Schema(
	{
		name: { type: String, required: true },
		relevance: { type: String },
		publisher: [{ type: String }],
		link: { type: String },
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
