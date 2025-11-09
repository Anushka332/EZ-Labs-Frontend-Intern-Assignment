// Helper function to get correct asset paths in both dev and production
export const getAssetPath = (path) => {
  // In development, Vite serves from root. In production, from base path
  return import.meta.env.BASE_URL + path;
}