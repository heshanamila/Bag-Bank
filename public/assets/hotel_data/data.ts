import { Hotel } from '../../app/classes/hotel';

export const HOTELS: Hotel[] = [
    {
        id: '01',
        name: 'Luggage Store - Galle Railway Station',
        address: {
            detail: 'Galle Railway Station, Galle',
            city: 'Galle',
            district: 'Maharashtra',
            zipcode: '411001'
        },
        latitude : 18.5351,
        longitude: 73.8831,
        // tslint:disable-next-line:max-line-length
        description: 'Location: Located in the heart of Pune\'s dynamic central business district, Conrad Pune is an iconic structure.The hotel is 3 km from Pune Railway Station and a 20-min drive from the Pune Airport. Nearby tourist attractions include Shaniwar Wada Palace (4 km) and Aga Khan Palace (5 km).Room Amenities: Conrad Pune offers modern guest rooms and suites. All the rooms include an HDTV, espresso machine, minibar, iron/ironing board, individually controlled air-conditioning, and a gleaming marble bathroom with walk-in rain shower. Hotel Facilities: Events can be organized in the hotel for up to 1200 people. There is a luxury spa, hair salon, fitness centre, concierge, 24-hour business centre, babysitting services and 24-hour room service. Dining:Coriander Kitchen (multi-cuisine), Zeera (grilled dishes and seafood), Koji (Asian), Masu (cocktail bar), Pune Sugar Box (24-hour bakery), Kabana (pool bar) and The Executive Lounge.',
        website: 'http://www.railway.gov.lk/web/',
        contact: '+94 912234945',
        email: 'galle@railway.gov.lk',
        type: '400 Meters from Station',
        rating: {
            service: 5
        },
        room_types: {
            // tslint:disable-next-line:max-line-length
            'Large': ['', 399],
            // tslint:disable-next-line:max-line-length
            'Medium': ['', 299],
            // tslint:disable-next-line:max-line-length
            'Small': ['', 199],
        }
    },
    {
        id: '02',
        name: 'Luggage Store - Mathara Railway Station',
        address: {
            detail: 'MAthara Railway Station, Mathara',
            city: 'Mathara',
            district: 'Mathara',
            zipcode: '511001'
        },
        latitude : 18.5351,
        longitude: 73.8831,
        // tslint:disable-next-line:max-line-length
        description: 'Location: Located in the heart of MAthara.',
        website: 'http://www.railway.gov.lk/web/',
        contact: '+94 912234945',
        email: 'mathara@railway.gov.lk',
        type: '400 Meters from Station',
        rating: {
            service: 5
        },
        room_types: {
            // tslint:disable-next-line:max-line-length
            'Large': ['', 399],
            // tslint:disable-next-line:max-line-length
            'Medium': ['', 299],
            // tslint:disable-next-line:max-line-length
            'Small': ['', 199],
        }
    },
    {
        id: '03',
        name: 'Luggage Store - Fort Railway Station',
        address: {
            detail: 'Fort Railway Station, Colombo',
            city: 'Colombo',
            district: 'Colombo',
            zipcode: '111001'
        },
        latitude : 18.5351,
        longitude: 73.8831,
        // tslint:disable-next-line:max-line-length
        description: 'Location: Located in the heart of Colombos.',
        website: 'http://www.railway.gov.lk/web/',
        contact: '+94 112234945',
        email: 'fort@railway.gov.lk',
        type: '400 Meters from Station',
        rating: {
            service: 5
        },
        room_types: {
            // tslint:disable-next-line:max-line-length
            'Large': ['', 399],
            // tslint:disable-next-line:max-line-length
            'Medium': ['', 299],
            // tslint:disable-next-line:max-line-length
            'Small': ['', 199],
        }
    },
];