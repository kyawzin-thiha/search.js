import axios from 'axios';

export const axiosClient = axios.create({
	baseURL: 'https://google-search3.p.rapidapi.com/api/v1',
	headers: {
		'x-proxy-location': 'SG',
		'x-rapidapi-host': 'google-search3.p.rapidapi.com',
		'x-rapidapi-key': process.env.RAPID_API_TOKEN as string,
		'content-type': 'application/json',
	},
});
