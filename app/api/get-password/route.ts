SESSION_START_PASSWORD = process.env.SESSION_START_PASSWORD;

export async function () {
  try {
    if (!HEYGEN_API_KEY) {
      console.error("API key is missing from .env");
    }
