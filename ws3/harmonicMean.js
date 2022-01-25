// How calculate the Harmonic Mean
// Example, the runner run 10 km in different speeds 

const runner1 = [
    {
        trip: 2, // km
        speed: 15, // km/h
    },
    {
        trip: 2, // km
        speed: 17, // km/h
    },
    {
        trip: 2, // km
        speed: 14, // km/h
    },
    {
        trip: 2, // km
        speed: 13, // km/h
    },
    {
        trip: 2, // km
        speed: 12, // km/h
    },
];

const speedByTrip = runner1.map(function(trip) {
    return 1 / trip.speed;
});

const sumSpeedbyTrip = speedByTrip.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const harmonicMean = runner1.length / sumSpeedbyTrip;

console.log([
    speedByTrip,
    sumSpeedbyTrip,
    harmonicMean
]);
