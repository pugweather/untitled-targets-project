import { useState } from "react"
import { useNavigate } from "react-router"
import { Star, ArrowLeft } from "lucide-react"
import { COURSES } from "../data/courses"
import type { Course } from "../types"
import styles from "./SelectCourse.module.css"

function CoursePreview({ course }: { course: Course }) {
    return (
        <img
            src={course.image}
            alt={course.title}
            className={styles.previewImg}
        />
    )
}

function difficultyColor(d: number) {
    if (d <= 2) return '#22c55e'
    if (d === 3) return '#facc15'
    return '#ef4444'
}

export default function SelectCourse() {
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const navigate = useNavigate()

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>CHOOSE YOUR MAP</h1>
                </div>
                <div className={styles.grid}>
                    {COURSES.map(course => {
                        const color = difficultyColor(course.difficulty)
                        const isSelected = selectedId === course.courseId
                        return (
                            <div
                                key={course.courseId}
                                className={`${styles.card} ${isSelected ? styles.selected : ''}`}
                                onClick={() => setSelectedId(course.courseId)}
                            >
                                <CoursePreview course={course} />
                                <div className={styles.cardInfo}>
                                    <h2 className={styles.cardTitle}>{course.title}</h2>
                                    <div className={styles.starRow} style={{ color }}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                size={20}
                                                fill={i < course.difficulty ? color : 'transparent'}
                                                color={i < course.difficulty ? color : 'rgba(255,255,255,0.18)'}
                                            />
                                        ))}
                                    </div>
                                    <div className={styles.playButtons}>
                                        <button
                                            className={styles.playButton}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                navigate(`/game/v1/${course.courseId}`)
                                            }}
                                        >
                                            Play v1
                                        </button>
                                        <button 
                                            className={styles.playButton} 
                                            disabled
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                // navigate(`/game/v2/${course.courseId}`)
                                            }}
                                        >
                                            Play v2
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.bottomBar}>
                    <button className={styles.navButton} onClick={() => navigate(-1)}>
                        <ArrowLeft size={28} />
                    </button>
                </div>
            </div>
        </div>
    )
}
