const STORAGE_KEY = 'cografya_golleri_progress';

export function saveGameState(data) {
  try {
    const json = JSON.stringify(data);
    const encoded = encodeURIComponent(json);
    document.cookie = `${STORAGE_KEY}=${encoded}; path=/; max-age=2592000; SameSite=Lax`;
    localStorage.setItem(STORAGE_KEY, json);
  } catch (e) {
    console.error("Failed to save progress:", e);
  }
}

export function loadGameState() {
  try {
    const matches = document.cookie.match(new RegExp('(?:^|; )' + STORAGE_KEY.replace(/([\.$?*|{}()[\]\\\/+^])/g, '\\$1') + '=([^;]*)'));
    if (matches) {
      return JSON.parse(decodeURIComponent(matches[1]));
    }
    const local = localStorage.getItem(STORAGE_KEY);
    if (local) return JSON.parse(local);
  } catch (e) {
    console.error("Failed to load progress:", e);
  }
  return null;
}

export function clearGameState() {
  try {
    document.cookie = `${STORAGE_KEY}=; path=/; max-age=0`;
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear progress:", e);
  }
}
