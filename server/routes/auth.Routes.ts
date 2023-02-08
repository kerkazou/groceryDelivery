import express from 'express'
import { Auth } from '../controllers/Auth'

const router = express.Router();

router.post('/login', Auth.Login);
router.post('/register', Auth.Rrgister);
router.get('/logout', Auth.Logout);

export = router;