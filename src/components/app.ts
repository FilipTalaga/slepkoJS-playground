import { createComponent } from 'slepkojs';
import './button';

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
        <app-button click="console.log('wywoła się?')"></app-button>
    </div>
`;

export const app = createComponent('app-root', html, css);
