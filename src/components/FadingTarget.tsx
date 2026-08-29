import { useState, useEffect } from "react"
import type { FadingTargetProps } from "../types"
import styles from "../pages/Gameboard.module.css"

export function FadingTarget({target, onFadeEnd}: FadingTargetProps) {

    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        // RAF allows use to wait until targ is fully painted before setting is exiting which applies fade out
        // Otherwise the targ only ever exists in ending state (opacity: 0) and nothing happens
        const animationId = requestAnimationFrame(() => setIsExiting(true))
        return () => cancelAnimationFrame(animationId)
    }, [])

    return(
        <div
            className={`${styles.target} ${styles.step0} ${isExiting ? styles.exiting : ''}`}
            style={{ left: target.left + '%', top: target.top + '%' }}
            onTransitionEnd={onFadeEnd}
        />
    )
}