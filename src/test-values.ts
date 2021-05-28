/* eslint-disable no-invalid-this */
import { Any, AttributeName, AttributeValue } from './any';
import * as DynamoDB from '@aws-sdk/client-dynamodb';

/**
 * Test values
 */
export class TestingValues {
  // descriptions
  public AWSError = 'AWS Error';
  public InvalidTest = 'returns error from AWS';
  public MustSupply = 'Must supply';
  public ThrowsOnEmpty = 'throws on empty';
  public ValidTest = 'returns valid response from AWS';

  // empty values
  public EmptyArray = [];
  public EmptyObject = {};
  public EmptyString = '';

  // strings
  public Expression = 'expression';
  public Key = 'key';
  public Name = 'name';
  public StringValue = 'value';

  // objects
  public Item: Any = { Key: this.StringValue };
  public AttributeValue = {} as DynamoDB.AttributeValue;
  public ExpressionAttributeNameMap: AttributeName = { Key: this.Key };
  public ExpressionAttributeValueMap: AttributeValue = {
    Key: this.AttributeValue,
  };
}
