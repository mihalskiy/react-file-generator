import React, { ChangeEvent } from 'react'
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

const APIGenerateDocument = 'http://localhost:8080/generate-document'

const HotelBook = () => {
  const [appState] = useAppState<HotelBookInterface>()

  const submitDocumentForm = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    fetch(APIGenerateDocument, {
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
      })
      .catch((error: Error) => {
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
            <Button type={'submit'}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default HotelBook
