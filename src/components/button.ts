import { createComponent } from 'slepkojs';

const css = `
    .root {
        border: none;
        outline: none;
        padding: 0.5rem 1rem;
        border-radius: 3px;
        background-color: #e91e63;
        color: white;
        font-weight: 100;
        text-transform: uppercase;
    }
`;

const html = `
    <button class="root">Click</button>
`;

const connectedCallback = (ref: any) => {
    const attr = ref.getAttribute('click');
    ref.addEventListener('click', () => {
        eval(attr)
        console.log('click click ;)');
    });
};

export const button = createComponent(
    'app-button',
    html,
    css,
    connectedCallback,
);
