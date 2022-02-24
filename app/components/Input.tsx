import {
	CancelButton,
	CancelInput,
	Input,
	InputContainer,
} from '~/styles/input.styled';
import SearchSvg from '~/assets/search.svg';

export default function InputComponent() {
	return (
		<form action='/search' method='get'>
			<InputContainer>
				<Input type='text' placeholder='🔍 Enter to Search' name='input' />
				<CancelInput>
					<CancelButton src={SearchSvg} />
				</CancelInput>
			</InputContainer>
		</form>
	);
}
