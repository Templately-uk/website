import { Tag } from './Tag';
import { Tone } from './Tone';
import { User } from './User';

export interface Template {
	id: number;
	route: string;
	category: string;
	user: User;
	title: string;
	useCase: string;
	template?: string;
	aiTones?: Tone[];
	tags: Tag[];
	views: number;
	createdAt: Date;
	reviewed: boolean;
}
