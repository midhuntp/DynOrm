const AWS = require('aws-sdk');

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
module.exports = new DynOrm();