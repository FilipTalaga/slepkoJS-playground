export const init = (component: string) =>
    (document.body.innerHTML = component);

export const createComponent = (
    selector: string,
    template: string,
    styles: string,
    func?: any,
) => {
    const html = document.createElement('template');
    html.innerHTML = `<style>${styles}</style>${template}`;

    class CustomHeader extends HTMLElement {
        constructor() {
            super();
            // @ts-ignore
            this._shadowRoot = this.attachShadow({ mode: 'open' });
            // @ts-ignore
            this._shadowRoot.appendChild(html.content.cloneNode(true));
        }

        connectedCallback() {
            if (!func) {
                return;
            }

            func(this);
        }

        attributeChangedCallback(name: any, oldValue: any, newValue: any) {
            console.log(name, oldValue, newValue);
        }
    }

    window.customElements.define(selector, CustomHeader);

    return `<${selector}/>`;
};
