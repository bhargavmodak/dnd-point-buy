export const MIN_SCORE = 8;
export const MAX_SCORE = 15;
export const TOTAL_POINTS = 27;

export const COSTS: Record<number, number> = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9,
};

export function modifier(score: number): number {
    return Math.floor((score - 10) / 2);
}

export function cost(score: number): number {
    return COSTS[score];
}

export function totalCost(scores: number[]) {
    return scores.reduce((sum, score) => sum + cost(score), 0);
}

export function remaining(scores: number[]) {
    return TOTAL_POINTS - totalCost(scores);
}
