import { useState, useEffect } from "react"
import styles from './Gameboard.module.css'
import type { Target } from '../types'
import LeaderboardModal from "./LeaderboardModal"

export default function GameBoard() {
    const NUM_TARGETS_TO_SHOW = 5
    const INITIAL_COUNTDOWN = 3

    const course: Target[] = [
        { left: 15, top: 35 },
        { left: 19, top: 65 },
        // { left: 23, top: 35 },
        // { left: 27, top: 65 },
        // { left: 31, top: 35 },
        // { left: 35, top: 65 },
        // { left: 39, top: 35 },
        // { left: 43, top: 65 },
        // { left: 47, top: 35 },
        // { left: 51, top: 65 },
        // { left: 55, top: 35 },
        // { left: 59, top: 65 },
        // { left: 63, top: 35 },
        // { left: 67, top: 65 },
        // { left: 71, top: 35 },
        // { left: 75, top: 65 },
        // { left: 79, top: 35 },
        // { left: 83, top: 65 },
        // { left: 87, top: 35 },
        // { left: 91, top: 65 },
    ]

    const [countdown, setCountdown] = useState<number | null>(INITIAL_COUNTDOWN)
    const [isPlaying, setIsPlaying] = useState(false)
    const [timer, setTimer] = useState<number>(0)

    const [targetsRange, setTargetsRange] = useState([0, NUM_TARGETS_TO_SHOW])
    const [firstTargIdx, lastTargIdx] = targetsRange

    const targets = course.slice(firstTargIdx, lastTargIdx)
    const [exiting, setExiting] = useState(false)

    // Modal state
    const [showLeaderboard, setShowLeaderboard] = useState(false)

    useEffect(() => {
        if (countdown === null || countdown <= 0) {
            if (countdown === 0) setIsPlaying(true)
            return
        }
        const t = setTimeout(() => setCountdown(countdown - 1), 1000)
        return () => clearTimeout(t)
    }, [countdown])

    useEffect(() => {
        if (!isPlaying) return
        const t = setTimeout(() => setTimer(prev => prev + 0.1), 100)
        return () => clearTimeout(t)
    }, [isPlaying, timer])

    function clickTarget(idx: number) {
        if (!isPlaying || idx !== 0 || exiting) return
        setExiting(true)
    }

    function handleFadeEnd(e: React.TransitionEvent<HTMLDivElement>) {
        if (e.propertyName !== 'opacity') return

        const nextTargToClick = targetsRange[0] + 1
        const lastTargInRange = Math.min(targetsRange[1] + 1, course.length)
        console.log(nextTargToClick, lastTargInRange)

        // Restart game if won
        const gameFinished = nextTargToClick >= lastTargInRange
        if (gameFinished) {
            setIsPlaying(false)
            setCountdown(null)
            setShowLeaderboard(true)
        }
        setTargetsRange([nextTargToClick, lastTargInRange])
        setExiting(false)
    }

    // function resetGameState() {
    //     setTargetsRange([0, NUM_TARGETS_TO_SHOW])
    //     setCountdown(null)
    //     setTimer(0) // Setting timer to non NULL value will start iniating the countdown to play
    // }

    function playGame() {
        setTargetsRange([0, NUM_TARGETS_TO_SHOW])
        setTimer(0) // Setting timer to non NULL value will start iniating the countdown to play
        setCountdown(INITIAL_COUNTDOWN)
        setIsPlaying(false)
        setShowLeaderboard(false)
    }

    const minutes = Math.floor(timer / 60)
    const seconds = Math.floor(timer % 60)
    const tenths = Math.round((timer % 1) * 10)
    const timerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${tenths}`

    return (
        <div className={styles.page}>
            {showLeaderboard && <LeaderboardModal />}
            <div className={styles.topButtonsWrapper}>
                <div className={styles.timerText}>{timerText}</div>
                <button onClick={playGame}>Restart</button>
            </div>
            <div className={styles.board}>
                {!isPlaying && (
                    <div className={styles.countdownOverlay}>
                        {countdown}
                    </div>
                )}
                {targets.map((targ, idx) => (
                    <div
                        key={`${targ.left}-${targ.top}`}
                        className={`${styles.target} ${styles[`step${idx}`]} ${exiting && idx === 0 ? styles.exiting : ''}`}
                        style={{ left: targ.left + '%', top: targ.top + '%' }}
                        onMouseDown={() => clickTarget(idx)}
                        onTransitionEnd={exiting && idx === 0 ? handleFadeEnd : undefined}
                    />
                ))}
                <svg
                    className={styles.targetConnectors}
                    width="100%"
                    height="100%"
                >
                    {targets.map((targ, idx) => {
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
                    })}
                </svg>
            </div>
        </div>
    )
}