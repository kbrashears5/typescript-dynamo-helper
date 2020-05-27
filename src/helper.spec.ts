import { DynamoHelper } from './helper';
import { Logger, LogLevel } from 'typescript-ilogger';
import { DynamoMock } from './mock';
import { TestingValues } from './test-values';

const logger = new Logger(LogLevel.Off);
const mockerResolves = new DynamoMock(false);
const DynamoHelperMockResolves = new DynamoHelper(logger,
    mockerResolves.Mock);
const mockerRejects = new DynamoMock(true);
const DynamoHelperMockRejects = new DynamoHelper(logger,
    mockerRejects.Mock);
const TestValues = new TestingValues();

/**
 * Test the DeleteItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${DynamoHelperMockResolves.DeleteItemByKeyAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${DynamoHelperMockResolves.DeleteItemByKeyAsync.name}`;

    test(`${TestValues.ThrowsOnEmpty} tableName`, () => {
        const actual = DynamoHelperMockResolves.DeleteItemByKeyAsync(TestValues.EmptyString,
            TestValues.Key,
            TestValues.StringValue);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} tableName`);
    });
    test(`${TestValues.ThrowsOnEmpty} keyName`, () => {
        const actual = DynamoHelperMockResolves.DeleteItemByKeyAsync(TestValues.Name,
            TestValues.EmptyString,
            TestValues.StringValue);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} keyName`);
    });
    test(`${TestValues.ThrowsOnEmpty} keyValue`, () => {
        const actual = DynamoHelperMockResolves.DeleteItemByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.EmptyString);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} keyValue`);
    });
    test(TestValues.InvalidTest, () => {
        const actual = DynamoHelperMockRejects.DeleteItemByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.StringValue);
        return expect(actual).rejects.toThrow(TestValues.AWSError);
    });
    test(TestValues.ValidTest, () => {
        const actual = DynamoHelperMockResolves.DeleteItemByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.StringValue);
        return expect(actual).resolves.toEqual(mockerResolves.DeleteItemOutput);
    });
});

/**
 * Test the GetItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${DynamoHelperMockResolves.GetItemByKeyAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${DynamoHelperMockResolves.GetItemByKeyAsync.name}`;

    test(`${TestValues.ThrowsOnEmpty} tableName`, () => {
        const actual = DynamoHelperMockResolves.GetItemByKeyAsync(TestValues.EmptyString,
            TestValues.Key,
            TestValues.StringValue);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} tableName`);
    });
    test(`${TestValues.ThrowsOnEmpty} keyName`, () => {
        const actual = DynamoHelperMockResolves.GetItemByKeyAsync(TestValues.Name,
            TestValues.EmptyString,
            TestValues.StringValue);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} keyName`);
    });
    test(`${TestValues.ThrowsOnEmpty} keyValue`, () => {
        const actual = DynamoHelperMockResolves.GetItemByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.EmptyString);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} keyValue`);
    });
    test(TestValues.InvalidTest, () => {
        const actual = DynamoHelperMockRejects.GetItemByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.StringValue);
        return expect(actual).rejects.toThrow(TestValues.AWSError);
    });
    test(TestValues.ValidTest, () => {
        const actual = DynamoHelperMockResolves.GetItemByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.StringValue);
        return expect(actual).resolves.toEqual(mockerResolves.GetItemOutput);
    });
});

/**
 * Test the PutItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${DynamoHelperMockResolves.PutItemByKeyAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${DynamoHelperMockResolves.PutItemByKeyAsync.name}`;

    test(`${TestValues.ThrowsOnEmpty} tableName`, () => {
        const actual = DynamoHelperMockResolves.PutItemByKeyAsync(TestValues.EmptyString,
            TestValues.Item);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} tableName`);
    });
    test(`${TestValues.ThrowsOnEmpty} item`, () => {
        const actual = DynamoHelperMockResolves.PutItemByKeyAsync(TestValues.Name,
            TestValues.EmptyObject);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} item`);
    });
    test(TestValues.InvalidTest, () => {
        const actual = DynamoHelperMockRejects.PutItemByKeyAsync(TestValues.Name,
            TestValues.Item);
        return expect(actual).rejects.toThrow(TestValues.AWSError);
    });
    test(TestValues.ValidTest, () => {
        const actual = DynamoHelperMockResolves.PutItemByKeyAsync(TestValues.Name,
            TestValues.Item);
        return expect(actual).resolves.toEqual(mockerResolves.GetItemOutput);
    });
});

/**
 * Test the ScanAsync method
 */
describe(`${DynamoHelper.name}.${DynamoHelperMockResolves.ScanAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${DynamoHelperMockResolves.ScanAsync.name}`;

    test(`${TestValues.ThrowsOnEmpty} tableName`, () => {
        const actual = DynamoHelperMockResolves.ScanAsync(TestValues.EmptyString,
            TestValues.ExpressionAttributeNameMap,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} tableName`);
    });
    test(`${TestValues.ThrowsOnEmpty} attributeNames`, () => {
        const actual = DynamoHelperMockResolves.ScanAsync(TestValues.Name,
            TestValues.EmptyObject,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} attributeNames`);
    });
    test(`${TestValues.ThrowsOnEmpty} attributeValues`, () => {
        const actual = DynamoHelperMockResolves.ScanAsync(TestValues.Name,
            TestValues.ExpressionAttributeNameMap,
            TestValues.EmptyObject,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} attributeValues`);
    });
    test(TestValues.InvalidTest, () => {
        const actual = DynamoHelperMockRejects.ScanAsync(TestValues.Name,
            TestValues.ExpressionAttributeNameMap,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(TestValues.AWSError);
    });
    test(TestValues.ValidTest, () => {
        const actual = DynamoHelperMockResolves.ScanAsync(TestValues.Name,
            TestValues.ExpressionAttributeNameMap,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression);
        return expect(actual).resolves.toEqual(mockerResolves.ScanOutput);
    });
});

/**
 * Test the UpdateByKeyAsync method
 */
describe(`${DynamoHelper.name}.${DynamoHelperMockResolves.UpdateByKeyAsync.name}`, () => {
    // set action for this method
    const action = `${DynamoHelper.name}.${DynamoHelperMockResolves.UpdateByKeyAsync.name}`;

    test(`${TestValues.ThrowsOnEmpty} tableName`, () => {
        const actual = DynamoHelperMockResolves.UpdateByKeyAsync(TestValues.EmptyString,
            TestValues.Key,
            TestValues.StringValue,
            TestValues.ExpressionAttributeNameMap,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} tableName`);
    });
    test(`${TestValues.ThrowsOnEmpty} keyName`, () => {
        const actual = DynamoHelperMockResolves.UpdateByKeyAsync(TestValues.Name,
            TestValues.EmptyString,
            TestValues.StringValue,
            TestValues.ExpressionAttributeNameMap,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} keyName`);
    });
    test(`${TestValues.ThrowsOnEmpty} keyValue`, () => {
        const actual = DynamoHelperMockResolves.UpdateByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.EmptyString,
            TestValues.ExpressionAttributeNameMap,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} keyValue`);
    });
    test(`${TestValues.ThrowsOnEmpty} attributeNames`, () => {
        const actual = DynamoHelperMockResolves.UpdateByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.StringValue,
            TestValues.EmptyObject,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} attributeNames`);
    });
    test(`${TestValues.ThrowsOnEmpty} attributeValues`, () => {
        const actual = DynamoHelperMockResolves.UpdateByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.StringValue,
            TestValues.ExpressionAttributeNameMap,
            TestValues.EmptyObject,
            TestValues.Expression,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} attributeValues`);
    });
    test(`${TestValues.ThrowsOnEmpty} conditionExpression`, () => {
        const actual = DynamoHelperMockResolves.UpdateByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.StringValue,
            TestValues.ExpressionAttributeNameMap,
            TestValues.ExpressionAttributeValueMap,
            TestValues.EmptyString,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} conditionExpression`);
    });
    test(`${TestValues.ThrowsOnEmpty} updateExpression`, () => {
        const actual = DynamoHelperMockResolves.UpdateByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.StringValue,
            TestValues.ExpressionAttributeNameMap,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression,
            TestValues.EmptyString);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} updateExpression`);
    });
    test(TestValues.InvalidTest, () => {
        const actual = DynamoHelperMockRejects.UpdateByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.StringValue,
            TestValues.ExpressionAttributeNameMap,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression,
            TestValues.Expression);
        return expect(actual).rejects.toThrow(TestValues.AWSError);
    });
    test(TestValues.ValidTest, () => {
        const actual = DynamoHelperMockResolves.UpdateByKeyAsync(TestValues.Name,
            TestValues.Key,
            TestValues.StringValue,
            TestValues.ExpressionAttributeNameMap,
            TestValues.ExpressionAttributeValueMap,
            TestValues.Expression,
            TestValues.Expression);
        return expect(actual).resolves.toEqual(mockerResolves.ScanOutput);
    });
});
