import { BaseMock } from 'typescript-helper-functions';

// tslint:disable-next-line: no-var-requires
const AWS = require('aws-sdk');

/**
 * DynamoDB Mock class
 */
export class DynamoMock extends BaseMock {

    /**
     * Mocks an AWS.DynamoDB.DocumentClient.DeleteItemOutput response
     */
    public BatchWriteItemOutput: AWS.DynamoDB.DocumentClient.BatchWriteItemOutput = {};

    /**
     * Mocks an AWS.DynamoDB.DocumentClient.DeleteItemOutput response
     */
    public DeleteItemOutput: AWS.DynamoDB.DocumentClient.DeleteItemOutput = {};

    /**
     * Mocks an AWS.DynamoDB.DocumentClient.GetItemOutput response
     */
    public GetItemOutput: AWS.DynamoDB.DocumentClient.GetItemOutput = {};

    /**
     * Mocks an AWS.DynamoDB.DocumentClient.PutItemOutput response
     */
    public PutItemOutput: AWS.DynamoDB.DocumentClient.PutItemOutput = {};

    /**
     * Mocks an AWS.DynamoDB.DocumentClient.ScanOutput response
     */
    public ScanOutput: AWS.DynamoDB.DocumentClient.ScanOutput = {};

    /**
     * Mocks an AWS.DynamoDB.DocumentClient.UpdateItemOutput response
     */
    public UpdateItemOutput: AWS.DynamoDB.DocumentClient.UpdateItemOutput = {};

    /**
     * Create the DynamoDB mock
     */
    protected CreateMock(returnError: boolean) {
        const rejectResponse = new Error(`AWS Error`);

        // implement the AWS responses
        const awsResponses = {
            // batchWrite response
            batchWrite: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<AWS.DynamoDB.DocumentClient.BatchWriteItemOutput>(this.BatchWriteItemOutput);
                }),
            },
            // delete response
            delete: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<AWS.DynamoDB.DocumentClient.DeleteItemOutput>(this.DeleteItemOutput);
                }),
            },
            // get response
            get: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<AWS.DynamoDB.DocumentClient.GetItemOutput>(this.GetItemOutput);
                }),
            },
            // put response
            put: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<AWS.DynamoDB.DocumentClient.PutItemOutput>(this.PutItemOutput);
                }),
            },
            // scan response
            scan: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<AWS.DynamoDB.DocumentClient.ScanOutput>(this.ScanOutput);
                }),
            },
            // update response
            update: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<AWS.DynamoDB.DocumentClient.UpdateItemOutput>(this.UpdateItemOutput);
                }),
            },
        };

        // create the functions
        let functions = new AWS.DynamoDB.DocumentClient();
        functions = {
            batchWrite: () => awsResponses.batchWrite,
            delete: () => awsResponses.delete,
            get: () => awsResponses.get,
            put: () => awsResponses.put,
            scan: () => awsResponses.scan,
            update: () => awsResponses.update,
        };

        return functions;
    }
}
