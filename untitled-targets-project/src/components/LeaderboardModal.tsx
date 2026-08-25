import { createPortal } from "react-dom"
import { X, RotateCw } from "lucide-react"
import type { Course, Score } from "../types"
import styles from './LeaderboardModal.module.css'

type LeaderboardModalProps = {
    course: Course,
    onClose: () => void,
    onRestart: () => void
}

export default function LeaderboardModal({course, onRestart, onClose}: LeaderboardModalProps) {
    const node = document.getElementById("modal")
    if (!node) return null

    const {courseId, title} = course

    const scores = JSON.parse(localStorage.getItem("course-" + courseId) || "[]") as Score[]

    return createPortal(
        <div className={styles.modalOverlay}>
            <div className={styles.innerModalContainer}>
                <h2 className={styles.modalTitle}>{title}</h2>

                <ul className={styles.leaderboardList}>
                    {
                        scores?.map(data => {
                        const {date, time} = data
                        return (
                            <li className={styles.leaderboardRow}>
                                <span>{date}</span>
                                <span className={styles.rowTime}>{time}</span>
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
