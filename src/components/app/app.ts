const template = document.createElement('template');

template.innerHTML = `<style>.container {display: flex;justify-content: center}.paragraph {color: blueviolet}</style><div class="container"><p class="paragraph">dbdfhd</p></div>`;

class CustomHeader extends HTMLElement {
    constructor() {
        super();
        // @ts-ignore
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        // @ts-ignoreł
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('custom-header', CustomHeader);

export default '<custom-header></custom-header>';
