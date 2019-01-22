import Cookies from 'cookies-js';

class browserStorage {

    setCookie(key, value, expiresIn = 86400) {
        Cookies.set(key, JSON.stringify(value), { expiresIn });
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

    destroyCookie(key) {
        Cookies.expire(key);
    }
}

export default new browserStorage();
