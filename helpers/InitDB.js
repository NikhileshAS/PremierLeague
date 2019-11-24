const fs = require('fs')
const csv = require('csv-parser')
const league = require('../keys/keys').LeagueSchema
const mongoose = require('mongoose')
const LeagueSchema = mongoose.model(league)
const errors = require('../keys/keys').Errors

let leagueDetails = []
module.exports = {
    CSV_DB_Migration: function () {
        LeagueSchema.findOne({}).then(data => {
            if (!data) {
                console.log("Writing into Database")
                fs.createReadStream('./assets/matches.csv')
                    .pipe(csv())
                    .on('data', data => leagueDetails.push(data))
                    .on('end', () => {
                        leagueDetails.map(match => {
                            const matchDetail = new LeagueSchema({
                                id: parseInt(match['id'], 10),
                                season: match['season'],
                                city: match['city'],
                                date: match['date'],
                                team1: match['team1'],
                                team2: match['team2'],
                                tossWinner: match['toss_winner'],
                                tossDecision: match['toss_decision'],
                                result: match['result'],
                                dlApplied: match['dl_applied'],
                                winner: match['winner'],
                                winByRuns: match['win_by_runs'],
                                winByWickets: match['win_by_wickets'],
                                playerOfMatch: match['player_of_match'],
                                venue: match['venue'],
                                umpire1: match['umpire1'],
                                umpire2: match['umpire2'],
                                umpire3: match['umpire3']
                            })
                            matchDetail.save(error => {
                                if (error) {
                                    console.error(errors.DatabaseError.OnSave, error)
                                }
                            })
                        })
                    })
                console.log("Migration done");
            }
        })
    }
}