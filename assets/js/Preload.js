var MazeTraveler = MazeTraveler || {};

//loading the game assets
MazeTraveler.Preload = function(){};

MazeTraveler.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.tilemap('maze1', 'assets/tilemaps/maze1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('gameTiles', 'assets/tilemaps/terrain.png');
    this.load.image('player', 'assets/images/robot.png');
    this.load.image('remove', 'assets/images/brickwall.png');
    this.load.image('transform', 'assets/images/recorder.png');
      },
  create: function() {
    this.state.start('Game');
  }
};