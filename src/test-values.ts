import { Any, AttributeName, AttributeValue } from './any';
import * as DynamoDB from '@aws-sdk/client-dynamodb';

/**
 * Test values
 */
export class TestingValues {
  // descriptions
  public AWSError: string = 'AWS Error';
  public InvalidTest: string = 'returns error from AWS';
  public MustSupply: string = 'Must supply';
  public ThrowsOnEmpty: string = 'throws on empty';
  public ValidTest: string = 'returns valid response from AWS';

  // empty values
  public EmptyArray = [];
  public EmptyObject = {};
  public EmptyString: string = '';

  // strings
  public Expression: string = 'expression';
  public Key: string = 'key';
  public Name: string = 'name';
  public StringValue: string = 'value';

  // objects
  public Item: Any = { Key: this.StringValue };
  public AttributeValue = {} as DynamoDB.AttributeValue;
  public ExpressionAttributeNameMap: AttributeName = { Key: this.Key };
  public ExpressionAttributeValueMap: AttributeValue = {
    Key: this.AttributeValue,
  };
}
