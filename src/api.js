const API_URL='http://localhost:1337';

export async function listLogEntries() {
    const response = await fetch(`${API_URL}/api/logs`);
     
    // Replace with your API endpoint
    const data=await response.json();
   console.log(data);
   
    if (!response.ok) {
        throw new Error('Failed to fetch log entries');
    }
    return response.json();
}