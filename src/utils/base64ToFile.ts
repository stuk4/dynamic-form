export const base64ToFile = (base64: string, mimeType: string = 'text/csv'): File => {
  // Convertir el texto base64 en una matriz de bytes
  const binary = atob(base64)
  const len = binary.length
  const buffer = new ArrayBuffer(len)
  const view = new Uint8Array(buffer)
  for (let i = 0; i < len; i++) {
    view[i] = binary.charCodeAt(i)
  }
  // Crear un archivo a partir de la matriz de bytes
  const file = new File([view], 'archivo.csv', {
    type: mimeType
  })

  return file
}
