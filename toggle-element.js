// npm i @web/dev-server 
// npm i lit
import { LitElement, css, html } from "lit";


export class ToggleElement extends LitElement {
  static properties = {
    checked: {},
  };
  static styles = css`
    input {
      display: none;
    }
    label {
      display: flex;
      align-items: center;
      width: 180px;
      height: 80px;
      padding: 8px;
      border-radius: 100px;
      background: mediumturquoise;
      cursor: pointer;
    }
    span {
      height: 80px;
      width: 80px;
      border-radius: 100%;
      transition: 0.5s;
      background: white;
      margin-left: 0;
    }

    label:has(input:checked) {
   background: darkslategrey;
    }

    input:checked ~ span {
      margin-left: calc(100% - 80px);
      transition: 0.5s;
    }
  `;

  constructor() {
    super();
    this.checked = false;
  };
  toggle() {
    this.checked = !this.checked;
    this.changeBodyBackground();
  };
  changeBodyBackground() {
   const bgColor = this.checked ? "black" : "white";
   document.body.style.transiction = "0.5s";
   document.body.style.backgroundColor = bgColor;
  }



  render() {
    return html`
      <h1>Hello world!</h1>
      <label for="toggle">
        <input id="toggle" type="checkbox" @change=${this.toggle} />
        <span></span>
      </label>
    `;
  }
}


customElements.define("garaje-toggle", ToggleElement);
