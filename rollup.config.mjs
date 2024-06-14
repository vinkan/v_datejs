import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
export default {
    input: 'src/main.js',
    output: [
        {
            file: 'dist/index.min.js',
            format: 'iife',
            name: 'v_datejs',
            plugins: [terser()]
        }
    ]
    ,
    plugins: [json()]
};