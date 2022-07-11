import {useQuery, useBody} from 'h3'
export default defineEventHandler(async (event)=>{
    const bodyParams = await useBody(event)
    console.log(event.req)
    // return {HelloPoints: event.context.params._}
    return {hello: true, bodyParams}

})