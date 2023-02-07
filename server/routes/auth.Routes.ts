import express from 'express';
import Auth from '../controllers/Auth'

const router = express.Router();

router.post('/login', Auth.Login);
router.post('/register', Auth.Rrgister);
router.post('/forget-password', Auth.ForgetPassword);
router.put('/reset-password', Auth.ResetPassword);

export = router;