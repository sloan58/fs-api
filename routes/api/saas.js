const express = require('express');
const router = express.Router();
var builder = require('xmlbuilder');

// FS API endpoint for all registered items (directory, dialplan, configuration)
router.get('/validate-xml', [], (req, res) => {
  xml = xmlBuilder();
  res.send(xml);
});

module.exports = router;
