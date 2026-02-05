export const API_BASE =
  (typeof window !== "undefined" && window.__RUNTIME__ && window.__RUNTIME__.VITE_API_BASE) ||
  process.env.REACT_APP_API_BASE_URL ||
  "http://localhost:5000";

console.log("🔗[API] Base URL configured as:", API_BASE);

// JSON POST
export async function postJSON(endpoint, data) {
  const url = `${API_BASE}${endpoint}`;
  console.log("🔗[API] POST JSON:", url);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    return res.json();
  } catch (err) {
    console.error("❌[API] POST Error:", err.message);
    throw err;
  }
}

// FORM DATA POST (for files)
export async function postForm(endpoint, formData) {
  const url = `${API_BASE}${endpoint}`;
  console.log("🔗[API] POST FORM:", url);
  try {
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Submission conflict");
    }

    return data;
  } catch (err) {
    console.error("❌[API] FORM Error:", err.message);
    throw err;
  }
}