import { basicGreeting } from '~/server/utils/greetings'
export default defineEventHandler((event)=>{
    console.log({helloTag: true})
    const name = event.context.params.name
    const tData = event.context.testData
    return {message: basicGreeting(name), myData: tData}

})