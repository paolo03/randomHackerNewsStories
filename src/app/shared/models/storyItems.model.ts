export class StoryItem {
    id: number;
    image?: string;
    by: string;
    descendants: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    author?: Author;
}


export interface Author {
    id: string;
    about: string;
    created: number;
    karma: number;
    submitted:number;
}
