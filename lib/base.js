"use strict";

const jsonschema = require('json-schema-dynamo');

module.exports = class Schema{

    constructor(schema){
        this.schema = schema;
    }

    createSchema(model)
    {
        try {
            this.model = jsonschema.fromModelToDynamoItem(this.schema, model);
        } catch (error) {
           console.log("Validation error"); 
        }
       
    }

    print()
    {
        console.log(this.model);
    }

}
