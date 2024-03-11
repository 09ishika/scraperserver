// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');
// const scrap = require('./scraper1');
// const cors = require('cors');
// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();
// // require('./db/conn')
// const app = express();
// app.use(bodyParser.json());
// const Link_data = require('./Link');  
// app.use(cors())
 
// PORT = 5000
 
// app.post('/scrape', async (req, res) => {
//   const { url } = req.body;
//   if (!url) {
//     return res.status(400).json({ error: 'URL is required' });
//   }
 
//   try {
//     const urls = await scrap(url, null, new URL(url).hostname);
//     res.json({ urls });
//   } catch (error) {
//     console.error('Error scraping URL:', url, error);
//     res.status(500).json({ error: 'An error occurred while scraping URL' });
//   }
// });
 
// async function generatePDF() {
//   try {
//     const data = await Link_data.find();
 
//     const doc = new PDFDocument();
//     doc.pipe(fs.createWriteStream('data.pdf'));
 
//     doc.fontSize(16).text('Data from MongoDB', { align: 'center' });
//     doc.moveDown();
 
//     data.forEach((item, index) => {
//       doc.fontSize(12).text( `#${index + 1} - URL: ${item.url}`);
//       doc.moveDown();
//     });
//     doc.end();
//     console.log('PDF generated successfully');
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//   }
// }
 
// app.get('/generate-pdf', (req, res) => {
//   const filePath = path.join(__dirname, 'data.pdf');
//   res.download(filePath, 'data.pdf', (err) => {
//     if (err) {
//       console.error('Error downloading PDF:', err);
//       res.status(500).json({ error: 'Failed to download PDF' });
//     } else {
//       console.log('PDF downloaded successfully');
//     }
//   });
// });
 
// generatePDF();
 
 
// app.post('/scrape', async (req, res) => {
//   const { url } = req.body;
//   if (!url) {
//     return res.status(400).json({ error: 'URL is required' });
//   }
 
//   try {
//     const urls = await scrap(url, null, new URL(url).hostname);
//     res.json({ urls });
//   } catch (error) {
//     console.error('Error scraping URL:', url, error);
//     res.status(500).json({ error: 'An error occurred while scraping URL' });
//   }
// });
 
// app.get('/scrape', (req, res)=>{
//     Link_data.find()
//     .then(Link_data => res.json(Link_data))
//     .catch(err => res.json(err))
// })
 
// app.listen(PORT, () => {
//   console.log('Server running on port 5000');
// });
 


// const express = require('express'); 
// const axios = require('axios'); 
// const bodyParser = require('body-parser'); 
// const scrap = require('./scraper1'); 
// const cors = require('cors'); 
// const PDFDocument = require('pdfkit'); 
// const fs = require('fs'); 
// const path = require('path'); 
// require('dotenv').config(); 
// require('./db/conn'); 
// const createNewCollection = require('./Link'); 
// const app = express(); 
// app.use(bodyParser.json()); 
// const Link_data = require('./Link'); 
// app.use(cors()) 
// PORT = 5000 
// app.post('/scrape', async (req, res) => { 
  // const { url } = req.body; 
  // if (!url) { 
    // return res.status(400).json({ error: 'URL is required' }); 
    // } 
    // try { 
  // const urls = await scrap(url, null, new URL(url).hostname); 
  // res.json({ urls }); 
  // } catch (error) { 
    // console.error('Error scraping URL:', url, error); 
    // res.status(500).json({ error: 'An error occurred while scraping URL' }); 
    // } 
    // }); 
    // async function generatePDF() { 
      // try { 
        // const data = await Link_data.find(); 
        // const doc = new PDFDocument(); 
        // doc.pipe(fs.createWriteStream('data.pdf')); 
        // doc.fontSize(16).text('Data from MongoDB', { align: 'center' }); 
        // doc.moveDown(); 
        // data.forEach((item, index) => { 
          // doc.fontSize(12).text(#${index + 1} - URL: ${item.url}); 
          // doc.moveDown(); 
          // });
           // doc.end(); 
           // console.log('PDF generated successfully'); 
           // } catch (error) { 
            // console.error('Error generating PDF:', error); 
            // }
             // } 
             // app.get('/generate-pdf', (req, res) => { 
              // const filePath = path.join(__dirname, 'data.pdf'); 
              // res.download(filePath, 'data.pdf', (err) => { 
                // if (err) { 
                  // console.error('Error downloading PDF:', err);
                   // res.status(500).json({ error: 'Failed to download PDF' }); 
                   // } else {
                     // console.log('PDF downloaded successfully'); 
                     // } 
                     // }); 
                     // }); 
                     // generatePDF(); 
                     // app.post('/scrape', async (req, res) => { 
                      // const { url } = req.body; 
                      // if (!url) { 
                        // return res.status(400).json({ error: 'URL is required' }); 
                        // } 
                        // try { 
                          // const urls = await scrap(url, null, new URL(url).hostname); 
                          // res.json({ urls }); 
                          // } catch (error) { 
                            // console.error('Error scraping URL:', url, error); 
                            // res.status(500).json({ error: 'An error occurred while scraping URL' }); 
                            // } // });
                             // app.get('/scrape', (req, res)=>{ 
                              // Link_data.find()
                               // .then(Link_data => res.json(Link_data))
                                // .catch(err => res.json(err)) 
                                // }) 
                                // app.listen(PORT, () => { 
                                  // console.log('Server running on port 5000'); 
                               // }); 
                               // ..............................................................perfect 
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); 
const scrap = require('./scraper1');
const pdf = require('html-pdf');
const Json2csvParser = require('json2csv').Parser;
const axios = require('axios')
app.use(cors()); 
const request = require('request-promise');
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
PORT =5002; 
app.use(bodyParser.json()); 
const fs = require('fs'); 
const { URL } = require('url');
const cheerio = require('cheerio');





app.post('/scrape', async (req, res) => {
  const { url } = req.body;
  if (!url) {
      return res.status(400).json({ error: 'URL is required' });
  }
  try {
      const visitedUrls = new Set();
      fs.readFileSync('output.txt', '');
      fs.writeFileSync('output.txt', '');
      const urls = await scrap(url, null, new URL(url), visitedUrls);
      if (!urls || !urls.length) {
          return res.status(404).json({ error: 'No URLs found' });
      }
      return res.status(200).json({ urls });
  } catch (error) {
      console.error('Error scraping URL:', url, error);
      return res.status(500).json({ error: 'An error occurred while scraping URL' });
  }
});

app.get('/urls', (req, res) => {
  try {
      const data = fs.readFileSync('output.txt', 'utf8');
      const urls = data.split('\n').filter(Boolean); // Filter out empty lines
      res.status(200).json({ urls });
  } catch (error) {
      console.error('Error reading output file:', error);
      res.status(500).json({ error: 'An error occurred while reading the output file' });
  }
});

app.post('/scrapes', async (req, res) => {
  const { urls, selectors } = req.body;
  let pages = [];

  for (let article of urls) {
    const response = await request({
      uri: article.trim(),
      gzip: true,
    });

    let $ = cheerio.load(response);

    let pageData = {};

    selectors.forEach((selector) => {
      let values = [];
      $(selector).each((index, element) => {
        values.push($(element).text().trim());
      });
      pageData[selector] = values;
    });

    pages.push(pageData);
  }
   

  fs.writeFileSync('./data.json', JSON.stringify(pages), 'utf-8');

  const tableString = getTableString(pages);
  const outputPath = './output2.txt';
  fs.writeFileSync(outputPath, tableString, 'utf-8');

  res.json({ tableString, pages });

  const fields = selectors;
  const json2csvParser = new Json2csvParser({ fields });
  const csv = json2csvParser.parse(pages);
  // console.log(csv);

  console.table(pages);
});

function getTableString(pages) {
  let tableString = '';
  pages.forEach((page) => {
    for (let key in page) {
      tableString += `\n ${key}: \n \n  ${page[key].join('\n')}\n`; 
    }
    tableString += '\n'.repeat(3);
  });
  return tableString;
}
    app.listen(PORT, () => { 
      console.log('Server running on port 5000'); 
    });