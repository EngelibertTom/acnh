import { useQuery } from "@tanstack/react-query";

async function fetchData() {
    const apiKey = 'e2920838-3c03-4253-9f6a-45c98ca0232b';
    const url = `https://api.nookipedia.com/villagers`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-API-KEY": apiKey,
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {

        // @ts-ignore
        throw new Error(`Error fetching data: ${error.message}`);
    }
}

export function useNookipedia() {
    return useQuery({
        queryKey: ["nookipedia"],
        queryFn: fetchData
    });
}
