import Masonry from 'react-masonry-css';
import styled from 'styled-components';

export const Gallery = styled(Masonry)`
	width: 100%;
	height: auto;
	padding: 5px;
	display: flex;
	overflow: scroll;
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: auto;
	padding: 5px;
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
`;

export const ImageTitle = styled.div`
	width: 100%;
	height: 15px;
	overflow: hidden;
	color: #ccc;
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
`;
