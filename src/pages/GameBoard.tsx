import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { RotateCw, Home, ArrowLeft } from "lucide-react"
import type { Score, Target } from "../types"
import styles from './Gameboard.module.css'
import LeaderboardModal from "../components/LeaderboardModal"
import { FadingTarget } from "../components/FadingTarget"
import { COURSES } from "../data/courses"

export default function GameBoard() {
    const NUM_TARGETS_TO_SHOW = 5
    const INITIAL_COUNTDOWN = 3

    const {courseId} = useParams()

    const course = COURSES.find(c => c.courseId === Number(courseId))
    // Terminate if course not found
    // TODO: send back to course select screen or something?
    if (!course) return
    // const course = COURSES[0]

    const {targets} = course

    const navigate = useNavigate()

    // Game settings
    const [countdown, setCountdown] = useState<number | null>(INITIAL_COUNTDOWN)
    const [isPlaying, setIsPlaying] = useState(false)
    const [timer, setTimer] = useState<number>(0)

    // Target visibility
    const [targetsRange, setTargetsRange] = useState([0, NUM_TARGETS_TO_SHOW])
    const [firstTargIdx, lastTargIdx] = targetsRange
    const visibleTargets = targets.slice(firstTargIdx, lastTargIdx)
    // Separate targets that are fading out after being tapped
    // so that we can advance the new range instantly (previously needed to wait for animation to end before tapping next target)
    const [fadingTargets, setFadingTargets] = useState<Target[]>([])

    // Current timer
    const minutes = Math.floor(timer / 60)
    const seconds = Math.floor(timer % 60)
    const tenths = Math.round((timer % 1) * 10)
    const timerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(tenths).padEnd(2, '0')}`

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

        // Only be able to click first targ in array WHILE playing
        if (!isPlaying || idx !== 0) return
        
        const nextTargToClick = targetsRange[0] + 1
        const lastTargInRange = Math.min(targetsRange[1] + 1, targets.length)
        setTargetsRange([nextTargToClick, lastTargInRange])

        const clickedTarg = visibleTargets[0]
        if (clickedTarg) {
            setFadingTargets(prev => prev.some(t => t === clickedTarg) ? [...prev] : [...prev, clickedTarg])
        } else {
            console.error("Not able to fade out clicked targ???? BUG!?!?")
        }
    }

    function handleFadeEnd(target: Target, e: React.TransitionEvent<HTMLDivElement>) {

        if (e.propertyName !== 'opacity') return

        const nextTargToClick = targetsRange[0] + 1
        const lastTargInRange = Math.min(targetsRange[1] + 1, targets.length)

        // Restart game if won
        const gameFinished = nextTargToClick > lastTargInRange
        if (gameFinished) {

            // Store score in local storage
            const key = "course-" + courseId
            
            const now = new Date()
            const date = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`

            const scores = JSON.parse(localStorage.getItem(key) || '[]') as Score[]
            scores.push({
                date,
                time: timerText,
                rawTime: timer
            })
            scores.sort((a,b) => a.rawTime - b.rawTime)
            localStorage.setItem(key, JSON.stringify(scores))

            setIsPlaying(false)
            setFadingTargets([])
            setCountdown(null)
            setShowLeaderboard(true)
        }
        // setTargetsRange([nextTargToClick, lastTargInRange])
        setFadingTargets(prev => prev.filter(t => t !== target))
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
        setFadingTargets([])
        setShowLeaderboard(false)
    }

    return (
        <div className={styles.page}>
            {showLeaderboard && <LeaderboardModal recentScore={timerText} course={course} onRestart={playGame} onClose={() => setShowLeaderboard(false)}/>}
            <div className={styles.topButtonsWrapper}>
                <button className={`${styles.actionButton} ${styles.backButton}`} onClick={() => navigate(-1)}>
                    <ArrowLeft className={styles.actionIcon} strokeWidth={2.5} />
                </button>
                <div className={styles.timerText}>{timerText}</div>
                <button className={styles.actionButton} onClick={playGame}>
                    <RotateCw className={styles.actionIcon} strokeWidth={2.5} />
                </button>
                <button className={`${styles.actionButton} ${styles.homeButton}`} onClick={() => navigate("/")}>
                    <Home className={styles.actionIcon} strokeWidth={2.5} />
                </button>
            </div>
            <div className={styles.board}>
                {!isPlaying && (
                    <div className={styles.countdownOverlay}>
                        {countdown}
                    </div>
                )}
                {fadingTargets.map((targ) =>
                    <FadingTarget key={`${targ.left}-${targ.top}`} target={targ} onFadeEnd={(e) => handleFadeEnd(targ, e)}/>
                )}
                {visibleTargets.map((targ, idx) => (
                    <div
                        key={`${targ.left}-${targ.top}`}
                        className={`${styles.target} ${styles[`step${idx}`]}`}
                        style={{ left: targ.left + '%', top: targ.top + '%' }}
                        onMouseDown={() => clickTarget(idx)}
                        // onTransitionEnd={exiting && idx === 0 ? (e) => handleFadeEnd(targ, e) : undefined}
                    />
                ))}
                <svg
                    className={styles.targetConnectors}
                    width="100%"
                    height="100%"
                >
                    {visibleTargets.map((targ, idx) => {
                        const next = visibleTargets[idx + 1]
                        if (!next) return null
                        return (
                            <line
                                key={`${targ.left}-${targ.top}-${next.left}-${next.top}`}
                                // className={`${styles.connector} ${exiting && idx === 0 ? styles.connectorExit : ''}`}
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