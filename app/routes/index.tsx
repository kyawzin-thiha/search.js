import BGLandscape from '~/assets/BG-landscape.jpg';
import BGPortrait from '~/assets/BG-portrait.jpg';
import { LinksFunction, LoaderFunction } from 'remix';
import Logo from '~/assets/Logo.svg';
import LogoBlack from '~/assets/Logo-black.svg';
import InputComponent from '~/components/Input';
import LandingCss from '~/css/landing.css';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: LandingCss,
		},
	];
};

export default function Index() {
	return (
		<div className='landing-page'>
			<div className='bg'>
				<img className='landscape' src={BGLandscape} alt='' />
				<img className='portrait' src={BGPortrait} alt='' />
			</div>
			<div>
				<img className='logo' src={Logo} alt='' />
				<img className='logo-black' src={LogoBlack} alt='' />
			</div>
			<div className='search-bar'>
				<InputComponent />
			</div>
		</div>
	);
}
