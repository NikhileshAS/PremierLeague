const league = require('../keys/keys').LeagueSchema;
const mongoose = require('mongoose');

const LeagueSchema = mongoose.model(league);

module.exports = (app) => {
	app.get('/api/all_matches', async (req, res) => {
		console.log('All matches request hit');
		const leagueMatches = await LeagueSchema.find({}, 'id team1 team2 city winner');
		res.status(200).send(leagueMatches);
	});

	app.get('/api/match_details/:id', async (req, res) => {
		console.log('match details hit');
		const match = await LeagueSchema.findOne({
			_id: req.params.id
		});
		res.status(200).send(match);
	});
};
