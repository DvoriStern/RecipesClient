import { Address } from "./address";

export interface User {
    id:string,
    username:string,
    email:string,
    password:string,
    address:Address,
    role:string
}
