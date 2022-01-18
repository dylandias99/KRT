conn = new Mongo("localhost:27017");
db = conn.getDB("College2");
coll = db.getCollection("Course");


var oid1 = new ObjectId()

doc = ({_id: oid1, sectionID: "ISTE12301", title: "My Database Course", creditHours: 3, room:"GOL-2650"})

coll.insert(doc)


var oid2 = new ObjectId()

doc = ({_id: oid2, sectionID: "ISTE123401", title: "My Other Database Course", creditHours: 4, room:"GOL-2620"})

coll.insert(doc)



coll = db.getCollection("Students")

doc = {"course":  {$ref: "Course", $id: oid1, $db: "College2"},"uid": "123456789", "firstName": "Ivona", "lastName":"Bok", "year": 3, "coursesID":"ISTE12301" }
coll.insert(doc)

doc = {"course":  {$ref: "Course", $id: oid1, $db: "College2"},"uid": "234567890", "firstName": "Ivan", "lastName":"Smith", "year": 4, "coursesID":"ISTE12301 " }
coll.insert(doc)

doc = {"course":  {$ref: "Course", $id: oid2, $db: "College2"},"uid": "234567890", "firstName": "Ivan", "lastName":"Smith", "year": 4, "coursesID":"ISTE23401" }
coll.insert(doc)

doc = {"course":  {$ref: "Course", $id: oid2, $db: "College1"},"uid": "345678901", "firstName": "Sally", "lastName":"Struthers", "year": 3, "coursesID":"ISTE123401" }
coll.insert(doc)




coll = db.getCollection("Students");
cursor = coll.find();
while (cursor.hasNext()) {
	doc = cursor.next();
	dbRef = doc.course;
	
	doc2 = db[dbRef.$ref].findOne({_id: dbRef.$id});
	printjson(doc.firstName + " " + " " + doc.uid +" " +doc2.sectionID  );
}
	
