export type Target = {
    left: number,
    top: number
}

export type Course = {
    courseId: number,
    title: string,
    targets: Target[]
}

export type Score = {
    date: string,
    time: string
}