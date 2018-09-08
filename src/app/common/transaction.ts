import { Event } from './event';

export class Transaction extends Event{
    type: string;
    date: string;
    sum: number;
    currency: string;
    flow: string;
    person: string;
    description: string;
}