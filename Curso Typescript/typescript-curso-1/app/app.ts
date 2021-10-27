import { NegociationController } from "./controllers/negociation-controller.js";
alert('koe');
const controller: NegociationController = new NegociationController();
const form: HTMLFormElement = document.querySelector('.form')!;
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.addNegociation();    
});
