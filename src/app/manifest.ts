import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Cyber Security & Digital Forensics UK',
        short_name: 'CSDF UK',
        description: 'Professional cyber security services provider specialising in defensive security, digital forensics, and incident response across the United Kingdom.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0A1628',
        theme_color: '#0066CC',
        icons: [
            {
                src: '/logo-symbol.png',
                sizes: 'any',
                type: 'image/png',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    };
}
