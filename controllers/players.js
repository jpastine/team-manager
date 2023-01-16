import { Player } from "../models/player.js";
import { router } from "../routes/teams.js";

function newPlayer(req, res) {
  Player.find({})
  .then(players => {
    res.render('players/new', {
      title: 'Add Player',
      players,
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/teams')
  })
}

function create(req, res) {
  Player.create(req.body)
  .then(player => {
    res.redirect('/players/new')
  })
  .catch(err => {
    console.log(err);
    res.redirect('/')
  })
}

function show(req, res) {
  Player.findById(req.params.id)
  .then(player => {
    res.render('players/show', {
      title: 'Player Stats',
      player,
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect(`/teams/${team._id}`)
  })
}

function addStats(req, res) {
  
}



export {
  newPlayer as new,
  create,
  show,
  addStats,
}