import { Router } from "express";
import * as playersCtrl from '../controllers/players.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

router.get('/new', playersCtrl.new)
router.get('/:id', playersCtrl.show)
router.get('/:id/edit', playersCtrl.edit)
router.post('/', playersCtrl.create)
router.post('/:id/stats', playersCtrl.addStats)
router.put('/:id', playersCtrl.update)
router.delete('/:id', playersCtrl.delete)



export {
  router
}