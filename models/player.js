import mongoose from "mongoose";

const Schema = mongoose.Schema

const statSchema = new Schema({
  game: {
    type: Number,
    required: true 
  },
  points: {
    type: Number,
    required: true
  },
  rebounds: {
    type: Number,
    required: true
  },
  assists: {
    type: Number,
    required: true
  },
  steals: {
    type: Number,
    required: true,
  },
  blocks: {
    type: Number,
    required: true,
  },
  minutes: {
    type: Number,
    required: true
  }

})

const playerSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  position: {
    type: String, 
    enum: ['PG', 'SG', 'SF', 'PF', 'C'],
    required: true
  },
  height: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
  },
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  stats: [statSchema],
}, {
  timestamps: true
})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}

