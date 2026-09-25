import type { Course } from "../types";

export const COURSES: Course[] = [
    {
        courseId: 1,
        title: "First Verse",
        difficulty: 1,
        image: "/courses/riff-cascade.png",
        targets: [
            // clump 1
            { left: 9, top: 15, position: 1, spawnTime: 0.0, hitTime: 1.0, despawnTime: 2.5 },
            { left: 30, top: 12, position: 2, spawnTime: 0.8, hitTime: 1.8, despawnTime: 3.3 },
            { left: 32, top: 32, position: 3, spawnTime: 1.6, hitTime: 2.6, despawnTime: 4.1 },
            { left: 12, top: 30, position: 4, spawnTime: 2.4, hitTime: 3.4, despawnTime: 4.9 },
            { left: 20, top: 22, position: 5, spawnTime: 3.2, hitTime: 4.2, despawnTime: 5.7 },
            // clump 2
            { left: 39, top: 15, position: 1, spawnTime: 4.0, hitTime: 5.0, despawnTime: 6.5 },
            { left: 60, top: 12, position: 2, spawnTime: 4.8, hitTime: 5.8, despawnTime: 7.3 },
            { left: 62, top: 32, position: 3, spawnTime: 5.6, hitTime: 6.6, despawnTime: 8.1 },
            { left: 42, top: 30, position: 4, spawnTime: 6.4, hitTime: 7.4, despawnTime: 8.9 },
            { left: 50, top: 22, position: 5, spawnTime: 7.2, hitTime: 8.2, despawnTime: 9.7 },
            // clump 3
            { left: 69, top: 15, position: 1, spawnTime: 8.0, hitTime: 9.0, despawnTime: 10.5 },
            { left: 90, top: 12, position: 2, spawnTime: 8.8, hitTime: 9.8, despawnTime: 11.3 },
            { left: 92, top: 32, position: 3, spawnTime: 9.6, hitTime: 10.6, despawnTime: 12.1 },
            { left: 72, top: 30, position: 4, spawnTime: 10.4, hitTime: 11.4, despawnTime: 12.9 },
            { left: 80, top: 22, position: 5, spawnTime: 11.2, hitTime: 12.2, despawnTime: 13.7 },
            // clump 4
            { left: 69, top: 71, position: 1, spawnTime: 12.0, hitTime: 13.0, despawnTime: 14.5 },
            { left: 90, top: 68, position: 2, spawnTime: 12.8, hitTime: 13.8, despawnTime: 15.3 },
            { left: 92, top: 88, position: 3, spawnTime: 13.6, hitTime: 14.6, despawnTime: 16.1 },
            { left: 72, top: 86, position: 4, spawnTime: 14.4, hitTime: 15.4, despawnTime: 16.9 },
            { left: 80, top: 78, position: 5, spawnTime: 15.2, hitTime: 16.2, despawnTime: 17.7 },
            // clump 5
            { left: 39, top: 71, position: 1, spawnTime: 16.0, hitTime: 17.0, despawnTime: 18.5 },
            { left: 60, top: 68, position: 2, spawnTime: 16.8, hitTime: 17.8, despawnTime: 19.3 },
            { left: 62, top: 88, position: 3, spawnTime: 17.6, hitTime: 18.6, despawnTime: 20.1 },
            { left: 42, top: 86, position: 4, spawnTime: 18.4, hitTime: 19.4, despawnTime: 20.9 },
            { left: 50, top: 78, position: 5, spawnTime: 19.2, hitTime: 20.2, despawnTime: 21.7 },
            // clump 6
            { left: 9, top: 71, position: 1, spawnTime: 20.0, hitTime: 21.0, despawnTime: 22.5 },
            { left: 30, top: 68, position: 2, spawnTime: 20.8, hitTime: 21.8, despawnTime: 23.3 },
            { left: 32, top: 88, position: 3, spawnTime: 21.6, hitTime: 22.6, despawnTime: 24.1 },
            { left: 12, top: 86, position: 4, spawnTime: 22.4, hitTime: 23.4, despawnTime: 24.9 },
            { left: 20, top: 78, position: 5, spawnTime: 23.2, hitTime: 24.2, despawnTime: 25.7 },
        ],
    },
    {
        courseId: 2,
        title: "Hill Runner",
        difficulty: 3,
        image: "/courses/hill-runner.png",
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
    {
        courseId: 3,
        title: "Riff Cascade",
        difficulty: 8,
        image: "/courses/zigzag.png",
        targets: [
            { left: 15, top: 18, spawnTime: 0.00, hitTime: 0.85, despawnTime: 1.20, position: 1 },
            { left: 22, top: 12, spawnTime: 0.22, hitTime: 1.07, despawnTime: 1.42, position: 2 },
            { left: 29, top: 22, spawnTime: 0.44, hitTime: 1.29, despawnTime: 1.64, position: 3 },
            { left: 36, top: 16, spawnTime: 0.66, hitTime: 1.51, despawnTime: 1.86, position: 4 },
            { left: 43, top: 26, spawnTime: 0.88, hitTime: 1.73, despawnTime: 2.08, position: 5 },
            { left: 50, top: 20, spawnTime: 1.10, hitTime: 1.95, despawnTime: 2.30, position: 6 },
            { left: 85, top: 18, spawnTime: 1.70, hitTime: 2.55, despawnTime: 2.90, position: 1 },
            { left: 78, top: 12, spawnTime: 1.92, hitTime: 2.77, despawnTime: 3.12, position: 2 },
            { left: 71, top: 22, spawnTime: 2.14, hitTime: 2.99, despawnTime: 3.34, position: 3 },
            { left: 64, top: 16, spawnTime: 2.36, hitTime: 3.21, despawnTime: 3.56, position: 4 },
            { left: 57, top: 26, spawnTime: 2.58, hitTime: 3.43, despawnTime: 3.78, position: 5 },
            { left: 50, top: 20, spawnTime: 2.80, hitTime: 3.65, despawnTime: 4.00, position: 6 },
            { left: 50, top: 20, spawnTime: 3.40, hitTime: 4.25, despawnTime: 4.60, position: 1 },
            { left: 55, top: 32, spawnTime: 3.62, hitTime: 4.47, despawnTime: 4.82, position: 2 },
            { left: 45, top: 44, spawnTime: 3.84, hitTime: 4.69, despawnTime: 5.04, position: 3 },
            { left: 50, top: 56, spawnTime: 4.06, hitTime: 4.91, despawnTime: 5.26, position: 4 },
            { left: 40, top: 68, spawnTime: 4.28, hitTime: 5.13, despawnTime: 5.48, position: 5 },
            { left: 50, top: 80, spawnTime: 4.50, hitTime: 5.35, despawnTime: 5.70, position: 6 },
            { left: 10, top: 82, spawnTime: 6.70, hitTime: 7.55, despawnTime: 7.90, position: 1 },
            { left: 22, top: 76, spawnTime: 6.92, hitTime: 7.77, despawnTime: 8.12, position: 2 },
            { left: 34, top: 82, spawnTime: 7.14, hitTime: 7.99, despawnTime: 8.34, position: 3 },
            { left: 46, top: 76, spawnTime: 7.36, hitTime: 8.21, despawnTime: 8.56, position: 4 },
            { left: 58, top: 82, spawnTime: 7.58, hitTime: 8.43, despawnTime: 8.78, position: 5 },
            { left: 70, top: 76, spawnTime: 7.80, hitTime: 8.65, despawnTime: 9.00, position: 6 },
            { left: 78, top: 70, spawnTime: 8.40, hitTime: 9.25, despawnTime: 9.60, position: 1 },
            { left: 70, top: 58, spawnTime: 8.62, hitTime: 9.47, despawnTime: 9.82, position: 2 },
            { left: 62, top: 46, spawnTime: 8.84, hitTime: 9.69, despawnTime: 10.04, position: 3 },
            { left: 54, top: 34, spawnTime: 9.06, hitTime: 9.91, despawnTime: 10.26, position: 4 },
            { left: 46, top: 22, spawnTime: 9.28, hitTime: 10.13, despawnTime: 10.48, position: 5 },
            { left: 38, top: 10, spawnTime: 9.50, hitTime: 10.35, despawnTime: 10.70, position: 6 },
            { left: 90, top: 15, spawnTime: 10.10, hitTime: 10.95, despawnTime: 11.30, position: 1 },
            { left: 82, top: 24, spawnTime: 10.32, hitTime: 11.17, despawnTime: 11.52, position: 2 },
            { left: 74, top: 15, spawnTime: 10.54, hitTime: 11.39, despawnTime: 11.74, position: 3 },
            { left: 66, top: 24, spawnTime: 10.76, hitTime: 11.61, despawnTime: 11.96, position: 4 },
            { left: 58, top: 15, spawnTime: 10.98, hitTime: 11.83, despawnTime: 12.18, position: 5 },
            { left: 50, top: 24, spawnTime: 11.20, hitTime: 12.05, despawnTime: 12.40, position: 6 },
            { left: 12, top: 12, spawnTime: 13.40, hitTime: 14.25, despawnTime: 14.60, position: 1 },
            { left: 20, top: 26, spawnTime: 13.62, hitTime: 14.47, despawnTime: 14.82, position: 2 },
            { left: 12, top: 40, spawnTime: 13.84, hitTime: 14.69, despawnTime: 15.04, position: 3 },
            { left: 20, top: 54, spawnTime: 14.06, hitTime: 14.91, despawnTime: 15.26, position: 4 },
            { left: 12, top: 68, spawnTime: 14.28, hitTime: 15.13, despawnTime: 15.48, position: 5 },
            { left: 20, top: 82, spawnTime: 14.50, hitTime: 15.35, despawnTime: 15.70, position: 6 },
            { left: 30, top: 50, spawnTime: 15.10, hitTime: 15.95, despawnTime: 16.30, position: 1 },
            { left: 42, top: 40, spawnTime: 15.32, hitTime: 16.17, despawnTime: 16.52, position: 2 },
            { left: 54, top: 50, spawnTime: 15.54, hitTime: 16.39, despawnTime: 16.74, position: 3 },
            { left: 66, top: 40, spawnTime: 15.76, hitTime: 16.61, despawnTime: 16.96, position: 4 },
            { left: 78, top: 50, spawnTime: 15.98, hitTime: 16.83, despawnTime: 17.18, position: 5 },
            { left: 90, top: 40, spawnTime: 16.20, hitTime: 17.05, despawnTime: 17.40, position: 6 },
            { left: 88, top: 82, spawnTime: 16.80, hitTime: 17.65, despawnTime: 18.00, position: 1 },
            { left: 78, top: 76, spawnTime: 17.02, hitTime: 17.87, despawnTime: 18.22, position: 2 },
            { left: 68, top: 82, spawnTime: 17.24, hitTime: 18.09, despawnTime: 18.44, position: 3 },
            { left: 58, top: 76, spawnTime: 17.46, hitTime: 18.31, despawnTime: 18.66, position: 4 },
            { left: 48, top: 82, spawnTime: 17.68, hitTime: 18.53, despawnTime: 18.88, position: 5 },
            { left: 38, top: 76, spawnTime: 17.90, hitTime: 18.75, despawnTime: 19.10, position: 6 },
            { left: 20, top: 20, spawnTime: 20.10, hitTime: 20.95, despawnTime: 21.30, position: 1 },
            { left: 30, top: 30, spawnTime: 20.32, hitTime: 21.17, despawnTime: 21.52, position: 2 },
            { left: 40, top: 40, spawnTime: 20.54, hitTime: 21.39, despawnTime: 21.74, position: 3 },
            { left: 60, top: 60, spawnTime: 20.76, hitTime: 21.61, despawnTime: 21.96, position: 4 },
            { left: 70, top: 70, spawnTime: 20.98, hitTime: 21.83, despawnTime: 22.18, position: 5 },
            { left: 80, top: 80, spawnTime: 21.20, hitTime: 22.05, despawnTime: 22.40, position: 6 },
            { left: 10, top: 25, spawnTime: 21.80, hitTime: 22.65, despawnTime: 23.00, position: 1 },
            { left: 24, top: 18, spawnTime: 22.02, hitTime: 22.87, despawnTime: 23.22, position: 2 },
            { left: 38, top: 25, spawnTime: 22.24, hitTime: 23.09, despawnTime: 23.44, position: 3 },
            { left: 52, top: 18, spawnTime: 22.46, hitTime: 23.31, despawnTime: 23.66, position: 4 },
            { left: 66, top: 25, spawnTime: 22.68, hitTime: 23.53, despawnTime: 23.88, position: 5 },
            { left: 80, top: 18, spawnTime: 22.90, hitTime: 23.75, despawnTime: 24.10, position: 6 },
            { left: 10, top: 80, spawnTime: 23.50, hitTime: 24.35, despawnTime: 24.70, position: 1 },
            { left: 25, top: 65, spawnTime: 23.72, hitTime: 24.57, despawnTime: 24.92, position: 2 },
            { left: 40, top: 80, spawnTime: 23.94, hitTime: 24.79, despawnTime: 25.14, position: 3 },
            { left: 55, top: 65, spawnTime: 24.16, hitTime: 25.01, despawnTime: 25.36, position: 4 },
            { left: 70, top: 80, spawnTime: 24.38, hitTime: 25.23, despawnTime: 25.58, position: 5 },
            { left: 85, top: 65, spawnTime: 24.60, hitTime: 25.45, despawnTime: 25.80, position: 6 },
        ],
    },
    // {
    // "courseId": 99,
    // "title": "Test Guitar Track",
    // "difficulty": 3,
    // "image": "/courses/riff-cascade.png",
    // "audio": "/tracks/track-1.mp3",
    // "targets": [
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 0,
    //         "hitTime": 0.114,
    //         "despawnTime": 1.114
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 0,
    //         "hitTime": 0.364,
    //         "despawnTime": 1.364
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 0,
    //         "hitTime": 0.715,
    //         "despawnTime": 1.715
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 0.048,
    //         "hitTime": 1.048,
    //         "despawnTime": 2.048
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 0.398,
    //         "hitTime": 1.398,
    //         "despawnTime": 2.398
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 0.749,
    //         "hitTime": 1.749,
    //         "despawnTime": 2.749
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 1.098,
    //         "hitTime": 2.098,
    //         "despawnTime": 3.098
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 1.398,
    //         "hitTime": 2.398,
    //         "despawnTime": 3.398
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 1.731,
    //         "hitTime": 2.731,
    //         "despawnTime": 3.731
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 2.065,
    //         "hitTime": 3.065,
    //         "despawnTime": 4.065
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 2.099,
    //         "hitTime": 3.099,
    //         "despawnTime": 4.099
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 2.381,
    //         "hitTime": 3.381,
    //         "despawnTime": 4.381
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 2.698,
    //         "hitTime": 3.698,
    //         "despawnTime": 4.698
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 3.031,
    //         "hitTime": 4.031,
    //         "despawnTime": 5.031
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 3.348,
    //         "hitTime": 4.348,
    //         "despawnTime": 5.348
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 3.698,
    //         "hitTime": 4.698,
    //         "despawnTime": 5.698
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 4.032,
    //         "hitTime": 5.032,
    //         "despawnTime": 6.032
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 4.35,
    //         "hitTime": 5.35,
    //         "despawnTime": 6.35
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 4.648,
    //         "hitTime": 5.648,
    //         "despawnTime": 6.648
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 5.015,
    //         "hitTime": 6.015,
    //         "despawnTime": 7.015
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 5.365,
    //         "hitTime": 6.365,
    //         "despawnTime": 7.365
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 5.731,
    //         "hitTime": 6.731,
    //         "despawnTime": 7.731
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 6.082,
    //         "hitTime": 7.082,
    //         "despawnTime": 8.082
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 6.414,
    //         "hitTime": 7.414,
    //         "despawnTime": 8.414
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 6.748,
    //         "hitTime": 7.748,
    //         "despawnTime": 8.748
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 7.064,
    //         "hitTime": 8.064,
    //         "despawnTime": 9.064
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 7.415,
    //         "hitTime": 8.415,
    //         "despawnTime": 9.415
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 7.781,
    //         "hitTime": 8.781,
    //         "despawnTime": 9.781
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 8.115,
    //         "hitTime": 9.115,
    //         "despawnTime": 10.115
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 8.431,
    //         "hitTime": 9.431,
    //         "despawnTime": 10.431
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 8.748,
    //         "hitTime": 9.748,
    //         "despawnTime": 10.748
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 9.098,
    //         "hitTime": 10.098,
    //         "despawnTime": 11.098
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 9.405,
    //         "hitTime": 10.405,
    //         "despawnTime": 11.405
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 9.748,
    //         "hitTime": 10.748,
    //         "despawnTime": 11.748
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 10.048,
    //         "hitTime": 11.048,
    //         "despawnTime": 12.048
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 10.398,
    //         "hitTime": 11.398,
    //         "despawnTime": 12.398
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 10.731,
    //         "hitTime": 11.731,
    //         "despawnTime": 12.731
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 11.048,
    //         "hitTime": 12.048,
    //         "despawnTime": 13.048
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 11.398,
    //         "hitTime": 12.398,
    //         "despawnTime": 13.398
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 11.747,
    //         "hitTime": 12.747,
    //         "despawnTime": 13.747
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 12.081,
    //         "hitTime": 13.081,
    //         "despawnTime": 14.081
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 12.398,
    //         "hitTime": 13.398,
    //         "despawnTime": 14.398
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 12.765,
    //         "hitTime": 13.765,
    //         "despawnTime": 14.765
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 13.098,
    //         "hitTime": 14.098,
    //         "despawnTime": 15.098
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 13.398,
    //         "hitTime": 14.398,
    //         "despawnTime": 15.398
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 13.748,
    //         "hitTime": 14.748,
    //         "despawnTime": 15.748
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 14.064,
    //         "hitTime": 15.064,
    //         "despawnTime": 16.064
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 14.397,
    //         "hitTime": 15.397,
    //         "despawnTime": 16.397
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 14.83,
    //         "hitTime": 15.83,
    //         "despawnTime": 16.83
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 15.181,
    //         "hitTime": 16.181,
    //         "despawnTime": 17.181
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 15.531,
    //         "hitTime": 16.531,
    //         "despawnTime": 17.531
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 15.865,
    //         "hitTime": 16.865,
    //         "despawnTime": 17.865
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 16.198,
    //         "hitTime": 17.198,
    //         "despawnTime": 18.198
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 16.515,
    //         "hitTime": 17.515,
    //         "despawnTime": 18.515
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 16.865,
    //         "hitTime": 17.865,
    //         "despawnTime": 18.865
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 17.165,
    //         "hitTime": 18.165,
    //         "despawnTime": 19.165
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 17.531,
    //         "hitTime": 18.531,
    //         "despawnTime": 19.531
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 17.847,
    //         "hitTime": 18.847,
    //         "despawnTime": 19.847
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 18.168,
    //         "hitTime": 19.168,
    //         "despawnTime": 20.168
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 18.515,
    //         "hitTime": 19.515,
    //         "despawnTime": 20.515
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 18.831,
    //         "hitTime": 19.831,
    //         "despawnTime": 20.831
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 19.164,
    //         "hitTime": 20.164,
    //         "despawnTime": 21.164
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 19.514,
    //         "hitTime": 20.514,
    //         "despawnTime": 21.514
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 19.831,
    //         "hitTime": 20.831,
    //         "despawnTime": 21.831
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 20.164,
    //         "hitTime": 21.164,
    //         "despawnTime": 22.164
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 20.498,
    //         "hitTime": 21.498,
    //         "despawnTime": 22.498
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 20.818,
    //         "hitTime": 21.818,
    //         "despawnTime": 22.818
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 21.181,
    //         "hitTime": 22.181,
    //         "despawnTime": 23.181
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 21.548,
    //         "hitTime": 22.548,
    //         "despawnTime": 23.548
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 21.864,
    //         "hitTime": 22.864,
    //         "despawnTime": 23.864
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 22.198,
    //         "hitTime": 23.198,
    //         "despawnTime": 24.198
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 22.498,
    //         "hitTime": 23.498,
    //         "despawnTime": 24.498
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 22.88,
    //         "hitTime": 23.88,
    //         "despawnTime": 24.88
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 23.215,
    //         "hitTime": 24.215,
    //         "despawnTime": 25.215
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 23.564,
    //         "hitTime": 24.564,
    //         "despawnTime": 25.564
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 23.915,
    //         "hitTime": 24.915,
    //         "despawnTime": 25.915
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 24.232,
    //         "hitTime": 25.232,
    //         "despawnTime": 26.232
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 24.548,
    //         "hitTime": 25.548,
    //         "despawnTime": 26.548
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 24.898,
    //         "hitTime": 25.898,
    //         "despawnTime": 26.898
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 25.264,
    //         "hitTime": 26.264,
    //         "despawnTime": 27.264
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 25.601,
    //         "hitTime": 26.601,
    //         "despawnTime": 27.601
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 25.948,
    //         "hitTime": 26.948,
    //         "despawnTime": 27.948
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 26.265,
    //         "hitTime": 27.265,
    //         "despawnTime": 28.265
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 26.581,
    //         "hitTime": 27.581,
    //         "despawnTime": 28.581
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 26.921,
    //         "hitTime": 27.921,
    //         "despawnTime": 28.921
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 27.231,
    //         "hitTime": 28.231,
    //         "despawnTime": 29.231
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 27.565,
    //         "hitTime": 28.565,
    //         "despawnTime": 29.565
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 27.914,
    //         "hitTime": 28.914,
    //         "despawnTime": 29.914
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 28.232,
    //         "hitTime": 29.232,
    //         "despawnTime": 30.232
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 28.581,
    //         "hitTime": 29.581,
    //         "despawnTime": 30.581
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 28.931,
    //         "hitTime": 29.931,
    //         "despawnTime": 30.931
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 29.281,
    //         "hitTime": 30.281,
    //         "despawnTime": 31.281
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 29.59,
    //         "hitTime": 30.59,
    //         "despawnTime": 31.59
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 29.915,
    //         "hitTime": 30.915,
    //         "despawnTime": 31.915
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 30.281,
    //         "hitTime": 31.281,
    //         "despawnTime": 32.281
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 30.598,
    //         "hitTime": 31.598,
    //         "despawnTime": 32.598
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 30.948,
    //         "hitTime": 31.948,
    //         "despawnTime": 32.948
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 31.298,
    //         "hitTime": 32.298,
    //         "despawnTime": 33.298
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 31.614,
    //         "hitTime": 32.614,
    //         "despawnTime": 33.614
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 31.931,
    //         "hitTime": 32.931,
    //         "despawnTime": 33.931
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 32.265,
    //         "hitTime": 33.265,
    //         "despawnTime": 34.265
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 32.614,
    //         "hitTime": 33.614,
    //         "despawnTime": 34.614
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 32.947,
    //         "hitTime": 33.947,
    //         "despawnTime": 34.947
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 33.281,
    //         "hitTime": 34.281,
    //         "despawnTime": 35.281
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 33.647,
    //         "hitTime": 34.647,
    //         "despawnTime": 35.647
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 33.981,
    //         "hitTime": 34.981,
    //         "despawnTime": 35.981
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 34.314,
    //         "hitTime": 35.314,
    //         "despawnTime": 36.314
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 34.636,
    //         "hitTime": 35.636,
    //         "despawnTime": 36.636
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 34.965,
    //         "hitTime": 35.965,
    //         "despawnTime": 36.965
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 35.298,
    //         "hitTime": 36.298,
    //         "despawnTime": 37.298
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 35.648,
    //         "hitTime": 36.648,
    //         "despawnTime": 37.648
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 35.997,
    //         "hitTime": 36.997,
    //         "despawnTime": 37.997
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 36.331,
    //         "hitTime": 37.331,
    //         "despawnTime": 38.331
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 36.664,
    //         "hitTime": 37.664,
    //         "despawnTime": 38.664
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 37.017,
    //         "hitTime": 38.017,
    //         "despawnTime": 39.017
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 37.382,
    //         "hitTime": 38.382,
    //         "despawnTime": 39.382
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 37.698,
    //         "hitTime": 38.698,
    //         "despawnTime": 39.698
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 38.031,
    //         "hitTime": 39.031,
    //         "despawnTime": 40.031
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 38.381,
    //         "hitTime": 39.381,
    //         "despawnTime": 40.381
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 38.698,
    //         "hitTime": 39.698,
    //         "despawnTime": 40.698
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 39.031,
    //         "hitTime": 40.031,
    //         "despawnTime": 41.031
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 39.364,
    //         "hitTime": 40.364,
    //         "despawnTime": 41.364
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 39.714,
    //         "hitTime": 40.714,
    //         "despawnTime": 41.714
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 40.048,
    //         "hitTime": 41.048,
    //         "despawnTime": 42.048
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 40.348,
    //         "hitTime": 41.348,
    //         "despawnTime": 42.348
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 40.681,
    //         "hitTime": 41.681,
    //         "despawnTime": 42.681
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 41.031,
    //         "hitTime": 42.031,
    //         "despawnTime": 43.031
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 41.364,
    //         "hitTime": 42.364,
    //         "despawnTime": 43.364
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 41.714,
    //         "hitTime": 42.714,
    //         "despawnTime": 43.714
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 42.067,
    //         "hitTime": 43.067,
    //         "despawnTime": 44.067
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 42.398,
    //         "hitTime": 43.398,
    //         "despawnTime": 44.398
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 42.731,
    //         "hitTime": 43.731,
    //         "despawnTime": 44.731
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 43.064,
    //         "hitTime": 44.064,
    //         "despawnTime": 45.064
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 43.4,
    //         "hitTime": 44.4,
    //         "despawnTime": 45.4
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 43.731,
    //         "hitTime": 44.731,
    //         "despawnTime": 45.731
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 44.064,
    //         "hitTime": 45.064,
    //         "despawnTime": 46.064
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 44.397,
    //         "hitTime": 45.397,
    //         "despawnTime": 46.397
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 44.747,
    //         "hitTime": 45.747,
    //         "despawnTime": 46.747
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 45.098,
    //         "hitTime": 46.098,
    //         "despawnTime": 47.098
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 45.431,
    //         "hitTime": 46.431,
    //         "despawnTime": 47.431
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 45.785,
    //         "hitTime": 46.785,
    //         "despawnTime": 47.785
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 46.098,
    //         "hitTime": 47.098,
    //         "despawnTime": 48.098
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 46.431,
    //         "hitTime": 47.431,
    //         "despawnTime": 48.431
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 46.78,
    //         "hitTime": 47.78,
    //         "despawnTime": 48.78
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 47.098,
    //         "hitTime": 48.098,
    //         "despawnTime": 49.098
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 47.431,
    //         "hitTime": 48.431,
    //         "despawnTime": 49.431
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 47.781,
    //         "hitTime": 48.781,
    //         "despawnTime": 49.781
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 48.148,
    //         "hitTime": 49.148,
    //         "despawnTime": 50.148
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 48.481,
    //         "hitTime": 49.481,
    //         "despawnTime": 50.481
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 48.831,
    //         "hitTime": 49.831,
    //         "despawnTime": 50.831
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 49.164,
    //         "hitTime": 50.164,
    //         "despawnTime": 51.164
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 49.483,
    //         "hitTime": 50.483,
    //         "despawnTime": 51.483
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 49.832,
    //         "hitTime": 50.832,
    //         "despawnTime": 51.832
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 50.181,
    //         "hitTime": 51.181,
    //         "despawnTime": 52.181
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 50.497,
    //         "hitTime": 51.497,
    //         "despawnTime": 52.497
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 50.814,
    //         "hitTime": 51.814,
    //         "despawnTime": 52.814
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 51.131,
    //         "hitTime": 52.131,
    //         "despawnTime": 53.131
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 51.464,
    //         "hitTime": 52.464,
    //         "despawnTime": 53.464
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 51.815,
    //         "hitTime": 52.815,
    //         "despawnTime": 53.815
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 52.148,
    //         "hitTime": 53.148,
    //         "despawnTime": 54.148
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 52.497,
    //         "hitTime": 53.497,
    //         "despawnTime": 54.497
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 52.847,
    //         "hitTime": 53.847,
    //         "despawnTime": 54.847
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 53.164,
    //         "hitTime": 54.164,
    //         "despawnTime": 55.164
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 53.514,
    //         "hitTime": 54.514,
    //         "despawnTime": 55.514
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 53.881,
    //         "hitTime": 54.881,
    //         "despawnTime": 55.881
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 54.214,
    //         "hitTime": 55.214,
    //         "despawnTime": 56.214
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 54.564,
    //         "hitTime": 55.564,
    //         "despawnTime": 56.564
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 54.897,
    //         "hitTime": 55.897,
    //         "despawnTime": 56.897
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 55.231,
    //         "hitTime": 56.231,
    //         "despawnTime": 57.231
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 55.564,
    //         "hitTime": 56.564,
    //         "despawnTime": 57.564
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 55.902,
    //         "hitTime": 56.902,
    //         "despawnTime": 57.902
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 56.214,
    //         "hitTime": 57.214,
    //         "despawnTime": 58.214
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 56.531,
    //         "hitTime": 57.531,
    //         "despawnTime": 58.531
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 56.882,
    //         "hitTime": 57.882,
    //         "despawnTime": 58.882
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 57.231,
    //         "hitTime": 58.231,
    //         "despawnTime": 59.231
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 57.564,
    //         "hitTime": 58.564,
    //         "despawnTime": 59.564
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 57.915,
    //         "hitTime": 58.915,
    //         "despawnTime": 59.915
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 58.231,
    //         "hitTime": 59.231,
    //         "despawnTime": 60.231
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 58.547,
    //         "hitTime": 59.547,
    //         "despawnTime": 60.547
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 58.881,
    //         "hitTime": 59.881,
    //         "despawnTime": 60.881
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 59.231,
    //         "hitTime": 60.231,
    //         "despawnTime": 61.231
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 59.602,
    //         "hitTime": 60.602,
    //         "despawnTime": 61.602
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 59.931,
    //         "hitTime": 60.931,
    //         "despawnTime": 61.931
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 60.265,
    //         "hitTime": 61.265,
    //         "despawnTime": 62.265
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 60.597,
    //         "hitTime": 61.597,
    //         "despawnTime": 62.597
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 60.948,
    //         "hitTime": 61.948,
    //         "despawnTime": 62.948
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 61.28,
    //         "hitTime": 62.28,
    //         "despawnTime": 63.28
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 61.615,
    //         "hitTime": 62.615,
    //         "despawnTime": 63.615
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 61.948,
    //         "hitTime": 62.948,
    //         "despawnTime": 63.948
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 62.298,
    //         "hitTime": 63.298,
    //         "despawnTime": 64.298
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 62.664,
    //         "hitTime": 63.664,
    //         "despawnTime": 64.664
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 62.964,
    //         "hitTime": 63.964,
    //         "despawnTime": 64.964
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 63.297,
    //         "hitTime": 64.297,
    //         "despawnTime": 65.297
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 63.63,
    //         "hitTime": 64.63,
    //         "despawnTime": 65.63
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 63.965,
    //         "hitTime": 64.965,
    //         "despawnTime": 65.965
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 64.264,
    //         "hitTime": 65.264,
    //         "despawnTime": 66.264
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 64.597,
    //         "hitTime": 65.597,
    //         "despawnTime": 66.597
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 64.931,
    //         "hitTime": 65.931,
    //         "despawnTime": 66.931
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 65.281,
    //         "hitTime": 66.281,
    //         "despawnTime": 67.281
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 65.615,
    //         "hitTime": 66.615,
    //         "despawnTime": 67.615
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 65.98,
    //         "hitTime": 66.98,
    //         "despawnTime": 67.98
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 66.298,
    //         "hitTime": 67.298,
    //         "despawnTime": 68.298
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 66.63,
    //         "hitTime": 67.63,
    //         "despawnTime": 68.63
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 66.981,
    //         "hitTime": 67.981,
    //         "despawnTime": 68.981
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 67.299,
    //         "hitTime": 68.299,
    //         "despawnTime": 69.299
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 67.647,
    //         "hitTime": 68.647,
    //         "despawnTime": 69.647
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 67.998,
    //         "hitTime": 68.998,
    //         "despawnTime": 69.998
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 68.331,
    //         "hitTime": 69.331,
    //         "despawnTime": 70.331
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 68.664,
    //         "hitTime": 69.664,
    //         "despawnTime": 70.664
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 68.997,
    //         "hitTime": 69.997,
    //         "despawnTime": 70.997
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 69.315,
    //         "hitTime": 70.315,
    //         "despawnTime": 71.315
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 69.631,
    //         "hitTime": 70.631,
    //         "despawnTime": 71.631
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 69.997,
    //         "hitTime": 70.997,
    //         "despawnTime": 71.997
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 70.314,
    //         "hitTime": 71.314,
    //         "despawnTime": 72.314
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 70.681,
    //         "hitTime": 71.681,
    //         "despawnTime": 72.681
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 70.997,
    //         "hitTime": 71.997,
    //         "despawnTime": 72.997
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 71.314,
    //         "hitTime": 72.314,
    //         "despawnTime": 73.314
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 71.665,
    //         "hitTime": 72.665,
    //         "despawnTime": 73.665
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 71.997,
    //         "hitTime": 72.997,
    //         "despawnTime": 73.997
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 72.346,
    //         "hitTime": 73.346,
    //         "despawnTime": 74.346
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 72.681,
    //         "hitTime": 73.681,
    //         "despawnTime": 74.681
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 73.031,
    //         "hitTime": 74.031,
    //         "despawnTime": 75.031
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 73.381,
    //         "hitTime": 74.381,
    //         "despawnTime": 75.381
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 73.731,
    //         "hitTime": 74.731,
    //         "despawnTime": 75.731
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 74.064,
    //         "hitTime": 75.064,
    //         "despawnTime": 76.064
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 74.414,
    //         "hitTime": 75.414,
    //         "despawnTime": 76.414
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 74.752,
    //         "hitTime": 75.752,
    //         "despawnTime": 76.752
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 75.081,
    //         "hitTime": 76.081,
    //         "despawnTime": 77.081
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 75.415,
    //         "hitTime": 76.415,
    //         "despawnTime": 77.415
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 75.748,
    //         "hitTime": 76.748,
    //         "despawnTime": 77.748
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 76.114,
    //         "hitTime": 77.114,
    //         "despawnTime": 78.114
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 76.43,
    //         "hitTime": 77.43,
    //         "despawnTime": 78.43
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 76.764,
    //         "hitTime": 77.764,
    //         "despawnTime": 78.764
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 77.097,
    //         "hitTime": 78.097,
    //         "despawnTime": 79.097
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 77.43,
    //         "hitTime": 78.43,
    //         "despawnTime": 79.43
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 77.764,
    //         "hitTime": 78.764,
    //         "despawnTime": 79.764
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 78.098,
    //         "hitTime": 79.098,
    //         "despawnTime": 80.098
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 78.414,
    //         "hitTime": 79.414,
    //         "despawnTime": 80.414
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 78.716,
    //         "hitTime": 79.716,
    //         "despawnTime": 80.716
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 79.064,
    //         "hitTime": 80.064,
    //         "despawnTime": 81.064
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 79.381,
    //         "hitTime": 80.381,
    //         "despawnTime": 81.381
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 79.747,
    //         "hitTime": 80.747,
    //         "despawnTime": 81.747
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 80.098,
    //         "hitTime": 81.098,
    //         "despawnTime": 82.098
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 80.448,
    //         "hitTime": 81.448,
    //         "despawnTime": 82.448
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 80.781,
    //         "hitTime": 81.781,
    //         "despawnTime": 82.781
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 81.114,
    //         "hitTime": 82.114,
    //         "despawnTime": 83.114
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 81.481,
    //         "hitTime": 82.481,
    //         "despawnTime": 83.481
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 81.798,
    //         "hitTime": 82.798,
    //         "despawnTime": 83.798
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 82.165,
    //         "hitTime": 83.165,
    //         "despawnTime": 84.165
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 82.497,
    //         "hitTime": 83.497,
    //         "despawnTime": 84.497
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 82.814,
    //         "hitTime": 83.814,
    //         "despawnTime": 84.814
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 83.147,
    //         "hitTime": 84.147,
    //         "despawnTime": 85.147
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 83.48,
    //         "hitTime": 84.48,
    //         "despawnTime": 85.48
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 83.814,
    //         "hitTime": 84.814,
    //         "despawnTime": 85.814
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 84.181,
    //         "hitTime": 85.181,
    //         "despawnTime": 86.181
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 84.514,
    //         "hitTime": 85.514,
    //         "despawnTime": 86.514
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 84.863,
    //         "hitTime": 85.863,
    //         "despawnTime": 86.863
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 85.196,
    //         "hitTime": 86.196,
    //         "despawnTime": 87.196
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 85.514,
    //         "hitTime": 86.514,
    //         "despawnTime": 87.514
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 85.848,
    //         "hitTime": 86.848,
    //         "despawnTime": 87.848
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 86.183,
    //         "hitTime": 87.183,
    //         "despawnTime": 88.183
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 86.514,
    //         "hitTime": 87.514,
    //         "despawnTime": 88.514
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 86.864,
    //         "hitTime": 87.864,
    //         "despawnTime": 88.864
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 87.197,
    //         "hitTime": 88.197,
    //         "despawnTime": 89.197
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 87.531,
    //         "hitTime": 88.531,
    //         "despawnTime": 89.531
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 87.864,
    //         "hitTime": 88.864,
    //         "despawnTime": 89.864
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 88.197,
    //         "hitTime": 89.197,
    //         "despawnTime": 90.197
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 88.531,
    //         "hitTime": 89.531,
    //         "despawnTime": 90.531
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 88.864,
    //         "hitTime": 89.864,
    //         "despawnTime": 90.864
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 89.247,
    //         "hitTime": 90.247,
    //         "despawnTime": 91.247
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 89.564,
    //         "hitTime": 90.564,
    //         "despawnTime": 91.564
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 89.881,
    //         "hitTime": 90.881,
    //         "despawnTime": 91.881
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 90.231,
    //         "hitTime": 91.231,
    //         "despawnTime": 92.231
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 90.564,
    //         "hitTime": 91.564,
    //         "despawnTime": 92.564
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 90.881,
    //         "hitTime": 91.881,
    //         "despawnTime": 92.881
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 91.218,
    //         "hitTime": 92.218,
    //         "despawnTime": 93.218
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 91.547,
    //         "hitTime": 92.547,
    //         "despawnTime": 93.547
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 91.864,
    //         "hitTime": 92.864,
    //         "despawnTime": 93.864
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 92.23,
    //         "hitTime": 93.23,
    //         "despawnTime": 94.23
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 92.552,
    //         "hitTime": 93.552,
    //         "despawnTime": 94.552
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 92.914,
    //         "hitTime": 93.914,
    //         "despawnTime": 94.914
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 93.264,
    //         "hitTime": 94.264,
    //         "despawnTime": 95.264
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 93.564,
    //         "hitTime": 94.564,
    //         "despawnTime": 95.564
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 93.914,
    //         "hitTime": 94.914,
    //         "despawnTime": 95.914
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 94.247,
    //         "hitTime": 95.247,
    //         "despawnTime": 96.247
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 94.581,
    //         "hitTime": 95.581,
    //         "despawnTime": 96.581
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 94.914,
    //         "hitTime": 95.914,
    //         "despawnTime": 96.914
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 95.247,
    //         "hitTime": 96.247,
    //         "despawnTime": 97.247
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 95.598,
    //         "hitTime": 96.598,
    //         "despawnTime": 97.598
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 95.931,
    //         "hitTime": 96.931,
    //         "despawnTime": 97.931
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 96.267,
    //         "hitTime": 97.267,
    //         "despawnTime": 98.267
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 96.597,
    //         "hitTime": 97.597,
    //         "despawnTime": 98.597
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 96.931,
    //         "hitTime": 97.931,
    //         "despawnTime": 98.931
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 97.247,
    //         "hitTime": 98.247,
    //         "despawnTime": 99.247
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 97.601,
    //         "hitTime": 98.601,
    //         "despawnTime": 99.601
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 97.914,
    //         "hitTime": 98.914,
    //         "despawnTime": 99.914
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 98.264,
    //         "hitTime": 99.264,
    //         "despawnTime": 100.264
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 98.614,
    //         "hitTime": 99.614,
    //         "despawnTime": 100.614
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 98.946,
    //         "hitTime": 99.946,
    //         "despawnTime": 100.946
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 99.281,
    //         "hitTime": 100.281,
    //         "despawnTime": 101.281
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 99.614,
    //         "hitTime": 100.614,
    //         "despawnTime": 101.614
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 99.964,
    //         "hitTime": 100.964,
    //         "despawnTime": 101.964
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 100.297,
    //         "hitTime": 101.297,
    //         "despawnTime": 102.297
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 100.648,
    //         "hitTime": 101.648,
    //         "despawnTime": 102.648
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 101.014,
    //         "hitTime": 102.014,
    //         "despawnTime": 103.014
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 101.333,
    //         "hitTime": 102.333,
    //         "despawnTime": 103.333
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 101.665,
    //         "hitTime": 102.665,
    //         "despawnTime": 103.665
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 101.979,
    //         "hitTime": 102.979,
    //         "despawnTime": 103.979
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 102.314,
    //         "hitTime": 103.314,
    //         "despawnTime": 104.314
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 102.63,
    //         "hitTime": 103.63,
    //         "despawnTime": 104.63
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 102.963,
    //         "hitTime": 103.963,
    //         "despawnTime": 104.963
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 103.314,
    //         "hitTime": 104.314,
    //         "despawnTime": 105.314
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 103.681,
    //         "hitTime": 104.681,
    //         "despawnTime": 105.681
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 104.031,
    //         "hitTime": 105.031,
    //         "despawnTime": 106.031
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 104.364,
    //         "hitTime": 105.364,
    //         "despawnTime": 106.364
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 104.684,
    //         "hitTime": 105.684,
    //         "despawnTime": 106.684
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 105.03,
    //         "hitTime": 106.03,
    //         "despawnTime": 107.03
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 105.397,
    //         "hitTime": 106.397,
    //         "despawnTime": 107.397
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 105.731,
    //         "hitTime": 106.731,
    //         "despawnTime": 107.731
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 106.063,
    //         "hitTime": 107.063,
    //         "despawnTime": 108.063
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 106.414,
    //         "hitTime": 107.414,
    //         "despawnTime": 108.414
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 106.714,
    //         "hitTime": 107.714,
    //         "despawnTime": 108.714
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 107.031,
    //         "hitTime": 108.031,
    //         "despawnTime": 109.031
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 107.364,
    //         "hitTime": 108.364,
    //         "despawnTime": 109.364
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 107.715,
    //         "hitTime": 108.715,
    //         "despawnTime": 109.715
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 108.048,
    //         "hitTime": 109.048,
    //         "despawnTime": 110.048
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 108.38,
    //         "hitTime": 109.38,
    //         "despawnTime": 110.38
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 108.73,
    //         "hitTime": 109.73,
    //         "despawnTime": 110.73
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 109.046,
    //         "hitTime": 110.046,
    //         "despawnTime": 111.046
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 109.397,
    //         "hitTime": 110.397,
    //         "despawnTime": 111.397
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 109.714,
    //         "hitTime": 110.714,
    //         "despawnTime": 111.714
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 110.064,
    //         "hitTime": 111.064,
    //         "despawnTime": 112.064
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 110.38,
    //         "hitTime": 111.38,
    //         "despawnTime": 112.38
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 110.732,
    //         "hitTime": 111.732,
    //         "despawnTime": 112.732
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 111.064,
    //         "hitTime": 112.064,
    //         "despawnTime": 113.064
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 111.436,
    //         "hitTime": 112.436,
    //         "despawnTime": 113.436
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 111.747,
    //         "hitTime": 112.747,
    //         "despawnTime": 113.747
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 112.082,
    //         "hitTime": 113.082,
    //         "despawnTime": 114.082
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 112.414,
    //         "hitTime": 113.414,
    //         "despawnTime": 114.414
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 112.763,
    //         "hitTime": 113.763,
    //         "despawnTime": 114.763
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 113.081,
    //         "hitTime": 114.081,
    //         "despawnTime": 115.081
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 113.396,
    //         "hitTime": 114.396,
    //         "despawnTime": 115.396
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 113.747,
    //         "hitTime": 114.747,
    //         "despawnTime": 115.747
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 114.147,
    //         "hitTime": 115.147,
    //         "despawnTime": 116.147
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 114.514,
    //         "hitTime": 115.514,
    //         "despawnTime": 116.514
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 114.847,
    //         "hitTime": 115.847,
    //         "despawnTime": 116.847
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 115.198,
    //         "hitTime": 116.198,
    //         "despawnTime": 117.198
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 115.514,
    //         "hitTime": 116.514,
    //         "despawnTime": 117.514
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 115.848,
    //         "hitTime": 116.848,
    //         "despawnTime": 117.848
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 116.2,
    //         "hitTime": 117.2,
    //         "despawnTime": 118.2
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 116.514,
    //         "hitTime": 117.514,
    //         "despawnTime": 118.514
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 116.848,
    //         "hitTime": 117.848,
    //         "despawnTime": 118.848
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 117.197,
    //         "hitTime": 118.197,
    //         "despawnTime": 119.197
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 117.533,
    //         "hitTime": 118.533,
    //         "despawnTime": 119.533
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 117.848,
    //         "hitTime": 118.848,
    //         "despawnTime": 119.848
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 118.18,
    //         "hitTime": 119.18,
    //         "despawnTime": 120.18
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 118.497,
    //         "hitTime": 119.497,
    //         "despawnTime": 120.497
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 118.833,
    //         "hitTime": 119.833,
    //         "despawnTime": 120.833
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 119.164,
    //         "hitTime": 120.164,
    //         "despawnTime": 121.164
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 119.498,
    //         "hitTime": 120.498,
    //         "despawnTime": 121.498
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 119.831,
    //         "hitTime": 120.831,
    //         "despawnTime": 121.831
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 120.201,
    //         "hitTime": 121.201,
    //         "despawnTime": 122.201
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 120.514,
    //         "hitTime": 121.514,
    //         "despawnTime": 122.514
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 120.864,
    //         "hitTime": 121.864,
    //         "despawnTime": 122.864
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 121.197,
    //         "hitTime": 122.197,
    //         "despawnTime": 123.197
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 121.547,
    //         "hitTime": 122.547,
    //         "despawnTime": 123.547
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 121.881,
    //         "hitTime": 122.881,
    //         "despawnTime": 123.881
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 122.214,
    //         "hitTime": 123.214,
    //         "despawnTime": 124.214
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 122.583,
    //         "hitTime": 123.583,
    //         "despawnTime": 124.583
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 122.897,
    //         "hitTime": 123.897,
    //         "despawnTime": 124.897
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 123.214,
    //         "hitTime": 124.214,
    //         "despawnTime": 125.214
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 123.547,
    //         "hitTime": 124.547,
    //         "despawnTime": 125.547
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 123.897,
    //         "hitTime": 124.897,
    //         "despawnTime": 125.897
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 124.247,
    //         "hitTime": 125.247,
    //         "despawnTime": 126.247
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 124.581,
    //         "hitTime": 125.581,
    //         "despawnTime": 126.581
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 124.914,
    //         "hitTime": 125.914,
    //         "despawnTime": 126.914
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 125.264,
    //         "hitTime": 126.264,
    //         "despawnTime": 127.264
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 125.564,
    //         "hitTime": 126.564,
    //         "despawnTime": 127.564
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 125.93,
    //         "hitTime": 126.93,
    //         "despawnTime": 127.93
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 126.23,
    //         "hitTime": 127.23,
    //         "despawnTime": 128.23
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 126.581,
    //         "hitTime": 127.581,
    //         "despawnTime": 128.581
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 126.897,
    //         "hitTime": 127.897,
    //         "despawnTime": 128.897
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 127.264,
    //         "hitTime": 128.264,
    //         "despawnTime": 129.264
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 127.597,
    //         "hitTime": 128.597,
    //         "despawnTime": 129.597
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 127.931,
    //         "hitTime": 128.931,
    //         "despawnTime": 129.931
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 128.264,
    //         "hitTime": 129.264,
    //         "despawnTime": 130.264
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 128.598,
    //         "hitTime": 129.598,
    //         "despawnTime": 130.598
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 128.914,
    //         "hitTime": 129.914,
    //         "despawnTime": 130.914
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 129.23,
    //         "hitTime": 130.23,
    //         "despawnTime": 131.23
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 129.615,
    //         "hitTime": 130.615,
    //         "despawnTime": 131.615
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 129.964,
    //         "hitTime": 130.964,
    //         "despawnTime": 131.964
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 130.283,
    //         "hitTime": 131.283,
    //         "despawnTime": 132.283
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 130.614,
    //         "hitTime": 131.614,
    //         "despawnTime": 132.614
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 130.947,
    //         "hitTime": 131.947,
    //         "despawnTime": 132.947
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 131.28,
    //         "hitTime": 132.28,
    //         "despawnTime": 133.28
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 131.597,
    //         "hitTime": 132.597,
    //         "despawnTime": 133.597
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 131.964,
    //         "hitTime": 132.964,
    //         "despawnTime": 133.964
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 132.297,
    //         "hitTime": 133.297,
    //         "despawnTime": 134.297
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 132.63,
    //         "hitTime": 133.63,
    //         "despawnTime": 134.63
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 132.997,
    //         "hitTime": 133.997,
    //         "despawnTime": 134.997
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 133.331,
    //         "hitTime": 134.331,
    //         "despawnTime": 135.331
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 133.647,
    //         "hitTime": 134.647,
    //         "despawnTime": 135.647
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 133.963,
    //         "hitTime": 134.963,
    //         "despawnTime": 135.963
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 134.331,
    //         "hitTime": 135.331,
    //         "despawnTime": 136.331
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 134.664,
    //         "hitTime": 135.664,
    //         "despawnTime": 136.664
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 134.98,
    //         "hitTime": 135.98,
    //         "despawnTime": 136.98
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 135.333,
    //         "hitTime": 136.333,
    //         "despawnTime": 137.333
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 135.663,
    //         "hitTime": 136.663,
    //         "despawnTime": 137.663
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 136.013,
    //         "hitTime": 137.013,
    //         "despawnTime": 138.013
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 136.331,
    //         "hitTime": 137.331,
    //         "despawnTime": 138.331
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 136.647,
    //         "hitTime": 137.647,
    //         "despawnTime": 138.647
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 136.98,
    //         "hitTime": 137.98,
    //         "despawnTime": 138.98
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 137.347,
    //         "hitTime": 138.347,
    //         "despawnTime": 139.347
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 137.719,
    //         "hitTime": 138.719,
    //         "despawnTime": 139.719
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 138.048,
    //         "hitTime": 139.048,
    //         "despawnTime": 140.048
    //     },
    //     {
    //         "left": 9,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 138.38,
    //         "hitTime": 139.38,
    //         "despawnTime": 140.38
    //     },
    //     {
    //         "left": 30,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 138.73,
    //         "hitTime": 139.73,
    //         "despawnTime": 140.73
    //     },
    //     {
    //         "left": 32,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 139.066,
    //         "hitTime": 140.066,
    //         "despawnTime": 141.066
    //     },
    //     {
    //         "left": 12,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 139.397,
    //         "hitTime": 140.397,
    //         "despawnTime": 141.397
    //     },
    //     {
    //         "left": 20,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 139.764,
    //         "hitTime": 140.764,
    //         "despawnTime": 141.764
    //     },
    //     {
    //         "left": 9,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 140.097,
    //         "hitTime": 141.097,
    //         "despawnTime": 142.097
    //     },
    //     {
    //         "left": 30,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 140.43,
    //         "hitTime": 141.43,
    //         "despawnTime": 142.43
    //     },
    //     {
    //         "left": 32,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 140.764,
    //         "hitTime": 141.764,
    //         "despawnTime": 142.764
    //     },
    //     {
    //         "left": 12,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 141.097,
    //         "hitTime": 142.097,
    //         "despawnTime": 143.097
    //     },
    //     {
    //         "left": 20,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 141.453,
    //         "hitTime": 142.453,
    //         "despawnTime": 143.453
    //     },
    //     {
    //         "left": 39,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 141.797,
    //         "hitTime": 142.797,
    //         "despawnTime": 143.797
    //     },
    //     {
    //         "left": 60,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 142.114,
    //         "hitTime": 143.114,
    //         "despawnTime": 144.114
    //     },
    //     {
    //         "left": 62,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 142.447,
    //         "hitTime": 143.447,
    //         "despawnTime": 144.447
    //     },
    //     {
    //         "left": 42,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 142.785,
    //         "hitTime": 143.785,
    //         "despawnTime": 144.785
    //     },
    //     {
    //         "left": 50,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 143.13,
    //         "hitTime": 144.13,
    //         "despawnTime": 145.13
    //     },
    //     {
    //         "left": 69,
    //         "top": 15,
    //         "position": 1,
    //         "spawnTime": 143.447,
    //         "hitTime": 144.447,
    //         "despawnTime": 145.447
    //     },
    //     {
    //         "left": 90,
    //         "top": 12,
    //         "position": 2,
    //         "spawnTime": 143.78,
    //         "hitTime": 144.78,
    //         "despawnTime": 145.78
    //     },
    //     {
    //         "left": 92,
    //         "top": 32,
    //         "position": 3,
    //         "spawnTime": 144.147,
    //         "hitTime": 145.147,
    //         "despawnTime": 146.147
    //     },
    //     {
    //         "left": 72,
    //         "top": 30,
    //         "position": 4,
    //         "spawnTime": 144.463,
    //         "hitTime": 145.463,
    //         "despawnTime": 146.463
    //     },
    //     {
    //         "left": 80,
    //         "top": 22,
    //         "position": 5,
    //         "spawnTime": 144.78,
    //         "hitTime": 145.78,
    //         "despawnTime": 146.78
    //     },
    //     {
    //         "left": 69,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 145.131,
    //         "hitTime": 146.131,
    //         "despawnTime": 147.131
    //     },
    //     {
    //         "left": 90,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 145.481,
    //         "hitTime": 146.481,
    //         "despawnTime": 147.481
    //     },
    //     {
    //         "left": 92,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 145.797,
    //         "hitTime": 146.797,
    //         "despawnTime": 147.797
    //     },
    //     {
    //         "left": 72,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 146.146,
    //         "hitTime": 147.146,
    //         "despawnTime": 148.146
    //     },
    //     {
    //         "left": 80,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 146.53,
    //         "hitTime": 147.53,
    //         "despawnTime": 148.53
    //     },
    //     {
    //         "left": 39,
    //         "top": 71,
    //         "position": 1,
    //         "spawnTime": 146.863,
    //         "hitTime": 147.863,
    //         "despawnTime": 148.863
    //     },
    //     {
    //         "left": 60,
    //         "top": 68,
    //         "position": 2,
    //         "spawnTime": 147.213,
    //         "hitTime": 148.213,
    //         "despawnTime": 149.213
    //     },
    //     {
    //         "left": 62,
    //         "top": 88,
    //         "position": 3,
    //         "spawnTime": 147.53,
    //         "hitTime": 148.53,
    //         "despawnTime": 149.53
    //     },
    //     {
    //         "left": 42,
    //         "top": 86,
    //         "position": 4,
    //         "spawnTime": 147.897,
    //         "hitTime": 148.897,
    //         "despawnTime": 149.897
    //     },
    //     {
    //         "left": 50,
    //         "top": 78,
    //         "position": 5,
    //         "spawnTime": 148.214,
    //         "hitTime": 149.214,
    //         "despawnTime": 150.214
    //     }
    // ]
    // }
]