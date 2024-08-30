SESSION_START_PASSWORD = process.env.SESSION_START_PASSWORD;

export async function () {
  try {
    if (SESSION_START_PASSWORD) {
      return SESSION_START_PASSWORD
    }
  catch (error) {
    console.error("Password is missing from .env");
  }
