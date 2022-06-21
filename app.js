const team = {
    _players: [
      {firstName: "Ray", lastName: "Yao", age: 28},
      {firstName: "Josh", lastName: "Wilcox", age: 30},
      {firstName: "Teja", lastName: "Gotimukala", age: 25}
    ],
    
    _games: [
      {opponent: "Fuel", teamPoints: 3, opponentPoints: 2},
      {opponent: "Dragons", teamPoints: 1, opponentPoints: 3},
      {opponent: "NYXL", teamPoints: 0, opponentPoints: 3}
    ],
    
    get players() {
      return this._players;
    },
    
    get games() {
      return this._games;
    },
    
    addPlayer(firstName, lastName, age) {
      let newPlayer = {firstName: firstName,
                     lastName: lastName,
                     age: age
  };
      this.players.push(newPlayer);
    },
    
    addGame(opponentName, teamPoints, opponentPoints) {
      let newGame = {opponent: opponentName,
                      teamPoints: teamPoints,
                      opponentPoints: opponentPoints};
      this.games.push(newGame);
    },
    
  };
  
  //team.addPlayer('Steph', 'Curry', 28);
  //team.addPlayer('Lisa', 'Leslie', 44);
  //team.addPlayer('Bugs', 'Bunny', 76);
  //console.log(team.players);
  
  //team.addGame('Outlaws', 1, 3);
  //team.addGame('Gladiators', 3, 1);
  //team.addGame('Mayhem', 3, 0);
  //console.log(team.games);