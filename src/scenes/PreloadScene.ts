import Phaser from "phaser";

class Preload extends Phaser.Scene{
  constructor(){
    super('PreloadScene')
  }

  preload(){
    this.load.image('ground', 'assets/ground.png')
    this.load.image('dino-idle', 'assets/dino-idle.png')

  }

  create(){
    this.scene.start('PlayScene');
  }
}

export default Preload