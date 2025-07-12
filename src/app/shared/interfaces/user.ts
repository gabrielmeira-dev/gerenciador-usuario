export interface User {
    id: number;
    name: string;
}

export type UserPayload = Omit<User, 'id'>