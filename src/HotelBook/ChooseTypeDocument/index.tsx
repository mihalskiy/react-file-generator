import React, { ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'
import { useAppState } from '@laststance/use-app-state'
import { HotelBookInterface } from '../HotelBookInterface'

const ChooseTypeDocument: React.FC = () => {
  const [appState, setAppState] = useAppState<HotelBookInterface>()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    appState.convertType = event.target.value
    setAppState(appState)
  }

  return (
    <Form.Group>
      <Form.Label>Choose type document</Form.Label>
      <Form.Control as="select" onChange={handleChange}>
        <option>pdf</option>
        <option disabled>html</option>
        <option disabled>doc</option>
        <option disabled>web</option>
        <option disabled>txt</option>
      </Form.Control>
    </Form.Group>
  )
}

export default ChooseTypeDocument
