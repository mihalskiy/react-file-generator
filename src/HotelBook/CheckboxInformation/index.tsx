import React, { ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'
import { useAppState } from '@laststance/use-app-state'
import { HotelBookInterface } from '../HotelBookInterface'

const CheckboxInformation: React.FC = () => {
  const [appState, setAppState] = useAppState<HotelBookInterface>()

  function handleChange(value: boolean, index: number): void {
    appState.formData.checkbox[index].value = value
    setAppState(appState)
  }

  return (
    <>
      <h3>Check information</h3>
      {appState.formData.checkbox.map((information, index) => (
        <div key={`inline-${information.id}`} className="mb-3">
          <Form.Check
            inline
            label={information.text}
            type={'checkbox'}
            checked={information.value}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event.target.checked, index)
            }
            id={`inline-${information.id}-1`}
          />
        </div>
      ))}
    </>
  )
}

export default CheckboxInformation
