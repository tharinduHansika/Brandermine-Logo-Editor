import { httpGet, httpPost } from ".";
import { authState } from "../store/authstore";

export async function login(email, password) {
    authState.set({ ...authState.get(), isAuthenticating: true })
    const resp = await httpPost('/auth/user/login', { email: email, password: password, })
    if (resp && resp.data && resp.data.token) {
        const user = await httpGet('/account/me', true, resp.data.token)
        if (user) {
            authState.set({ ...authState.get(), isAuthenticated: true, isAuthRequired: false, isAuthenticating: false, authToken: resp.data.token, authProfile: user.data })
            localStorage.setItem('user', JSON.stringify(user.data))
            localStorage.setItem('uid', user.data._id)
            localStorage.setItem('token', resp.data.token)
            return true
        }
    }
    authState.set({ ...authState.get(), isAuthenticating: false, authToken: null, authProfile: null, isAuthError: true })
    return false
}

export async function signup(email, name, password) {
    authState.set({ ...authState.get(), isAuthenticating: true })
    const resp = await httpPost('/auth/user/register', { email: email, username: Date.now().toString(), name: name, password: password, })
    if (resp && resp.data) {
        if (resp.data.token) {
            const user = await httpGet('/account/me', true, resp.data.token)
            if (user) {
                authState.set({ ...authState.get(), isAuthenticated: true, isAuthRequired: false, isAuthenticating: false, authToken: resp.data.token, authProfile: user.data })
                localStorage.setItem('uid', user._id)
                localStorage.setItem('user', JSON.stringify(user.data))
                localStorage.setItem('token', resp.data.token)
                return true
            }
        }
    }
    authState.set({ ...authState.get(), isAuthenticating: false, authToken: null, authProfile: null, isAuthError: true })
    return false
}
export async function logout() {
    authState.set({ ...authState.get(), isAuthenticating: false, isAuthenticated: false, authToken: null, authProfile: null })
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    return true
}