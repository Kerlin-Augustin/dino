import Phaser from "phaser";

class PlayScene extends Phaser.Scene {

  player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  get gameHeight() {
    return this.game.config.height as number;
  }
  constructor() {
    super('PlayScene')
  }

  create() {
    this.createEnvironment();
    this.createPlayer();
    this.registerPlayerControl();

  }

  createEnvironment(){
    this.add
      .tileSprite(0, this.gameHeight, 90, 26, 'ground')
      .setOrigin(0, 1);
  }

  createPlayer(){
    this.player = this.physics.add.sprite(0, this.gameHeight, 'dino-idle').setOrigin(0, 1);
  }

  registerPlayerControl(){
    const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    spaceBar.on('down', () => {
      this.player.setVelocityY(-1600)
    })
  }
}

export default PlayScene;