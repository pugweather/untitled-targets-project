import { useState, useEffect } from "react"
import type { Target } from "../types"
import styles from "../pages/Gameboard.module.css"
import type { TransitionEvent } from "react"

type FadingTargetProps = {
    target: Target,
    mode: string,
    onFadeEnd: (e: TransitionEvent<HTMLDivElement>) => void
}

export function FadingTarget({target, mode, onFadeEnd}: FadingTargetProps) {

    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        // RAF allows use to wait until targ is fully painted before setting is exiting which applies fade out
        // Otherwise the targ only ever exists in ending state (opacity: 0) and nothing happens
        let animationId_2 = 0
        const animationId_1 = requestAnimationFrame(() => {
            animationId_2 = requestAnimationFrame(() => setIsExiting(true))
        })
        return () => {
            cancelAnimationFrame(animationId_1)
            cancelAnimationFrame(animationId_2)
        }
    }, [])

    return(
        <div
            className={`${styles.fadingTarget} ${mode === "v1" ? styles.step0 : ''} ${isExiting ? styles.exiting : ''}`}
            style={{ left: target.left + '%', top: target.top + '%' }}
            onTransitionEnd={onFadeEnd}
        />
    )
}