import { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../modals/user'

export class Auth {
    static async Login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            if (email == '' || password == '') res.json({ error: 'Fill the all fields to register' })
            else {
                const find_user = await User.findOne({ email })
                if (!find_user) res.json({ error: 'Email or password is inccorect' })
                else {
                    const verify_password = await bcryptjs.compare(password, find_user.password)
                    if (!verify_password) res.json({ error: 'Email or password is inccorect' })
                    else {
                        const SECRET_TOKEN: any = process.env.SECRET_TOKEN
                        const token = await jwt.sign({ _id: find_user._id }, SECRET_TOKEN, { expiresIn: "24h" })
                        res.header({ token })
                        res.json({ token, email, username: find_user.username })
                    }
                }
            }
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    static async Rrgister(req: Request, res: Response) {
        try {
            const { username, email, password, confirm_password } = req.body;
            if (username == '' || email == '' || password == '') res.json({ error: 'Fill the all fields to register' })
            if (password != confirm_password) res.json({ error: 'Passwords does not match' })
            const find_user = await User.findOne({ email })
            if (find_user) res.json({ error: 'User existed' })
            else {
                const hash = await bcryptjs.hash(password, 10)
                const create_user = await User.create({
                    username,
                    email,
                    password: hash
                })
                if (!create_user) res.json({ error: 'Error creating user' })
                res.json({ message: 'User Created Successfully' })
            }
        } catch (error) {
            res.status(500).json({ error: 'Error creating user' });
        }
    }

    static async Logout(req: Request, res: Response) {
        try {
            res.send(req.headers['token'])
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
}
