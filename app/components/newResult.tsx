import {
	SearchResultContainer,
	SearchResultLink,
	SearchResultTitle,
} from '~/styles/results.styled';

type props = {
	data: {
		link: string;
		title: string;
		id: string;
		source: {
			href: string;
		};
	};
};

export default function NewsContainer({ data }: props) {
	return (
		<SearchResultContainer key={data.id}>
			<SearchResultTitle href={data.link}>{data.title}</SearchResultTitle>
			<SearchResultLink>{data.source.href}</SearchResultLink>
		</SearchResultContainer>
	);
}
