export class Item {
    done: boolean;
    price: number;
    purchase: string;

    constructor(price: number, purchase: string) {
        this.done = false;
        this.price = price;
        this.purchase = purchase;
    }
}