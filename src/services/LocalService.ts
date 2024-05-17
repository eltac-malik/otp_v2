class LocalService {
  static get(key: string) {
    return JSON.parse(localStorage.getItem(key) ?? "");
  }
  static set(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static remove(key: string) {
    return localStorage.removeItem(key);
  }
}

export default LocalService;
