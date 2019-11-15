import axios from "axios";

const API_KEY = 'AIzaSyDAG1LSJS_KYvOMDMbk6ICbojSLNCQo9aY';

const youtubeSearch = async (q) => {
    const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            q: q,
            maxResults: 15,
            type: 'video',
            key: API_KEY
        }
    });
    return res.data.items.map(result => {
        return {
            image: result.snippet.thumbnails.medium.url,
            title: result.snippet.title,
            channel: result.snippet.channelTitle,
            id: result.id.videoId
        }
    });
};

export default youtubeSearch;
