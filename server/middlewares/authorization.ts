// import { Request, Response, NextFunction } from 'express'
// const jwt = require("jsonwebtoken")

// module.exports = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token: any = await req.headers.authorization;
//         const decodedToken = await jwt.verify(token.split(" ")[1], process.env.SECRET_TOKEN);
//         const user = await decodedToken;
//         req.user = user;
//         next();
//     } catch (error) {
//         res.status(401).json({
//             error: new Error("Invalid request!"),
//         });
//     }
// };