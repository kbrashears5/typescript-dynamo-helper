import { DynamoHelper } from './helper';
import { Logger, LogLevel } from 'typescript-ilogger';
import { TestingValues } from './test-values';
import * as DynamoDB from '@aws-sdk/client-dynamodb';

const batchWriteItemOutputResponse: DynamoDB.BatchWriteItemOutput = {};
const deleteItemOutputResponse: DynamoDB.DeleteItemOutput = {};
const getItemOutputResponse: DynamoDB.GetItemOutput = {};
const putItemOutputResponse: DynamoDB.PutItemOutput = {};
const scanOutputResponse: DynamoDB.ScanOutput = {};
const updateItemOutputResponse: DynamoDB.UpdateItemOutput = {};

const batchWriteItem = jest.fn().mockImplementation(() => {
  return Promise.resolve<DynamoDB.BatchWriteItemOutput>(
    batchWriteItemOutputResponse,
  );
});
const deleteItem = jest.fn().mockImplementation(() => {
  return Promise.resolve<DynamoDB.DeleteItemOutput>(deleteItemOutputResponse);
});
const getItem = jest.fn().mockImplementation(() => {
  return Promise.resolve<DynamoDB.GetItemOutput>(getItemOutputResponse);
});
const putItem = jest.fn().mockImplementation(() => {
  return Promise.resolve<DynamoDB.PutItemOutput>(putItemOutputResponse);
});
const scan = jest.fn().mockImplementation(() => {
  return Promise.resolve<DynamoDB.ScanOutput>(scanOutputResponse);
});
const updateItem = jest.fn().mockImplementation(() => {
  return Promise.resolve<DynamoDB.UpdateItemOutput>(updateItemOutputResponse);
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
 * Test the BatchWrite method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.BatchWriteAsync.name}`, () => {
  // set action for this method
  const action = `${DynamoHelper.name}.${dynamoHelperMock.BatchWriteAsync.name}`;

  test(`${testValues.ThrowsOnEmpty} batchRequest`, () => {
    const actual = dynamoHelperMock.BatchWriteAsync(
      {} as DynamoDB.BatchWriteItemInput,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} batchRequest`,
    );
  });
  test(`returns success`, async () => {
    const params = {
      RequestItems: {},
    } as DynamoDB.BatchWriteItemInput;
    const actual = dynamoHelperMock.BatchWriteAsync(params);

    return expect(actual).resolves.toEqual(batchWriteItemOutputResponse);
  });
});

/**
 * Test the DeleteItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.DeleteItemByKeyAsync.name}`, () => {
  // set action for this method
  const action = `${DynamoHelper.name}.${dynamoHelperMock.DeleteItemByKeyAsync.name}`;

  test(`${testValues.ThrowsOnEmpty} tableName`, () => {
    const actual = dynamoHelperMock.DeleteItemByKeyAsync(
      testValues.EmptyString,
      testValues.Key,
      testValues.StringValue,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} tableName`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} keyName`, () => {
    const actual = dynamoHelperMock.DeleteItemByKeyAsync(
      testValues.Name,
      testValues.EmptyString,
      testValues.StringValue,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} keyName`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} keyValue`, () => {
    const actual = dynamoHelperMock.DeleteItemByKeyAsync(
      testValues.Name,
      testValues.Key,
      testValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} keyValue`,
    );
  });
  test(`${testValues.ValidTest}`, () => {
    const actual = dynamoHelperMock.DeleteItemByKeyAsync(
      testValues.Name,
      testValues.Key,
      testValues.StringValue,
    );
    return expect(actual).resolves.toEqual(deleteItemOutputResponse);
  });
});

/**
 * Test the GetItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.GetItemByKeyAsync.name}`, () => {
  // set action for this method
  const action = `${DynamoHelper.name}.${dynamoHelperMock.GetItemByKeyAsync.name}`;

  test(`${testValues.ThrowsOnEmpty} tableName`, () => {
    const actual = dynamoHelperMock.GetItemByKeyAsync(
      testValues.EmptyString,
      testValues.Key,
      testValues.StringValue,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} tableName`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} keyName`, () => {
    const actual = dynamoHelperMock.GetItemByKeyAsync(
      testValues.Name,
      testValues.EmptyString,
      testValues.StringValue,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} keyName`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} keyValue`, () => {
    const actual = dynamoHelperMock.GetItemByKeyAsync(
      testValues.Name,
      testValues.Key,
      testValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} keyValue`,
    );
  });
  test(`${testValues.ValidTest}`, () => {
    const actual = dynamoHelperMock.GetItemByKeyAsync(
      testValues.Name,
      testValues.Key,
      testValues.StringValue,
    );
    return expect(actual).resolves.toEqual(getItemOutputResponse);
  });
});

/**
 * Test the PutItemByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.PutItemByKeyAsync.name}`, () => {
  // set action for this method
  const action = `${DynamoHelper.name}.${dynamoHelperMock.PutItemByKeyAsync.name}`;

  test(`${testValues.ThrowsOnEmpty} tableName`, () => {
    const actual = dynamoHelperMock.PutItemByKeyAsync(
      testValues.EmptyString,
      testValues.Item,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} tableName`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} item`, () => {
    const actual = dynamoHelperMock.PutItemByKeyAsync(
      testValues.Name,
      testValues.EmptyObject,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} item`,
    );
  });
  test(`${testValues.ValidTest}`, () => {
    const actual = dynamoHelperMock.PutItemByKeyAsync(
      testValues.Name,
      testValues.Item,
    );
    return expect(actual).resolves.toEqual(getItemOutputResponse);
  });
});

/**
 * Test the ScanAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.ScanAsync.name}`, () => {
  // set action for this method
  const action = `${DynamoHelper.name}.${dynamoHelperMock.ScanAsync.name}`;

  test(`${testValues.ThrowsOnEmpty} tableName`, () => {
    const actual = dynamoHelperMock.ScanAsync(
      testValues.EmptyString,
      testValues.ExpressionAttributeNameMap,
      testValues.ExpressionAttributeValueMap,
      testValues.Expression,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} tableName`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} attributeNames`, () => {
    const actual = dynamoHelperMock.ScanAsync(
      testValues.Name,
      testValues.EmptyObject,
      testValues.ExpressionAttributeValueMap,
      testValues.Expression,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} attributeNames`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} attributeValues`, () => {
    const actual = dynamoHelperMock.ScanAsync(
      testValues.Name,
      testValues.ExpressionAttributeNameMap,
      testValues.EmptyObject,
      testValues.Expression,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} attributeValues`,
    );
  });
  test(`${testValues.ValidTest}`, () => {
    const actual = dynamoHelperMock.ScanAsync(
      testValues.Name,
      testValues.ExpressionAttributeNameMap,
      testValues.ExpressionAttributeValueMap,
      testValues.Expression,
    );
    return expect(actual).resolves.toEqual(scanOutputResponse);
  });
});

/**
 * Test the UpdateByKeyAsync method
 */
describe(`${DynamoHelper.name}.${dynamoHelperMock.UpdateByKeyAsync.name}`, () => {
  // set action for this method
  const action = `${DynamoHelper.name}.${dynamoHelperMock.UpdateByKeyAsync.name}`;

  test(`${testValues.ThrowsOnEmpty} tableName`, () => {
    const actual = dynamoHelperMock.UpdateByKeyAsync(
      testValues.EmptyString,
      testValues.Key,
      testValues.StringValue,
      testValues.ExpressionAttributeNameMap,
      testValues.ExpressionAttributeValueMap,
      testValues.Expression,
      testValues.Expression,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} tableName`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} keyName`, () => {
    const actual = dynamoHelperMock.UpdateByKeyAsync(
      testValues.Name,
      testValues.EmptyString,
      testValues.StringValue,
      testValues.ExpressionAttributeNameMap,
      testValues.ExpressionAttributeValueMap,
      testValues.Expression,
      testValues.Expression,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} keyName`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} keyValue`, () => {
    const actual = dynamoHelperMock.UpdateByKeyAsync(
      testValues.Name,
      testValues.Key,
      testValues.EmptyString,
      testValues.ExpressionAttributeNameMap,
      testValues.ExpressionAttributeValueMap,
      testValues.Expression,
      testValues.Expression,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} keyValue`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} attributeNames`, () => {
    const actual = dynamoHelperMock.UpdateByKeyAsync(
      testValues.Name,
      testValues.Key,
      testValues.StringValue,
      testValues.EmptyObject,
      testValues.ExpressionAttributeValueMap,
      testValues.Expression,
      testValues.Expression,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} attributeNames`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} attributeValues`, () => {
    const actual = dynamoHelperMock.UpdateByKeyAsync(
      testValues.Name,
      testValues.Key,
      testValues.StringValue,
      testValues.ExpressionAttributeNameMap,
      testValues.EmptyObject,
      testValues.Expression,
      testValues.Expression,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} attributeValues`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} conditionExpression`, () => {
    const actual = dynamoHelperMock.UpdateByKeyAsync(
      testValues.Name,
      testValues.Key,
      testValues.StringValue,
      testValues.ExpressionAttributeNameMap,
      testValues.ExpressionAttributeValueMap,
      testValues.EmptyString,
      testValues.Expression,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} conditionExpression`,
    );
  });
  test(`${testValues.ThrowsOnEmpty} updateExpression`, () => {
    const actual = dynamoHelperMock.UpdateByKeyAsync(
      testValues.Name,
      testValues.Key,
      testValues.StringValue,
      testValues.ExpressionAttributeNameMap,
      testValues.ExpressionAttributeValueMap,
      testValues.Expression,
      testValues.EmptyString,
    );
    return expect(actual).rejects.toThrow(
      `[${action}]-${testValues.MustSupply} updateExpression`,
    );
  });
  test(`${testValues.ValidTest}`, () => {
    const actual = dynamoHelperMock.UpdateByKeyAsync(
      testValues.Name,
      testValues.Key,
      testValues.StringValue,
      testValues.ExpressionAttributeNameMap,
      testValues.ExpressionAttributeValueMap,
      testValues.Expression,
      testValues.Expression,
    );
    return expect(actual).resolves.toEqual(scanOutputResponse);
  });
});
