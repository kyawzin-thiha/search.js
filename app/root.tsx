import {
	Links,
	LinksFunction,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import GlobalStyle from '~/css/global.css';

export const meta: MetaFunction = () => {
	return { title: 'Search.js' };
};

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: GlobalStyle,
		},
	];
};

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<Meta />
				<Links />
				{typeof document === 'undefined' ? '__STYLES__' : null}
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	);
}
