import styled from 'styled-components';

export const InputContainer = styled.div`
	width: 100%;
	height: auto;
	padding: 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Input = styled.input`
	width: 90%;
	height: 40px;
	padding: 5px 15px;
	border-radius: 20px 0 0 20px;
	background: #f5f5f5;
	letter-spacing: 2px;
	color: #010101;
	font-size: 15px;
	@media screen and (max-width: 600px) {
		height: 30px;
	}
`;

export const CancelInput = styled.button`
	width: 10%;
	height: 40px;
	border-radius: 0 20px 20px 0;
	background: orange;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f5f5f5;
	@media screen and (max-width: 600px) {
		height: 30px;
	}
`;

export const CancelButton = styled.img`
	width: 20px;
	height: 20px;
	@media screen and (max-width: 600px) {
		width: 15px;
		height: 15px;
	}
`;
