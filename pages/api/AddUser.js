import { MongoClient } from "mongodb";

export async function createUser(req,res){
    if(req.method ==='POST'){
        const email = req.body.email;
        if(!email||!email.includes('@')){
            res.status(422).json({ message: 'Invalid email address.' });
            return
        }
        let client;
        try{ 
           client= await  MongoClient.connect(
                'mongodb+srv://apievents:54ETC8DnGyn7KkwF@cluster0.ivzu5.mongodb.net/events?retryWrites=true&w=majority'
            )
        }catch(err){
            res.status(500).json({ message: 'Connecting to the database failed!' });
            return;
        }
        const db = client.db();

        await db.collection('emails').insertOne({email:email});
        
        client.close();
        res.status(201).json({ message: 'Signed up!' });
    }
}


export default createUser;