const schema = require('@zeit/schemas/deployment/config');
const fs = require('fs');

fs.writeFileSync('./deployment.json', JSON.stringify(schema));