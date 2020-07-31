import React from 'react'


const AbilityModifier = (props) => {

    let strength = props.str
    let dexterity = props.dex
    let constitution = props.con
    let intelligence = props.int
    let wisdom = props.wis
    let charisma = props.chr
    let race = props.race
    let charClass = props.charClass

   //Create Racial Modifiers  
   switch (race){
    case 'Dragonborn':
        strength = parseInt(strength) + 2
        charisma = parseInt(charisma) + 1
        break
    case 'Dwarf':
        constitution = parseInt(constitution) + 2
        break
    case 'Elf':
        dexterity = parseInt(dexterity) + 2
        break
    case 'Gnome':
        intelligence = parseInt(intelligence) + 2
        break
    case 'Half-Elf':
        charisma = parseInt(charisma) + 2
    //If character race is 'Half-Elf' assign extra floating ability point based on class recommendations
        switch (charClass) {
            case 'Barbarian':
            case 'Paladin':
                strength = parseInt(strength) + 1
                constitution = parseInt(constitution) + 1
                break
            case 'Bard':
                dexterity = parseInt(dexterity) + 1
                constitution = parseInt(constitution) + 1
                break
            case 'Cleric': 
            case'Druid':
                wisdom = parseInt(wisdom) + 1
                constitution = parseInt(constitution) + 1
                break
            case 'Fighter':
                strength = parseInt(strength) + 1
                dexterity = parseInt(dexterity) + 1
                break
            case 'Monk':
            case 'Ranger':
                dexterity = parseInt(dexterity) + 1
                wisdom = parseInt(wisdom) + 1
                break
            case 'Rogue':
                dexterity = parseInt(dexterity) + 1
                intelligence = parseInt(intelligence) + 1
                break
            case 'Sorcerer':
            case 'Warlock':
                wisdom = parseInt(wisdom) + 1
                constitution = parseInt(constitution) + 1
                break
            case 'Wizard':
                intelligence = parseInt(intelligence) + 1
                constitution = parseInt(constitution) + 1
                break
            default:
                break  
        }
        break
    case 'Halfling':
        dexterity = parseInt(dexterity) + 2
        break
    case 'Half-Orc':
        strength = parseInt(strength) + 2
        constitution = parseInt(constitution) + 1
        break
    case 'Human':
        strength = parseInt(strength) + 1
        dexterity = parseInt(dexterity) + 1
        constitution = parseInt(constitution) + 1
        intelligence = parseInt(intelligence) + 1
        wisdom = parseInt(wisdom) + 1
        charisma = parseInt(charisma) + 1
        break
    case 'Tiefling':
        intelligence = parseInt(intelligence) + 1
        charisma = parseInt(charisma) + 2
        break
    default:
        break
}
        
    

    return (
        <>
        <p>{`Player strength is: ${strength}`}</p>
        <p>{`Player dexterity is: ${dexterity}`}</p>
        <p>{`Player constitution is: ${constitution}`}</p>
        <p>{`Player intelligence is: ${intelligence}`}</p>
        <p>{`Player wisdom is: ${wisdom}`}</p>
        <p>{`Player charisma is: ${charisma}`}</p>
        </>
    )
}

export default AbilityModifier