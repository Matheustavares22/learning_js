import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";

export class NegociationController {
    private inputData: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negociations = new Negociations();

    constructor() {
        this.inputData = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');        
    }

    addNegociation(): void {        
        const negociation: Negociation = this.createNegociation();
        this.negociations.add(negociation);
        this.negociations.list().pop;
        console.log(this.negociations.list());
        this.cleanForm();
    }

    createNegociation(): Negociation {
        const exp = /-/g;
        const date: Date = new Date(this.inputData.value.replace(exp, ','));
        const quantity: number = parseInt(this.inputQuantity.value);
        const value: number = parseInt(this.inputValue.value);
        return new Negociation(date, quantity, value);
    }

    cleanForm(): void{
        this.inputData.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputData.focus();
    }

}