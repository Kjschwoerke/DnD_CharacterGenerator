import {abilityModifyer} from "./modules/abilityModifyer.js"
import {getDiceRoll} from "./modules/hitPoints.js"

const buildCharacter = () => {
console.clear()

        let firstName = document.getElementById('firstName').value
        let lastName = document.getElementById('lastName').value
        let gender = document.getElementById('gender').value
        let race = document.getElementById('race').value
        let charClass = document.getElementById('class').value
        let personality = document.getElementById('personality').value
        let inspiration = document.getElementById('inspiration').value
        let background = document.getElementById('background').value
        let customStarting = document.getElementById('customStarting').value
        let platinum = document.getElementById('platinum').value
        let gold = document.getElementById('gold').value
        let silver = document.getElementById('silver').value
        let copper = document.getElementById('copper').value
        let strength = document.getElementById('strength').value
            let strMod = abilityModifyer(strength)
        let dexterity = document.getElementById('dexterity').value
            let dexMod = abilityModifyer(dexterity)
        let constitution = document.getElementById('constitution').value
            let conMod = abilityModifyer(constitution)   
        let intelligence = document.getElementById('intelligence').value
            let intMod = abilityModifyer(intelligence)
        let wisdom = document.getElementById('wisdom').value
            let wisMod = abilityModifyer(wisdom)
        let charisma = document.getElementById('charisma').value
            let chaMod = abilityModifyer(charisma)

     //Create Racial Modifiers
     switch (race){
        case 'Dragonborn':
            strength = parseInt(strength) + 2
            charisma = parseInt(charisma) + 1
            strMod = abilityModifyer(strength)
            chaMod = abilityModifyer(charisma)
            break
        case 'Dwarf':
            constitution = parseInt(constitution) + 2
            conMod = abilityModifyer(constitution)
            break
        case 'Elf':
            dexterity = parseInt(dexterity) + 2
            dexMod = abilityModifyer(dexterity)
            break
        case 'Gnome':
            intelligence = parseInt(intelligence) + 2
            intMod = abilityModifyer(intelligence)
            break
        case 'Half-Elf':
            charisma = parseInt(charisma) + 2
            chaMod = abilityModifyer(charisma) 
        //If character race is 'Half-Elf' assign extra floating ability point based on class recommendations
            switch (charClass) {
                case 'Barbarian':
                case 'Paladin':
                    strength = parseInt(strength) + 1
                    constitution = parseInt(constitution) + 1
                    strMod = abilityModifyer(strength)
                    conMod = abilityModifyer(constitution)
                    break
                case 'Bard':
                    dexterity = parseInt(dexterity) + 1
                    constitution = parseInt(constitution) + 1
                    dexMod = abilityModifyer(dexterity)
                    conMod = abilityModifyer(constitution)
                    break
                case 'Cleric': 
                case'Druid':
                    wisdom = parseInt(wisdom) + 1
                    constitution = parseInt(constitution) + 1
                    wisMod = abilityModifyer(wisdom)
                    conMod = abilityModifyer(constitution)
                    break
                case 'Fighter':
                    strength = parseInt(strength) + 1
                    dexterity = parseInt(dexterity) + 1
                    strMod = abilityModifyer(strength)
                    dexMod = abilityModifyer(dexterity)
                    break
                case 'Monk':
                case 'Ranger':
                    dexterity = parseInt(dexterity) + 1
                    wisdom = parseInt(wisdom) + 1
                    dexMod = abilityModifyer(dexterity)
                    wisMod = abilityModifyer(wisdom)
                    break
    
                case 'Rogue':
                    dexterity = parseInt(dexterity) + 1
                    intelligence = parseInt(intelligence) + 1
                    dexMod = abilityModifyer(dexterity)
                    intMod = abilityModifyer(intelligence)
                    break
                case 'Sorcerer':
                case 'Warlock':
                    wisdom = parseInt(wisdom) + 1
                    constitution = parseInt(constitution) + 1
                    wisMod = abilityModifyer(wisdom)
                    conMod = abilityModifyer(constitution)
                    break
                case 'Wizard':
                    intelligence = parseInt(intelligence) + 1
                    constitution = parseInt(constitution) + 1
                    intMod = abilityModifyer(intelligence)
                    conMod = abilityModifyer(constitution)
                    break  
            }
            break
        case 'Halfling':
            dexterity = parseInt(dexterity) + 2
            dexMod = abilityModifyer(dexterity)
            break
        case 'Half-Orc':
            strength = parseInt(strength) + 2
            constitution = parseInt(constitution) + 1
            strMod = abilityModifyer(strength)
            conMod = abilityModifyer(constitution)
            break
        case 'Human':
            strength = parseInt(strength) + 1
            dexterity = parseInt(dexterity) + 1
            constitution = parseInt(constitution) + 1
            intelligence = parseInt(intelligence) + 1
            wisdom = parseInt(wisdom) + 1
            charisma = parseInt(charisma) + 1
            strMod = abilityModifyer(strength)
            dexMod = abilityModifyer(dexterity)
            conMod = abilityModifyer(constitution)
            intMod = abilityModifyer(intelligence)
            wisMod = abilityModifyer(wisdom)
            chaMod = abilityModifyer(charisma)
            break
        case 'Tiefling':
            intelligence = parseInt(intelligence) + 1
            charisma = parseInt(charisma) + 2
            intMod = abilityModifyer(intelligence)
            chaMod = abilityModifyer(charisma)
            break
        
        default:
            break
    }

    
    //Create Character Object
    const Character = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        race: race,
        class: charClass,
        personality: personality,
        inspiration: inspiration,
        background: background,
        customStarting: customStarting,
        platinum: platinum,
        gold: gold,
        silver: silver,
        copper: copper,
        abilities: {
            strength: strength,
            dexterity: dexterity,
            constitution: constitution,
            intelligence: intelligence,
            wisdom: wisdom,
            charisma: charisma,
            modifiers: {
                strMod: strMod,
                dexMod: dexMod,
                conMod: conMod,
                intMod: intMod,
                wisMod: wisMod,
                chaMod: chaMod,
            }
        }
    }

//Generate Hit Points
console.log(`Initial Hit Points: ${getDiceRoll(1,4) + conMod}`)
       



    let characterDisplay = JSON.stringify(Character)
    document.getElementById('display').innerHTML = characterDisplay

}

document.getElementById('submitButton').addEventListener('click', buildCharacter)