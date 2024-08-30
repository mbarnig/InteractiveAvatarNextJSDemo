SESSION_START_PASSWORD = process.env.SESSION_START_PASSWORD;

export async function () {
  try {
    if (SESSION_START_PASSWORD) {
      return SESSION_START_PASSWORD
    }
    console.error("API key is missing from .env");
