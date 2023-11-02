import { useEffect, useState } from 'react'

function WeatherApp () {
    const [weather, setWeather] =  useState(null)
    const celsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(2)
    }

const fetchWeather = () => {
    console.log('Fake request')
    return Promise.resolve({
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1696453200,
                "main": {
                    "temp": 291.75,
                    "feels_like": 291.15,
                    "temp_min": 291.75,
                    "temp_max": 292.26,
                    "pressure": 1023,
                    "sea_level": 1023,
                    "grnd_level": 1018,
                    "humidity": 57,
                    "temp_kf": -0.51
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 33
                },
                "wind": {
                    "speed": 2.85,
                    "deg": 343,
                    "gust": 6.52
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-04 21:00:00"
            },
            {
                "dt": 1696464000,
                "main": {
                    "temp": 290.72,
                    "feels_like": 289.97,
                    "temp_min": 290.33,
                    "temp_max": 290.72,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1019,
                    "humidity": 55,
                    "temp_kf": 0.39
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 67
                },
                "wind": {
                    "speed": 3.3,
                    "deg": 345,
                    "gust": 7.38
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-05 00:00:00"
            },
            {
                "dt": 1696474800,
                "main": {
                    "temp": 286.45,
                    "feels_like": 285.43,
                    "temp_min": 286.45,
                    "temp_max": 286.45,
                    "pressure": 1025,
                    "sea_level": 1025,
                    "grnd_level": 1019,
                    "humidity": 61,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 47
                },
                "wind": {
                    "speed": 2.75,
                    "deg": 337,
                    "gust": 3.23
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-05 03:00:00"
            },
            {
                "dt": 1696485600,
                "main": {
                    "temp": 289.3,
                    "feels_like": 288.22,
                    "temp_min": 289.3,
                    "temp_max": 289.3,
                    "pressure": 1026,
                    "sea_level": 1026,
                    "grnd_level": 1020,
                    "humidity": 48,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 29
                },
                "wind": {
                    "speed": 2.3,
                    "deg": 5,
                    "gust": 3.59
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-05 06:00:00"
            },
            {
                "dt": 1696496400,
                "main": {
                    "temp": 294.22,
                    "feels_like": 293.22,
                    "temp_min": 294.22,
                    "temp_max": 294.22,
                    "pressure": 1025,
                    "sea_level": 1025,
                    "grnd_level": 1020,
                    "humidity": 32,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 2.22,
                    "deg": 340,
                    "gust": 2.57
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-05 09:00:00"
            },
            {
                "dt": 1696507200,
                "main": {
                    "temp": 296.75,
                    "feels_like": 295.92,
                    "temp_min": 296.75,
                    "temp_max": 296.75,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1017,
                    "humidity": 29,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 21
                },
                "wind": {
                    "speed": 2.28,
                    "deg": 250,
                    "gust": 3.74
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-05 12:00:00"
            },
            {
                "dt": 1696518000,
                "main": {
                    "temp": 294.73,
                    "feels_like": 293.86,
                    "temp_min": 294.73,
                    "temp_max": 294.73,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1015,
                    "humidity": 35,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 93
                },
                "wind": {
                    "speed": 2.53,
                    "deg": 255,
                    "gust": 3.42
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-05 15:00:00"
            },
            {
                "dt": 1696528800,
                "main": {
                    "temp": 290.61,
                    "feels_like": 289.64,
                    "temp_min": 290.61,
                    "temp_max": 290.61,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1015,
                    "humidity": 47,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 65
                },
                "wind": {
                    "speed": 1.2,
                    "deg": 146,
                    "gust": 1.25
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-05 18:00:00"
            },
            {
                "dt": 1696539600,
                "main": {
                    "temp": 291.55,
                    "feels_like": 290.83,
                    "temp_min": 291.55,
                    "temp_max": 291.55,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1014,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 75
                },
                "wind": {
                    "speed": 3.11,
                    "deg": 192,
                    "gust": 7.6
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-05 21:00:00"
            },
            {
                "dt": 1696550400,
                "main": {
                    "temp": 288.78,
                    "feels_like": 288.04,
                    "temp_min": 288.78,
                    "temp_max": 288.78,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 1013,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 4.02,
                    "deg": 263,
                    "gust": 9.43
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-06 00:00:00"
            },
            {
                "dt": 1696561200,
                "main": {
                    "temp": 287.77,
                    "feels_like": 286.65,
                    "temp_min": 287.77,
                    "temp_max": 287.77,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1014,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 4.43,
                    "deg": 331,
                    "gust": 11.9
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-06 03:00:00"
            },
            {
                "dt": 1696572000,
                "main": {
                    "temp": 289.46,
                    "feels_like": 288.37,
                    "temp_min": 289.46,
                    "temp_max": 289.46,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1016,
                    "humidity": 47,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 53
                },
                "wind": {
                    "speed": 6.61,
                    "deg": 330,
                    "gust": 11.71
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-06 06:00:00"
            },
            {
                "dt": 1696582800,
                "main": {
                    "temp": 292.99,
                    "feels_like": 292.02,
                    "temp_min": 292.99,
                    "temp_max": 292.99,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1017,
                    "humidity": 38,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 38
                },
                "wind": {
                    "speed": 7.41,
                    "deg": 330,
                    "gust": 10.17
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-06 09:00:00"
            },
            {
                "dt": 1696593600,
                "main": {
                    "temp": 294.45,
                    "feels_like": 293.26,
                    "temp_min": 294.45,
                    "temp_max": 294.45,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1016,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 38
                },
                "wind": {
                    "speed": 7.88,
                    "deg": 332,
                    "gust": 9.66
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-06 12:00:00"
            },
            {
                "dt": 1696604400,
                "main": {
                    "temp": 291.86,
                    "feels_like": 290.67,
                    "temp_min": 291.86,
                    "temp_max": 291.86,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1017,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 48
                },
                "wind": {
                    "speed": 6.2,
                    "deg": 347,
                    "gust": 9.05
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-06 15:00:00"
            },
            {
                "dt": 1696615200,
                "main": {
                    "temp": 286.3,
                    "feels_like": 285.03,
                    "temp_min": 286.3,
                    "temp_max": 286.3,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1018,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 2.95,
                    "deg": 325,
                    "gust": 4.6
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-06 18:00:00"
            },
            {
                "dt": 1696626000,
                "main": {
                    "temp": 284.62,
                    "feels_like": 283.34,
                    "temp_min": 284.62,
                    "temp_max": 284.62,
                    "pressure": 1025,
                    "sea_level": 1025,
                    "grnd_level": 1019,
                    "humidity": 58,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 45
                },
                "wind": {
                    "speed": 2.46,
                    "deg": 322,
                    "gust": 2.44
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-06 21:00:00"
            },
            {
                "dt": 1696636800,
                "main": {
                    "temp": 283.07,
                    "feels_like": 282.81,
                    "temp_min": 283.07,
                    "temp_max": 283.07,
                    "pressure": 1025,
                    "sea_level": 1025,
                    "grnd_level": 1019,
                    "humidity": 64,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 39
                },
                "wind": {
                    "speed": 1.4,
                    "deg": 279,
                    "gust": 1.3
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-07 00:00:00"
            },
            {
                "dt": 1696647600,
                "main": {
                    "temp": 282.5,
                    "feels_like": 282.5,
                    "temp_min": 282.5,
                    "temp_max": 282.5,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1018,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 1.24,
                    "deg": 212,
                    "gust": 1.2
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-07 03:00:00"
            },
            {
                "dt": 1696658400,
                "main": {
                    "temp": 286.87,
                    "feels_like": 285.55,
                    "temp_min": 286.87,
                    "temp_max": 286.87,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1017,
                    "humidity": 48,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 52
                },
                "wind": {
                    "speed": 2.62,
                    "deg": 214,
                    "gust": 4.85
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-07 06:00:00"
            },
            {
                "dt": 1696669200,
                "main": {
                    "temp": 292.79,
                    "feels_like": 291.65,
                    "temp_min": 292.79,
                    "temp_max": 292.79,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1014,
                    "humidity": 32,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 95
                },
                "wind": {
                    "speed": 7.05,
                    "deg": 229,
                    "gust": 8.54
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-07 09:00:00"
            },
            {
                "dt": 1696680000,
                "main": {
                    "temp": 296.49,
                    "feels_like": 295.4,
                    "temp_min": 296.49,
                    "temp_max": 296.49,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1011,
                    "humidity": 20,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 5.99,
                    "deg": 248,
                    "gust": 7.23
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-07 12:00:00"
            },
            {
                "dt": 1696690800,
                "main": {
                    "temp": 294.28,
                    "feels_like": 293.02,
                    "temp_min": 294.28,
                    "temp_max": 294.28,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1009,
                    "humidity": 22,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 73
                },
                "wind": {
                    "speed": 3.34,
                    "deg": 255,
                    "gust": 4.8
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-07 15:00:00"
            },
            {
                "dt": 1696701600,
                "main": {
                    "temp": 289.9,
                    "feels_like": 288.49,
                    "temp_min": 289.9,
                    "temp_max": 289.9,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1009,
                    "humidity": 33,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 2.94,
                    "deg": 244,
                    "gust": 3.8
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-07 18:00:00"
            },
            {
                "dt": 1696712400,
                "main": {
                    "temp": 288.82,
                    "feels_like": 287.59,
                    "temp_min": 288.82,
                    "temp_max": 288.82,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1008,
                    "humidity": 44,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 70
                },
                "wind": {
                    "speed": 3.31,
                    "deg": 267,
                    "gust": 7.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-07 21:00:00"
            },
            {
                "dt": 1696723200,
                "main": {
                    "temp": 289.15,
                    "feels_like": 288.03,
                    "temp_min": 289.15,
                    "temp_max": 289.15,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1006,
                    "humidity": 47,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 83
                },
                "wind": {
                    "speed": 4.81,
                    "deg": 260,
                    "gust": 12.21
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-08 00:00:00"
            },
            {
                "dt": 1696734000,
                "main": {
                    "temp": 291.02,
                    "feels_like": 290.06,
                    "temp_min": 291.02,
                    "temp_max": 291.02,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1004,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 5.96,
                    "deg": 255,
                    "gust": 12.79
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-08 03:00:00"
            },
            {
                "dt": 1696744800,
                "main": {
                    "temp": 292.24,
                    "feels_like": 291.38,
                    "temp_min": 292.24,
                    "temp_max": 292.24,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1005,
                    "humidity": 45,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 5.83,
                    "deg": 287,
                    "gust": 11.06
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-08 06:00:00"
            },
            {
                "dt": 1696755600,
                "main": {
                    "temp": 293.15,
                    "feels_like": 292.51,
                    "temp_min": 293.15,
                    "temp_max": 293.15,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1006,
                    "humidity": 50,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 11.8,
                    "deg": 331,
                    "gust": 12.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-08 09:00:00"
            },
            {
                "dt": 1696766400,
                "main": {
                    "temp": 288.97,
                    "feels_like": 288.04,
                    "temp_min": 288.97,
                    "temp_max": 288.97,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1008,
                    "humidity": 55,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 78
                },
                "wind": {
                    "speed": 7.14,
                    "deg": 332,
                    "gust": 11.61
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-08 12:00:00"
            },
            {
                "dt": 1696777200,
                "main": {
                    "temp": 284.53,
                    "feels_like": 283.55,
                    "temp_min": 284.53,
                    "temp_max": 284.53,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1011,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.11,
                    "deg": 326,
                    "gust": 10.69
                },
                "visibility": 10000,
                "pop": 0.7,
                "rain": {
                    "3h": 0.36
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-08 15:00:00"
            },
            {
                "dt": 1696788000,
                "main": {
                    "temp": 284.12,
                    "feels_like": 282.89,
                    "temp_min": 284.12,
                    "temp_max": 284.12,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1014,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.22,
                    "deg": 305,
                    "gust": 10.01
                },
                "visibility": 10000,
                "pop": 0.44,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-08 18:00:00"
            },
            {
                "dt": 1696798800,
                "main": {
                    "temp": 281.81,
                    "feels_like": 278.79,
                    "temp_min": 281.81,
                    "temp_max": 281.81,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1016,
                    "humidity": 43,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 5.72,
                    "deg": 330,
                    "gust": 12.82
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-08 21:00:00"
            },
            {
                "dt": 1696809600,
                "main": {
                    "temp": 279.13,
                    "feels_like": 276.49,
                    "temp_min": 279.13,
                    "temp_max": 279.13,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1018,
                    "humidity": 50,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 36
                },
                "wind": {
                    "speed": 3.53,
                    "deg": 315,
                    "gust": 7.94
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-09 00:00:00"
            },
            {
                "dt": 1696820400,
                "main": {
                    "temp": 277.69,
                    "feels_like": 274.98,
                    "temp_min": 277.69,
                    "temp_max": 277.69,
                    "pressure": 1026,
                    "sea_level": 1026,
                    "grnd_level": 1020,
                    "humidity": 55,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 3.17,
                    "deg": 303,
                    "gust": 6.1
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-09 03:00:00"
            },
            {
                "dt": 1696831200,
                "main": {
                    "temp": 280.67,
                    "feels_like": 277.55,
                    "temp_min": 280.67,
                    "temp_max": 280.67,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1022,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 5.2,
                    "deg": 315,
                    "gust": 9.48
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-09 06:00:00"
            },
            {
                "dt": 1696842000,
                "main": {
                    "temp": 285.17,
                    "feels_like": 283.32,
                    "temp_min": 285.17,
                    "temp_max": 285.17,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1022,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 10
                },
                "wind": {
                    "speed": 6.06,
                    "deg": 325,
                    "gust": 7.55
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-09 09:00:00"
            },
            {
                "dt": 1696852800,
                "main": {
                    "temp": 286.94,
                    "feels_like": 285,
                    "temp_min": 286.94,
                    "temp_max": 286.94,
                    "pressure": 1026,
                    "sea_level": 1026,
                    "grnd_level": 1021,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 55
                },
                "wind": {
                    "speed": 5.66,
                    "deg": 314,
                    "gust": 6.58
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-09 12:00:00"
            },
            {
                "dt": 1696863600,
                "main": {
                    "temp": 284.98,
                    "feels_like": 282.9,
                    "temp_min": 284.98,
                    "temp_max": 284.98,
                    "pressure": 1026,
                    "sea_level": 1026,
                    "grnd_level": 1021,
                    "humidity": 26,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.82,
                    "deg": 302,
                    "gust": 6.06
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-10-09 15:00:00"
            },
            {
                "dt": 1696874400,
                "main": {
                    "temp": 280.22,
                    "feels_like": 279.11,
                    "temp_min": 280.22,
                    "temp_max": 280.22,
                    "pressure": 1027,
                    "sea_level": 1027,
                    "grnd_level": 1021,
                    "humidity": 37,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 82
                },
                "wind": {
                    "speed": 1.82,
                    "deg": 275,
                    "gust": 1.76
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-10-09 18:00:00"
            }
        ],
        "city": {
            "id": 618426,
            "name": "Chișinău",
            "coord": {
                "lat": 47,
                "lon": 28.9
            },
            "country": "MD",
            "population": 635994,
            "timezone": 10800,
            "sunrise": 1696392379,
            "sunset": 1696434001}
    })
}

// const fetchWeather = () => fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=47.00&lon=28.90&appid=16453001b85861f7ab9fa0ce9a831a94`)
//                             .then((res) => res.json())

  useEffect(() => {
    fetchWeather().then((jsonData) => setWeather(jsonData))   
  }, [weather])
    return (
        <div className='weather'>
            {weather ? (
                <div className='weather_wrapper'>
                    <h2>Weather in <span>{weather.city.name}</span></h2>
                    <div>
                        <p>Temperature</p>
                        <span>{celsius(weather.list[0].main.temp)}°C</span>
                    </div>
                    <div>
                        <p>Feels like</p>
                        <span>{celsius(weather.list[0].main.feels_like)}°C</span>
                    </div>
                    <div>
                        <p>Humidity</p>
                        <span>{weather.list[0].main.humidity}</span>
                    </div>
                    <div>
                        <p>Wind speed</p>
                        <span>{weather.list[0].wind.speed}</span>
                    </div>
                </div>
            ) : (
                <p>Loading weather data</p>
            )}
        </div>
    )
}

export default WeatherApp