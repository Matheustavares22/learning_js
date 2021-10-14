import { Negociation } from "../models/negociation.js";
export class NegociationController {
    constructor() {
        this.inputData = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }
    addNegociation() {
        const negociation = this.createNegociation();
        console.log(negociation);
        this.cleanForm();
    }
    createNegociation() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseInt(this.inputValue.value);
        return new Negociation(date, quantity, value);
    }
    cleanForm() {
        this.inputData.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputData.focus();
    }
}
