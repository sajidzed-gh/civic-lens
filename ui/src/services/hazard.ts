export default class HazardService {
    AnalyzeHazardAPI(base64Image: string, location?: { lat: number; lng: number }): Promise<HazardReport> {
        return fetch(`${import.meta.env.VITE_API_URL}/hazard/analyze`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: base64Image, location }),
        }).then(res => {
            if (!res.ok) throw new Error('API error');
            return res.json();
        });
    }
}