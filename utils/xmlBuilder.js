var builder = require('xmlbuilder');

module.exports = () => {
  let obj = {
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
                  '@id': 'marty',
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

  let xml = builder.create(obj).end({ pretty: true });

  return xml;
};
