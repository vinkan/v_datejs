import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
export default {
    input: 'src/main.js',
    output: [
        {
            file: 'dist/index-module.js',
            format: 'es',
            name: 'v_datejs',
            plugins: [terser()]
        },
        {
            file: 'dist/index-require.cjs',
            format: 'cjs',
            name: 'v_datejs',
            plugins: [terser()]
        }
    ]
    ,
    plugins: [json()]
};