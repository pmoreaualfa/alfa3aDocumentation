import * as Sentry from '@sentry/node'

export default defineEventHandler((event)=>{
    console.log('Route', event.req.url)
})