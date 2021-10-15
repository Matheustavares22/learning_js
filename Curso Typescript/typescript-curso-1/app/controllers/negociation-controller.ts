import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { NegociationsView } from "../views/negociations-view.js";

export class NegociationController {
    private _inputData: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _negociations = new Negociations()!;
    private _negociationsView = new NegociationsView('#negociationsView')!;

    constructor() {
        this._inputData = document.querySelector('#date')!;
        this._inputQuantity = document.querySelector('#quantity')!;
        this._inputValue = document.querySelector('#value')!;
        this._negociationsView.update(this._negociations);
    }

    addNegociation(): void {        
        const negociation: Negociation = this.createNegociation();
        this._negociations.add(negociation);
        this._negociations.list();
        this._negociationsView.update(this._negociations);
        this.cleanForm();
    }

    createNegociation(): Negociation {
        const exp = /-/g;
        const date: Date = new Date(this._inputData.value.replace(exp, ','));
        const quantity: number = parseInt(this._inputQuantity.value);
        const value: number = parseInt(this._inputValue.value);
        return new Negociation(date, quantity, value);
    }

    cleanForm(): void {
        this._inputData.value = '';
        this._inputQuantity.value = '';
        this._inputValue.value = '';
        this._inputData.focus();
    }

}