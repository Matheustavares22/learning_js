import { Negociations } from "../models/negociations.js";

export class NegociationsView {

    private element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector)!;
        // I solved a problem here, I was using selectById, and the run time console was throwing 
        // JavaScript Uncaught TypeError: cannot set property ‘innerHTML’ of null Solution
    }
    
    template(model: Negociations): string {    
        // ` allows you to type a block of string without having to use concatenations                
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>QUANTITY</th>
                    <th>VALUES</th>
                </tr>                
            </thead>
            <tbody>
                ${model.list().map(negociation => {
                    return `
                    <tr>
                        <td>${new Intl.DateTimeFormat().format(negociation.date)}</td>
                        <td>${negociation.quantity}</td>
                        <td>${negociation.value}</td>
                    </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    update(model: Negociations): void {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }
}