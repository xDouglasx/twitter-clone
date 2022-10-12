export default () => {

    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')
    const useAuthLoading = () => useState('auth_loading', () => true)

    const setToken = (newToken) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    }

    const setIsLoading = (isLoading) => {
        const authLoading = useAuthLoading()
        authLoading.value = isLoading
    }

    const login = ({username, password}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/login', {
                    method: 'POST',
                    body: {
                        username,
                        password
                    }
                })

                setToken(data.access_token)
                setUser(data.user)

                console.log(data)
                resolve(true)
            } catch (error) {
                reject(error)

            }
        })
    }

    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
               const data = await $fetch('api/auth/refresh')
               setToken(data.access_token)
               resolve(true)
            } catch (error){
                reject(error)
            }
        })
    }

    const getUser = () => {
        return new Promise(async (resolve, reject) => {
            try {
               const data = await useFetchApi('api/auth/user')
               setUser(data.user)
               resolve(true)
            } catch (error){
                reject(error)
            }
        })
    }

    const initAuth = () => {
        return new Promise(async (resolve, reject) => {
            setIsLoading(true)

            try {
                await refreshToken()
                await getUser()
                resolve(true)

            } catch (error){
                reject(error)

            } finally {
                setIsLoading(false)
            }
        })
    }

    return {
        login,
        useAuthToken,
        useAuthUser,
        initAuth,
        useAuthLoading
    }
}