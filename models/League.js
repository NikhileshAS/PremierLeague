const mongoose = require('mongoose')
const {
    Schema
} = mongoose
const league = require('../keys/keys').LeagueSchema
process.setMaxListeners(Infinity)

const LeagueSchema = new Schema({
    id: Number,
    season: String,
    city: String,
    date: String,
    team1: String,
    team2: String,
    tossWinner: String,
    tossDecision: String,
    result: String,
    dlApplied: Number,
    winner: String,
    winByRuns: String,
    winByWickets: String,
    playerOfMatch: String,
    venue: String,
    umpire1: String,
    umpire2: String,
    umpire3: String
})

mongoose.model(league, LeagueSchema)