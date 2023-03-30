import { Router } from "express";
import { createToken } from "../../../utils/jwt";

const r = Router();

r.post("/login", async (req, res, next) => {
	try {
		const { password } = req.body;
        console.log({password, proce: process.env.ADMIN_PASSWORD})
		if (!password) throw new Error();
		if (password !== process.env.ADMIN_PASSWORD) throw new Error();

		const token = createToken();
		return res.status(200).json({ token });
	} catch (err) {
        console.log(err);
		return res.status(401).json({ error: "unauthorized" });
	}
});

export default r;
