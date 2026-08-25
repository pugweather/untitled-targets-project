import { createPortal } from "react-dom"
import { X, RotateCw } from "lucide-react"
import type { Course, Score } from "../types"
import styles from './LeaderboardModal.module.css'

type LeaderboardModalProps = {
    course: Course,
    recentScore: string,
    onClose: () => void,
    onRestart: () => void
}

export default function LeaderboardModal({course, recentScore, onRestart, onClose}: LeaderboardModalProps) {
    const node = document.getElementById("modal")
    if (!node) return null

    const NUM_SCORES_TO_DISPLAY = 5

    const {courseId, title} = course
    const scores = JSON.parse(localStorage.getItem("course-" + courseId) || "[]")

    return createPortal(
        <div className={styles.modalOverlay}>
            <div className={styles.innerModalContainer}>
                <h2 className={styles.modalTitle}>{title}</h2>
                <div className={styles.recentScore}>
                    <span className={styles.recentScoreLabel}>YOUR SCORE</span>
                    <span className={styles.recentScoreValue}>{recentScore}</span>
                </div>
                <ul className={styles.leaderboardList}>
                    {
                        scores?.slice(0, NUM_SCORES_TO_DISPLAY).map((data, idx) => {
                        const {date, time} = data
                        return (
                            <li className={styles.leaderboardRow}>
                                <span style={{width: "10%"}}>{idx + 1}.</span>
                                <span style={{width: "40%"}}>{date}</span>
                                <span style={{width: "40%"}} className={styles.rowTime}>{time}</span>
                            </li>
                        )
                        })
                    }
                </ul>

                <div className={styles.buttonsRow}>
                    <button className={styles.actionButton} onClick={onClose}>
                        <X className={styles.actionIcon} strokeWidth={2.5} />
                    </button>
                    <button className={styles.actionButton} onClick={onRestart}>
                        <RotateCw className={styles.actionIcon} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </div>
    , node)
}
