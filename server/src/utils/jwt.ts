import jwt, { JwtPayload } from "jsonwebtoken";

export const createToken = () => {
	return jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
			data: "isAdmin",
			issuer: process.env.JWT_ISSUER,
		},
		process.env.JWT_SECRET
	);
};

export const verifyToken = (token: string) => {
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	if (
		(decoded as JwtPayload).data === "isAdmin" &&
		(decoded as JwtPayload).issuer === process.env.JWT_ISSUER
	)
		return true;
	return false;
};
