import styles from './TargetRing.module.css'
import {type Target } from '../types'

type TargetRingProps = {
    target: Target,
    timer: number
}

export default function TargetRing({ target, timer }: TargetRingProps) {

    const STARTING_RING_SCALE = 3

    if (isNaN(timer) || target.spawnTime === undefined || !target.hitTime || !target.despawnTime) return null
    

    // Progress ranges from 0 -> 1 and scale ranges from 1 -> 3
    const progress = Math.max(0, Math.min(1, (timer - target.spawnTime) / (target.hitTime - target.spawnTime)))
    const scale = STARTING_RING_SCALE - (2 * progress)
    
    
    // Give rings less glow as they approach target border (may play with different values / colors idk)
    const glow = 8 + 14 * progress
    const glowOpacity = 0.25 + 0.55 * progress

    return (
        <div
            className={styles.ring}
            style={{
                left: target.left + '%',
                top: target.top + '%',
                transform: `translate(-50%, -50%) scale(${scale})`,
                filter: `brightness(${1 - 0.35 * progress}) drop-shadow(0 0 ${glow}px rgba(255, 255, 255, ${glowOpacity}))`
            }}
        >
            
        </div>
    )
}