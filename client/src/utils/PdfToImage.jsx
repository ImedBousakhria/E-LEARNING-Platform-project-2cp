import pdfjsLib from 'pdfjs-dist' ; 

export function extractImageFromPdf(file) {
  return new Promise((resolve,reject) => {
    const fileReader = new FileReader() ; 
    console.log(fileReader)  ; 
    fileReader.onload = async () => {
      const tyedArray = new Uint16Array(fileReader.result) ; 
      const pdfDoc = await pdfjsLib.getDocument({data:tyedArray}).promise ; 
      const page = await pdfDoc.getPage(1) ; 
      resolve(page) ; 
    }
    fileReader.readAsArrayBuffer(file)
  })
}