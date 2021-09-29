const team = {
    _games: [{
            opponent: 'Black Bears',
            teamPoints: 20,
            opponentPoints: 42
        },
        {
            opponent: 'Hawks',
            teamPoints: 36,
            opponentPoints: 17
        },
        {
            opponent: 'Tigers',
            teamPoints: 28,
            opponentPoints: 14
        }
    ],

    _players: [{
            firstName: 'John',
            lastName: 'Doe',
            age: 20
        },
        {
            firstName: 'Adam',
            lastName: 'Smith',
            age: 23
        },
        {
            firstName: 'Anthony',
            lastName: 'Robinson',
            age: 21
        }
    ],
// Getter method for _games
    get games() {
        return this._games;
    },
// Getter method for _players
    get players() {
        return this._players;
    },
// Method for adding new players
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
// Method for adding new game scores
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
};

// Invoking add methods

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//console.log(team.players);

team.addGame('Colts', 48, 36);
team.addGame('Saints', 14, 36);
team.addGame('Bills', 32, 10);

console.log(team.games);