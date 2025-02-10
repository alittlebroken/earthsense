const chartingData = [
    { name: "Monday", activeDevices: 5},
    { name: "Tuesday", activeDevices: 8 },
    { name: "Wednesday", activeDevices: 14},
    { name: "Thursday", activeDevices: 6},
    { name: "Friday", activeDevices: 3},
    { name: "Saturday", activeDevices: 20},
    { name: "Sunday", activeDevices: 18},
];

export const ticketData = [
    { number: 100900, customer: "Billy Nottings", opened: "Dec 15th, 2024", status: "Overdue"},
    { number: 100901, customer: "Sara Hortington", opened: "Jan 1st, 2025", status: "Open"},
    { number: 100902, customer: "Milly Hilgerton", opened: "Jan 15th, 2025", status: "Open"},
    { number: 100903, customer: "Tom Downs", opened: "Jab 15th, 2025", status: "On Hold"},
    { number: 100904, customer: "Darren Mistings", opened: "Jan 25th, 2025", status: "On Hold"},
    { number: 100905, customer: "Penolope Varnish", opened: "Jan 30th, 2025", status: "Open"},
    { number: 100906, customer: "Tammy Godship", opened: "Feb 1st, 2025", status: "On Hold"},
    { number: 100907, customer: "Fiona Sanderson", opened: "Nov 1st, 2024", status: "Over Due"},
]

export const meteorlogicalData = {
    time: "2025-02-25T12:00",
    temp: 5.6,
    humidity: 76,
    precipitation: 0.00,
    rain: 0.00,
    windSpeed: 10.4, 
    windDir: 350,
    windGusts: 22.0,
    cloudCover: 100,
    cloudLow: 4,
    cloudMid: 85,
    CloudHigh: 97,
    historicalData: [
        { time: "2025-01-25T00:00", temp: 5.9, humidity: 86, precipitation: 0.00, rain: 0.00, windSpeed: 18.9, windDir: 295, windGusts: 32.8, cloudCover: 100, cloudLow: 4, cloudMid: 85, cloudHigh: 97},
        { time: "2025-01-25T01:00", temp: 5.1, humidity: 86, precipitation: 0.00, rain: 0.00, windSpeed: 14.2, windDir: 297, windGusts: 26.6, cloudCover: 13, cloudLow: 0, cloudMid: 0, cloudHigh: 13},
        { time: "2025-01-25T02:00", temp: 4.1, humidity: 87, precipitation: 0.00, rain: 0.00, windSpeed: 16.4, windDir: 301, windGusts: 25.9, cloudCover: 23, cloudLow: 3, cloudMid: 0, cloudHigh: 21},
        { time: "2025-01-25T03:00", temp: 3.8, humidity: 83, precipitation: 0.00, rain: 0.00, windSpeed: 15.0, windDir: 300, windGusts: 27.7, cloudCover: 59, cloudLow: 1, cloudMid: 0, cloudHigh: 58},
        { time: "2025-01-25T04:00", temp: 3.5, humidity: 83, precipitation: 0.00, rain: 0.00, windSpeed: 13.9, windDir: 300, windGusts: 24.5, cloudCover: 1, cloudLow: 0, cloudMid: 1, cloudHigh: 0},
        { time: "2025-01-25T05:00", temp: 2.9, humidity: 84, precipitation: 0.00, rain: 0.00, windSpeed: 13.8, windDir: 303, windGusts: 24.1, cloudCover: 0, cloudLow: 0, cloudMid: 0, cloudHigh: 0},
        { time: "2025-01-25T06:00", temp: 2.6, humidity: 82, precipitation: 0.00, rain: 0.00, windSpeed: 12.5, windDir: 307, windGusts: 22.7, cloudCover: 4, cloudLow: 0, cloudMid: 1, cloudHigh: 4},
        { time: "2025-01-25T07:00", temp: 2.1, humidity: 82, precipitation: 0.00, rain: 0.00, windSpeed: 9.6, windDir: 311, windGusts: 20.9, cloudCover: 10, cloudLow: 0, cloudMid: 3, cloudHigh: 8},
        { time: "2025-01-25T08:00", temp: 1.7, humidity: 82, precipitation: 0.00, rain: 0.00, windSpeed: 8.7, windDir: 307, windGusts: 15.8, cloudCover: 35, cloudLow: 0, cloudMid: 0, cloudHigh: 35},
        { time: "2025-01-25T09:00", temp: 2.2, humidity: 81, precipitation: 0.00, rain: 0.00, windSpeed: 6.4, windDir: 320, windGusts: 14.4, cloudCover: 77, cloudLow: 0, cloudMid: 0, cloudHigh: 77},
        { time: "2025-01-25T10:00", temp: 3.9, humidity: 78, precipitation: 0.00, rain: 0.00, windSpeed: 2.1, windDir: 38, windGusts: 10.1, cloudCover: 100, cloudLow: 5, cloudMid: 3, cloudHigh: 100},
        { time: "2025-01-25T11:00", temp: 5.3, humidity: 79, precipitation: 0.00, rain: 0.00, windSpeed: 7.5, windDir: 134, windGusts: 15.1, cloudCover: 92, cloudLow: 31, cloudMid: 15, cloudHigh: 88},
        { time: "2025-01-25T12:00", temp: 6.3, humidity: 72, precipitation: 0.00, rain: 0.00, windSpeed: 7.6, windDir: 149, windGusts: 17.3, cloudCover: 70, cloudLow: 4, cloudMid: 5, cloudHigh: 67},
        { time: "2025-01-25T13:00", temp: 7.1, humidity: 63, precipitation: 0.00, rain: 0.00, windSpeed: 11.1, windDir: 223, windGusts: 22.0, cloudCover: 100, cloudLow: 24, cloudMid: 0, cloudHigh: 100},
        { time: "2025-01-25T14:00", temp: 7.2, humidity: 64, precipitation: 0.00, rain: 0.00, windSpeed: 11.2, windDir: 238, windGusts: 22.3, cloudCover: 100, cloudLow: 24, cloudMid: 14, cloudHigh: 100},
        { time: "2025-01-25T15:00", temp: 6.9, humidity: 70, precipitation: 0.00, rain: 0.00, windSpeed: 10.2, windDir: 236, windGusts: 22.0, cloudCover: 100, cloudLow: 34, cloudMid: 4, cloudHigh: 100},
        { time: "2025-01-25T16:00", temp: 6.4, humidity: 75, precipitation: 0.00, rain: 0.00, windSpeed: 6.8, windDir: 207, windGusts: 17.3, cloudCover: 100, cloudLow: 15, cloudMid: 1, cloudHigh: 100},
        { time: "2025-01-25T17:00", temp: 4.9, humidity: 82, precipitation: 0.00, rain: 0.00, windSpeed: 7.2, windDir: 193, windGusts: 12.2, cloudCover: 100, cloudLow: 7, cloudMid: 0, cloudHigh: 100},
        { time: "2025-01-25T18:00", temp: 4.8, humidity: 82, precipitation: 0.00, rain: 0.00, windSpeed: 10.4, windDir: 181, windGusts: 17.6, cloudCover: 66, cloudLow: 0, cloudMid: 1, cloudHigh: 66},
        { time: "2025-01-25T19:00", temp: 4.5, humidity: 84, precipitation: 0.00, rain: 0.00, windSpeed: 12.3, windDir: 192, windGusts: 20.5, cloudCover: 56, cloudLow: 0, cloudMid: 15, cloudHigh: 52},
        { time: "2025-01-25T20:00", temp: 4.4, humidity: 82, precipitation: 0.00, rain: 0.00, windSpeed: 13.5, windDir: 184, windGusts: 22.7, cloudCover: 82, cloudLow: 0, cloudMid: 76, cloudHigh: 30},
        { time: "2025-01-25T21:00", temp: 4.4, humidity: 81, precipitation: 0.00, rain: 0.00, windSpeed: 13.8, windDir: 187, windGusts: 23.0, cloudCover: 98, cloudLow: 2, cloudMid: 98, cloudHigh: 38},
        { time: "2025-01-25T22:00", temp: 4.9, humidity: 74, precipitation: 0.00, rain: 0.00, windSpeed: 12.7, windDir: 195, windGusts: 25.2, cloudCover: 90, cloudLow: 0, cloudMid: 98, cloudHigh: 36},
        { time: "2025-01-25T23:00", temp: 4.4, humidity: 76, precipitation: 0.00, rain: 0.00, windSpeed: 13.9, windDir: 178, windGusts: 23.4, cloudCover: 86, cloudLow: 21, cloudMid: 85, cloudHigh: 17},
    ]
};

export default chartingData;