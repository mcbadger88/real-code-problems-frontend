import wait from "../utils/wait"

class Auth {
    constructor() {
        this.authenticated = true
        this.fetching = true
    }

    async login (cb) {
        await wait (1000)
        this.fetching = false
        await wait(1000)
       this.authenticated = true
        cb()
    }

    logout() {
        this.authenticated = false
    }

    isAuthenticated() {
        return this.authenticated
    }

}

export default new Auth()