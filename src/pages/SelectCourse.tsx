import { Star, ArrowLeft } from "lucide-react"
import { COURSES } from "../data/courses"
import styles from "./SelectCourse.module.css"

export default function SelectCourse() {

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>CHOOSE YOUR MAP</h1>
                    <p className={styles.subtitle}>Pick a mode, then pick a course</p>
                </div>

                <div className={styles.modePanel}>
                    <h2 className={styles.modeHeading}>GAME MODE</h2>
                    <div className={styles.modeBar}>
                        <button className={`${styles.modeButton} ${styles.active}`}>
                            Classic
                        </button>
                        <button className={styles.modeButton}>
                            Blitz
                        </button>
                        <button className={styles.modeButton}>
                            Rhythm
                        </button>
                    </div>
                </div>

                <div className={styles.list}>
                    {COURSES.map(course => (
                        <div key={course.courseId} className={styles.card}>
                            <img
                                src={course.image}
                                alt={course.title}
                                className={styles.previewImg}
                            />
                            <div className={styles.cardInfo}>
                                <h2 className={styles.cardTitle}>{course.title}</h2>
                                <div className={styles.starRow} style={{ color: '#22c55e' }}>
                                    <Star size={18} fill="#22c55e" color="#22c55e" />
                                    <Star size={18} fill="#22c55e" color="#22c55e" />
                                    <Star size={18} fill="#22c55e" color="#22c55e" />
                                    <Star size={18} fill="transparent" color="rgba(255,255,255,0.18)" />
                                    <Star size={18} fill="transparent" color="rgba(255,255,255,0.18)" />
                                </div>
                            </div>
                            <div className={styles.playAction}>
                                <button className={styles.playButton}>
                                    PLAY CLASSIC
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.bottomBar}>
                    <button className={styles.navButton}>
                        <ArrowLeft size={28} />
                    </button>
                </div>
            </div>
        </div>
    )
}
