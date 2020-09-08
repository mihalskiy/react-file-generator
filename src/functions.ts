export const getBase64 = async (
  file: File
): Promise<ArrayBuffer | string | null> => {
  return new Promise((resolve, rejects) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = (error) => {
      rejects(error)
    }
  })
}
