"use strict";

const AWS = require('aws-sdk');
const schema = require('./base');

class DynOrm {
    connectToLocal(url) {
        if (url) {
            return new thsis.AWS.DynamoDB({
                endpoint: new AWS.Endpoint(url)
            });
        } else {
            throw new Error("URL should be set to connect to Dynamodb");
        }
    }

    
}
module.exports.schema = schema;
//module.exports = new DynOrm();