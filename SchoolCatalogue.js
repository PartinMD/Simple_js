// Parent Class School
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = 0;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      if (level != 'primary' || 'middle' || 'high') {
        console.log('Please input an appropriate level. (Primary, Middle,  or High)') 
      } else {
        return this._level;
      }
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents !== number) {
        console.log('Error! Please enter valid number.')
      } else {
      this._numberOfStudents = newNumberOfStudents;
      }
    }
  
    quickFacts() {
      console.log(`${name} educates ${numberOfStudents} at the ${level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randNum = Math.random(Math.floor() * substituteTeachers.length)
      return substituteTeachers[randNum];
    }
  }