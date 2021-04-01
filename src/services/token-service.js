import config from '../config'

let _timeoutId
const _TEN_SECONDS_IN_MS = 10000

const TokenService = {
    saveAuthToken(token) {
        return window.localStorage.setItem(config.TOKEN_KEY, token)
    },
    saveTeacherId(id) {
        return window.localStorage.setItem('teacher_id', id)
    },
    getTeacherId() {
        return window.localStorage.getItem('teacher_id')
    },
    saveStudentId(id) {
        return window.localStorage.setItem('student_id', id)
    },
    getStudentId() {
        return window.localStorage.getItem('student_id')
    },
    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthToken() {
        window.localStorage.removeItem(config.TOKEN_KEY)
        window.localStorage.removeItem('student_id') || window.localStorage.removeItem('teacher_id')
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken()
    },
    // makeBasicAuthToken(userName, password) {
    //     return window.btoa(`${userName}:${password}`)
    // },
    // parseJwt(jwt) {
    //     return jwtDecode(jwt)
    // },
    readJwtToken() {
        return TokenService.parseJwt(TokenService.getAuthToken())
    },
    _getMsUntilExpiry(payload) {
        return (payload.exp * 1000) - Date.now()
    },
    queueCallbackBeforeExpiry(callback) {
        const msUntilExpiry = TokenService._getMsUntilExpiry(
            TokenService.readJwtToken()
        )
        _timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS)
    },
    clearCallbackBeforeExpiry() {
        clearTimeout(_timeoutId)
    }
}

export default TokenService