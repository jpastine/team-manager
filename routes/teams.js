import { Router } from "express";
import * as teamsCtrl from '../controllers/teams.js'
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router()

router.get('/new', teamsCtrl.new)
router.get('/', teamsCtrl.index)
router.get('/:id', teamsCtrl.show)
router.get('/:id/edit', isLoggedIn, teamsCtrl.edit)
router.post('/', isLoggedIn, teamsCtrl.create)
router.post('/:id/players', teamsCtrl.addToTeam)
router.put('/:id', isLoggedIn, teamsCtrl.update)
router.delete('/:id', teamsCtrl.delete)


export {
  router
}