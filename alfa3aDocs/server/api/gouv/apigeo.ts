// import { sendError, createError } from 'h3'
import { useQuery } from 'h3'

export default defineEventHandler(async (event)=>{
    const queryParams = useQuery(event)
    const dept = queryParams.dept
    console.log('deptActif : ', dept)
    const path = event.req.url
    let communes = ''
    if (dept){
        communes = await $fetch(`https://geo.api.gouv.fr/departements/${dept}/communes`);
    } else {
        communes = await $fetch("https://geo.api.gouv.fr/departements/91/communes");
    }
    // if (event.req.method !== 'GET'){
    //     return sendError(event, createError({
    //         statusCode: 405,
    //         statusMessage : 'Methooood non permise',
    //         data: {
    //             allowedMethods : ['GET'],
    //             methodReceived : event.req.method
    //         }
    //     }))
    //     }
    console.log('communes : ', communes)
console.log('params : ', dept)
const nbrCommunes = communes.length
console.log('nbrLignes : ', nbrCommunes)
    // return  {path}
    return  {nbrCommunes, communes}
})