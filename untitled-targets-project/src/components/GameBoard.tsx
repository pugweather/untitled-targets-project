import { useState } from "react"
import styles from './Gameboard.module.css'


export default function GameBoard() {

    const initialTargets = [
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

    function clickTarget(idx) {
        if (!idx) return
        setTargets(prev => prev.filter((_, idx) => idx !== 0))
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
                                onClick={clickTarget}
                                >
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
