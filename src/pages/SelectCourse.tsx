import { Star, ArrowLeft, Trophy } from "lucide-react"
import { COURSES } from "../data/courses"
import { useNavigate, useSearchParams } from "react-router"
import styles from "./SelectCourse.module.css"

function difficultyColor(d: number) {
    if (d <= 2) return '#22c55e'
    if (d === 3) return '#facc15'
    return '#ef4444'
}

export default function SelectCourse() {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const mode = searchParams.get("mode")?.toLowerCase() || "blitz" // Fallback to blitz?

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <div className={styles.topBar}>
                    <button className={styles.navButton} onClick={() => navigate(-1)}>
                        <ArrowLeft size={28} />
                    </button>
                </div>

                <div className={styles.header}>
                    <h1 className={styles.title}>CHOOSE YOUR MAP</h1>
                    {/* <p className={styles.subtitle}>Pick a mode, then pick a course</p> */}
                </div>

                {/* <div className={styles.modePanel}>
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
                </div> */}

                <div className={styles.list}>
                    {COURSES.map(course => {

                        const key = "course-" + course.courseId + "-mode-" + mode
                        const score = JSON.parse(localStorage.getItem(key) || '[]')
                        const color = difficultyColor(course.difficulty)

                        return (
                            <>
                                <div key={course.courseId} className={styles.card}>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className={styles.previewImg}
                                    />
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
                                    </div>
                                    <div>
                                        HiScore: 0 loulousadge{`:(`}
                                    </div>
                                    <div className={styles.playAction}>
                                        <button className={styles.leaderboardButton} aria-label="Leaderboard">
                                            <Trophy size={20} />
                                        </button>
                                        <button className={styles.playButton} onClick={() => navigate(`/game/${mode}/${course.courseId}`)}>
                                            PLAY
                                        </button>
                                    </div>
                                </div>
                                {/* <LeaderboardModal recentScore={recentScore} course={course} mode={mode} onRestart={playGame} onClose={() => setShowLeaderboard(false)}/> */}
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
