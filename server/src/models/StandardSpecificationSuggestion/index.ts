import { model } from "mongoose";
import { schema } from "./StandardSpecificationSuggestion.model";

export const StandardSpecificationSuggestion = model(
	"StandardSpecificationSuggestion",
	schema
);
