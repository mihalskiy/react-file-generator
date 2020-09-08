export const HotelBookDefaultDate = {
  hotel: 'Hotel Book',
  formData: {
    guestDetails: [{ label: '', value: '' }],
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
