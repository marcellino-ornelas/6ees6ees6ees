class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor(age=40, job='gamble'){
    super(age, job);
    this.canFly = false;
    this.color = 'grey';
  }

  gamble(){
    super.forage();
  }

  forage(){
    return "I am too old, let me play cards instead";
  }

};
