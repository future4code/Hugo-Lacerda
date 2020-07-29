import Character from "./Character.interface";

export default function validateChar(char: Character): boolean {
    if(!char.name || char.hp === undefined || char.defense === undefined || char.strength === undefined){
        return false;
    } else if(char.defense < 0 || char.strength < 0 || char.hp < 0){
        return false;
    }

    return true;
}