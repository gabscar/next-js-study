
import { MongoClient } from 'mongodb';


async function conectDB(){
    let client = await MongoClient.connect(
            'mongodb+srv://apievents:54ETC8DnGyn7KkwF@cluster0.ivzu5.mongodb.net/auth-users?retryWrites=true&w=majority'
        )
    return client;
}
export default conectDB;