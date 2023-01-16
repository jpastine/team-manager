import { Router } from "express";
import * as playersCtrl from '../controllers/players.js'

const router = Router()

router.get('/new', playersCtrl.new)
router.get('/:id', playersCtrl.show)
router.post('/', playersCtrl.create)



export {
  router
}