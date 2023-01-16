import mongoose from "mongoose";

const Schema = mongoose.Schema

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
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true,
  }
}, {
  timeseries: true
})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}

