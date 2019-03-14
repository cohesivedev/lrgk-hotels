import {byAscendingStarRating, byDescendingStarRating} from './helpers';

describe('helpers', () => {
    const lowStarRatingHotel  = {starRating: 1};
    const highStarRatingHotel = {starRating: 5};

    it('byAscendingStarRating() should return the correctly signed number to sort by ascending', () => {
        expect(byAscendingStarRating(lowStarRatingHotel, highStarRatingHotel)).toBeLessThan(0);
        expect(byAscendingStarRating(highStarRatingHotel, lowStarRatingHotel)).toBeGreaterThan(0);

        expect(byAscendingStarRating(lowStarRatingHotel, lowStarRatingHotel)).toBe(0);
    });

    it('byDescendingStarRating() should return the correctly signed number to sort by descending', () => {
        expect(byDescendingStarRating(lowStarRatingHotel, highStarRatingHotel)).toBeGreaterThan(0);
        expect(byDescendingStarRating(highStarRatingHotel, lowStarRatingHotel)).toBeLessThan(0);

        expect(byDescendingStarRating(lowStarRatingHotel, lowStarRatingHotel)).toBe(0);
    });
});
