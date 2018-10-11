"use strict";

const dynorm = require('../../lib');
const schema  = dynorm.schema;
let user_schama = new schema({
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          createDate: {
            type: 'date'
          },
          name: {
            type: 'string'
          },
          active: {
            type: 'boolean'
          },
          likes: {
            type: 'number'
          },
          types: {
            type: 'array',
            items: {
              type: 'string'
            }
          },
          userIds: {
            type: 'array',
            items: {
              type: 'number'
            }
          }
        }
      }
    );

    var model = {
        id: 'asdf',
        createDate: new Date(),
        name: 'asdffdas',
        likes: 1,
        active: true,
        types: ['qwerty', 'ytrewq'],
        userIds: [1, 2, 3, 4, 5, 6, 7]
      }

      user_schama.createSchema(model);
      user_schama.print();

//module.exports = dynorm.model('userData', user_schama);