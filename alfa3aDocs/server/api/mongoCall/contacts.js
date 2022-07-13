import mongo from '../mongo'
import {useQuery} from 'h3'
import { ObjectId } from 'bson'
// import {useQuery, useBody} from 'h3'

async function handleCall(req, res, next){
    const queryParams = useQuery(req)
    const id = queryParams.id
    const rech = queryParams.rech
    // console.log(queryParams)
    // console.log('api id : ', id)
if (id) {
    // console.log('If ID : ', id)
    const ObjID = "new ObjectId('" + id + "')"
    const resData = await mongo.db('test').collection('contacts').findOne({_id: ObjectId(id)});
    console.log(resData)
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify(resData))
    return
}
else if (rech) {
    // console.log('If RECH : ', rech)
    const resData = await mongo.db('test').collection('contacts').find({NOM: rech});
    console.log(resData)
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify(resData))
    return
}
else if (req.url !== '/api/mongoCall/contacts'){
    return next;
}
const resData = await mongo.db('test').collection('contacts').find().limit(50).toArray();
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify(resData))
}

export default function (req, res, next) {
    handleCall(req, res, next).then(n => {
        if(n) n();
    });
}