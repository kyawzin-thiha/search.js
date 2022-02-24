import { LoaderFunction, useLoaderData } from 'remix';
import NewsContainer from '~/components/newResult';
import { axiosClient } from '~/util/axios';

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const searchData = url.searchParams.get('input')?.replace(/\s/g, '+');
	let data;
	try {
		data = await axiosClient.get(`news/q=${searchData}`);
	} catch (error) {
		throw new Error('Server Error');
	}
	return data.data;
};

export default function News() {
	const data = useLoaderData();
	return (
		<div>
			{data.entries &&
				data.entries.map((item: any) => <NewsContainer data={item} />)}
		</div>
	);
}
