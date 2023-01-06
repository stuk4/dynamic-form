
export const downloadFile = (file: File): void => {
  const fileURL = URL.createObjectURL(file)
  const anchor = document.createElement('a')
  document.body.appendChild(anchor)
  anchor.href = fileURL
  anchor.download = file.name
  anchor.click()
}
