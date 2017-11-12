class User {
  constructor(pbj) {
    if(obj === undefined){
      this.userName = "";
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.id = "";
    } else {
      this.userName = obj.userName;
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.email = obj.email;
      this.id = obj.id;
    }
  }
}

class Map {
  constructor(obj) {
    if(obj === undefined){
      this.date = {};
      this.location = "";
      this.author = "";
      this.content = "";
    } else {
      this.date = obj.date;
      this.location = obj.location;
      this.author = obj.location;
      this.content = obj.content;
    }
  }
}

class Post {
  constructor(obj) {
    if(obj){
    this.content = "";
    this.date = {};
    this.author = {};
    this.imageUrl = "";
    } else {
      this.content = obj.content;
      this.date = obj.date;
      this.author = obj.author;
      this.imageUrl = obj.imageUrl;
    }
  }
}
