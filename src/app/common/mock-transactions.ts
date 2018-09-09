import {Transaction} from "./transaction";

export const TRANSACTIONS: Transaction[] = [
    {
        type: "transaction",
        date: "2018-01-02",
        sum: 2500,
        currency: "USD",
        flow: "+",
        person: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        type: "transaction",
        date: "2018-05-05",
        sum: 1000,
        currency: "RUB",
        flow: "-",
        person: "Jane Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        type: "transaction",
        date: "2015-12-01",
        sum: 1500,
        currency: "EUR",
        flow: "+",
        person: "John Smith",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    }
];