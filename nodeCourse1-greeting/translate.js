import fetch from 'node-fetch';
import FormData from 'form-data';

export default async function translateText(sourceLanguage, targetLanguage, text) {
  const data = new FormData();
  data.append('source_language', sourceLanguage);
  data.append('target_language', targetLanguage);
  data.append('text', text);

  const url = 'https://text-translator2.p.rapidapi.com/translate';
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'c1ba096602mshee78b87fb2a71f2p1d1c02jsn71e4aa8007c0',
      'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      ...data.getHeaders(),
    },
    body: data
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data.translatedText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}