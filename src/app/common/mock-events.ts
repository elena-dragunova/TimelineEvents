import { Event } from './event';
import { NEWS } from './mock-news';
import { TRANSACTIONS } from './mock-transactions';

export let EVENTS: Event[] = NEWS.concat(TRANSACTIONS);
