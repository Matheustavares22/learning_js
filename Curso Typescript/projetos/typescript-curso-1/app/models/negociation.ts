export class Negociation {
    #date;
    #quantity;
    #valor;

    constructor(date: Date, quantity: number, valor: number) {
        this.#date = date;
        this.#quantity = quantity;
        this.#valor = valor;
    }

    get date(){
        return this.#date;
    }

    get quantity(){
        return this.#quantity;
    }

    get valor(){
        return this.#valor;
    }

    get volume() {
        return this.#quantity * this.#valor;
    }
}