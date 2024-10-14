import Phaser from "phaser";
import { SpriteWithDynamicBody } from "../types";
import { Player } from "../entities/Player";
import GameScene from './GameScene';

class PlayScene extends GameScene {

  player: Player;
  ground: Phaser.GameObjects.TileSprite;
  startTrigger: SpriteWithDynamicBody;
  spawnInterval: number = 1500;
  spawnTime: number = 0;

  constructor() {
    super('PlayScene')
  }

  create() {
    this.createEnvironment();
    this.createPlayer();
    this.startTrigger = this.physics.add.sprite(0, 10, null)
      .setAlpha(0)
      .setOrigin(0, 1);

      this.physics.add.overlap(this.startTrigger, this.player, () => {
        if(this.startTrigger.y === 10){
          this.startTrigger.body.reset(0, this.gameHeight)
          return
        }

        this.startTrigger.body.reset(9999,9999)

        const rollOutEvent = this.time.addEvent({
          delay: 1000/ 60,
          loop: true,
          callback: () => {
            this.player.playRunAnimation()
            this.player.setVelocityX(100)
            this.ground.width += (17 * 2)

            if(this.ground.width >= this.gameWidth) {
              rollOutEvent.remove()
              this.ground.width = this.gameWidth
              this.player.setVelocityX(0)
              this.isGameRunning = true;
            }
          }
        })
      })
  }

  createEnvironment() {

    this.ground = this.add
      .tileSprite(0, this.gameHeight, 90, 26, 'ground')
      .setOrigin(0, 1);
  }

  createPlayer() {
    this.player = new Player(this, 0, this.gameHeight) 
  }

  update(time: number, delta: number): void {
    this.spawnTime += delta
    if(this.spawnTime > this.spawnInterval){
      this.spawnTime = 0
    }
  }
}

export default PlayScene;