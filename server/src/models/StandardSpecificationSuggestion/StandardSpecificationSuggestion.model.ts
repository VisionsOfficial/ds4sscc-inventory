import { Schema, Types } from "mongoose";

export const schema = new Schema(
	{
		/**
		 * "standard" | "specification"
		 */
		type: { type: String, required: true },
		name: { type: String, required: true },
		relevance: { type: String },
		publisher: [{ type: String }],
		link: { type: String },
		related_building_block: { type: Types.ObjectId, ref: "BuildingBlock" },
		contact: {
			name: { type: String },
			organization: { type: String },
			email: { type: String },
		},
		schema_version: { type: String, default: "1" },
	},
	{ timestamps: true }
);
