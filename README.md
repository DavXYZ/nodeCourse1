# Greetings CLI Tool

Welcome to the Greetings CLI Tool! This Node.js command-line application allows you to generate personalized greetings in different languages and provides additional details based on the language, such as weather information from the capital city associated with that language.

## Features

- **Personalized Greeting:** Customize your greeting message and recipient name.
- **Multilingual Support:** Generate greetings in various languages with automatic translation.
- **Detailed Output:** Adjust the verbosity level to include date and time or detailed weather information.
- **Weather Information:** Fetch current weather data for the capital city of the language used.

## Installation

1. **Clone the repository:**
   git clone https://github.com/yourusername/greetings-cli-tool.git
   cd greetings-cli-tool

2. npm install

## Usage
You can use the CLI tool to generate greetings by running the following command:

node index.js -n <name> -l <level> -g <greeting> -L <language>

Options
* -n, --name <name>: The name to greet (default: "Guest").
* -l, --level <level>: Verbosity level (1, 2, 3).
** Level 1: Basic greeting.
** Level 2: Greeting with date and time.
** Level 3: Greeting with weather information for the capital city.
* -g, --greeting <greeting>: Custom greeting message (default: "Hello").
* -L, --language <language>: Language of the greeting (default: "English"). Supported languages are listed in the languages.js file.
Example
To greet "Alice" in Spanish with weather information:

node index.js -n Alice -l 3 -L Spanish

Files
**index.js**: Main script to generate greetings based on CLI input.
**languages.js**: Contains the mapping of languages to their respective capitals.
**translate.js**: Handles translation of text using the LibreTranslate API.
**weather.capital.js**: Fetches weather information for the capital city of the selected language.
**config.js**: Contains default configuration values.

## Dependencies
- axios: Promise-based HTTP client for making requests.
- commander: Command-line interface for Node.js.
- form-data: Form data handling for HTTP requests.
- node-fetch: Node.js implementation of the Fetch API.

## API Keys
This project uses the OpenWeatherMap API to fetch weather data. You need to insert your API key in the weather.capital.js file.

Happy greeting!

