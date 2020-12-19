import React, {useState} from 'react';
import {Button,Row,Col,ButtonGroup,InputGroup, FormControl} from 'react-bootstrap';

const ButtonBar = ({listPopular, listAlphabetical, totalAmount, nameAmount}) => {
  const [input, setInput] = useState("")

  return (
    <Row className="justify-content-md-center">
        <ButtonGroup as={Col} style={{paddingBottom: "2vh"}} md={6} xs={12}>
        <Button variant="outline-dark" onClick={listPopular}>List the popular names</Button>
        <Button variant="outline-dark" onClick={listAlphabetical}>List names in alphabetical order</Button>
        <Button variant="outline-dark" onClick={totalAmount}>Show total amount of names</Button>
        </ButtonGroup>
        <InputGroup as={Col} xs={12} md={6} className="mb-5" style={{height: "10px", float: "bottom"}}>
          <FormControl
            value={input}
            onChange={event => setInput(event.target.value)}
            placeholder="Name"
            aria-describedby="basic-addon2"
            type="text"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={() => nameAmount(input)}>Search</Button>
          </InputGroup.Append>
        </InputGroup>
    </Row>
  )
}
export default ButtonBar