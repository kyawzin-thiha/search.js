import styled from 'styled-components';

export const SearchResultContainer = styled.div`
	width: 60%;
	height: auto;
	padding: 10px;
	margin: 10px 5px;
	border: 1px solid rgba(100, 100, 100, 0.1);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 1000px) {
		width: 80%;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

export const SearchResultTitle = styled.a`
	margin: 5px 0;
	letter-spacing: 1px;
	font-size: 15px;
	font-weight: bold;
	line-height: 1.5;
	color: #00bcd4;
	transition: all 0.3s ease-in-out;
	&:hover {
		text-decoration: underline;
	}
`;

export const SearchResultDescription = styled.p`
	letter-spacing: 1px;
	line-height: 1.5;
	font-size: 13px;
`;

export const SearchResultLink = styled.div`
	font-size: 11px;
	color: #121212;
	overflow-warp: break-word;
	overflow: hidden;
	max-height: 50px;
`;
