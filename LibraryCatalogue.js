// Media Class carrying global properties (PARENT)
class Media {
    constructor(title) {
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(status) {
      this._isCheckedOut = status;
    }
    
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)
      return ratingsSum / this.ratings.length;
    }
  
    addRating(newRating) {
      if (newRating < 1 || newRating > 5) {
        console.log('Error! Please input a value between 1 and 5.')
      } else {
        return this.ratings.push(newRating);
      }
    }
  }
  
  // Book Class to extend Media (CHILD 1)
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._title = title;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  // Movie Class to extend Media (CHILD 2)
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._title = title;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  // CD Class to extend Media (CHILD 3)
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._title = title;
      this._songs = [];
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  
    addSong(newSong) {
      this.songs.push(newSong);
    }
  }
  
  
  // Book Instance Testing
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything);
  console.log(historyOfEverything.getAverageRating()); 
  
  // Movie Instance Testing
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed);
  console.log(speed.getAverageRating()); 
  
  // CD Instance Testing
  const physicalGraffiti = new CD('Led Zeppelin', 'Physical Graffiti');
  physicalGraffiti.addSong('1. Custard Pie');
  physicalGraffiti.addSong('2. The Rover');
  physicalGraffiti.addSong('3. In My Time of Dying');
  physicalGraffiti.addSong('4. Houses of the Holy');
  physicalGraffiti.addSong('5. Trampled Under Foot');
  physicalGraffiti.addSong('6. Kashmir');
  physicalGraffiti.addSong('7. In The Light');
  physicalGraffiti.addSong('8. Bron-Yr-Aur');
  physicalGraffiti.addSong('9. Down by the Seaside');
  physicalGraffiti.addSong('10. Ten Years Gone');
  physicalGraffiti.addSong('11. Night Flight');
  physicalGraffiti.addSong('12. The Wanton Song');
  physicalGraffiti.addSong('13. Boogie with Stu');
  physicalGraffiti.addSong('14. Black Country Woman');
  physicalGraffiti.addSong('15. Sick Again');
  physicalGraffiti.addRating(5);
  console.log(physicalGraffiti.getAverageRating());
  console.log(physicalGraffiti);
  