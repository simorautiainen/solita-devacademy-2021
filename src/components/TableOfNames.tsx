import { Name } from '../interfaces/name'
import * as sorts from '../utils/sorts'
import {Table} from 'react-bootstrap';
import jsonNames from '../data/names.json'
import { MODES } from '../config'

const TableOfNames = ({mode, findName}) => {
  let names = jsonNames
  if (mode === MODES.ALPHABETICAL) names = sorts.getAlphabeticalOrder(names)
  else if (mode === MODES.POPULAR) names = sorts.getMostPopularOrder(names)
  else if (mode === MODES.AMOUNT_OF_NAME) names = sorts.getAmountOfName(names, findName)
  else if (mode === MODES.TOTAL_AMOUNT) names = sorts.getTotalAmountOfAllTheNames(names)
  return(
    <Table striped bordered hover>
      <tbody>
        {names.names.map((name: Name, index: number) => <tr key={index}><td>{name.name}</td><td>{name.amount}</td></tr>)}
      </tbody>
    </Table>
  )
}

export default TableOfNames