export class Negociation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get date() {
        const data = new Date(this._date.getTime());
        return this.date;
    }
    get volume() {
        return this.quantity * this.value;
    }
}
