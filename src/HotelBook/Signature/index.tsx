import React, { ChangeEvent } from 'react'
import { Form, Container, Col, Row, Image, Button } from 'react-bootstrap'
import { useAppState } from '@laststance/use-app-state'
import { HotelBookInterface } from '../HotelBookInterface'
import { getBase64 } from '../../functions'

const Signature: React.FC = () => {
  const [appState, setAppState] = useAppState<HotelBookInterface>()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const file: File = (target.files as FileList)[0]
    getBase64(file)
      .then((base64) => {
        if (typeof base64 === 'string') {
          appState.formData.signature.value = base64
        }
        appState.formData.signature.label = file.name
        setAppState(appState)
      })
      .catch((error) => {
        throw error
      })
  }

  const deleteSignature = () => {
    appState.formData.signature.label = ''
    appState.formData.signature.value = ''
    setAppState(appState)
  }

  return (
    <>
      <h3>Guest signature</h3>
      <Form.Group>
        <Form.File
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
          id="exampleFormControlFile1"
          label="Example file input"
        />
      </Form.Group>

      {appState.formData.signature && appState.formData.signature.value && (
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src={appState.formData.signature.value}
                alt={appState.formData.signature.label}
                thumbnail
              />
            </Col>
            <Col xs={6} md={4}>
              <Button variant="danger" onClick={deleteSignature}>
                Delete {appState.formData.signature.label}
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default Signature
