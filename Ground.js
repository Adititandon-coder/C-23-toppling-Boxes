class Ground {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    // w and h have local scope , to make them available in throughout the class .. we assign them as properties

    this.w = w;
    this.h = h;
  }

  // actions to be performed are written as custom functions

  display() {
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.w, this.h);
  }
}
