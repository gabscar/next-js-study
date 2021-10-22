import { MongoClient } from "mongodb";

async function commentReq(req,res){

    const eventId = req.query.eventId;
    let client;
    try{
      client = await  MongoClient.connect(
        'mongodb+srv://apievents:54ETC8DnGyn7KkwF@cluster0.ivzu5.mongodb.net/events?retryWrites=true&w=majority'
        )
    }catch(error){
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    } 
    
    console.log(client)
    if (req.method === 'POST') {
        const { email, name, text } = req.body;
    
        if (
          !email.includes('@') ||
          !name ||
          name.trim() === '' ||
          !text ||
          text.trim() === ''
        ) {
          res.status(422).json({ message: 'Invalid input.' });
          return;
        }
    
        const newComment = {
          id: new Date().toISOString(),
          email,
          name,
          text,
          eventId 
        };
    
        const db = client.db()

        let result;
        try{
          await db.collection('comments').insertOne(newComment);
          newComment.id = result.insertedId;
          res.status(201).json({ message: 'Added comment.', comment: newComment });
        }catch(err){
          res.status(500).json({ message: 'Inserting comment failed!' });
        }
    
        
      }
    
      if (req.method === 'GET') {
        const db =client.db()

        try{
          const docs = await db.collection('comments')
            .find()
            .sort({_id:-1})
            .toArray();
          
          console.log(docs)
          res.status(200).json({ comments: docs });
        }catch(err){
          res.status(500).json({ message: 'Getting comments failed.' });
        }
      }
    client.close();
}

export default commentReq;