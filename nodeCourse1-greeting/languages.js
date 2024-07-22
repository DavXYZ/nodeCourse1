const languageMap = {
    Afrikaans: { language: 'af', capital: 'Pretoria' },
    Albanian: { language: 'sq', capital: 'Tirana' },
    Amharic: { language: 'am', capital: 'Addis Ababa' },
    Arabic: { language: 'ar', capital: 'Riyadh' },
    Armenian: { language: 'hy', capital: 'Yerevan' },
    Azerbaijani: { language: 'az', capital: 'Baku' },
    Basque: { language: 'eu', capital: '' },
    Belarusian: { language: 'be', capital: 'Minsk' },
    Bengali: { language: 'bn', capital: 'Dhaka' },
    Bosnian: { language: 'bs', capital: 'Sarajevo' },
    Bulgarian: { language: 'bg', capital: 'Sofia' },
    Catalan: { language: 'ca', capital: 'Andorra la Vella' },
    Cebuano: { language: 'ceb', capital: '' },
    Chichewa: { language: 'ny', capital: 'Lilongwe' },
    'Chinese (Simplified)': { language: 'zh-CN', capital: 'Beijing' },
    'Chinese (Traditional)': { language: 'zh-TW', capital: 'Taipei' },
    Corsican: { language: 'co', capital: '' },
    Croatian: { language: 'hr', capital: 'Zagreb' },
    Czech: { language: 'cs', capital: 'Prague' },
    Danish: { language: 'da', capital: 'Copenhagen' },
    Dutch: { language: 'nl', capital: 'Amsterdam' },
    English: { language: 'en', capital: 'Washington, D.C.' },
    Esperanto: { language: 'eo', capital: '' },
    Estonian: { language: 'et', capital: 'Tallinn' },
    Filipino: { language: 'tl', capital: 'Manila' },
    Finnish: { language: 'fi', capital: 'Helsinki' },
    French: { language: 'fr', capital: 'Paris' },
    Frisian: { language: 'fy', capital: '' },
    Galician: { language: 'gl', capital: '' },
    Georgian: { language: 'ka', capital: 'Tbilisi' },
    German: { language: 'de', capital: 'Berlin' },
    Greek: { language: 'el', capital: 'Athens' },
    Gujarati: { language: 'gu', capital: 'Gandhinagar' },
    'Haitian Creole': { language: 'ht', capital: 'Port-au-Prince' },
    Hausa: { language: 'ha', capital: 'Abuja' },
    Hawaiian: { language: 'haw', capital: '' },
    Hebrew: { language: 'he', capital: 'Jerusalem' },
    Hindi: { language: 'hi', capital: 'New Delhi' },
    Hmong: { language: 'hmn', capital: '' },
    Hungarian: { language: 'hu', capital: 'Budapest' },
    Icelandic: { language: 'is', capital: 'Reykjavik' },
    Igbo: { language: 'ig', capital: '' },
    Indonesian: { language: 'id', capital: 'Jakarta' },
    Irish: { language: 'ga', capital: 'Dublin' },
    Italian: { language: 'it', capital: 'Rome' },
    Japanese: { language: 'ja', capital: 'Tokyo' },
    Javanese: { language: 'jw', capital: '' },
    Kannada: { language: 'kn', capital: 'Bangalore' },
    Kazakh: { language: 'kk', capital: 'Nur-Sultan' },
    Khmer: { language: 'km', capital: 'Phnom Penh' },
    Kinyarwanda: { language: 'rw', capital: 'Kigali' },
    Korean: { language: 'ko', capital: 'Seoul' },
    Kurdish: { language: 'ku', capital: '' },
    Kyrgyz: { language: 'ky', capital: 'Bishkek' },
    Lao: { language: 'lo', capital: 'Vientiane' },
    Latin: { language: 'la', capital: '' },
    Latvian: { language: 'lv', capital: 'Riga' },
    Lithuanian: { language: 'lt', capital: 'Vilnius' },
    Luxembourgish: { language: 'lb', capital: 'Luxembourg' },
    Macedonian: { language: 'mk', capital: 'Skopje' },
    Malagasy: { language: 'mg', capital: 'Antananarivo' },
    Malay: { language: 'ms', capital: 'Kuala Lumpur' },
    Malayalam: { language: 'ml', capital: 'Thiruvananthapuram' },
    Maltese: { language: 'mt', capital: 'Valletta' },
    Maori: { language: 'mi', capital: 'Wellington' },
    Marathi: { language: 'mr', capital: 'Mumbai' },
    Mongolian: { language: 'mn', capital: 'Ulaanbaatar' },
    Burmese: { language: 'my', capital: 'Naypyidaw' },
    Nepali: { language: 'ne', capital: 'Kathmandu' },
    Norwegian: { language: 'no', capital: 'Oslo' },
    Odia: { language: 'or', capital: 'Bhubaneswar' },
    Pashto: { language: 'ps', capital: 'Kabul' },
    Persian: { language: 'fa', capital: 'Tehran' },
    Polish: { language: 'pl', capital: 'Warsaw' },
    Portuguese: { language: 'pt', capital: 'Lisbon' },
    Punjabi: { language: 'pa', capital: 'Chandigarh' },
    Romanian: { language: 'ro', capital: 'Bucharest' },
    Russian: { language: 'ru', capital: 'Moscow' },
    Samoan: { language: 'sm', capital: 'Apia' },
    'Scots Gaelic': { language: 'gd', capital: '' },
    Serbian: { language: 'sr', capital: 'Belgrade' },
    Sesotho: { language: 'st', capital: 'Maseru' },
    Shona: { language: 'sn', capital: 'Harare' },
    Sindhi: { language: 'sd', capital: 'Karachi' },
    Sinhala: { language: 'si', capital: 'Sri Jayawardenepura Kotte' },
    Slovak: { language: 'sk', capital: 'Bratislava' },
    Slovenian: { language: 'sl', capital: 'Ljubljana' },
    Somali: { language: 'so', capital: 'Mogadishu' },
    Spanish: { language: 'es', capital: 'Madrid' },
    Sundanese: { language: 'su', capital: '' },
    Swahili: { language: 'sw', capital: 'Dodoma' },
    Swedish: { language: 'sv', capital: 'Stockholm' },
    Tajik: { language: 'tg', capital: 'Dushanbe' },
    Tamil: { language: 'ta', capital: 'Chennai' },
    Tatar: { language: 'tt', capital: '' },
    Telugu: { language: 'te', capital: 'Amaravati' },
    Thai: { language: 'th', capital: 'Bangkok' },
    Turkish: { language: 'tr', capital: 'Ankara' },
    Turkmen: { language: 'tk', capital: 'Ashgabat' },
    Ukrainian: { language: 'uk', capital: 'Kyiv' },
    Urdu: { language: 'ur', capital: 'Islamabad' },
    Uyghur: { language: 'ug', capital: '' },
    Uzbek: { language: 'uz', capital: 'Tashkent' },
    Vietnamese: { language: 'vi', capital: 'Hanoi' },
    Welsh: { language: 'cy', capital: 'Cardiff' },
    Xhosa: { language: 'xh', capital: 'Pretoria' },
    Yiddish: { language: 'yi', capital: '' },
    Yoruba: { language: 'yo', capital: 'Abuja' },
    Zulu: { language: 'zu', capital: 'Pretoria' }
};

export default languageMap;
