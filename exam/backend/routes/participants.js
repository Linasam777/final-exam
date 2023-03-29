import express from 'express'

const router = express.Router()

// middlewares
import { requireSignin, isAdmin } from '../middlewares/auth.js'
// controllers
import {
  create,
  update,
  remove,
  read,
} from '../controllers/participants.js'

router.post('/participants', requireSignin, isAdmin, create)
router.put('/participants', requireSignin, isAdmin, update)
router.delete('/participants/:participantsId', requireSignin, isAdmin, remove)
router.get('/participants/:slug', requireSignin, isAdmin, read)
export default router
