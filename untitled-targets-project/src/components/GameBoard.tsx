import { useState } from "react"
import styles from './Gameboard.module.css'
import type {Target} from '../types'

export default function GameBoard() {

    const NUM_TARGETS_TO_SHOW = 5

    const course: Target[] = [
        { left: 15, top: 35 },
        { left: 19, top: 65 },
        { left: 23, top: 35 },
        { left: 27, top: 65 },
        { left: 31, top: 35 },
        { left: 35, top: 65 },
        { left: 39, top: 35 },
        { left: 43, top: 65 },
        { left: 47, top: 35 },
        { left: 51, top: 65 },
        { left: 55, top: 35 },
        { left: 59, top: 65 },
        { left: 63, top: 35 },
        { left: 67, top: 65 },
        { left: 71, top: 35 },
        { left: 75, top: 65 },
        { left: 79, top: 35 },
        { left: 83, top: 65 },
        { left: 87, top: 35 },
        { left: 91, top: 65 },
    ]

    const [targetsRange, setTargetsRange] = useState([0, NUM_TARGETS_TO_SHOW])
    const [firstTargIdx, lastTargIdx] = targetsRange

    const targets = course.slice(firstTargIdx, lastTargIdx)
    
    const [exiting, setExiting] = useState(false)
    
    function clickTarget(idx: number) {
        if (idx !== 0 || exiting) return
        setExiting(true)
    }
    
    function handleFadeEnd(e: React.TransitionEvent<HTMLDivElement>) {
        if (e.propertyName !== 'opacity') return
        setTargetsRange(prev => [prev[0] + 1, Math.min(prev[1] + 1, course.length)])
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
