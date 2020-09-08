import React, { ChangeEvent } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { getBase64 } from '../../functions'
import { useAppState } from '@laststance/use-app-state'
import { HotelBookInterface } from '../HotelBookInterface'

const AdditionalPhoto: React.FC = () => {
  const [appState, setAppState] = useAppState<HotelBookInterface>()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const file: FileList = target.files as FileList
    ;[...file].forEach((file: File) => {
      if (file.type.split('/')[0] !== 'image') return
      getBase64(file)
        .then((base64) => {
          if (typeof base64 === 'string') {
            appState.formData.files.images.push(base64)
          }
          setAppState(appState)
        })
        .catch((error) => {
          throw error
        })
    })
  }

  const handleRemoveItem = (index: number): void => {
    appState.formData.files.images.splice(index, 1)
    setAppState(appState)
  }

  const handleRequiredChange = (required: boolean) => {
    appState.formData.files.required = required
    setAppState(appState)
  }

  const handleNameChange = (label: string) => {
    appState.formData.files.label = label
    setAppState(appState)
  }

  return (
    <>
      <h3>Additional Photos</h3>
      <Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Photos Name</Form.Label>
          <Form.Control
            type="text"
            value={appState.formData.files.label}
            placeholder="Enter Photos Name"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleNameChange(event.target.value)
            }
          />
        </Form.Group>
        <Form.File
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event)
          }
          id="exampleFormControlFile1"
          multiple
          label="Example file input"
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="required"
          checked={appState.formData.files.required}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleRequiredChange(event.target.checked)
          }
        />
      </Form.Group>
      <Container>
        <Row>
          {appState.formData.files.images.length &&
            appState.formData.files.images.map(
              (file: string, index: number) => (
                <Col xs={6} md={12}>
                  <Col md={6}>
                    <Image
                      src={file}
                      alt={appState.formData.files.label}
                      thumbnail
                    />
                  </Col>
                  <Col md={6}>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Col>
              )
            )}
        </Row>
      </Container>
    </>
  )
}

export default AdditionalPhoto
