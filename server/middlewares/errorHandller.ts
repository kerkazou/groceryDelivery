import { Request, Response, NextFunction } from 'express'

export class errorHandller {
    static async errorHandller(err: any, req: Request, res: Response, next: NextFunction) {
        try {
            res.send(err.message)
        }
        catch (error) {
            next(error);
        }
    }
}