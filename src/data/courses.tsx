import type { Course } from "../types";

export const COURSES: Course[] = [
    {
        courseId: 1,
        title: "First Verse",
        difficulty: 1,
        image: "/courses/riff-cascade.png",
        supportsV3: false,
        targets: [
            // clump 1
            { left: 9, top: 15, spawnTime: 0.0, despawnTime: 2.5 },
            { left: 30, top: 12, spawnTime: 0.5, despawnTime: 3.0 },
            { left: 32, top: 32, spawnTime: 1.0, despawnTime: 3.5 },
            { left: 12, top: 30, spawnTime: 1.5, despawnTime: 4.0 },
            { left: 20, top: 22, spawnTime: 2.0, despawnTime: 4.5 },
            // clump 2
            { left: 39, top: 15, spawnTime: 2.5, despawnTime: 5.0 },
            { left: 60, top: 12, spawnTime: 3.0, despawnTime: 5.5 },
            { left: 62, top: 32, spawnTime: 3.5, despawnTime: 6.0 },
            { left: 42, top: 30, spawnTime: 4.0, despawnTime: 6.5 },
            { left: 50, top: 22, spawnTime: 4.5, despawnTime: 7.0 },
            // clump 3
            { left: 69, top: 15, spawnTime: 5.0, despawnTime: 7.5 },
            { left: 90, top: 12, spawnTime: 5.5, despawnTime: 8.0 },
            { left: 92, top: 32, spawnTime: 6.0, despawnTime: 8.5 },
            { left: 72, top: 30, spawnTime: 6.5, despawnTime: 9.0 },
            { left: 80, top: 22, spawnTime: 7.0, despawnTime: 9.5 },
            // clump 4
            { left: 69, top: 71, spawnTime: 7.5, despawnTime: 10.0 },
            { left: 90, top: 68, spawnTime: 8.0, despawnTime: 10.5 },
            { left: 92, top: 88, spawnTime: 8.5, despawnTime: 11.0 },
            { left: 72, top: 86, spawnTime: 9.0, despawnTime: 11.5 },
            { left: 80, top: 78, spawnTime: 9.5, despawnTime: 12.0 },
            // clump 5
            { left: 39, top: 71, spawnTime: 10.0, despawnTime: 12.5 },
            { left: 60, top: 68, spawnTime: 10.5, despawnTime: 13.0 },
            { left: 62, top: 88, spawnTime: 11.0, despawnTime: 13.5 },
            { left: 42, top: 86, spawnTime: 11.5, despawnTime: 14.0 },
            { left: 50, top: 78, spawnTime: 12.0, despawnTime: 14.5 },
            // clump 6
            { left: 9, top: 71, spawnTime: 12.5, despawnTime: 15.0 },
            { left: 30, top: 68, spawnTime: 13.0, despawnTime: 15.5 },
            { left: 32, top: 88, spawnTime: 13.5, despawnTime: 16.0 },
            { left: 12, top: 86, spawnTime: 14.0, despawnTime: 16.5 },
            { left: 20, top: 78, spawnTime: 14.5, despawnTime: 17.0 },
        ],
    },
    {
        courseId: 2,
        title: "Hill Runner",
        difficulty: 3,
        image: "/courses/hill-runner.png",
        supportsV3: false,
        targets: [
            // double: horizontal flick right
            { left: 20, top: 50, spawnTime: 0.0, despawnTime: 1.1 },
            { left: 38, top: 50, spawnTime: 0.2, despawnTime: 1.3 },
            // triple: center stack, mid then below then above
            { left: 60, top: 45, spawnTime: 1.15, despawnTime: 2.25 },
            { left: 60, top: 62, spawnTime: 1.35, despawnTime: 2.45 },
            { left: 60, top: 28, spawnTime: 1.55, despawnTime: 2.65 },
            // quad: bottom zigzag left-to-right
            { left: 15, top: 75, spawnTime: 2.5, despawnTime: 3.6 },
            { left: 28, top: 60, spawnTime: 2.7, despawnTime: 3.8 },
            { left: 41, top: 75, spawnTime: 2.9, despawnTime: 4.0 },
            { left: 54, top: 60, spawnTime: 3.1, despawnTime: 4.2 },
            // single: top-right poke
            { left: 85, top: 30, spawnTime: 4.05, despawnTime: 5.15 },
            // double: diagonal down-left flick
            { left: 80, top: 20, spawnTime: 4.9, despawnTime: 6.0 },
            { left: 62, top: 38, spawnTime: 5.1, despawnTime: 6.2 },
            // triple: top arc right-to-left
            { left: 85, top: 15, spawnTime: 6.0, despawnTime: 7.1 },
            { left: 65, top: 22, spawnTime: 6.2, despawnTime: 7.3 },
            { left: 45, top: 15, spawnTime: 6.4, despawnTime: 7.5 },
            // quad: vertical zigzag down the right side
            { left: 75, top: 15, spawnTime: 7.3, despawnTime: 8.4 },
            { left: 88, top: 28, spawnTime: 7.5, despawnTime: 8.6 },
            { left: 75, top: 41, spawnTime: 7.7, despawnTime: 8.8 },
            { left: 88, top: 54, spawnTime: 7.9, despawnTime: 9.0 },
            // double: diagonal up-right flick
            { left: 30, top: 80, spawnTime: 8.8, despawnTime: 9.9 },
            { left: 48, top: 68, spawnTime: 9.0, despawnTime: 10.1 },
            // triple: center column, top then mid then bottom
            { left: 50, top: 30, spawnTime: 9.9, despawnTime: 11.0 },
            { left: 50, top: 55, spawnTime: 10.1, despawnTime: 11.2 },
            { left: 50, top: 78, spawnTime: 10.3, despawnTime: 11.4 },
            // quad: long diagonal climb left-to-right
            { left: 15, top: 80, spawnTime: 11.2, despawnTime: 12.3 },
            { left: 32, top: 65, spawnTime: 11.4, despawnTime: 12.5 },
            { left: 49, top: 50, spawnTime: 11.6, despawnTime: 12.7 },
            { left: 66, top: 35, spawnTime: 11.8, despawnTime: 12.9 },
            // double: horizontal flick left
            { left: 80, top: 60, spawnTime: 12.7, despawnTime: 13.8 },
            { left: 62, top: 60, spawnTime: 12.9, despawnTime: 14.0 },
            // triple: bottom zigzag
            { left: 20, top: 70, spawnTime: 13.8, despawnTime: 14.9 },
            { left: 35, top: 82, spawnTime: 14.0, despawnTime: 15.1 },
            { left: 50, top: 70, spawnTime: 14.2, despawnTime: 15.3 },
            // quad finale: wide zigzag sweep
            { left: 15, top: 30, spawnTime: 15.1, despawnTime: 16.2 },
            { left: 35, top: 55, spawnTime: 15.3, despawnTime: 16.4 },
            { left: 55, top: 30, spawnTime: 15.5, despawnTime: 16.6 },
            { left: 75, top: 55, spawnTime: 15.7, despawnTime: 16.8 },
        ],
    },
    {
        courseId: 3,
        title: "Riff Cascade",
        difficulty: 5,
        image: "/courses/zigzag.png",
        supportsV3: true,
        targets: [
            // verse 1: wide horizontal zigzag, big vertical swings
            { left: 10, top: 25, spawnTime: 0.2, hitTime: 0.8, despawnTime: 1.05, position: 1 },
            { left: 18, top: 75, spawnTime: 0.65, hitTime: 1.25, despawnTime: 1.5, position: 2 },
            { left: 26, top: 25, spawnTime: 1.15, hitTime: 1.75, despawnTime: 2, position: 3 },
            { left: 34, top: 75, spawnTime: 1.6, hitTime: 2.2, despawnTime: 2.45, position: 4 },
            { left: 42, top: 25, spawnTime: 2.1, hitTime: 2.7, despawnTime: 2.95, position: 5 },
            { left: 50, top: 75, spawnTime: 2.55, hitTime: 3.15, despawnTime: 3.4, position: 6 },
            // verse 2: vertical zigzag dropping down the right side
            { left: 70, top: 10, spawnTime: 3.25, hitTime: 3.85, despawnTime: 4.1, position: 1 },
            { left: 90, top: 24, spawnTime: 3.7, hitTime: 4.3, despawnTime: 4.55, position: 2 },
            { left: 70, top: 38, spawnTime: 4.2, hitTime: 4.8, despawnTime: 5.05, position: 3 },
            { left: 90, top: 52, spawnTime: 4.65, hitTime: 5.25, despawnTime: 5.5, position: 4 },
            { left: 70, top: 66, spawnTime: 5.15, hitTime: 5.75, despawnTime: 6, position: 5 },
            { left: 90, top: 80, spawnTime: 5.6, hitTime: 6.2, despawnTime: 6.45, position: 6 },
            // verse 3: diagonal zigzag, left-right while descending
            { left: 16, top: 10, spawnTime: 6.3, hitTime: 6.9, despawnTime: 7.15, position: 1 },
            { left: 44, top: 23, spawnTime: 6.75, hitTime: 7.35, despawnTime: 7.6, position: 2 },
            { left: 16, top: 36, spawnTime: 7.25, hitTime: 7.85, despawnTime: 8.1, position: 3 },
            { left: 44, top: 49, spawnTime: 7.7, hitTime: 8.3, despawnTime: 8.55, position: 4 },
            { left: 16, top: 62, spawnTime: 8.2, hitTime: 8.8, despawnTime: 9.05, position: 5 },
            { left: 44, top: 75, spawnTime: 8.65, hitTime: 9.25, despawnTime: 9.5, position: 6 },
            // verse 4: bottom zigzag right-to-left, tighter amplitude
            { left: 82, top: 82, spawnTime: 9.35, hitTime: 9.95, despawnTime: 10.2, position: 1 },
            { left: 72, top: 62, spawnTime: 9.8, hitTime: 10.4, despawnTime: 10.65, position: 2 },
            { left: 62, top: 82, spawnTime: 10.3, hitTime: 10.9, despawnTime: 11.15, position: 3 },
            { left: 52, top: 62, spawnTime: 10.75, hitTime: 11.35, despawnTime: 11.6, position: 4 },
            { left: 42, top: 82, spawnTime: 11.25, hitTime: 11.85, despawnTime: 12.1, position: 5 },
            { left: 32, top: 62, spawnTime: 11.7, hitTime: 12.3, despawnTime: 12.55, position: 6 },
            // chorus: 8-point ring around center, fastest interval
            { left: 50, top: 32, spawnTime: 12.6, hitTime: 13.2, despawnTime: 13.45, position: 1 },
            { left: 68, top: 44, spawnTime: 13, hitTime: 13.6, despawnTime: 13.85, position: 2 },
            { left: 78, top: 62, spawnTime: 13.4, hitTime: 14, despawnTime: 14.25, position: 3 },
            { left: 68, top: 80, spawnTime: 13.8, hitTime: 14.4, despawnTime: 14.65, position: 4 },
            { left: 50, top: 92, spawnTime: 14.35, hitTime: 14.95, despawnTime: 15.2, position: 5 },
            { left: 32, top: 80, spawnTime: 14.75, hitTime: 15.35, despawnTime: 15.6, position: 6 },
            { left: 22, top: 62, spawnTime: 15.15, hitTime: 15.75, despawnTime: 16, position: 7 },
            { left: 32, top: 44, spawnTime: 15.55, hitTime: 16.15, despawnTime: 16.4, position: 8 },
            // finale: full-width zigzag sweep
            { left: 8, top: 28, spawnTime: 16.45, hitTime: 17.05, despawnTime: 17.3, position: 1 },
            { left: 20, top: 72, spawnTime: 16.9, hitTime: 17.5, despawnTime: 17.75, position: 2 },
            { left: 32, top: 28, spawnTime: 17.3, hitTime: 17.9, despawnTime: 18.15, position: 3 },
            { left: 44, top: 72, spawnTime: 17.75, hitTime: 18.35, despawnTime: 18.6, position: 4 },
            { left: 56, top: 28, spawnTime: 18.15, hitTime: 18.75, despawnTime: 19, position: 5 },
            { left: 68, top: 72, spawnTime: 18.6, hitTime: 19.2, despawnTime: 19.45, position: 6 },
            { left: 80, top: 28, spawnTime: 19, hitTime: 19.6, despawnTime: 19.85, position: 7 },
            { left: 92, top: 72, spawnTime: 19.45, hitTime: 20.05, despawnTime: 20.3, position: 8 },
        ],
    },
];