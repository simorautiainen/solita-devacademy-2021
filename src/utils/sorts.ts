import { Names, Name } from '../interfaces/name'

export const getMostPopularOrder = (allNames: Names): Names => {
  allNames.names = allNames.names.sort((a: Name, b: Name) => {
    if (a.amount > b.amount) return -1
    return 1
  })
  return allNames
}

export const getAlphabeticalOrder = (allNames: Names): Names => {
  allNames.names = allNames.names.sort((a: Name, b: Name) => {
    for (let i = 0; i < a.name.length; i++) {
      if (i > (b.name.length - 1)) return 1 // b name is shorter than a so b gets lower index
      else if (a.name[i] > b.name[i]) return 1 // a.name i letter is bigger than b.name i letter so a get bigger index
      else if (a.name[i] < b.name[i]) return -1 // a.name i letter is lower than b.name i letter so a get lower index
    }
    return -1 // means a.name word is exactly same as b.name, or a.name is shorter than b.name so a gets lower index either way
  })
  return allNames
}

export const getTotalAmountOfAllTheNames = (allNames: Names): Names => {
  const totalAmount = allNames.names.reduce((totalValue: number, name: Name) => name.amount + totalValue, 0)
  const totalAmountNames = {names: [{name: "Total Amount", amount: totalAmount}]}
  return totalAmountNames
}

export const getAmountOfName = (allNames: Names, findName: string): Names => {
  const nameObj = allNames.names.find(name => name.name === findName)
  const foundName = nameObj ? {names: [nameObj]} : {names: [{name: `Didn't find name ${findName}`, amount:0}]}
  return foundName
}