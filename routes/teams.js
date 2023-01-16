import { Router } from "express";
import * as teamsCtrl from '../controllers/teams.js'

const router = Router()

router.get('/new', teamsCtrl.new)
router.get('/', teamsCtrl.index)
router.get('/:id', teamsCtrl.show)
router.get('/:id/edit', teamsCtrl.edit)
router.post('/', teamsCtrl.create)
router.post('/:id/players', teamsCtrl.addToTeam)
router.put('/:id', teamsCtrl.update)
router.delete('/:id', teamsCtrl.delete)


export {
  router
}