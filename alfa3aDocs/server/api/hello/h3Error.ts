import { sendError, createError } from 'h3'

export default defineEventHandler((event)=>{
if (event.req.method !== 'GET'){
return sendError(event, createError({
    statusCode: 405,
    statusMessage : 'Methooood non permise',
    data: {
        allowedMethods : ['GET'],
        methodReceived : event.req.method
    }
}))
    // V.2
    // event.res.statusMessage = 'Methode non permise'
    // event.res.statusCode = 405
    // event.res.end('Hi erreur')
    // V.1
    // throw new Error ('only GET')
}
})