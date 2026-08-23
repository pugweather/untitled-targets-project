import { useState } from "react"
import styles from './Gameboard.module.css'
import type {Target} from '../types'

export default function GameBoard() {

    const NUM_TARGETS_TO_SHOW = 5

    const allTargets: Target[] = Array.from({ length: 13 }, (_, i) => {
        const progress = i / 12
        const left = 10 + 80 * progress
        const top = 25 + 50 * progress + (i % 2 === 0 ? -28 : 28)
        return {
            left: Math.round(left),
            top: Math.round(Math.max(5, Math.min(95, top)))
        }
    })

    const [targetsRange, setTargetsRange] = useState([0, NUM_TARGETS_TO_SHOW])
    const [firstTargIdx, lastTargIdx] = targetsRange

    const targets = allTargets.slice(firstTargIdx, lastTargIdx)
    
    const [exiting, setExiting] = useState(false)
    
    function clickTarget(idx: number) {
        if (idx !== 0 || exiting) return
        setExiting(true)
    }
    
    function handleFadeEnd(e: React.TransitionEvent<HTMLDivElement>) {
        if (e.propertyName !== 'opacity') return
        setTargetsRange(prev => [prev[0] + 1, Math.min(prev[1] + 1, allTargets.length)])
        setExiting(false)
    }
    return (
        <div className={styles.page}>
            <div className={styles.board}>
                {
                targets.map((targ, idx) => {
                    return (
                        <div 
                            key={`${targ.left}-${targ.top}`}
                            className={`${styles.target} ${styles[`step${idx}`]} ${exiting && idx === 0 ? styles.exiting : ''}`}
                            style={{ left: targ.left + '%', top: targ.top + '%'}}
                            onMouseDown={() => clickTarget(idx)}
                            onTransitionEnd={exiting && idx === 0 ? handleFadeEnd : undefined}
                            >
                        </div>
                    )
                })
                }
                <svg
                    className={styles.targetConnectors}
                    width="100%"
                    height="100%"
                >
                    {
                        targets.map((targ, idx) => {
                            const next = targets[idx + 1]
                            if (!next) return null
                            return (
                                <line
                                    key={`${targ.left}-${targ.top}-${next.left}-${next.top}`}
                                    className={`${styles.connector} ${exiting && idx === 0 ? styles.connectorExit : ''}`}
                                    x1={targ.left + '%'}
                                    y1={targ.top + '%'}
                                    x2={next.left + '%'}
                                    y2={next.top + '%'}
                                    stroke="rgba(255, 255, 255, 0.25)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            )
                        })
                    }
                </svg>
            </div>
        </div>
    )
}
