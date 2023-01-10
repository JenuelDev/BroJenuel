import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
    plugins: [
        vue(),
        WindiCSS({
            config: {
                darkMode: 'class',
            },
        }),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'auto',
            workbox: {
                cleanupOutdatedCaches: true,
                globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
            },
            manifest: {
                name: 'BroJenuel - Jenuel Ganawed',
                short_name: 'BroJenuel',
                description:
                    'Jenuel Ganawed(BroJenuel/Bro Jenuel) is a software/web developer specializing in creating (and sometimes designing) exceptional websites, applications, and everything in between.',
                theme_color: '#64ffdb',
                background_color: '#0a192fd9',
                display: 'standalone',
                icons: [
                    {
                        src: 'icons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'icons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
});
