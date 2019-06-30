
export function getFromLocalStorage(key: string): any {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

export function removeFromLocalStorage(key: string | string[]) {
  key = Array.isArray(key) ? key : [key];
  key.map((k: string) => localStorage.removeItem(k));
}

export function setToLocalStorage(key: string, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    localStorage.setItem(key, data);
  }
}

export function clearLocalStorage() {
  localStorage.clear();
}
