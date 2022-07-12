// import * as Sentry from '@sentry/node'

export default defineEventHandler((event)=>{
    // const  { SENTRY_DSN } = useRuntimeConfig()
    // Sentry.init({dsn: SENTRY_DSN})
    // event.context.sentry = Sentry
})
// dans API .ts
// const { sentry } = event.context