// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'My Docs',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: [
            {
                label: 'Anleitungen',
                autogenerate: { directory: 'guides' }, // Erstellt Links für alles im Ordner "guides"
            },
            {
                label: 'Tests',
                autogenerate: { directory: '' }, // Erstellt Links für alle restlichen Dateien
            },
            ],
        }),
    ],
});
