import { LoaderFunction, useLoaderData } from 'remix';
import { axiosClient } from '~/util/axios';
import {
	Gallery,
	Image,
	ImageContainer,
	ImageTitle,
} from '~/styles/gallery.styled';
export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const searchData = url.searchParams.get('input')?.replace(/\s/g, '+');
	let data;
	try {
		data = await axiosClient.get(`images/q=${searchData}`);
	} catch (error) {
		throw new Error('Server Error');
	}
	return data.data;
};

export default function Images() {
	const data = useLoaderData();
	const breakPoints = {
		default: 3,
		3000: 6,
		2000: 5,
		1200: 3,
		1000: 2,
		500: 1,
	};
	return (
		<Gallery className='' breakpointCols={breakPoints}>
			{data.image_results &&
				data.image_results.map((item: any) => (
					<a target='_blank' href={item.link.href}>
						<ImageContainer>
							<Image src={item.image.src} alt={item.image.alt} />
							<ImageTitle>{item.link.title}</ImageTitle>
						</ImageContainer>
					</a>
				))}
		</Gallery>
	);
}
