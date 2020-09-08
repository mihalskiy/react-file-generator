export const HotelBookDefaultDate = {
  hotel: 'Hotel Book',
  formData: {
    guestDetails: [
      { label: 'firstName', value: 'First name' },
      { label: 'Last name', value: 'Last name' },
      { label: 'Document type', value: 'Document type' },
      { label: 'Document ', value: 'Document ' },
    ],
    files: {
      label: '',
      images: [],
      required: false,
    },
    checkbox: [
      {
        id: 'legal',
        text: 'He protec, he attac, but most importantly he hac',
        value: false,
      },
      {
        id: 2,
        text: 'He protec, he attac, but most importantly he hac',
        value: true,
      },
    ],
    signature: {
      value: '',
      label: '',
    },
  },
  checkedInAt: new Date(),
  checkedOutAt: new Date(),
  convertType: 'pdf',
}
