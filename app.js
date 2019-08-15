const express = require('express');
const app = express();
var builder = require('xmlbuilder');

// Hello, are you there?
app.get('/', (req, res) => res.send('Hello world!'));

// Test route for FS API (FS uses POST requests)
app.get('/fsapi', (req, res) => {
  var obj = {
    document: {
      '@type': 'freeswitch/xml',
      section: {
        '@name': 'directory',
        domain: {
          '@name': '$${domain}',
          params: {
            param: {
              '@name': 'dial-string',
              '@value':
                '{presence_id=${dialed_user}@${dialed_domain}}${sofia_contact(${dialed_user}@${dialed_domain})}'
            }
          },
          groups: {
            group: {
              '@name': 'default',
              users: {
                user: {
                  '@id': '1000',
                  params: {
                    param: {
                      '@name': 'password',
                      '@value': 'supersecretpassword'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  var xml = builder.create(obj).end({ pretty: true });
  res.send(xml);
});

// FS API endpoint for all registered items (directory, dialplan, configuration)
app.post('/fsapi', (req, res) => {
  var obj = {
    document: {
      '@type': 'freeswitch/xml',
      section: {
        '@name': 'directory',
        domain: {
          '@name': '$${domain}',
          params: {
            param: {
              '@name': 'dial-string',
              '@value':
                '{presence_id=${dialed_user}@${dialed_domain}}${sofia_contact(${dialed_user}@${dialed_domain})}'
            }
          },
          groups: {
            group: {
              '@name': 'default',
              users: {
                user: {
                  '@id': '1000',
                  params: {
                    param: {
                      '@name': 'password',
                      '@value': 'supersecretpassword'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  var xml = builder.create(obj).end({ pretty: true });
  res.send(xml);
});
module.exports = app;
