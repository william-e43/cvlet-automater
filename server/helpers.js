const fs = require('fs');

const content = 'Hello World, this is a file I created';

fs.writeFile('/Users/williameliason/Desktop/cvlets/newFile', content, err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('file written successfully');
})
