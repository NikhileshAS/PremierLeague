import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2)
	}
}));

export default function MatchDetails(props) {
	const { id } = props.match.params;
	const [ match, setMatch ] = React.useState(null);
	const classes = useStyles();
	React.useEffect(
		() => {
			async function fetchData() {
				const matchDetail = await axios.get('/api/match_details/' + id);
				setMatch(matchDetail.data);
			}
			fetchData();
		},
		[ id ]
	);
	console.log(match);
	return !!match ? (
		<Paper className={classes.root}>
			<Typography component="span">{match.team1}</Typography> VS.{' '}
			<Typography component="span">{match.team2}</Typography>
			<Typography component="p">ID: {match.id}</Typography>
			<Typography component="p">City: {match.city}</Typography>
			<Typography component="p">Date: {match.date}</Typography>
			<Typography component="p">DL: {match.dlApplied === 0 ? 'No' : 'Yes'}</Typography>
			<Typography component="p">Man of the Match: {match.playerOfMatch}</Typography>
			<Typography component="p">Season: {match.season}</Typography>
			<Typography component="p">Toss: {match.tossWinner}</Typography>
			<Typography component="p">Winner: {match.winner}</Typography>
			<Typography component="p">Venue: {match.venue}</Typography>
			<Typography component="p">
				Win by: {match.winByRuns === '0' ? match.winByWickets + ' Wickets' : match.winByRuns + ' Runs'}
			</Typography>
		</Paper>
	) : null;
}
