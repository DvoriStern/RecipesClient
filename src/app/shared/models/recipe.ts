import { Layer } from "./layer";

export interface Recipe {
    id:string,
    name:string,
    description:string,
    categorynames:string[],
    preparationTime:number,
    difficulty: number,
    dateAdded:Date,
    layers:Layer[],
    instructions:string[],
    image:string,
    isPrivate:boolean,
    user:{_id:string,name:string};
}
