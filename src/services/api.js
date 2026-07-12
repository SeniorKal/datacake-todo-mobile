const API_URL = "http://192.168.1.12:8000/api";

export async function checkApiHealth() {
  const response = await fetch(`${API_URL}/health/`);

  if (!response.ok) {
    throw new Error("Não foi possível conectar com a API.");
  }

  return response.json();
}

export async function register(userData) {
    const response = await fetch(`${API_URL}/register/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
}