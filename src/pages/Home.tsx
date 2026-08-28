import styles from "./Home.module.css"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import { Volume2 } from "lucide-react"
import type { HomeTarget, Fragment } from "../types"
import anime from "animejs"

function ExplosionFragment({ fragment, onRemove }: { fragment: Fragment; onRemove: (id: number) => void }) {
    const ref = useRef<HTMLDivElement>(null)
    const onRemoveRef = useRef(onRemove)
    onRemoveRef.current = onRemove

    useEffect(() => {
        if (!ref.current) return

        const angle = Math.random() * Math.PI * 2
        const burst = 40 + Math.random() * 80
        const endX = Math.cos(angle) * burst
        const endY = Math.sin(angle) * burst
        const fall = window.innerHeight + 200

        const tl = anime.timeline({
            targets: ref.current,
            complete: () => onRemoveRef.current(fragment.id),
            easing: "linear"
        })

        tl.add({
            translateX: endX,
            translateY: endY,
            scale: [1, 0.8],
            opacity: [1, 1],
            duration: 250,
            easing: "easeOutExpo"
        }).add({
            translateX: endX + (Math.random() - 0.5) * 60,
            translateY: endY + fall,
            scale: 0,
            opacity: 0,
            rotate: Math.random() > 0.5 ? 360 : -360,
            duration: 900,
            easing: "easeInQuad"
        })

        return () => {
            tl.pause()
        }
    }, [])

    return (
        <div
            ref={ref}
            className={styles.fragment}
            style={{
                left: fragment.left + "%",
                top: fragment.top + "%",
                backgroundColor: fragment.color,
                color: fragment.color
            }}
        />
    )
}

export default function Home() {

    // Middle nav menu
    const MENU_OPTIONS = [
        {
            id: "1",
            name: "Frenzy",
            path: "/select-course"
        },
        {
            id: "2",
            name: "MusicMania",
            path: "",
            isDisabled: true,
        },
        {
            id: "3",
            name: "Editor",
            path: "",
            isDisabled: true
        }
    ]

    // Target BG colors
    const COLORS = ["#ff2a6d", "#05d9e8", "#f7f700", "#ffffff"]

    const [targets, setTargets] = useState<HomeTarget[]>([])

    const [fragments, setFragments] = useState<Fragment[]>([])

    const navigate = useNavigate()

    const removeFragment = (id: number) => setFragments(prev => prev.filter(f => f.id !== id))

    useEffect(() => {

        function spawn() {

            if (document.hidden) return

            const speed = 0.5
            const angle = Math.random() * Math.PI * 2

            const newTarget = {
                id: Date.now(),
                left: Math.random() * 100,
                top: Math.random() * 100,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                state: "grow"
            }
            setTargets(prev => [...prev, newTarget].slice(-20))
        }

        const spawnIntervalId = setInterval(spawn, 1250)

        return () => {
            clearInterval(spawnIntervalId)
        }
    }, [])

    useEffect(() => {
        let animationFrameId: number
        function move() {
            setTargets(prev => 
                prev.map(t => {
                    let newLeft = t.left + t.vx
                    let newTop = t.top + t.vy
                    if (newLeft < 0) newLeft += 100
                    if (newLeft > 100) newLeft -= 100
                    if (newTop < 0) newTop += 100
                    if (newTop > 100) newTop -= 100
                    return {...t, left: newLeft, top: newTop}
                })
            )
            animationFrameId = requestAnimationFrame(move)
        }
        animationFrameId = requestAnimationFrame(move)

        return () => {
            cancelAnimationFrame(animationFrameId)
        }

    }, [])

    return (
        <div className={styles.page}>

            <div className={styles.heroWrapper}>
                <h1>TARGETS</h1>
                <ul>
                    {
                        MENU_OPTIONS.map(opt => {
                            return (
                                <li key={opt.id} onClick={() => navigate(opt.path)}>
                                    <button className={`${styles.modeItem} ${opt.isDisabled ? styles.modeItemDisabled : ''}`}>{opt.name}</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {
            targets.map(t => {
                const animationClass = t.state === "grow" ? "grow" : t.state === "pop" ? "pop" : ''
                return (
                    <div 
                        key={t.id}
                        style={{left: t.left + '%', top: t.top + '%', backgroundColor: t.color, color: t.color}} 
                        className={`${styles.target} ${styles[animationClass]}`}
                        onAnimationEnd={() => {
                            if (t.state === "grow") {
                                const newFragments: Fragment[] = Array.from({ length: 8 }, (_, i) => ({
                                    id: Date.now() + i,
                                    left: t.left,
                                    top: t.top,
                                    color: t.color
                                }))
                                setFragments(prev => [...prev, ...newFragments])
                            }
                            setTargets(prev => {
                                const curr = prev.find(x => x.id === t.id)
                                if (curr?.state === "grow") {
                                    return prev.map(x => x.id === t.id ? {...x, state: "pop"} : x)
                                }
                                if (curr?.state === "pop") {
                                    return prev.filter(x => x.id !== t.id)
                                }
                                return prev
                            })
                        }}
                    >
                    </div>
                )
            })
            }
            {
                fragments.map(f => (
                    <ExplosionFragment key={f.id} fragment={f} onRemove={removeFragment} />
                ))
            }
            <button className={styles.audioButton} disabled aria-label="Audio (coming soon)">
                <Volume2 className={styles.audioIcon} strokeWidth={2} />
            </button>
        </div>
    )
}