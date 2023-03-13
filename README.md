# Geofog

Geofog weather API is built with Express. It provides current weather information for a given location. It uses the OpenWeatherMap API to retrieve weather data and returns it in JSON format.

## Prerequisites

- Node.js v14 or higher
- npm or yarn package manager
- OpenWeatherMap API key (you can sign up for a free account to get an API key)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Folawewo/geofog.git
```

2. Install dependencies:

```
cd geofog
npm install
```

3. Set environment variables:

Create a **`.env`** file in the root directory of the project and add the following:

```env
PORT=8000 # or any other available port
API_KEY=your_openweathermap_api_key_here
```

4. Start the server:

```bash
npm start
```

The server will start on the specified port (default is 8000).

## API Endpoints

### GET /weather/:location

Retrieves current weather data for a given location.

Parameters

- **`q`** (required): The city name or city name and country code (e.g. "London,UK")
- **`units`** (optional): Units of measurement. Default is **`metric`**.

Example Request

```http
GET /weather/london

GET /weather?q=London,UK&units=metric
```

Example Response

```json
{
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 6.69,
    "feels_like": 3.18,
    "temp_min": 5.56,
    "temp_max": 8.33,
    "pressure": 1025,
    "humidity": 75
  },
  "visibility": 10000,
  "wind": {
    "speed": 1.54,
    "deg": 70
  },
  "clouds": {
    "all": 100
  },
  "dt": 1647115260,
  "sys": {
    "type": 2,
    "id": 2019646,
    "country": "GB",
    "sunrise": 1647069954,
    "sunset": 1647112396
  },
  "timezone": 0,
  "id": 2643743,
  "name": "London",
  "cod": 200
}
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.
