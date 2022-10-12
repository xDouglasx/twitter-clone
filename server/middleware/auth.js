import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { sendError } from "h3"
import { getUserById } from "../db/users";

export default defineEventHandler(async (event) => {
    const endpoints = [
        '/api/auth/user'
    ]

    const isHandledByThisMiddleware = endpoints.some(endpoint => {
        const pattern = new UrlPattern(endpoint)
        return pattern.match(event.req.url)
    })

    if(!isHandledByThisMiddleware){
        return
    }

    console.log("headers")
    console.log(event.req.headers)
    const token = event.req.headers['authorization']?.split(' ')[1]
    
    const decode = decodeAccessToken(token)
    
    if(!decode){
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Unauthorized'
        }))
    }

    try {
        const userId = decode.userId
        const user = await getUserById(userId)
        event.context.auth = { user }

    } catch (error) {
        return
    }
    
})

