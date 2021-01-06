// Import stylesheets
import "./style.css";
import { LitElement, html, property, customElement } from "lit-element";

class SimpleGreeting extends LitElement {
  static get properties() {
    return { name: { type: String } };
  }

  constructor() {
    super();
    this.name = "World";
  }

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}

customElements.define("simple-greeting", SimpleGreeting);
