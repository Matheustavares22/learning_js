import { Component } from "react/cjs/react.production.min";

export class ListaDeNotas extends Component {
  render() {
    return (
      <div className="App">
        <>
          <ul>
            <li>
              <section>
                <header>
                  <h3>Título</h3>
                </header>
                <p>Escreva sua nota</p>
              </section>
            </li>
          </ul>
        </>
      </div>
    );
  }
}
