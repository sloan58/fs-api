const express = require('express');
const router = express.Router();
let xmlBuilder = require('../../utils/xmlBuilder');

// FS API endpoint for all registered items (directory, dialplan, configuration)
router.post('/', [], (req, res) => {
  xml = xmlBuilder();
  res.send(xml);
});

module.exports = router;
