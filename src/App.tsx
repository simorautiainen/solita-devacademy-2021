import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TableOfNames, ButtonBar} from './components'
import {Container} from 'react-bootstrap'
import { MODES } from './config'

function App() {
  const [mode, setMode] = useState<string>("normal")
  const [findName, setFindName] = useState<string>("nothing")

  const listPopular = () => {
    setMode(MODES.POPULAR)
  }
  const listAlphabetical = () => {
    setMode(MODES.ALPHABETICAL)
  }

  const listTotalAmount = () => {
    setMode(MODES.TOTAL_AMOUNT)
  }
  const listNameAmount = (name: string) => {
    setMode(MODES.AMOUNT_OF_NAME)
    setFindName(name)
  }
  return (
    <Container className="justify-content-md-center" style={{ marginTop: "1vh",fontFamily: "Inconsolata", fontWeight: 900}}>
      <ButtonBar listPopular={listPopular} listAlphabetical={listAlphabetical}  totalAmount={listTotalAmount}  nameAmount={(name) => listNameAmount(name)} />
      <TableOfNames mode={mode} findName={findName}/>
    </Container>
  );
}
export default App;
