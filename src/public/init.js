const client = new stitch.StitchClient('test-qqtyg');
const db = client.service('mongodb', 'mongodb-atlas').db('Users');

class MongoDB {
  constructor(obj) {
    this.client = new stitch.StitchClient('test-qqtyg');
    this.db = obj.db;
    this.collection = obj.collection;
  }
  query(data) {
    this.client.login().then(() =>
      db.collection(this.collection).find(data)
    ).then(docs => {
      console.log("Found docs", docs);
    }).catch(err => {
      console.error(err)
    });
  }
  insert(data){
    this.client.login().then(() =>
      db.collection(this.collection).updateOne({
        owner_id: client.authedId()
      }, data)
    ).then(docs => {
      console.log("Docs")
    }).catch(err => {
      console.error(err)
    });
  }
}
