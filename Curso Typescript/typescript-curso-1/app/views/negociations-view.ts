export class NegociationsView {

    private element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector)!;
        // I solved a problem here, I was using selectById, and the run time console was throwing 
        // JavaScript Uncaught TypeError: cannot set property ‘innerHTML’ of null Solution
    }
    
    template(): string {    
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
            </tbody>
        </table>
        `;
    }

    update(): void {
        this.element.innerHTML = this.template();
    }
}