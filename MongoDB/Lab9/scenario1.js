conn = new Mongo("localhost:27017");
db = conn.getDB("College1");
coll = db.getCollection("Courses");

//Add first Section

doc = ({sectionID: "ISTE12301", title: "My Database Course", creditHours: 3,  room:"GOL-2650",
	students: [{uid: "123456789",firstName: "Ivona", lastName:"Bok", year: 3},
			{uid : "234567890", firstName:"Ivan", lastName:"Smith", year: 4}]})

coll.insert(doc)

// Add second Section

doc = ({sectionID: "ISTE12401", title: "My Other Database Course", creditHours: 4, room:"GOL-2650", 
	students:[{uid : "234567890", firstName:"Ivan", lastName:"Smith", year: 4},
			{uid : "345678901", firstName:"Sally", lastName:"Struthers", year: 3}]})

coll.insert(doc)

print("\nThis is the original document\n");
cursor = coll.find()
while (cursor.hasNext()) {
	doc = cursor.next();
	printjson(doc);
}
print("\nThis is the document unwound\n");
cursor = coll.aggregate( [ { $unwind: "$students"}])
while (cursor.hasNext()) {
	doc = cursor.next();
	printjson(doc);
}	