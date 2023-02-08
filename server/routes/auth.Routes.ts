import express from 'express'
import { Auth } from '../controllers/Auth'
import { tryCatch } from '../middlewares/tryCatch'

const router = express.Router();

router.post('/login', tryCatch.tryCatch(Auth.Login));
router.post('/register', tryCatch.tryCatch(Auth.Rrgister));
router.get('/logout', tryCatch.tryCatch(Auth.Logout));

export = router;