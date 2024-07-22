
import { program } from 'commander';
import { defaultGreeting, defaultName, defaultLanguage } from './config.js';
import translateText from './translate.js';
import languageMap from './languages.js';
import { fetchWeather } from './weather.capital.js';

const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const getOurGreeting = async (greeting, name, level, language) => {
    const targetLanguage = languageMap[language].language || 'en';
    const city = languageMap[language].capital;
    let msg = greeting;
    if (targetLanguage !== 'en') {
        msg = await translateText('en', targetLanguage, greeting);
        msg += ' ';
        msg += await translateText('en', targetLanguage, name)
        msg += '\n';
        if (level === 2) {
            const dt = getDate();
            msg += `${await translateText('en', targetLanguage, 'Date and Time')}: ${dt}`;
        }
        else if (level === 3) {
            const weatherInfo = await fetchWeather(city);
            msg += await translateText('en', targetLanguage, `Weather in ${city}`)
            msg += '\n'
            msg += await translateText('en', targetLanguage, "Description")
            msg += ` : ${weatherInfo.description}`;
            msg += '\n'
            msg += await translateText('en', targetLanguage, "Temperature")
            msg += ` : ${weatherInfo.temp}°C ${weatherInfo.emoji}`;
            msg += '\n';
            msg += await translateText('en', targetLanguage, "Humidity")
            msg += ` : ${weatherInfo.humidity}%`
            msg += '\n'
            msg += await translateText('en', targetLanguage, "Pressure")
            msg += ` : ${weatherInfo.pressure}`
            msg += '\n'
            msg += await translateText('en', targetLanguage, "Wind Speed")
            msg += ` : ${weatherInfo.windSpeed}m/s  `
            msg += await translateText('en', targetLanguage, "Direction")
            msg += ` : ${weatherInfo.windDirection}°`
            msg += '\n'
            msg += await translateText('en', targetLanguage, "Visibility")
            msg += ` : ${weatherInfo.visibility} `
            msg += await translateText('en', targetLanguage, "meters")
            msg += '\n'
            msg += await translateText('en', targetLanguage, "- Sunrise")
            msg += ` : ${weatherInfo.sunriseTime}`
            msg += '\n'
            msg += await translateText('en', targetLanguage, "- Sunset")
            msg += ` : ${weatherInfo.sunsetTime}`

        }
    }
    else {
        msg += ` ${name}`;
        msg += '\n';
        if (level === 2) {
            const dt = getDate();
            msg += `Date and Time: ${dt}`;
        }
        else if (level === 3) {
            const weatherInfo = await fetchWeather(city);
            msg += `Weather in ${city}\n`;
            msg += `Description: ${weatherInfo.description}\n`;
            msg += `Temperature: ${weatherInfo.temp}°C ${weatherInfo.emoji}\n`;
            msg += `Humidity: ${weatherInfo.humidity}%\n`;
            msg += `Pressure: ${weatherInfo.pressure}\n`;
            msg += `Wind Speed: ${weatherInfo.windSpeed} m/s\n`;
            msg += `Direction: ${weatherInfo.windDirection}°\n`;
            msg += `Visibility: ${weatherInfo.visibility} meters\n`;
            msg += `- Sunrise: ${weatherInfo.sunriseTime}\n`;
            msg += `- Sunset: ${weatherInfo.sunsetTime}\n`;
        }
    }
    return msg;
}

program
    .option('-n, --name <name>', 'name to greet', defaultName)
    .option('-l, --level <level>', 'verbosity level (1, 2, 3)', (value) => parseInt(value, 10), 1)
    .option('-g, --greeting <greeting>', 'custom greeting message', defaultGreeting)
    .option('-L, --language <language>', 'language of the greeting', defaultLanguage);

program.parse(process.argv);

const options = program.opts();
//console.log('Parsed options:', options);
getOurGreeting(options.greeting, options.name, options.level, options.language)
    .then(greetingMessage => console.log(greetingMessage))
    .catch(error => console.error('Failed to generate greeting:', error));
