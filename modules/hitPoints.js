//generate dice roll using model of 1d6, 2d8, etc.  Ex. 2d8 where num === 2 and dice === 8

export function getDiceRoll(num, dice) {
    let result = 0
    for (let i = 0; i<num; i++){
      let min = 1
      let max = dice + 1
      result = result + Math.floor(Math.random() * (max-min) + min)
    }
      return result
  }
  