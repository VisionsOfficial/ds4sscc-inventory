import { Application } from "express";

import buildingBlocksRouter from "./v1/public/buildingBlocks";
import buildingBlocksPrivateRouter from "./v1/private/buildingBlocks";

import standardsRouter from "./v1/public/standards";
import specificationsRouter from "./v1/public/specifications";
import implementationsRouter from "./v1/public/implementations";
import standardsPrivateRouter from "./v1/private/standards";
import specificationsPrivateRouter from "./v1/private/specifications";
import implementationsPrivateRouter from "./v1/private/implementations";
import suggestionsRouter from "./v1/public/suggestions";
import suggestionsPrivateRouter from "./v1/private/suggestions";

import devSetupRouter from "./v1/dev/setup";

import authRouter from "./v1/public/auth";

export = (app: Application) => {
	app.use("/api/buildingblocks", [
		buildingBlocksRouter,
		buildingBlocksPrivateRouter,
	]);
	app.use("/api/standards", [standardsRouter, standardsPrivateRouter]);
	app.use("/api/specifications", [
		specificationsRouter,
		specificationsPrivateRouter,
	]);
	app.use("/api/implementations", [
		implementationsRouter,
		implementationsPrivateRouter,
	]);
	app.use("/api/auth", authRouter);

	app.use("/api/suggestions", [suggestionsRouter, suggestionsPrivateRouter]);

	// DEV
	app.use("/api/dev/setup", devSetupRouter);
};
