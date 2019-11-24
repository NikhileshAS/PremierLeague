import React from 'react';
import AppBar from './components/AppBar';
import Table from './components/Table';
import axios from 'axios';
import { Switch, withRouter, Route } from 'react-router-dom';
import MatchDetails from './components/MatchDetails';
function App(props) {
	const [ matches, setMatches ] = React.useState([]);
	React.useEffect(
		() => {
			async function fetchdata() {
				if (props.location.pathname === '/') {
					const matchData = await axios.get('/api/all_matches');
					setMatches(matchData.data);
				}
			}
			fetchdata();
		},
		[ props.location.pathname ]
	);
	return (
		<div>
			<AppBar />
			<Switch>
				<Route path="/match_details/:id" exact>
					{withRouter((props) => <MatchDetails {...props} />)}
				</Route>
				<Route path="/">{withRouter((props) => <Table rows={matches} {...props} />)}</Route>
			</Switch>
		</div>
	);
}

export default App;
