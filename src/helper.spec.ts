import { DynamoHelper } from './helper';
import { Logger, LogLevel } from 'typescript-ilogger';
import { DynamoMock } from './mock';
import { TestingValues } from './test-values';
import { BatchWriteItemInput, BatchWriteItemOutput } from '@aws-sdk/client-dynamodb';

const logger = new Logger(LogLevel.Off);
const mockerResolves = new DynamoMock(false);
const dynamoHelperMockResolves = new DynamoHelper(logger,
    mockerResolves.Mock);
const mockerRejects = new DynamoMock(true);
const dynamoHelperMockRejects = new DynamoHelper(logger,
    mockerRejects.Mock);
const testValues = new TestingValues();

/**
 * Test the BatchWrite method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMockResolves.BatchWriteAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${dynamoHelperMockResolves.BatchWriteAsync.name}`;

    test(`${testValues.ThrowsOnEmpty} batchRequest`, () => {
        const actual = dynamoHelperMockResolves.BatchWriteAsync({} as BatchWriteItemInput);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} batchRequest`);
    });
    test(`returns success`, async () => {
        const params = {
            RequestItems: {},
        } as BatchWriteItemInput;
        const actual = dynamoHelperMockResolves.BatchWriteAsync(params);

        return expect(actual).resolves.toEqual({} as BatchWriteItemOutput);
    });
});

/**
 * Test the DeleteItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMockResolves.DeleteItemByKeyAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${dynamoHelperMockResolves.DeleteItemByKeyAsync.name}`;

    test(`${testValues.ThrowsOnEmpty} tableName`, () => {
        const actual = dynamoHelperMockResolves.DeleteItemByKeyAsync(testValues.EmptyString,
            testValues.Key,
            testValues.StringValue);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} tableName`);
    });
    test(`${testValues.ThrowsOnEmpty} keyName`, () => {
        const actual = dynamoHelperMockResolves.DeleteItemByKeyAsync(testValues.Name,
            testValues.EmptyString,
            testValues.StringValue);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} keyName`);
    });
    test(`${testValues.ThrowsOnEmpty} keyValue`, () => {
        const actual = dynamoHelperMockResolves.DeleteItemByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.EmptyString);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} keyValue`);
    });
    test(testValues.InvalidTest, () => {
        const actual = dynamoHelperMockRejects.DeleteItemByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
    test(testValues.ValidTest, () => {
        const actual = dynamoHelperMockResolves.DeleteItemByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue);
        return expect(actual).resolves.toEqual(mockerResolves.DeleteItemOutput);
    });
});

/**
 * Test the GetItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMockResolves.GetItemByKeyAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${dynamoHelperMockResolves.GetItemByKeyAsync.name}`;

    test(`${testValues.ThrowsOnEmpty} tableName`, () => {
        const actual = dynamoHelperMockResolves.GetItemByKeyAsync(testValues.EmptyString,
            testValues.Key,
            testValues.StringValue);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} tableName`);
    });
    test(`${testValues.ThrowsOnEmpty} keyName`, () => {
        const actual = dynamoHelperMockResolves.GetItemByKeyAsync(testValues.Name,
            testValues.EmptyString,
            testValues.StringValue);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} keyName`);
    });
    test(`${testValues.ThrowsOnEmpty} keyValue`, () => {
        const actual = dynamoHelperMockResolves.GetItemByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.EmptyString);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} keyValue`);
    });
    test(testValues.InvalidTest, () => {
        const actual = dynamoHelperMockRejects.GetItemByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
    test(testValues.ValidTest, () => {
        const actual = dynamoHelperMockResolves.GetItemByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue);
        return expect(actual).resolves.toEqual(mockerResolves.GetItemOutput);
    });
});

/**
 * Test the PutItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMockResolves.PutItemByKeyAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${dynamoHelperMockResolves.PutItemByKeyAsync.name}`;

    test(`${testValues.ThrowsOnEmpty} tableName`, () => {
        const actual = dynamoHelperMockResolves.PutItemByKeyAsync(testValues.EmptyString,
            testValues.Item);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} tableName`);
    });
    test(`${testValues.ThrowsOnEmpty} item`, () => {
        const actual = dynamoHelperMockResolves.PutItemByKeyAsync(testValues.Name,
            testValues.EmptyObject);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} item`);
    });
    test(testValues.InvalidTest, () => {
        const actual = dynamoHelperMockRejects.PutItemByKeyAsync(testValues.Name,
            testValues.Item);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
    test(testValues.ValidTest, () => {
        const actual = dynamoHelperMockResolves.PutItemByKeyAsync(testValues.Name,
            testValues.Item);
        return expect(actual).resolves.toEqual(mockerResolves.GetItemOutput);
    });
});

/**
 * Test the ScanAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMockResolves.ScanAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${dynamoHelperMockResolves.ScanAsync.name}`;

    test(`${testValues.ThrowsOnEmpty} tableName`, () => {
        const actual = dynamoHelperMockResolves.ScanAsync(testValues.EmptyString,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} tableName`);
    });
    test(`${testValues.ThrowsOnEmpty} attributeNames`, () => {
        const actual = dynamoHelperMockResolves.ScanAsync(testValues.Name,
            testValues.EmptyObject,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} attributeNames`);
    });
    test(`${testValues.ThrowsOnEmpty} attributeValues`, () => {
        const actual = dynamoHelperMockResolves.ScanAsync(testValues.Name,
            testValues.ExpressionAttributeNameMap,
            testValues.EmptyObject,
            testValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} attributeValues`);
    });
    test(testValues.InvalidTest, () => {
        const actual = dynamoHelperMockRejects.ScanAsync(testValues.Name,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
    test(testValues.ValidTest, () => {
        const actual = dynamoHelperMockResolves.ScanAsync(testValues.Name,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression);
        return expect(actual).resolves.toEqual(mockerResolves.ScanOutput);
    });
});

/**
 * Test the UpdateByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMockResolves.UpdateByKeyAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${dynamoHelperMockResolves.UpdateByKeyAsync.name}`;

    test(`${testValues.ThrowsOnEmpty} tableName`, () => {
        const actual = dynamoHelperMockResolves.UpdateByKeyAsync(testValues.EmptyString,
            testValues.Key,
            testValues.StringValue,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression,
            testValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} tableName`);
    });
    test(`${testValues.ThrowsOnEmpty} keyName`, () => {
        const actual = dynamoHelperMockResolves.UpdateByKeyAsync(testValues.Name,
            testValues.EmptyString,
            testValues.StringValue,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression,
            testValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} keyName`);
    });
    test(`${testValues.ThrowsOnEmpty} keyValue`, () => {
        const actual = dynamoHelperMockResolves.UpdateByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.EmptyString,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression,
            testValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} keyValue`);
    });
    test(`${testValues.ThrowsOnEmpty} attributeNames`, () => {
        const actual = dynamoHelperMockResolves.UpdateByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue,
            testValues.EmptyObject,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression,
            testValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} attributeNames`);
    });
    test(`${testValues.ThrowsOnEmpty} attributeValues`, () => {
        const actual = dynamoHelperMockResolves.UpdateByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue,
            testValues.ExpressionAttributeNameMap,
            testValues.EmptyObject,
            testValues.Expression,
            testValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} attributeValues`);
    });
    test(`${testValues.ThrowsOnEmpty} conditionExpression`, () => {
        const actual = dynamoHelperMockResolves.UpdateByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.EmptyString,
            testValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} conditionExpression`);
    });
    test(`${testValues.ThrowsOnEmpty} updateExpression`, () => {
        const actual = dynamoHelperMockResolves.UpdateByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression,
            testValues.EmptyString);
        return expect(actual).rejects.toThrow(`[${action}]-${testValues.MustSupply} updateExpression`);
    });
    test(testValues.InvalidTest, () => {
        const actual = dynamoHelperMockRejects.UpdateByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression,
            testValues.Expression);
        return expect(actual).rejects.toThrow(testValues.AWSError);
    });
    test(testValues.ValidTest, () => {
        const actual = dynamoHelperMockResolves.UpdateByKeyAsync(testValues.Name,
            testValues.Key,
            testValues.StringValue,
            testValues.ExpressionAttributeNameMap,
            testValues.ExpressionAttributeValueMap,
            testValues.Expression,
            testValues.Expression);
        return expect(actual).resolves.toEqual(mockerResolves.ScanOutput);
    });
});
