
'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeParticlesFleeMouse = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [darkMode, setDarkMode] = useState(false);

    // تشخیص و دنبال کردن تغییر تم سیستم
    useEffect(() => {
        const mediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
        );

        setDarkMode(mediaQuery.matches);

        const handler = (event: MediaQueryListEvent) => {
            setDarkMode(event.matches);
        };

        mediaQuery.addEventListener('change', handler);

        return () => {
            mediaQuery.removeEventListener('change', handler);
        };
    }, []);

    // مدیریت Three.js
    useEffect(() => {
        const container = mountRef.current;

        if (!container) return;

        let disposed = false;
        let animationId: number | null = null;

        // Scene
        const scene = new THREE.Scene();

        scene.fog = new THREE.FogExp2(
            darkMode ? 0x0b0d14 : 0xf7f7f7,
            0.001
        );

        // اندازه اولیه
        const getSize = () => ({
            width: Math.max(1, container.clientWidth),
            height: Math.max(1, container.clientHeight),
        });

        const { width, height } = getSize();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            2000
        );

        camera.position.z = 300;

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: 'low-power',
        });

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio || 1, 2)
        );

        renderer.setSize(width, height);

        container.appendChild(renderer.domElement);

        container.style.backgroundColor = darkMode
            ? 'rgba(10,12,22,0.6)'
            : 'rgba(255,255,255,0.15)';

        container.style.backdropFilter = 'blur(14px)';

        // Particles
        const particleCount = 800;

        const positions = new Float32Array(particleCount * 3);
        const basePositions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const speeds = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            const index = i * 3;

            positions[index] = (Math.random() - 0.5) * 2000;
            positions[index + 1] = (Math.random() - 0.5) * 1500;
            positions[index + 2] = (Math.random() - 0.5) * 800;

            basePositions[index] = positions[index];
            basePositions[index + 1] = positions[index + 1];
            basePositions[index + 2] = positions[index + 2];

            const colorOffset = Math.random() * 0.2;

            if (darkMode) {
                colors[index] = 0.8 + colorOffset;
                colors[index + 1] = 0.7 + colorOffset;
                colors[index + 2] = 1.0;
            } else {
                colors[index] = 1.0;
                colors[index + 1] = 0.85;
                colors[index + 2] = 0.3 + colorOffset;
            }

            speeds[i] = Math.random() * 0.5 + 0.1;
        }

        const geometry = new THREE.BufferGeometry();

        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        );

        geometry.setAttribute(
            'color',
            new THREE.BufferAttribute(colors, 3)
        );

        const material = new THREE.PointsMaterial({
            size: darkMode ? 3 : 4,
            vertexColors: true,
            transparent: true,
            opacity: darkMode ? 0.85 : 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const particles = new THREE.Points(geometry, material);

        scene.add(particles);

        // Mouse
        const mouse = new THREE.Vector2(0, 0);

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', onMouseMove, {
            passive: true,
        });

        // Animation
        const startTime = performance.now();

        const animate = (now: number) => {
            if (disposed) return;

            animationId = requestAnimationFrame(animate);

            const pos = geometry.attributes.position
                .array as Float32Array;

            const time = (now - startTime) * 0.001;

            for (let i = 0; i < particleCount; i++) {
                const index = i * 3;

                // حرکت شناور بر اساس موقعیت اولیه
                pos[index] =
                    basePositions[index] +
                    Math.cos(time * 0.5 + i) * (speeds[i] * 0.5);

                pos[index + 1] =
                    basePositions[index + 1] +
                    Math.sin(time + i) * speeds[i];

                pos[index + 2] =
                    basePositions[index + 2] +
                    Math.sin(time * 0.7 + i) * (speeds[i] * 0.3);

                // فرار از موس
                const dx = mouse.x * 1000 - pos[index];
                const dy = mouse.y * 800 - pos[index + 1];

                const distanceSquared = dx * dx + dy * dy;

                if (distanceSquared < 40000) {
                    const distance = Math.sqrt(distanceSquared);

                    const fleeStrength =
                        ((200 - distance) / 200) * 4;

                    pos[index] -= dx * 0.02 * fleeStrength;
                    pos[index + 1] -= dy * 0.02 * fleeStrength;
                }
            }

            geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };

        animationId = requestAnimationFrame(animate);

        // Resize
        const onResize = () => {
            if (disposed) return;

            const size = getSize();

            camera.aspect = size.width / size.height;
            camera.updateProjectionMatrix();

            renderer.setSize(size.width, size.height);

            renderer.setPixelRatio(
                Math.min(window.devicePixelRatio || 1, 2)
            );
        };

        window.addEventListener('resize', onResize, {
            passive: true,
        });

        // Cleanup کامل
        return () => {
            disposed = true;

            if (animationId !== null) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }

            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);

            scene.remove(particles);

            geometry.dispose();
            material.dispose();

            renderer.dispose();

            if (renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [darkMode]);

    return (
        <div
            ref={mountRef}
            className="fixed inset-0 -z-10"
        />
    );
};

export default ThreeParticlesFleeMouse;
