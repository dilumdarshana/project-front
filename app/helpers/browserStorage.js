import Cookies from 'cookies-js';

class BrowserStorage {
    setCookie(key, value, expiresIn = 86400) {
        Cookies.set(key, JSON.stringify(value), { expires: expiresIn, httpOnly: true });
    }

    getCookie(key) {
        const cookieStored = Cookies.get(key);

        return cookieStored ? JSON.parse(cookieStored) : '';
    }

    updateCookie(cookie, key, value) {
        const cookieStored = this.getCookie(cookie);
        cookieStored[key] = value;

        this.setCookie(cookie, cookieStored);
    }

    removeCookie(key) {
        Cookies.expire(key);
    }

    setLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getLocalStorage(key) {
        const storedValue = localStorage.getItem(key);

        return storedValue ? JSON.parse(storedValue) : null;
    }

    removeLocalStorage(key) {
        localStorage.removeItem(key);
    }

    removeLocalStorageAll() {
        localStorage.clear();
    }

    setSessionStorage(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
}

export default new BrowserStorage();
