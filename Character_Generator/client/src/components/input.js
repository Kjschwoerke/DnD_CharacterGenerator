import React from 'react'
import ModifiedStats from './abilityModifier.js'

class InputCharStats extends React.Component {
    constructor(props) {
      super(props);
      this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
      this.handleChangeLastName = this.handleChangeLastName.bind(this)
      this.handleChangeGender = this.handleChangeGender.bind(this)
      this.handleChangeRace = this.handleChangeRace.bind(this)
      this.handleChangeBackground = this.handleChangeBackground.bind(this)
      this.handleChangeReligion = this.handleChangeReligion.bind(this)
      this.handleChangeCharClass = this.handleChangeCharClass.bind(this)
      
      this.state = {
        firstName: '',
        lastName: '',
        gender: '',
        race: '',
        background: '',
        religion: '',
        alignment: '',
        characterClass: '',
        characterSubClass:'',
        abilityScores: {
            strength: '18',
            dexterity: '15',
            constitution: '16',
            intelligence: '9',
            wisdom: '9',
            charisma: '16',
        },
        proficiencyBonus: '2',
        characterLevel: '1',
        date: new Date()};  
        }

        handleChangeFirstName(e) {
            this.setState({firstName: e.target.value})
        }
        handleChangeLastName(e) {
            this.setState({lastName: e.target.value})
        }
        handleChangeGender(e) {
            this.setState({gender: e.target.value})
        }
        handleChangeRace(e) {
            this.setState({race: e.target.value})
        }
        handleChangeBackground(e) {
            this.setState({background: e.target.value})
        }
        handleChangeReligion(e) {
            this.setState({religion: e.target.value})
        }
        handleChangeCharClass(e) {
            this.setState({characterClass: e.target.value})
        }
  
    render() {
        let firstName = this.state.firstName
        let lastName = this.state.lastName
        let gender = this.state.gender
        let race = this.state.race
        let background = this.state.background
        let religion = this.state.religion
        //let alignment = this.state.alignment
        let charClass = this.state.characterClass
        //let charSubClass = this.state.characterSubClass
        let str = this.state.abilityScores.strength
        let dex = this.state.abilityScores.dexterity
        let con = this.state.abilityScores.constitution
        let int = this.state.abilityScores.intelligence
        let wis = this.state.abilityScores.wisdom
        let chr = this.state.abilityScores.charisma
        let greeting = `My name is ${firstName} ${lastName}. I am a ${race} ${gender} from a ${background} background and am a devout follower of ${religion}.  I have spent my life training to become a ${charClass}`
        
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2> {greeting} </h2>

          <input placeholder="First Name" value= {firstName} onChange={this.handleChangeFirstName}></input>
          <input placeholder="Last Name" value= {lastName} onChange={this.handleChangeLastName}></input>
          <input placeholder="Gender" value= {gender} onChange={this.handleChangeGender}></input>
          <input placeholder="Race" value= {race} onChange={this.handleChangeRace}></input>
          <input placeholder="Background" value= {background} onChange={this.handleChangeBackground}></input>
          <input placeholder="Religion" value= {religion} onChange={this.handleChangeReligion}></input>
          <input placeholder="Character Class" value= {charClass} onChange={this.handleChangeCharClass}></input>

          <ModifiedStats 
          str = {str} 
          dex = {dex}
          con = {con}
          int = {int}
          wis = {wis}
          chr = {chr}
          race = {race}
          charClass = {charClass}
          />
        </div>
      );
    }
  }

export default InputCharStats