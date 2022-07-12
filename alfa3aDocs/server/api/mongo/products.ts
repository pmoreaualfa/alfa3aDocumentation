import { useQuery } from 'h3'
import context from '~~/server/middleware/context'
export default defineEventHandler( async (event)=>{
    const url = event.req.url
    // const c = context
    const dat = await $fetch('https://data.mongodb-api.com/app/data-brivv/endpoint/data/v1/action/find');
    // const dat = await $fetch(`https://geo.api.gouv.fr/departements/75/communes`);
    console.log(dat)
    return {hello: url}
})