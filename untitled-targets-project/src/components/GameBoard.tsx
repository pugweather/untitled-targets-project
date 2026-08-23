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
            </div>
        </div>
    )
}
