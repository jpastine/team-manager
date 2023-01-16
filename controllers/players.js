import { Player } from "../models/player.js";

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


export {
  newPlayer as new,
  create,
}