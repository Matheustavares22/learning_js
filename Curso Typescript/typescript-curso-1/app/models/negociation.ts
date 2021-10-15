export class Negociation {
    constructor(
        private _date: Date,
        public readonly quantity: number,
        public readonly value: number
    ) {}

    get volume(): number {
        return this.quantity * this.value;
    }

    get date(): Date {
        const date = new Date(this._date.getTime());
        return date;
    }
}