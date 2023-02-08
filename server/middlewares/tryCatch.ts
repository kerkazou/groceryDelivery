import { Request, Response, NextFunction } from 'express'

export class tryCatch {
    static tryCatch = (param: any) => async (req: Request, res: Response, next: NextFunction) => {
        try {
            await param(req, res);
        }
        catch (error) {
            next(error);
        }
    }
}