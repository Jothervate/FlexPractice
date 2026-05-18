export const assetUrl = (path) => {
  if (!path) return '';

  if (/^(https?:|data:|blob:)/.test(path)) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL;

  if (path.startsWith(baseUrl)) {
    return path;
  }

  return `${baseUrl}${path.replace(/^\/+/, '')}`;
};
