const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(fileUpload({
  createParentPath: true
}))
app.use(cors())
app.use(morgan("dev"))

app.post('/file', (req, res) => {
  try {
    if(!req.files){
      res.send({
        status: false,
        message: 'No Files'
      })
    } else {
      const {file} = req.files
      file.mv("./uploads" + file.name)

      res.send({
        status: true,
        message: 'File is uploaded'
      })
    }
  } catch(e) {
    res.status(500).send(e)
  }
})


app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})