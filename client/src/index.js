import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, withRouter, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { colors } from './constants/constants';

const theme = createMuiTheme({
	palette: {
		primary: { main: colors.themeColorMajor },
		text: { main: colors.themeColorPrimary }
	},
	typography: {
		fontFamily: '"Comic Sans',
		text: 12
	},
	overrides: {
		MuiButton: {
			contained: {
				backgroundColor: colors.themeColorMajor
			}
		},
		MuiTypography: {
			root: {
				color: colors.themeColorPrimary
			},
			body1: {
				fontWeight: 'bold',
				fontSize: 20
			}
		},
		MuiPaper: {
			root: {
				backgroundColor: colors.themeColorSecondary
			}
		},
		MuiTableCell: {
			head: { textAlign: 'center' },
			body: { textAlign: 'center' }
		}
	}
});

ReactDOM.render(
	<BrowserRouter>
		<MuiThemeProvider theme={theme}>
			<StylesProvider>
				<Route path="/">{withRouter((props) => <App {...props} />)}</Route>
			</StylesProvider>
		</MuiThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
