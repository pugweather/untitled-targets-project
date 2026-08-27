export type Target = {
    left: number,
    top: number
}

export type HomeTarget = {
    id: number,
    left: number,
    top: number
    vx: number,
    vy: number,
    color: string,
    state: string
}

export type Fragment = {
    id: number,
    left: number,
    top: number,
    color: string
}

export type Course = {
    courseId: number,
    title: string,
    targets: Target[]
}

export type Score = {
    date: string,
    time: string,
    rawTime: number
}