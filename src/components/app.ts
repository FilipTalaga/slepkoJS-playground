import { createComponent } from 'slepkojs';
import { button } from './button';

const css = `
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: sans-serif;
    }

    .title {
        color: blueviolet
    }
`;

const html = `
    <div class="container">
        <h2 class="title">Hello from SlepkoJS!</h2>
        ${button}
    </div>
`;

export const app = createComponent('app-root', html, css);
