import * as DynamoDB from '@aws-sdk/client-dynamodb';

/**
 * Represents an any object
 */
export interface Any {
    [key: string]: any;
}

/**
 * Represents Dynamo DB Attribute Name map
 */
export interface AttributeName {
    [key: string]: string;
}

/**
 * Represents Dynamo DB Attribute Value map
 */
export interface AttributeValue {
    [key: string]: DynamoDB.AttributeValue;
}