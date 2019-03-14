export const byAscendingStarRating  = (a, b) => a.starRating - b.starRating;
export const byDescendingStarRating = (a, b) => b.starRating - a.starRating;

export function isSuperset(set: Set<any>, subset: Set<any>): boolean {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}
