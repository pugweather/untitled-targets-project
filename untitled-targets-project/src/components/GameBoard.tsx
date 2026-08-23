import { useState } from "react"
import styles from './Gameboard.module.css'
import type {Target} from '../types'

export default function GameBoard() {

    const initialTargets: Target[] = [
        {
            left: 12,
            top: 76
        },
        {
            left: 22,
            top: 28
        },
        {
            left: 38,
            top: 16
        },
        {
            left: 55,
            top: 35
        },
        {
            left: 72,
            top: 22
        },
    ]

    const [targets, setTargets] = useState(initialTargets)
    const [exiting, setExiting] = useState(false)

    function clickTarget(idx: number) {
        if (idx !== 0 || exiting) return
        setExiting(true)
    }

    function handleFadeEnd(e: React.TransitionEvent<HTMLDivElement>) {
        if (e.propertyName !== 'opacity') return
        setTargets(prev => prev.slice(1))
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
                            onClick={() => clickTarget(idx)}
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
                            if (!targets[idx + 1]) return null
                            return (
                                <line
                                    key={idx}
                                    x1={targ.left + '%'}
                                    y1={targ.top + '%'}
                                    x2={targets[idx + 1].left + '%'}
                                    y2={targets[idx + 1].top + '%'}
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
