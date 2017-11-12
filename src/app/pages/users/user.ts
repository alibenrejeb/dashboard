export interface User {
    name: string;
    age: number;
    email: string;
    address: {
        street: string;
        city: string;
        zip: string;
    };
}