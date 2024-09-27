import Phaser from "phaser";

type Age = number

let age: Age = 100

declare module DinoGame {

  namespace Rendering {
    interface Person{
      name: string;
    }

    namespace Arcade {
      interface Whatever {
        a: string;
        b: number;
      }
    }

    namespace Matter {
      interface Whatever {
        a: number;
        b: string;
      }
    }
  }
}

type MatterWhatever = DinoGame.Rendering.Arcade.Whatever
interface Person{
  name: string;
  age: number;
  displayAge: () => void;
  getName: () => string;
  welcomePerson: (welcome: string) => string;
}

class PlayScene extends Phaser.Scene {

  person: Person;
  whatever: MatterWhatever

  get gameHeight() {
    return this.game.config.height as number;
  }
  constructor() {
    super('PlayScene')
  }

  create() {
    this.createEnvironment();
    this.createPlayer();

    this.whatever = {
      a: 'kerlin',
      b: 100,
    }

    this.person = {
      name: 'Kerlin',
      age: 30,
      displayAge(){
        console.log(this.age)
      },
      getName(){
        return this.name;
      },
      welcomePerson(welcome: string){
        return `${welcome} ${this.name}`
      }
    }
    
    this.person.displayAge()
    const name = this.person.getName()
    console.log(name)
    this.person.welcomePerson('Hello')
  }

  createEnvironment(){
    this.add
      .tileSprite(0, this.gameHeight, 90, 26, 'ground')
      .setOrigin(0, 1)
  }

  createPlayer(){
    this.physics.add.sprite(0, this.gameHeight, 'dino-idle').setOrigin(0, 1)
  }
}

export default PlayScene;