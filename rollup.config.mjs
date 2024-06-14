import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
export default {
    input: 'src/main.js',
    output: [
        {
            file: 'dist/bundle.min.js',
            format: 'iife',
            name: 'v_ttc',
            plugins: [terser()]
        }
    ]
    ,
    plugins: [json()]
};