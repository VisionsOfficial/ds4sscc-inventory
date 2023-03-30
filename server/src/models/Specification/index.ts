import { model } from "mongoose";
import { schema } from "./Specification.model";

export const Specification = model("Specification", schema);
