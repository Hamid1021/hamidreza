
'use client';

import dynamic from 'next/dynamic';

const ThreeBackground = dynamic(
    () => import('./ThreeBackground'),
    {
        ssr: false,
        loading: () => null,
    }
);

export default function ThreeBackgroundLoader() {
    return <ThreeBackground />;
}
