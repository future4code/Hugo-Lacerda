import validateChar from "./e1validateChar";
import Character from "./Character.interface";

export function performAttack(attacker: Character, defender: Character) {
  if (!validateChar(attacker) || !validateChar(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.hp -= attacker.strength - defender.defense;
  }
}

export default function performAttackAlt(attacker: Character, defender: Character, validator: (char: Character) => boolean) {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.hp -= attacker.strength - defender.defense;
  }
  if(defender.hp < 0){
      defender.hp = 0;
  }
}
