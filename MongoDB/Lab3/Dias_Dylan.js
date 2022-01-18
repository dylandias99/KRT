conn = new Mongo("localhost:27017");
db = conn.getDB("SampleSocial");
collT = db.getCollection("Tweets");
collB = db.getCollection("Blog");


//insert
cursor = collT.insert({id: 20190910, fromUser: "Dylan Dias", text: "This is a test of insert", cnt: 1})
print("");
print("The data is inserted");
printjson(cursor);

//find
cursor = collT.find({id: 20190910})
print("");
print("finding record");
while(cursor.hasNext()){
	printjson(cursor.next() );
}

//update
cursor = collT.update({id: 20190910}, {$set: {text: "This is the updated text"}})
print("");
print("The updated text is:");
printjson(cursor);


//find
cursor = collT.find({id: 20190910})
print("");
print("Find data in the collection");
print("");
while(cursor.hasNext()){
	doc = cursor.next();
	print( doc.id );
	print( doc.text );
}

//increment count
cursor = collT.update({id:20190910},{$inc:{cnt:1}})
print("");
print("Incremented count by one");
printjson( cursor );

//find
cursor = collT.find({id: 20190910})
print("");
print("Find data in the collection");
print("");
while(cursor.hasNext()){
	printjson(cursor.next());
}

//find tweets
cursor = collT.find({id:{$gte:129745,$lte:129756}},{"text":1})
print("");
print("finding text");
while(cursor.hasNext()){
	printjson(cursor.next() );
}

//remove
result = collT.remove({id: 20190910});
print("");
print("The data has been removed");
