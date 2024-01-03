class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }
  public getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }
  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean = false;
  key: Key;
  tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("You can enter the house.");
    } else {
      console.log("You can't enter the house.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Correct key. The door is open.");
    } else {
      console.log("Incorrect key. The door is close.");
    }
  }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
