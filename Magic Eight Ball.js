let userName = 'Patrick'

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Can I have the yummy delicious sandwich?'
console.log(`${userName} asks ${userQuestion}`)

let randomNumber = Math.floor(Math.random() *8);

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict right now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
console.log(`The Magic Eight Ball has decided, ${eightBall}.`)



