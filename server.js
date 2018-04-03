const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// eslint-disable-next-line
const environment = process.env.NODE_ENV || 'development';

app.locals.title = 'Starlight Dev Interview';

// read in JSON file
const readJSONFile = (fileName) => {
  const filePath = __dirname + '/' + fileName;
  const fileExists = fs.existsSync(filePath);

  // if the file exists
  if (fileExists) {
    const readData = fs.readFileSync(filePath);
    // if the file is not empty
    if (readData.toString() !== '') {
      return JSON.parse(readData.toString());
    // handle empty file
    } else {
      return readData.toString();
    }
  // handle non-existent file
  } else {
    return '';
  }
};

// serve base URL
app.use(express.static(__dirname + '/public'));

// serve cans
app.get('/api/v1/cans', async (request, response) => {
  const cans = await readJSONFile('cans.json');
  if (cans !== '') {
    return response.status(200).json({ cans });
  } else {
    return response.status(404).json({ error: 'Could not find any cans.'});
  }
});

app.listen(app.get('port'), () => {
  // eslint-disable-next-line
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
