import { Request, Response } from 'express';

const Login = (req: Request, res: Response) => {
    res.send('Login')
}

module.exports = {
    Login,
}