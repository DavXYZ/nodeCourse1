import axios from 'axios';
import translateText from './translate.js';

const geoUrl = 'http://api.openweathermap.org/geo/1.0/direct';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherApiKey = 'f1dac33ba087eecd888cb8baab76acbb'; 

export async function fetchWeather(city) {
    try {
        if (!city) {
            throw new Error("City is undefined");
        }
        const geoResponse = await axios.get(`${geoUrl}?q=${city}&appid=${weatherApiKey}`);
        if (!geoResponse.data || geoResponse.data.length === 0) {
            throw new Error(`No data received for city ${city}`);
        }
        const { lat, lon } = geoResponse.data[0];
        const weatherResponse = await axios.get(`${weatherUrl}`, {
            params: {
                lat,
                lon,
                appid: weatherApiKey,
                units: 'metric'
            }
        });
        const { temp, humidity, pressure } = weatherResponse.data.main;
        const { main: condition, description } = weatherResponse.data.weather[0];
        const { speed: windSpeed, deg: windDirection } = weatherResponse.data.wind;
        const { sunrise, sunset } = weatherResponse.data.sys;
        const visibility = weatherResponse.data.visibility;
        const emoji = getWeatherEmoji(condition);

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        const weatherInfo = {
            description,
            temp: Math.round(temp),
            humidity,
            pressure,
            windSpeed,
            windDirection,
            visibility,
            sunriseTime,
            sunsetTime,
            emoji
        }
        return weatherInfo
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        throw error;
    }
}

function getWeatherEmoji(condition) {
    const weatherEmojis = {
        'Clear': '☀️',    
        'Clouds': '☁️',   
        'Rain': '🌧️',    
        'Snow': '❄️',    
        'Drizzle': '🌦️', 
        'Thunderstorm': '⛈️', 
        'Mist': '😶‍🌫️',    
        'Smoke': '😶‍🌫️',
        'Haze': '😶‍🌫️',
        'Dust': '🌪️',
        'Fog': '😶‍🌫️',
        'Sand': '🌪️',
        'Ash': '😶‍🌫️',
        'Squall': '🌬️',
        'Tornado': '🌪️'
    };
    return weatherEmojis[condition] || '🌀'; 
}
