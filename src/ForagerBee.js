class ForagerBee extends Bee {
  // TODO..
  constructor(age=10,job='find pollen'){
    super(age, job);
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(item){
    this.treasureChest.push(item);
  };
};
