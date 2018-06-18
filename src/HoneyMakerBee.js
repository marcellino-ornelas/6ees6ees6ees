class HoneyMakerBee extends Bee {
  constructor( age=10, job='make honey'){
    super( age, job);
    this.honeyPot = 0;
  }
  makeHoney(){
  return ++this.honeyPot;
  };

  giveHoney(){
    return --this.honeyPot;
  };
};
