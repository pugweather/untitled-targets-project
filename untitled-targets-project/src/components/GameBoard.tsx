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

    function clickTarget(idx: number) {
        if (idx) return
        setTargets(prev => prev.slice(1))
    }

    return (
        <div className={styles.page}>
            <div className={styles.board}>
                {
                targets.map((targ, idx) => {
                    return (
                        <div 
                            className={`${styles.target} ${styles[`step${idx}`]}`} 
                            style={{ left: targ.left + '%', top: targ.top + '%'}}
                            onClick={() => clickTarget(idx)}
                            >
                        </div>
                    )
                })
                }
                <svg width="100%" height="100%" style={{position: "absolute", pointerEvents: "none", inset: "0"}}>
                    {
                        targets.map((targ, idx) => {
                            // Need 2 targets to connect a line
                            if (!targets[idx + 1]) return
                            return (
                            <line 
                                key={idx} 
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth="2" 
                                x1={targ.left + '%'} 
                                y1={targ.top + '%'} 
                                x2={targets[idx + 1]["left"] + '%'} 
                                y2={targets[idx + 1]["top"] + '%'}/>
                            )
                        })
                    }
                </svg>
            </div>
        </div>
    )
}
