import { Request, Response } from 'express';

const notFoundRoutes = (req: Request, res: Response) => {
    res.send('Page note found')
}

module.exports = notFoundRoutes;