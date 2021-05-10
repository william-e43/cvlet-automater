import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


const makePDF = (docDef, name) => {
  //create docDefinition Obj using the csv Obj (think about content)

  //make the PDF and download the PDF
  // pdfMake.createPdf(docDefinition).download(fileName, callback);
}

const makeDocDef = (csvObj) => {
  //make docDef using csv object

  //determine which template (FE, BE, FS)
  //populate templeate with given paramters
    //i.e. company name, job title, grooming sentence

  //return the docDef
}


module.exports = {
  makePDF: makePDF,
  makeDocDef: makeDocDef
}