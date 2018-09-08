import { Event } from "./event";

export class News extends Event{
    type: string;
    date: string;
    title: string;
    content: string;
    read: boolean;
}