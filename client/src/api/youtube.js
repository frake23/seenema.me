//кто-то спер мой ключ, обидно
/* import config from './config.json';
const API_KEY = config.API_KEY

export const youtubeSearch = async (q) => {

    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    const params = {
        part: 'snippet',
        q: q,
        maxResults: 15,
        type: 'video',
        key: API_KEY
    }
    url.search = new URLSearchParams(params).toString()
    
    const response = await fetch(url)
    return await response.json()
};

export const ytItemToResultObject = (item) => {
    return {
        image: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        id: item.id.videoId
    }
};
 */