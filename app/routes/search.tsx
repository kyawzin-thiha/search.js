import { LinksFunction, LoaderFunction, Outlet, useLoaderData } from 'remix';
import SearchCss from '~/css/search.css';
import {
	Link,
	LinkIcon,
	LinkTitle,
	Logo,
	NavContainer,
	NavInputContainer,
	NavLinksBar,
	NavTopBar,
} from '~/styles/nav.styled';
import LogoBlack from '~/assets/Logo-black.svg';
import All from '~/assets/all.svg';
import Images from '~/assets/images.svg';
import News from '~/assets/news.svg';
import InputComponent from '~/components/Input';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: SearchCss,
		},
	];
};

export const loader: LoaderFunction = ({ request }) => {
	const url = new URL(request.url);
	const inputData = url.searchParams.get('input');
	return inputData;
};

export default function Search() {
	const searchQuery = useLoaderData();

	return (
		<div className='search-page'>
			<div className='nav'>
				<NavContainer>
					<NavTopBar>
						<Logo src={LogoBlack} />
						<NavInputContainer>
							<InputComponent />
						</NavInputContainer>
					</NavTopBar>
				</NavContainer>
				<NavLinksBar>
					<Link to={`/search?input=${searchQuery}`}>
						<LinkIcon src={All} />
						<LinkTitle>All</LinkTitle>
					</Link>
					<Link to={`/search/images?input=${searchQuery}`}>
						<LinkIcon src={Images} />
						<LinkTitle>Images</LinkTitle>
					</Link>
					<Link to={`/search/news?input=${searchQuery}`}>
						<LinkIcon src={News} />
						<LinkTitle>News</LinkTitle>
					</Link>
				</NavLinksBar>
			</div>
			<div className='outlet'>
				<Outlet />
			</div>
		</div>
	);
}
