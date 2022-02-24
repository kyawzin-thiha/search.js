import { LoaderFunction, useLoaderData } from 'remix';
import SearchResult from '~/components/searchResult';
import { axiosClient } from '~/util/axios';
export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const searchData = url.searchParams.get('input')?.replace(/\s/g, '+');
	let data;
	try {
		data = await axiosClient.get(`/search/q=${searchData}`);
	} catch (error) {
		throw new Error('Server Error');
	}
	return data.data;
};

export default function Index() {
	const data = useLoaderData();
	return (
		<div>
			{data.results &&
				data.results.map((item: any) => (
					<SearchResult data={item} key={item.link} />
				))}
		</div>
	);
}
