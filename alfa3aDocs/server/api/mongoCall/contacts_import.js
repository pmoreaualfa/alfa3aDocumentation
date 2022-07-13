import mongo from '../mongo'
import importJson from '../../../assets/json/contacts.json'

async function handleCall(req, res, next){
    console.log(req.url)
if (req.url !== '/api/mongoCall/contacts'){
    return next;
}
// console.log(importJson)
const myRes = await mongo.db('test').collection('contacts').insertMany(importJson);
// console.log(myRes)
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify({myRes: myRes}))
}

export default function (req, res, next) {
    handleCall(req, res, next).then(n => {
        if(n) n();
    });
}