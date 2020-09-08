import React, { ChangeEvent, useState } from 'react'
import * as fileSaver from 'file-saver'
import { Col, Form, Container, Row, Button } from 'react-bootstrap'
import GuestDetails from './GuestDetails'
import BookingInformation from './BookingInformation'
import Signature from './Signature'
import CheckboxInformation from './CheckboxInformation'
import AdditionalPhoto from './AdditionalPhoto'
import ChooseTypeDocument from './ChooseTypeDocument'
import { useAppState } from '@laststance/use-app-state'
import { HotelBookInterface } from './HotelBookInterface'

const APIGenerateDocument =
  process.env.REACT_APP_API_GENERATE_DOCUMENT ?? 'http://localhost:8080/'

const HotelBook = () => {
  const [appState] = useAppState<HotelBookInterface>()
  const [buttonStatus, setDuttonStatus] = useState(false)

  const submitDocumentForm = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setDuttonStatus(true)
    fetch(APIGenerateDocument + 'generate-document', {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: {
        Accept: `application/${appState.convertType}`,
        'Content-Type': 'application/json',
        responseType: 'blob',
      },
      body: JSON.stringify(appState),
    })
      .then((response: Response) => {
        return response.blob()
      })
      .then((blob: Blob) => {
        fileSaver.saveAs(blob, `file.${appState.convertType}`)
        setDuttonStatus(false)
      })
      .catch((error: Error) => {
        setDuttonStatus(false)
        throw error
      })
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1>Hotel Book</h1>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={submitDocumentForm}>
            <GuestDetails />
            <BookingInformation />
            <Row>
              <Col>
                <Signature />
              </Col>
              <Col>
                <CheckboxInformation />
              </Col>
            </Row>
            <AdditionalPhoto />
            <ChooseTypeDocument />
            <Button type={'submit'} disabled={buttonStatus}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default HotelBook
