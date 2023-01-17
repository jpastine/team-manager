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
  Player.findById(req.params.id)
  .then(player => {
    player.stats.push(req.body)
    player.save()
    .then(() => {
      res.redirect(`/players/${player._id}`)
    })
    .catch(err => {
      console.log(err);
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/')
  })
}

function deletePlayer(req, res) {
  Player.findByIdAndDelete(req.params.id)
  .then(player => {
    res.redirect('/teams')
  })
  .catch(err => {
    console.log(err);
    res.redirect('/teams')
  })
}

function edit(req, res) {
  Player.findById(req.params.id)
  .then(player => {
    res.render('players/edit', {
      player,
      title: "Edit Player"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key]
  }
  Player.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(player => {
    res.redirect(`/players/${player._id}`)
  })
  .catch(err => {
    console.log(err);
    res.redirect(`/players/${player._id}`)
  })
}



export {
  newPlayer as new,
  create,
  show,
  addStats,
  deletePlayer as delete,
  edit, 
  update,
}