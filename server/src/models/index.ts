export interface SearchResult {
	id: string | number;
	title: string;
	overview?: string;
	poster?: string | null;
	provider: string;
	type?: string;
}
