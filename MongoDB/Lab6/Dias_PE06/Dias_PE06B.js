conn = new Mongo("localhost:27017");
db = conn.getDB("SampleSocial");

docs = db.Tweets.getIndexes();
printjson(docs);

cursor = db.Tweets.find(
{ loc:
   { $near: 
   	{
     $geometry: {
        type: "Point" ,
        coordinates: [ -89.3985, 40.6331 ]
     },
     $maxDistance: 8000
  }}}, 
  {_id : 0, id: 1, fromUserName: 1, text: 1,loc: 1})
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}


