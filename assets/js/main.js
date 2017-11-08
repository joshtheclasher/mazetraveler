var MazeTraveler = MazeTraveler || {};

MazeTraveler.game = new Phaser.Game(288, 288, Phaser.AUTO, '');

MazeTraveler.game.state.add('Boot', MazeTraveler.Boot);
MazeTraveler.game.state.add('Preload', MazeTraveler.Preload);
MazeTraveler.game.state.add('Game', MazeTraveler.Game);

MazeTraveler.game.state.start('Boot');