import { BaseMock } from 'typescript-helper-functions';
import * as DynamoDB from '@aws-sdk/client-dynamodb';

/**
 * DynamoDB Mock class
 */
export class DynamoMock extends BaseMock {

    /**
     * Mocks an DynamoDB.DeleteItemOutput response
     */
    public BatchWriteItemOutput: DynamoDB.BatchWriteItemOutput = {};

    /**
     * Mocks an DynamoDB.DeleteItemOutput response
     */
    public DeleteItemOutput: DynamoDB.DeleteItemOutput = {};

    /**
     * Mocks an DynamoDB.GetItemOutput response
     */
    public GetItemOutput: DynamoDB.GetItemOutput = {};

    /**
     * Mocks an DynamoDB.PutItemOutput response
     */
    public PutItemOutput: DynamoDB.PutItemOutput = {};

    /**
     * Mocks an DynamoDB.ScanOutput response
     */
    public ScanOutput: DynamoDB.ScanOutput = {};

    /**
     * Mocks an DynamoDB.UpdateItemOutput response
     */
    public UpdateItemOutput: DynamoDB.UpdateItemOutput = {};

    /**
     * Create the DynamoDB mock
     */
    protected CreateMock(returnError: boolean) {
        const rejectResponse = new Error(`AWS Error`);

        // implement the AWS responses
        const awsResponses = {
            // batchWrite response
            batchWriteItem: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<DynamoDB.BatchWriteItemOutput>(this.BatchWriteItemOutput);
                }),
            },
            // delete response
            deleteItem: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<DynamoDB.DeleteItemOutput>(this.DeleteItemOutput);
                }),
            },
            // get response
            getItem: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<DynamoDB.GetItemOutput>(this.GetItemOutput);
                }),
            },
            // put response
            putItem: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<DynamoDB.PutItemOutput>(this.PutItemOutput);
                }),
            },
            // scan response
            scan: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<DynamoDB.ScanOutput>(this.ScanOutput);
                }),
            },
            // update response
            updateItem: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<DynamoDB.UpdateItemOutput>(this.UpdateItemOutput);
                }),
            },
        };

        const options = {} as DynamoDB.DynamoDBClientConfig;

        // create the functions
        let functions = new DynamoDB.DynamoDB(options);
        functions = {
            batchWriteItem: () => awsResponses.batchWriteItem,
            deleteItem: () => awsResponses.deleteItem,
            getItem: () => awsResponses.getItem,
            putItem: () => awsResponses.putItem,
            scan: () => awsResponses.scan,
            updateItem: () => awsResponses.updateItem,
        };

        return functions;
    }
}
