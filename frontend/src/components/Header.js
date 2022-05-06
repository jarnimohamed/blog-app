import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import NavLink from '@mui/material/Link';

export default function Header() {
  return (
    <React.Fragment>
			<CssBaseline />
			<AppBar
				position="static"
				color="default"
				elevation={0}
				style= {{borderBottom: `1px solid `,}}
			>
				<Toolbar >
					<Typography
						variant="h6"
						color="inherit"
						noWrap
						style={{flexGrow: 1,}}
					>
						<Link
							component={NavLink}
							to="/"
							underline="none"
							color="textPrimary"
						>
							JARNI
						</Link>
					</Typography>
					<nav>
						<Link
							color="textPrimary"
							href="register"
							style={{margin: 3,}}
							component={NavLink}
							to="/register"
						>
							Register
						</Link>
					</nav>
					<Button
						href="login"
						color="primary"
						variant="outlined"
						style={{margin: 1,}}
						component={NavLink}
						to="/login"
					>
						Login
					</Button>
					<Button
						href="logout"
						color="primary"
						variant="outlined"
						style={{margin: 1,}}
						component={NavLink}
						to="/logout"
					>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
  );
}
