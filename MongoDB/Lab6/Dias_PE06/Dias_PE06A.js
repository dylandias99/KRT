conn = new Mongo("localhost:27017");
db = conn.getDB("SampleSocial");


collection = db.getCollection("Tweets"); 

cursor = collection.createIndex({loc: "2dsphere"});

   docs = db.Tweets.getIndexes();
   printjson(docs);
   
cursor = db.Tweets.find().limit(5);
while(cursor.hasNext()){
   printjson(cursor.next());
}