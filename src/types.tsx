import type { TransitionEvent } from "react"

export type Target = {
    left: number,
    top: number,
    spawnTime?: number,
    despawnTime?: number
}

export type FadingTargetProps = {
    target: Target,
    onFadeEnd: (e: TransitionEvent<HTMLDivElement>) => void
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
    difficulty: number,
    image: string,
    targets: Target[]
}

export type Score = {
    date: string,
    time: string,
    rawTime: number
}