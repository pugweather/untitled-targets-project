import styles from "./Home.module.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import type { HomeTarget } from "../types"

export default function Home() {

    // Middle nav menu
    const MENU_OPTIONS = [
        {
            id: "1",
            name: "Frenzy",
            path: "/game"
        },
        {
            id: "2",
            name: "MusicMania",
        },
        {
            id: "3",
            name: "Editor",
        }
    ]

    // Target BG colors
    const COLORS = ["#ff2a6d", "#05d9e8", "#f7f700", "#ffffff"]

    const [targets, setTargets] = useState<HomeTarget[]>([])

    const navigate = useNavigate()

    useEffect(() => {

        function spawn() {
            const newTarget = {
                id: Date.now(),
                left: Math.random() * 100,
                top: Math.random() * 100,
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

    return (
        <div className={styles.page}>

            <div className={styles.heroWrapper}>
                <h1>TARGETS</h1>
                <ul>
                    {
                        MENU_OPTIONS.map(opt => {
                            return (
                                <li key={opt.id} onClick={() => navigate("/game")}>
                                    <button className={styles.modeItem}>{opt.name}</button>
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
                        onAnimationEnd={(e) => {
                            setTargets(prev => prev.map(currTarg => 
                                currTarg.id === t.id && currTarg.state === "grow" ? 
                                {...currTarg, state: "pop"} : currTarg))
                        }}
                    >
                    </div>
                )
            })
            }
        </div>
    )
}