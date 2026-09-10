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

    if (target.spawnTime === 0.0) {
        console.log(scale)
    }
    
    return (
        <div className={styles.ring} style={{left: target.left + '%', top: target.top + '%', transform: `translate(-50%, -50%) scale(${scale})`}}>
            
        </div>
    )
}