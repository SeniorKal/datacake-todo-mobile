const API_URL = "http://192.168.1.12:8000/api";

export async function checkApiHealth() {
  const response = await fetch(`${API_URL}/health/`);

  if (!response.ok) {
    throw new Error("Não foi possível conectar com a API.");
  }

  return response.json();
}