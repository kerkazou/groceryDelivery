import express from 'express'
import { Auth } from '../controllers/Auth'
import { tryCatch } from '../middlewares/tryCatch'
import { errorHandller } from '../middlewares/errorHandller'

const router = express.Router();

router.post('/login', tryCatch.tryCatch(Auth.Login));
router.post('/register', tryCatch.tryCatch(Auth.Rrgister));
router.get('/logout', tryCatch.tryCatch(Auth.Logout));

router.use(errorHandller.errorHandller)

export = router;