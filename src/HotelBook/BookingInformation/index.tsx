import React from 'react'
import { Col, Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useAppState } from '@laststance/use-app-state'
import { HotelBookInterface } from '../HotelBookInterface'

const BookingInformation: React.FC = () => {
  const [appState, setAppState] = useAppState<HotelBookInterface>()

  function handleChange(name: string, date: Date): void {
    if (name === 'checkedInAt') appState.checkedInAt = date
    if (name === 'checkedOutAt') appState.checkedOutAt = date
    setAppState(appState)
  }

  return (
    <>
      <h3>Booking information</h3>
      <Form.Row>
        <Col>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Check in date</Form.Label>
            <DatePicker
              id="example-datepicker"
              selected={appState.checkedInAt}
              onChange={(date: Date) => handleChange('checkedInAt', date)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Check out date</Form.Label>
            <DatePicker
              selected={appState.checkedOutAt}
              onChange={(date: Date) => handleChange('checkedOutAt', date)}
            />
          </Form.Group>
        </Col>
      </Form.Row>
    </>
  )
}

export default BookingInformation
