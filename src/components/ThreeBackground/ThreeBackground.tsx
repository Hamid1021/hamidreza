'use client'

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

const ThreeParticlesFleeMouse = () => {
    const mountRef = useRef<HTMLDivElement>(null)
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
        setDarkMode(matchMedia.matches)
        const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches)
        matchMedia.addEventListener("change", handler)
        return () => matchMedia.removeEventListener("change", handler)
    }, [])

    useEffect(() => {
        if (!mountRef.current) return

        const scene = new THREE.Scene()
        scene.fog = new THREE.FogExp2(darkMode ? 0x0b0d14 : 0xf7f7f7, 0.001)

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            2000
        )
        camera.position.z = 300

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        mountRef.current.appendChild(renderer.domElement)

        mountRef.current.style.backgroundColor = darkMode
            ? "rgba(10,12,22,0.6)"
            : "rgba(255,255,255,0.15)"
        mountRef.current.style.backdropFilter = "blur(14px)"

        const particleCount = 800
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)
        const speeds = new Float32Array(particleCount)

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 2000
            positions[i * 3 + 1] = (Math.random() - 0.5) * 1500
            positions[i * 3 + 2] = (Math.random() - 0.5) * 800

            const colorOffset = Math.random() * 0.2
            if (darkMode) {
                colors[i * 3] = 0.8 + colorOffset
                colors[i * 3 + 1] = 0.7 + colorOffset
                colors[i * 3 + 2] = 1.0
            } else {
                colors[i * 3] = 1.0
                colors[i * 3 + 1] = 0.85
                colors[i * 3 + 2] = 0.3 + colorOffset
            }

            speeds[i] = Math.random() * 0.5 + 0.1
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

        const material = new THREE.PointsMaterial({
            size: darkMode ? 3.0 : 4.0,
            vertexColors: true,
            transparent: true,
            opacity: darkMode ? 0.85 : 0.9,
            blending: THREE.AdditiveBlending
        })

        const particles = new THREE.Points(geometry, material)
        scene.add(particles)

        const mouse = new THREE.Vector2(0, 0)
        window.addEventListener("mousemove", (e) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
        })

        const animate = () => {
            requestAnimationFrame(animate)
            const pos = geometry.attributes.position.array as Float32Array
            const time = Date.now() * 0.001

            for (let i = 0; i < particleCount; i++) {
                const ix = i * 3
                const iy = i * 3 + 1
                const iz = i * 3 + 2

                // شناوری ذرات
                pos[ix + 1] += Math.sin(time + i) * speeds[i]
                pos[ix] += Math.cos(time * 0.5 + i) * (speeds[i] * 0.5)
                pos[iz] += Math.sin(time * 0.7 + i) * (speeds[i] * 0.3)

                // فاصله از موس
                const dx = mouse.x * 1000 - pos[ix]
                const dy = mouse.y * 800 - pos[iy]
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < 200) { // محدوده ترس
                    const fleeStrength = (200 - dist) / 200 * 4
                    pos[ix] -= dx * 0.02 * fleeStrength
                    pos[iy] -= dy * 0.02 * fleeStrength
                }
            }

            geometry.attributes.position.needsUpdate = true
            renderer.render(scene, camera)
        }

        animate()

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener("resize", onResize)

        return () => {
            window.removeEventListener("resize", onResize)
            mountRef.current?.removeChild(renderer.domElement)
        }
    }, [darkMode])

    return <div ref={mountRef} className="fixed inset-0 -z-10" />
}

export default ThreeParticlesFleeMouse