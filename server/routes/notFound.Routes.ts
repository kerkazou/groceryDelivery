import { Request, Response } from 'express';

const notFoundRoutes = (req: Request, res: Response) => {
    res.status(404).send('Page note found')
}

export = notFoundRoutes;