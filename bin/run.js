const jade   = require('jade')
const path   = require('path')
const fs     = require('fs')
const slides = path.join(__dirname, '..', 'views');
const root   = path.join(__dirname, '..', 'public');

const jadeSlides = [
  {
    "url": "index",
    "directory": "."
  },
  {
    "url":"nodejs",
    "directory": "cronopio/nodejs"
  }
]

jadeSlides.forEach(one => {
  fs.readFile(path.join(slides, one.directory, 'index.jade'), (e, data) => {
    if (e) throw e;
    fs.readFile(path.join(slides, one.directory, 'layout.jade'), (er, dataLayout) => {
      if (er) throw er;
      let html = jade.render(data.toString())
      let renderLayout = jade.compile(dataLayout.toString());
      let fullHtml = renderLayout({ body: html });
      fs.writeFile(path.join(root, one.url + '.html'), fullHtml, err => {
        if (err) throw err;
        console.log('complete ', one.url);
      })
    })
  })
})