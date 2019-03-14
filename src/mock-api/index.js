function getRandomSubset(list) {
    const indices = [
        Math.floor(list.length * Math.random()),
        Math.floor(list.length * Math.random())
    ].sort((a, b) => a - b);

    return list.slice(
        indices[0], // min
        indices[1], // max
    );
}

const FACILITIES = [
    'car park',
    'gym',
    'pool',
    'bar',
    'spa',
    'meeting rooms',
    'sauna',
    '24-hour cafe',
    'smoking room'
];

// Mock data generator
module.exports = () => {
    const data = {
        hotels: [
            {
                "name":       "hotelone",
                "starRating": 5,
                "facilities": ["car park", "pool"]
            },
            {
                "name":       "hoteltwo",
                "starRating": 3,
                "facilities": ["car park", "gym"]
            },
            {
                "name":       "hotelthree",
                "starRating": 3,
                "facilities": []
            }
        ]
    };

    for (let i = 4; i <= 100; i++) {
        data.hotels.push({
            name:       `hotel${i}`,
            starRating: Math.round(Math.random() * 5),
            facilities: getRandomSubset(FACILITIES)
        });
    }

    return data;
};