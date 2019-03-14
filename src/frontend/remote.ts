const ORIGIN = process.env.ORIGIN || 'http://localhost:3001';

export function fetchWithMockAPI(url: string, method: string = 'get'): Promise<any> {
    return fetch(
        `${ORIGIN}${url}`,
        {method}
    )
        .then(res => res.json())
        .catch(error => alert(`Fetch error! ${error.toString()}`));
}
