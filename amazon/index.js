'use strict';

const mapInfo = {
    mapCenter: {
        lat: -3.254096,
        lng: -72.911224
    },
    mapType: 'satellite',
    startZoom: 16
};

let siteData = [
    {
        title: 'ACTS Colpa',
        location: {
            lat: -3.254096,
            lng: -72.911224
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Colpa/0.jpg',
                date: '2018-07-11'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.254096',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.911224',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Altitude',
                value: '117.653498',
                unit: 'm'
            }
        ]
    },
    {
        title: 'ACTS Light Gap 1',
        location: {
            lat: -3.251925,
            lng: -72.906870
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Light_Gap_1/0.jpg',
                date: '2018-07-11'
            },
            {
                title: 'Front',
                url: 'ACTS_Light_Gap_1/1.jpg',
                date: '2018-07-11'
            },
            {
                title: 'Top',
                url: 'ACTS_Light_Gap_1/2.jpg',
                date: '2018-07-11'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.251925',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.906870',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Altitude',
                value: '134.243697',
                unit: 'Meters'
            }
        ]
    },
    {
        title: 'ACTS Stream 5C Site 1',
        location: {
            lat: -3.252082,
            lng: -72.909280
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Stream_5C_Site_1/0.jpg',
                date: '2018-07-11'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.252082',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.909280',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Altitude',
                value: '119.714079',
                unit: 'm'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Phosphorus',
                value: '15',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Nitrogen',
                value: '0',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'Turbidity',
                value: '60',
                unit: 'JTU (Jackson Turbidity Units)'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'Nitrate',
                value: '0',
                unit: 'ppm (Parts Per Million)'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'Phosphate',
                value: '2',
                unit: 'ppm (Parts Per Million)'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'pH',
                value: '6',
                unit: 'pH Scale'
            }
        ]
    },
    {
        title: 'ACTS Stream 5C Site 2',
        location: {
            lat: -3.252321,
            lng: -72.909226
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Stream_5C_Site_2/0.jpg',
                date: '2018-07-11'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.252321',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.909226',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Altitude',
                value: '114.823950',
                unit: 'm'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Phosphorus',
                value: '5',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Nitrogen',
                value: '0',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'Turbidity',
                value: '70',
                unit: 'JTU (Jackson Turbidity Units)'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'Nitrate',
                value: '0',
                unit: 'ppm (Parts Per Million)'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'Phosphate',
                value: '1',
                unit: 'ppm (Parts Per Million)'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'pH',
                value: '8',
                unit: 'pH Scale'
            }
        ]
    },
    {
        title: 'ACTS Stream 5C Site 3',
        location: {
            lat: -3.252352,
            lng: -72.909386
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Stream_5C_Site_3/0.jpg',
                date: '2018-07-11'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.252352',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.909386',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Altitude',
                value: '114.267645',
                unit: 'm'
            }
        ]
    },
    {
        title: 'ACTS Stream 5C Site 4',
        location: {
            lat: -3.252294,
            lng: -72.909422
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Stream_5C_Site_4/0.jpg',
                date: '2018-07-11'
            }
        ],
        notes: [
            "Large snail",
            "Stick-like scorpion (more specifically)",
            "Found helicopter dragonfly"
        ],
        data: [
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.252294',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.909422',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Altitude',
                value: '115.125077',
                unit: 'm'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Phosphorus',
                value: '10',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Nitrogen',
                value: '0',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Potassium',
                value: 'Low',
                unit: 'Soil Potassium Scale'
            }
        ]
    },
    {
        title: 'ACTS Stream 5C Site 5',
        location: {
            lat: -3.252444,
            lng: -72.909214
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Stream_5C_Site_5/0.jpg',
                date: '2018-07-11'
            }
        ],
        notes: [
            "Prawn, wolf fish",
            "Note: fish trap picture",
            "Fish hauls are from all 5C sites"
        ],
        data: [
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.252444',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.909214',
                unit: '°'
            },
            {
                date: '2018-07-11',
                factor: 'Location',
                type: 'Altitude',
                value: '112.993025',
                unit: 'm'
            },
            {
                date: '2018-07-11',
                factor: 'Water',
                type: 'pH',
                value: '6.5',
                unit: 'pH Scale'
            }
        ]
    },
    {
        title: 'ACTS Stream A',
        location: {
            lat: -3.248916,
            lng: -72.908256
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Stream_A/0.jpg',
                date: '2018-07-07'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-07',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.248916',
                unit: '°'
            },
            {
                date: '2018-07-07',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.908256',
                unit: '°'
            },
            {
                date: '2018-07-07',
                factor: 'Location',
                type: 'Altitude',
                value: '114.578340',
                unit: 'm'
            },
            {
                date: '2018-07-07',
                factor: 'Water',
                type: 'Dissolved Oxygen',
                value: '1.02',
                unit: 'mg/L'
            },
            {
                date: '2018-07-07',
                factor: 'Water',
                type: 'Temperature',
                value: '23.8',
                unit: '°C'
            }
        ]
    },
    {
        title: 'ACTS Stream B',
        location: {
            lat: -3.250191,
            lng: -72.908406
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Stream_B/0.jpg',
                date: '2018-07-07'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-07',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.250191',
                unit: '°'
            },
            {
                date: '2018-07-07',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.908406',
                unit: '°'
            },
            {
                date: '2018-07-07',
                factor: 'Location',
                type: 'Altitude',
                value: '125.301633',
                unit: 'm'
            },
            {
                date: '2018-07-07',
                factor: 'Water',
                type: 'Dissolved Oxygen',
                value: '3.22',
                unit: 'mg/L'
            },
            {
                date: '2018-07-07',
                factor: 'Water',
                type: 'Temperature',
                value: '23.8',
                unit: '°C'
            }
        ]
    },
    {
        title: 'ACTS Stream D',
        location: {
            lat: -3.249309,
            lng: -72.910340
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Stream_D/0.jpg',
                date: '2018-07-07'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-07',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.249309',
                unit: '°'
            },
            {
                date: '2018-07-07',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.910340',
                unit: '°'
            },
            {
                date: '2018-07-07',
                factor: 'Location',
                type: 'Altitude',
                value: '114.900288',
                unit: 'm'
            },
            {
                date: '2018-07-7',
                factor: 'Water',
                type: 'Dissolved Oxygen',
                value: '5.03',
                unit: 'mg/L'
            },
            {
                date: '2018-07-7',
                factor: 'Water',
                type: 'Temperature',
                value: '24.5',
                unit: '°C'
            }
        ]
    },
    {
        title: 'ACTS Tree 5',
        location: {
            lat: -3.251251,
            lng: -72.907290
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Tree_5/0.jpg',
                date: '2018-07-06'
            },
            {
                title: 'Front',
                url: 'ACTS_Tree_5/1.jpg',
                date: '2018-07-06'
            },
            {
                title: 'Top',
                url: 'ACTS_Tree_5/2.jpg',
                date: '2018-07-06'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.251251',
                unit: '°'
            },
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.907290',
                unit: '°'
            },
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Altitude',
                value: '137.442628',
                unit: 'm'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'UVB',
                value: '16',
                unit: 'mW/m^2'
            },
            {
                date: '2018-07-06',
                factor: 'Soil',
                type: 'Moisture',
                value: '12.5',
                unit: '%'
            },
            {
                date: '2018-07-06',
                factor: 'Soil',
                type: 'pH',
                value: '4',
                unit: 'pH Scale'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Relative Humidity',
                value: '69.74',
                unit: '%'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'PAR',
                value: '9',
                unit: 'umol m^-2 s^-1'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Light',
                value: '21',
                unit: 'Lux'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Temperature',
                value: '28.1',
                unit: '°C'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Phosphorus',
                value: '10',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Nitrogen',
                value: '0',
                unit: 'lb/a'
            }
        ]
    },
    {
        title: 'ACTS Tree 5a',
        location: {
            lat: -3.251281,
            lng: -72.907121
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Tree_5a/0.jpg',
                date: '2018-07-06'
            },
            {
                title: 'Top',
                url: 'ACTS_Tree_5a/1.jpg',
                date: '2018-07-06'
            },
            {
                title: 'Front',
                url: 'ACTS_Tree_5a/2.jpg',
                date: '2018-07-06'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.251281',
                unit: '°'
            },
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.907121',
                unit: '°'
            },
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Altitude',
                value: '137.442622',
                unit: 'm'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'UVB',
                value: '16.1',
                unit: 'mW/m^2'
            },
            {
                date: '2018-07-06',
                factor: 'Soil',
                type: 'Moisture',
                value: '13.1',
                unit: '%'
            },
            {
                date: '2018-07-06',
                factor: 'Soil',
                type: 'pH',
                value: '4',
                unit: 'pH Scale'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Relative Humidity',
                value: '71.52',
                unit: '%'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'PAR',
                value: '9',
                unit: 'umol m^-2 s^-1'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Light',
                value: '47',
                unit: 'Lux'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Temperature',
                value: '28.9',
                unit: '°C'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Phosphorus',
                value: '5',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Nitrogen',
                value: '0',
                unit: 'lb/a'
            }
        ]
    },
    {
        title: 'ACTS Tree 8',
        location: {
            lat: -3.251821,
            lng: -72.906731
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Tree_8/0.jpg',
                date: '2018-07-06'
            },
            {
                title: 'Top',
                url: 'ACTS_Tree_8/1.jpg',
                date: '2018-07-06'
            },
            {
                title: 'Front',
                url: 'ACTS_Tree_8/2.jpg',
                date: '2018-07-06'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.251821',
                unit: '°'
            },
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.906731',
                unit: '°'
            },
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Altitude',
                value: '137.442628',
                unit: 'm'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'UVB',
                value: '15.7',
                unit: 'mW/m^2'
            },
            {
                date: '2018-07-06',
                factor: 'Soil',
                type: 'Moisture',
                value: '14.5',
                unit: '%'
            },
            {
                date: '2018-07-06',
                factor: 'Soil',
                type: 'pH',
                value: '4',
                unit: 'pH Scale'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Relative Humidity',
                value: '82.23',
                unit: '%'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'PAR',
                value: '6',
                unit: 'umol m^-2 s^-1'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Light',
                value: '12',
                unit: 'Lux'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Temperature',
                value: '27',
                unit: '°C'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Phosphorus',
                value: '0',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Nitrogen',
                value: '0',
                unit: 'lb/a'
            }
        ]
    },
    {
        title: 'ACTS Tree 11',
        location: {
            lat: -3.252049,
            lng: -72.906150
        },
        images: [
            {
                title: 'Site',
                url: 'ACTS_Tree_11/0.jpg',
                date: '2018-07-06'
            },
            {
                title: 'Front',
                url: 'ACTS_Tree_11/1.jpg',
                date: '2018-07-06'
            },
            {
                title: 'Top',
                url: 'ACTS_Tree_11/2.jpg',
                date: '2018-07-06'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.252049',
                unit: '°'
            },
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.906150',
                unit: '°'
            },
            {
                date: '2018-07-06',
                factor: 'Location',
                type: 'Altitude',
                value: '132.211881',
                unit: 'm'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'UVB',
                value: '15.7',
                unit: 'mW/m^2'
            },
            {
                date: '2018-07-06',
                factor: 'Soil',
                type: 'Moisture',
                value: '14.5',
                unit: '%'
            },
            {
                date: '2018-07-06',
                factor: 'Soil',
                type: 'pH',
                value: '4',
                unit: 'pH Scale'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Relative Humidity',
                value: '82.23',
                unit: '%'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'PAR',
                value: '6',
                unit: 'umol m^-2 s^-1'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Light',
                value: '12',
                unit: 'Lux'
            },
            {
                date: '2018-07-06',
                factor: 'Air',
                type: 'Temperature',
                value: '27',
                unit: '°C'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Phosphorus',
                value: '0',
                unit: 'lb/a'
            },
            {
                date: '2018-07-11',
                factor: 'Soil',
                type: 'Nitrogen',
                value: '0',
                unit: 'lb/a'
            }
        ]
    },
    {
        title: 'Napo Lodge',
        location: {
            lat: -3.257822,
            lng: -72.917472
        },
        images: [
            {
                title: 'Site',
                url: 'Napo_Lodge/0.jpg',
                date: '2018-06-30'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-06-30',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.25782',
                unit: '°'
            },
            {
                date: '2018-06-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.917472',
                unit: '°'
            },
            {
                date: '2018-06-30',
                factor: 'Location',
                type: 'Altitude',
                value: '93.738615',
                unit: 'm'
            },
            {
                date: '2018-06-30',
                factor: 'Air',
                type: 'Temperature',
                value: '85',
                unit: '°F'
            }
        ]
    },
    {
        title: 'ReNuPeru Fish Pond',
        location: {
            lat: -3.258941,
            lng: -72.915703
        },
        images: [
            {
                title: 'Site',
                url: 'ReNuPeru_Fish_Pond/0.jpg',
                date: '2018-06-30'
            }
        ],
        notes: [

        ],
        data: [
            {
                date: '2018-06-30',
                factor: 'Location',
                type: 'Latitude',
                value: '-3.258941',
                unit: '°'
            },
            {
                date: '2018-06-30',
                factor: 'Location',
                type: 'Longitude',
                value: '-72.915703',
                unit: '°'
            },
            {
                date: '2018-06-30',
                factor: 'Location',
                type: 'Altitude',
                value: '105.127309',
                unit: 'm'
            }
        ]
    }
].sort(function (lhs, rhs) {
    let x = lhs.title.toLowerCase();
    let y = rhs.title.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});

const mapElement = document.getElementById('map');
const sitesElement = document.getElementById('sites');

const map = new google.maps.Map(
    mapElement,
    {
        center: mapInfo.mapCenter,
        mapTypeId: mapInfo.mapType,
        zoom: mapInfo.startZoom,
        tilt: 45,
        fullscreenControl: true,
        mapTypeControl: false,
        panControl: true,
        rotateControl: true,
        scaleControl: true,
        streetViewControl: false,
        zoomControl: true
    });

const markers = [];

function setSelectedMarker(marker, scroll = true) {
    markers.forEach(function (marker, index) {
        marker.infoWindow.close();
        let siteIndex = index + 1;
        marker.setZIndex(siteIndex);
        let rowElement = document.getElementById('site-row-' + siteIndex);
        rowElement.style.background = 'white';
    });
    let rowElement = document.getElementById('site-row-' + marker.zIndex);
    rowElement.style.background = 'lightgray';
    if (scroll) {
        rowElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
    marker.infoWindow.open(map, marker);
    map.panTo(marker.siteData.location);
    marker.setZIndex(100);
}

function showSiteDetails(marker) {
    let dataCarousel = document.getElementById('data-carousel');
    dataCarousel.innerHTML = '';

    let owlCarouselDiv = document.createElement('div');
    owlCarouselDiv.className = 'owl-carousel owl-theme';
    dataCarousel.appendChild(owlCarouselDiv);

    marker.siteData.images.forEach(function (img) {
        let titleElement = document.createElement('p');
        titleElement.style.textAlign = 'center';
        titleElement.style.fontSize = '10px';
        titleElement.innerText = img.title == null ? ' ' : img.title;

        let imgElement = document.createElement('img');
        imgElement.src = img.url;

        let dateLabel = document.createElement('p');
        dateLabel.style.textAlign = 'center';
        dateLabel.style.fontSize = '10px';
        dateLabel.innerText = img.date;

        let itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.appendChild(titleElement);
        itemDiv.appendChild(imgElement);
        itemDiv.appendChild(dateLabel);

        owlCarouselDiv.appendChild(itemDiv);
    });

    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    let dataNotesText = document.getElementById('data-notes-text');
    dataNotesText.value = '';
    marker.siteData.notes.forEach(function (note, index) {
        if (index === 0) {
            dataNotesText.value = note;
        } else {
            dataNotesText.value = dataNotesText.value + '\n' + note;
        }

    });

    let dataTableDiv = document.getElementById('data-table-div');
    dataTableDiv.innerHTML = '';

    let dataTable = document.createElement('table');
    dataTable.id = 'data-table';
    dataTable.className = 'display';
    dataTable.style.width = '100%';

    let dataTableHeader = document.createElement('thead');
    let dataTableHeaderRow = document.createElement('tr');
    let dataTableHeaderDate = document.createElement('th');
    dataTableHeaderDate.innerText = 'Date';
    let dataTableHeaderFactor = document.createElement('th');
    dataTableHeaderFactor.innerText = 'Factor';
    let dataTableHeaderType = document.createElement('th');
    dataTableHeaderType.innerText = 'Type';
    let dataTableHeaderValue = document.createElement('th');
    dataTableHeaderValue.innerText = 'Value';
    let dataTableHeaderUnit = document.createElement('th');
    dataTableHeaderUnit.innerText = 'Unit';
    dataTableHeaderRow.appendChild(dataTableHeaderDate);
    dataTableHeaderRow.appendChild(dataTableHeaderFactor);
    dataTableHeaderRow.appendChild(dataTableHeaderType);
    dataTableHeaderRow.appendChild(dataTableHeaderValue);
    dataTableHeaderRow.appendChild(dataTableHeaderUnit);
    dataTableHeader.appendChild(dataTableHeaderRow);

    let dataTableBody = document.createElement('tbody');

    let dataTableFooter = document.createElement('tfoot');
    let dataTableFooterRow = document.createElement('tr');
    let dataTableFooterDate = document.createElement('th');
    dataTableFooterDate.innerText = 'Date';
    let dataTableFooterFactor = document.createElement('th');
    dataTableFooterFactor.innerText = 'Factor';
    let dataTableFooterType = document.createElement('th');
    dataTableFooterType.innerText = 'Type';
    let dataTableFooterValue = document.createElement('th');
    dataTableFooterValue.innerText = 'Value';
    let dataTableFooterUnit = document.createElement('th');
    dataTableFooterUnit.innerText = 'Unit';
    dataTableFooterRow.appendChild(dataTableFooterDate);
    dataTableFooterRow.appendChild(dataTableFooterFactor);
    dataTableFooterRow.appendChild(dataTableFooterType);
    dataTableFooterRow.appendChild(dataTableFooterValue);
    dataTableFooterRow.appendChild(dataTableFooterUnit);
    dataTableFooter.appendChild(dataTableFooterRow);

    dataTable.appendChild(dataTableHeader);
    dataTable.appendChild(dataTableBody);
    dataTable.appendChild(dataTableFooter);

    dataTableDiv.appendChild(dataTable);

    if (marker.siteData.data.length > 0) {
        marker.siteData.data.forEach(function (data) {
            let dateColumn = document.createElement('td');
            dateColumn.innerText = data.date;

            let factorColumn = document.createElement('td');
            factorColumn.innerText = data.factor;

            let typeColumn = document.createElement('td');
            typeColumn.innerText = data.type;

            let valueColumn = document.createElement('td');
            valueColumn.innerText = data.value;

            let unitColumn = document.createElement('td');
            unitColumn.innerText = data.unit;

            let tableRow = document.createElement('tr');
            tableRow.style.textAlign = 'center';
            tableRow.appendChild(dateColumn);
            tableRow.appendChild(factorColumn);
            tableRow.appendChild(typeColumn);
            tableRow.appendChild(valueColumn);
            tableRow.appendChild(unitColumn);

            dataTableBody.appendChild(tableRow);
        });
    }
    $('#data-table').DataTable();

    $('#site-data-modal').dialog({
        title: marker.siteData.title,
        modal: true,
        width: $(window).width() - 100,
        height: $(window).height() - 100
    });
    let topElement = document.getElementById('top');
    topElement.scrollIntoView();
}

siteData.forEach(function (siteData, index) {
    let siteIndex = index + 1;

    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(siteData.location.lat, siteData.location.lng),
        title: siteData.title,
        label: siteIndex.toString(),
        map: map,
        animation: google.maps.Animation.DROP,
        optimized: false,
        zIndex: siteIndex
    });
    markers.push(marker);

    marker.siteData = siteData;

    let titleElement = document.createElement('a');
    titleElement.href = '#';
    titleElement.innerText = siteData.title;
    titleElement.onclick = function() {
        showSiteDetails(marker);
    };
    marker.infoWindow = new google.maps.InfoWindow({
        content: titleElement
    });
    marker.addListener('click', function () {
        setSelectedMarker(marker);
    });

    let siteRow = document.getElementById('site-row-' + siteIndex);
    siteRow.ondblclick = function () {
        setSelectedMarker(marker, false);
        showSiteDetails(marker);
    };

    let siteTitle = document.getElementById('site-title-' + siteIndex);
    siteTitle.innerText = siteIndex + '. ' + siteData.title;
    siteTitle.onclick = function () {
        setSelectedMarker(marker, false);
    };
    siteTitle.ondblclick = function () {
        showSiteDetails(marker);
    };

    let siteImage = document.getElementById('site-image-' + siteIndex);
    siteImage.src = siteData.images[0].url;
    siteImage.style.cursor = 'pointer';
    siteImage.onmouseover = function () {
        siteImage.style.borderColor = 'blue';
        siteImage.style.borderStyle = 'solid';
        siteImage.style.borderWidth = 'thin';
    };
    siteImage.onmouseout = function () {
        siteImage.style.border = '';
    };
    siteImage.onclick = function () {
        setSelectedMarker(marker, false);
    };
    siteImage.ondblclick = function () {
        showSiteDetails(marker);
    };
});

function updateElementHeights() {
    let height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    sitesElement.style.height = height + 'px';
    mapElement.style.height = height + 'px';
}

window.onload = updateElementHeights;
window.onresize = updateElementHeights;