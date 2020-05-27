import { Any } from './any';

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
    public ExpressionAttributeNameMap: AWS.DynamoDB.DocumentClient.ExpressionAttributeNameMap = { Key: this.Key };
    public ExpressionAttributeValueMap: AWS.DynamoDB.DocumentClient.ExpressionAttributeValueMap = { Key: this.Key };
}
