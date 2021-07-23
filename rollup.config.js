import typescript from '@rollup/plugin-typescript';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import serve from 'rollup-plugin-serve';
import liveReload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;
const outputDir = 'build';

export default {
    input: 'src/main.ts',
    output: {
        file: `${outputDir}/bundle.js`,
        format: 'es',
    },
    plugins: [
        typescript(),
        htmlTemplate({
            template: 'src/index.html',
            target: 'index.html',
        }),
        !production && serve({ open: true, contentBase: outputDir }),
        !production && liveReload(outputDir),
    ],
};
