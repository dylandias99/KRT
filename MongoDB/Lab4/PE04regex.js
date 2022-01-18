conn = new Mongo("localhost:27017");
db = conn.getDB("SampleSocial");
collT = db.getCollection("Tweets");
collB = db.getCollection("Blog");

print("#1");
print();
cursor = collT.find({$and:[{text:/dish/i},{text: /good/i}]});
cnt = 0;
while (cursor.hasNext()) {
		doc = cursor.next();
		print(doc.text);
		cnt = cnt + 1;
}
print("The count is ",cnt);


print();
print("#2");
print();
cursor = collT.find({$and:[{text:/dish/i},{text:{$not:/good/i}}]});
cnt = 0;
while (cursor.hasNext()) {
		doc = cursor.next();
		print(doc.text);
		cnt = cnt + 1;
}
print("The count is ",cnt);