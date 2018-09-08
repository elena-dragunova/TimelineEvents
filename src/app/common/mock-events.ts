import { Event } from './event';
import { NEWS } from './mock-news';
import { TRANSACTIONS } from './mock-transactions';

export let EVENTS: Event[] = []; //= NEWS.concat(TRANSACTIONS);

for (let i = 0; i < NEWS.length; i++) {
    EVENTS.push(NEWS[i]);
}

for (let i = 0; i < TRANSACTIONS.length; i++) {
    EVENTS.push(TRANSACTIONS[i]);
}