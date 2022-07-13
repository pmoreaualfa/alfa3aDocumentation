import mongo from '../mongo'
import importJson from '../../../assets/json/test.json'

async function handleCall(req, res, next){
    console.log(req.url)
if (req.url !== '/api/mongoCall/products'){
    return next;
}
console.log(importJson)
const productsRes = await mongo.db('test').collection('products').insertMany(importJson);
// const contactsRes = await mongo.db('test').collection('products').find({price:755}).toArray();
// const contactsRes = await mongo.db('test').collection('products').findOne();
// const contactsRes = await mongo.db('test').collection('products').replaceOne({_id:'myDoc'},{price: 755},{upsert: true});
console.log(productsRes)
res.setHeader('Content-Type', 'application/json');
// res.end(JSON.stringify({productsRes: productsRes}))
return {productsRes: productsRes}
}

export default function (req, res, next) {
    handleCall(req, res, next).then(n => {
        if(n) n();
    });

}





// import { useQuery } from 'h3'
// import context from '~~/server/middleware/context'
// export default defineEventHandler( async (event)=>{
//     const url = event.req.url
//     // const c = context
//     const dat = await $fetch('https://data.mongodb-api.com/app/data-brivv/endpoint/data/v1/action/find');
//     // const dat = await $fetch(`https://geo.api.gouv.fr/departements/75/communes`);
//     console.log(dat)
//     return {hello: url}
// })