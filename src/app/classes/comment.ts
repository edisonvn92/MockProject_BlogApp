import { Profile } from './profile';

export class Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    author: Profile

}
