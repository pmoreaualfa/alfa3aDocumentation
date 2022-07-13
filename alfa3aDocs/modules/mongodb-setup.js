import mongo from '../server/api/mongo'
export default function(){
    this.nuxt.hook('render:setupMiddleware', async()=>{
        await mongo.connect();
    })
}