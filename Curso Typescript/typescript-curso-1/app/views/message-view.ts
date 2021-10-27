import { Negociations } from "../models/negociations.js";

export class MessageView {

    private element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector)!;
        // I solved a problem here, I was using selectById, and the run time console was throwing 
        // JavaScript Uncaught TypeError: cannot set property ‘innerHTML’ of null Solution
    }
    
    template(model: string): string {            
        return `
        <p class="alert alert-info"></p>
        `;
    }

    update(model: Negociations): void {
        const template = this.template(model);        
        this.element.innerHTML = template;
    }
}