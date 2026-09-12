import { useState, useEffect, useRef } from "react"
import type { Target } from "../types"
import styles from "../pages/Gameboard.module.css"
import anime from "animejs"

type FadingTargetProps = {
    target: Target,
    mode: string,
    clicked: boolean,
    onFadeEnd: (target: Target) => void
}

const FRAGMENT_COUNT = 8

function CrumbleFragment() {
    return <div className={styles.crumbleFragment} style={{ left: '50%', top: '50%', backgroundColor: 'currentColor' }} />
}

export function FadingTarget({target, mode, clicked, onFadeEnd}: FadingTargetProps) {

    // These are settimoeut durations that represent same amount of time as it takes for animation to run
    // onFadeEnd will be called when setTimeout callback runs
    const MISS_DURATION = 250
    const POP_DURATION = 1200

    const [isExiting, setIsExiting] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let animationId_2 = 0
        const animationId_1 = requestAnimationFrame(() => {
            animationId_2 = requestAnimationFrame(() => setIsExiting(true))
        })
        const hideTargetTimeoutId = setTimeout(() => {
            onFadeEnd(target)
        }, clicked ? POP_DURATION : MISS_DURATION)

        if (clicked && containerRef.current) {
            const fragments = containerRef.current.querySelectorAll(`.${styles.crumbleFragment}`)
            fragments.forEach((frag) => {
                const angle = Math.random() * Math.PI * 2
                const burst = 15 + Math.random() * 30
                const endX = Math.cos(angle) * burst
                const endY = Math.sin(angle) * burst
                const fall = 60 + Math.random() * 60

                anime.timeline({ targets: frag, easing: "linear" })
                .add({
                    translateX: endX,
                    translateY: endY,
                    scale: [1, 0.8],
                    opacity: [1, 1],
                    duration: 250,
                    easing: "easeOutExpo"
                })
                .add({
                    translateX: endX + (Math.random() - 0.5) * 60,
                    translateY: endY + fall,
                    scale: 0,
                    opacity: 0,
                    rotate: Math.random() > 0.5 ? 360 : -360,
                    duration: 900,
                    easing: "easeInQuad"
                })
            })
        }

        return () => {
            cancelAnimationFrame(animationId_1)
            cancelAnimationFrame(animationId_2)
            clearTimeout(hideTargetTimeoutId)
        }
    }, [])

    return (
        <div ref={containerRef} className={`${styles.fadingTargetContainer} ${mode === "v3" ? styles.fadingTargetContainerV3 : ''}`} style={{ left: target.left + '%', top: target.top + '%' }}>
            <div
                className={`${mode === "v3" ? styles.fadingTargetVisualV3 : styles.fadingTargetVisual} ${mode === "v1" ? styles.step0 : ''} ${isExiting ? clicked ? styles.pop : styles.miss : ''}`}
            >
                {mode === "v3" && <span className={styles.targetNumber}>{target.position ?? ':)'}</span>}
            </div>
            {clicked && Array.from({ length: FRAGMENT_COUNT }, (_, i) => <CrumbleFragment key={i} />)}
        </div>
    )
}