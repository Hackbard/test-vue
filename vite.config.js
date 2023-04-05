import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'

const pagesPath = path.resolve(__dirname, 'vuejs/pages')
const pages = fs.readdirSync(pagesPath).filter(file => file.endsWith('.vue'))


export default defineConfig({
    plugins: [vue()],
    build: {
        emptyOutDir: false,
        outDir: "dist",
        sourcemap: true,
        lib: {
            entry: {
                helloworld: "./vuejs/pages/helloworld.vue",
            },
            formats: ["es", "cjs"],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'vuejs'),
        },
    },
})
