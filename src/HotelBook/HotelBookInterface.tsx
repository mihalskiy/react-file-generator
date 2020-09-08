export interface SignatureState {
  value: string,
  label: string,
}

export interface CheckboxState {
  id: string,
  text: string,
  value: boolean
}

export interface GuestDetailsState {
  label: string
  value: string
}

export interface FilesState {
  label: string
  images: Array<string>
  required: boolean
}

export interface formDataState {
  files: FilesState,
  guestDetails: [GuestDetailsState],
  checkbox: [CheckboxState],
  signature: SignatureState,
}

export interface HotelBookInterface {
  hotel: string,
  formData: formDataState,
  checkedInAt: Date,
  checkedOutAt: Date,
  convertType: string
}
