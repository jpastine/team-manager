import mongoose from "mongoose";

const Schema = mongoose.Schema

const teamSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  coach: {
    type: String, 
    required: true
  },
  record: String,
  players: [{type: Schema.Types.ObjectId, ref: 'Player' }], 
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const Team = mongoose.model('Team', teamSchema)

export{
  Team
}

