import { Address } from "@app/common/interface/address.interface";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: Address
}