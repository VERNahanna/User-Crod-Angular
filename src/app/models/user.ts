import { Role } from './role';

export class User {
    id: string;

    firstName: string;
    lastName: string;
    email: string;
    dbOfBirth:string;
    phoneNumber:string;
    role: Role
}
