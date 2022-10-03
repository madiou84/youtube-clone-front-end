export const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search?key=";
const queryParams = "&part=snippet&maxResults=100&type=video";

export interface YoutubeProps {
    kind: string,
    etag: string,
    nextPageToken: string,
    regionCode: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: YoutubePropsItem[],


    error: {
        code: number,
        message: string,
        errors: [
            {
                message: string
                domain: string
                reason: string
            }
        ]
    }
}

interface Snippet {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
        default: {
            url: string,
            width: number,
            height: number
        },
        medium: {
            url: string,
            width: number,
            height: number,
        },
        high: {
            url: string,
            width: number,
            height: number,
        }
    },
    channelTitle: string,
    liveBroadcastContent: string,
    publishTime: string,
}

export interface YoutubePropsItem {
    kind: string,
    etag: string,
    id: {
        kind: string,
        videoId: string,
    },
    snippet: Snippet
}

export async function useFetch(url: string, options?: any) {
    const response = await fetch(url, options).then(r => r.json());
    
    if (response?.error?.code === 403) {
        throw new Error("Daily requests are reached");
    }

    if (response?.status !== 200) {
        return {
            error: true,
            data: null,
            status: response?.status,
        }
    }

    return {
        error: false,
        status: 200,
        data: response.items,
    }
}

export async function useYoutube() {
    return await useFetch(`${YOUTUBE_BASE_URL}${queryParams}`);
}
