import { NavLink } from 'remix';
import styled from 'styled-components';

export const NavContainer = styled.div`
	width: 100%;
	height: auto;
	padding: 10px;
`;

export const Logo = styled.img`
	width: auto;
	height: 20px;
	margin: 0px 10px;
	@media screen and (max-width: 600px) {
		height: 15px;
	}
`;

export const NavTopBar = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;
`;

export const NavInputContainer = styled.div`
	width: 50%;
	height: 40px;
	@media screen and (max-width: 600px) {
		width: 100%;
		height: 30px;
	}
`;

export const NavLinksBar = styled.div`
	width: 100%;
	height: 30px;
	padding: 5px;
	display: flex;
	align-items: center;
`;

export const Link = styled(NavLink)`
	width: auto;
	height: 30px;
	display: flex;
	align-items: center;
	margin: 0 10px;
`;

export const LinkIcon = styled.img`
	width: 20px;
	height: 20px;
	margin: 0px 5px;
`;

export const LinkTitle = styled.span`
	letter-spacing: 2px;
	font-size: 13px;
	margin: 0px 5px;
`;
