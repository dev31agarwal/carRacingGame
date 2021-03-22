class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }


  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(windowWidth/2, windowHeight/2-250);

    this.input.position(windowWidth/2, windowHeight/2-200);
    this.button.position(windowWidth/2-50, windowHeight/2-150);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount=playerCount+1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(windowWidth/2, windowHeight/2-100);
    });

  }
}
