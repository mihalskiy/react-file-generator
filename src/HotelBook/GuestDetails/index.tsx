import React, { ChangeEvent, useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { GuestDetailsState, HotelBookInterface } from '../HotelBookInterface'
import { useAppState } from '@laststance/use-app-state'

const GuestDetails: React.FC = () => {
  const [appState, setAppState] = useAppState<HotelBookInterface>()
  const guestDetails: Array<GuestDetailsState> = appState.formData.guestDetails
  const [buttonStatus, setButtonStatus] = useState(false)

  function handleListChange(
    index: number,
    event: ChangeEvent<HTMLInputElement>,
    type: string
  ): void {
    if (type === 'label')
      appState.formData.guestDetails[index]['label'] = event.target.value
    if (type === 'value')
      appState.formData.guestDetails[index]['value'] = event.target.value
    setAppState(appState)
    checkButtonStatus(appState.formData.guestDetails)
  }

  const checkButtonStatus = (guestList: Array<GuestDetailsState>) => {
    if (
      guestList.filter(
        (guest: GuestDetailsState) => guest.label === '' || guest.value === ''
      ).length > 0
    ) {
      setButtonStatus(true)
    } else {
      setButtonStatus(false)
    }
  }

  const updateList = () => {
    setButtonStatus(true)
    appState.formData.guestDetails.push({
      label: '',
      value: '',
    })
    setAppState(appState)
    checkButtonStatus(appState.formData.guestDetails)
  }

  return (
    <>
      <h3>Guest Details</h3>
      {guestDetails &&
        guestDetails.map((guestDetail, index) => (
          <Form.Row key={index}>
            <Form.Group as={Col}>
              <Form.Label>Label</Form.Label>
              <Form.Control
                type="text"
                value={guestDetail.label}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleListChange(index, event, 'label')
                }
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="text"
                value={guestDetail.value}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleListChange(index, event, 'value')
                }
              />
            </Form.Group>
          </Form.Row>
        ))}

      <Button disabled={buttonStatus} variant="dark" onClick={updateList}>
        Add·new·columns
      </Button>
    </>
  )
}

export default GuestDetails
