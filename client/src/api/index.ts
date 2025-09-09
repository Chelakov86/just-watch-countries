import axios from 'axios';

export type SearchParams = {
	query: string;
	country: string;
	provider: string;
};

export type SearchResult = {
	id: string | number;
	title: string;
	overview?: string;
	poster?: string | null;
	provider: string;
	type?: string;
};

export async function searchTitles(params: SearchParams): Promise<SearchResult[]> {
	const response = await axios.post('/api/search', params);
	if (response.data && Array.isArray(response.data.results)) {
		return response.data.results;
	}
	throw new Error('Unerwartete Antwort vom Server');
}
