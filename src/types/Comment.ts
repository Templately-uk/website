import { User } from './User';

export interface Comment {
	id: number;
	comment: string;
	reviewed?: boolean;
	user: User;
	createdAt: Date;
}
