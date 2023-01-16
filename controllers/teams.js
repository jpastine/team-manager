import { Team } from "../models/team.js";

function newTeam(req, res) {
  res.render('teams/new', {
    title: 'Add Team'
  })
}

function create(req, res) {
  Team.create(req.body)
  .then(team => {
    res.redirect('/teams')
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
  .then(team => {
    res.render('teams/show', {
      team,
      title: "Team Details"
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


export {
  newTeam as new,
  create,
  index,
  show,
  deleteTeam as delete,
  edit,
}