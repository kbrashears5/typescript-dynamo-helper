import { DynamoHelper } from './helper';
import { Logger, LogLevel } from 'typescript-ilogger';
import { TestingValues } from './test-values';
import * as DynamoDB from '@aws-sdk/client-dynamodb';

const error = new Error(`AWS Error`);

const batchWriteItem = jest.fn().mockImplementation(() => {
    return Promise.reject(error);
});
const deleteItem = jest.fn().mockImplementation(() => {
    return Promise.reject(error);
});
const getItem = jest.fn().mockImplementation(() => {
    return Promise.reject(error);
});
const putItem = jest.fn().mockImplementation(() => {
    return Promise.reject(error);
});
const scan = jest.fn().mockImplementation(() => {
    return Promise.reject(error);
});
const updateItem = jest.fn().mockImplementation(() => {
    return Promise.reject(error);
});

// mock the functions
jest.mock('@aws-sdk/client-dynamodb', () => {
    return {
        DynamoDB: jest.fn().mockImplementation(() => {
            return {
                batchWriteItem,
                deleteItem,
                getItem,
                putItem,
                scan,
                updateItem,
            };
        }),
    };
});

const logger = new Logger(LogLevel.Off);
const dynamoHelperMock = new DynamoHelper(logger);
const testValues = new TestingValues();

/**
 * Test the BatchWriteAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.BatchWriteAsync.name}`, () => {
    test(testValues.InvalidTest, () => {
        const params = {
            RequestItems: {},
        } as DynamoDB.BatchWriteItemInput;
        const actual = dynamoHelperMock.BatchWriteAsync(params);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
});

/**
 * Test the DeleteItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.DeleteItemByKeyAsync.name}`, () => {
    test(testValues.InvalidTest, () => {
        const actual = dynamoHelperMock.DeleteItemByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
});

/**
 * Test the GetItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.GetItemByKeyAsync.name}`, () => {
    test(testValues.InvalidTest, () => {
        const actual = dynamoHelperMock.GetItemByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
});

/**
 * Test the PutItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.PutItemByKeyAsync.name}`, () => {
    test(testValues.InvalidTest, () => {
        const actual = dynamoHelperMock.PutItemByKeyAsync(testValues.Name,
            testValues.Item);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
});

/**
 * Test the ScanAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.ScanAsync.name}`, () => {
    test(testValues.InvalidTest, () => {
        const actual = dynamoHelperMock.ScanAsync(testValues.Name,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
});

/**
 * Test the UpdateByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.UpdateByKeyAsync.name}`, () => {
    test(testValues.InvalidTest, () => {
        const actual = dynamoHelperMock.UpdateByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression,
            testValues.Expression);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
});
