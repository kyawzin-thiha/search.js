import { Link } from 'remix';
import {
	SearchResultContainer,
	SearchResultDescription,
	SearchResultLink,
	SearchResultTitle,
} from '~/styles/results.styled';

type props = {
	data: {
		title: string;
		description: string;
		link: string;
	};
};

export default function SearchResult({ data }: props) {
	return (
		<SearchResultContainer>
			<SearchResultLink>{data.link}</SearchResultLink>
			<SearchResultTitle href={data.link} target='_blank'>
				{data.title}
			</SearchResultTitle>
			<SearchResultDescription>{data.description}</SearchResultDescription>
		</SearchResultContainer>
	);
}
