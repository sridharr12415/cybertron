export const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

// JSON POST
export async function postJSON(endpoint, data) {
  const url = `${API_BASE}${endpoint}`;
  console.log("🔗[API] POST JSON:", url);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

// FORM DATA POST (for files)
export async function postForm(endpoint, formData) {
  const url = `${API_BASE}${endpoint}`;
  console.log("🔗[API] POST FORM:", url);
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Submission conflict");
  }

  return data;
}