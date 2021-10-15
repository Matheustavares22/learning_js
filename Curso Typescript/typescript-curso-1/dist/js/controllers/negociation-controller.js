import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { NegociationsView } from "../views/negociations-view.js";
export class NegociationController {
    constructor() {
        this._negociations = new Negociations();
        this._negociationsView = new NegociationsView('#negociationsView');
        this._inputData = document.querySelector('#date');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputValue = document.querySelector('#value');
        this._negociationsView.update();
    }
    addNegociation() {
        const negociation = this.createNegociation();
        this._negociations.add(negociation);
        this._negociations.list();
        console.log(this._negociations.list());
        this.cleanForm();
    }
    createNegociation() {
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ','));
        const quantity = parseInt(this._inputQuantity.value);
        const value = parseInt(this._inputValue.value);
        return new Negociation(date, quantity, value);
    }
    cleanForm() {
        this._inputData.value = '';
        this._inputQuantity.value = '';
        this._inputValue.value = '';
        this._inputData.focus();
    }
}
