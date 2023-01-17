import { Team } from "../models/team.js";
import { Player } from "../models/player.js";


function newTeam(req, res) {
  res.render('teams/new', {
    title: 'Add Team'
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Team.create(req.body)
  .then(team => {
    res.redirect(`/teams/${team._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/teams')
  })
}

function index(req, res) {
  Team.find({})
  .then(teams => {
    res.render('teams/index', {
      teams,
      title: 'All Teams'
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/teams')
  })
}

function show(req, res) {
  Team.findById(req.params.id)
  .populate('players')
  .then(team => {
    Player.find({_id: {$nin: team.players}})
    .then(players => {
      res.render('teams/show', {
        team,
        title: "Team Details",
        players,
      })
    })
    .catch(err => {
      console.log(err);
      res.redirect('/teams')
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/')
  })
}

function deleteTeam(req, res) {
  Team.findByIdAndDelete(req.params.id)
  .then(team => {
    res.redirect('/teams')
  })
  .catch(err => {
    console.log(err);
    res.redirect('/teams')
  })
}

function edit(req, res) {
  Team.findById(req.params.id)
  .then(team => {
    res.render('teams/edit', {
      team,
      title: 'Edit Team'
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/')
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Team.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(team => {
    res.redirect(`/teams/${team._id}`)
  })
  .catch(err => {
    console.log(err);
    res.redirect('/')
  })
}

function addToTeam(req, res) {
  Team.findById(req.params.id)
  .then(team => {
    team.players.push(req.body.playerId)
    team.save()
    .then(() => {
      res.redirect(`/teams/${team._id}`)
    })
    .catch(err => {
      console.log(err);
      res.redirect('/teams')
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/teams')
  })
}


export {
  newTeam as new,
  create,
  index,
  show,
  deleteTeam as delete,
  edit,
  update,
  addToTeam,
}