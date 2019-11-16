import axios from "axios";

const API_KEY = 'AIzaSyDAG1LSJS_KYvOMDMbk6ICbojSLNCQo9aY';

export const youtubeSearch = (q) => {
    return axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            q: q,
            maxResults: 15,
            type: 'video',
            key: API_KEY
        }
    });
};

export const ytItemToResultObject = (item) => {
    return {
        image: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        id: item.id.videoId
    }
};
