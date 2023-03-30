import { Schema, Types } from "mongoose";

export const schema = new Schema(
	{
		brand_name: { type: String, required: true },
		provider: { type: String, required: true },
		link_reference_page: { type: String },
		link_repository: { type: String },
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
