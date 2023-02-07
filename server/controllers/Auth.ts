import { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
import User from '../modals/user'

const Login = (req: Request, res: Response) => {
    const { email, password } = req.body
    if (email == '' || password == '') res.status(200).json({ error: 'Fill the all fields to register' })
}

const Rrgister = async (req: Request, res: Response) => {
    const { username, email, password, confirm_password } = req.body;

    if (username == '' || email == '' || password == '') res.status(200).json({ error: 'Fill the all fields to register' })
    if (password != confirm_password) res.status(200).json({ error: 'Confirm your password' })

    const find_user = await User.findOne({ email: email })
    if (find_user) res.status(200).json({ error: 'User existed' })
    else {
        const hash = await bcryptjs.hash(password, 10)
        const create_user = await User.create({
            username,
            email,
            password: hash
        })
        if (!create_user) res.status(201).json({ error: 'Error, Try again' })
        res.status(200).json({ message: 'Succes' })
    }
}

const ForgetPassword = (req: Request, res: Response) => {
    res.send(req.body)
}

const ResetPassword = (req: Request, res: Response) => {
    res.send(req.body)
}

export default { Login, Rrgister, ForgetPassword, ResetPassword };