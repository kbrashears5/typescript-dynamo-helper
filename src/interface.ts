import { AttributeName, AttributeValue } from './any';
import * as DynamoDB from '@aws-sdk/client-dynamodb';

/**
 * DynamoDB Helper
 */
export interface IDynamoHelper {
    /**
     * AWS Repository for DynamoDB
     */
    Repository: DynamoDB.DynamoDB;

    /**
     * Delete an item by key
     * @param tableName {string} Table name to delete from
     * @param keyName {string} Name of key column
     * @param keyValue {string | number} Value of key column
     */
    DeleteItemByKeyAsync(tableName: string,
        keyName: string,
        keyValue: string | number): Promise<DynamoDB.DeleteItemOutput>;

    /**
     * Get an item by key
     * @param tableName {string} Table name to get from
     * @param keyName {string} Name of key column
     * @param keyValue {string | number} Value of key column
     */
    GetItemByKeyAsync(tableName: string,
        keyName: string,
        keyValue: string | number): Promise<DynamoDB.GetItemOutput>;

    /**
     * Put an item
     * @param tableName {string} Table name to put item in
     * @param item {T extends AttributeValue} Item to put
     */
    PutItemByKeyAsync<T extends AttributeValue>(tableName: string,
        item: T): Promise<DynamoDB.GetItemOutput>;

    /**
     * Scan a table
     * @param tableName {string} Table name to scan from
     * @param attributeNames {AttributeName} Map of attribute names
     * @param attributeValues {AttributeValue} Map of attribute values
     * @param expression {string} Filter expression
     * @param attributesToReturn {string} Attributes to return. Default is ALL_ATTRIBUTES
     * @param lastEvaluatedKey {AttributeValue} LastEvaluatedKey of response. Supplied by recursion
     */
    ScanAsync(tableName: string,
        attributeNames: AttributeName,
        attributeValues: AttributeValue,
        expression: string,
        attributesToReturn?: string,
        lastEvaluatedKey?: AttributeValue): Promise<DynamoDB.ScanOutput>;

    /**
     * Update an item by key
     * @param tableName {string} Table name to update in
     * @param keyName {string} Name of key column
     * @param keyValue {string | number} Value of key column
     * @param attributeNames {AttributeName} Map of attribute names
     * @param attributeValues {AttributeValue} Map of attribute values
     * @param conditionExpression {string} Condition expression
     * @param updateExpression {string} Update expression
     */
    UpdateByKeyAsync(tableName: string,
        keyName: string,
        keyValue: string | number,
        attributeNames: AttributeName,
        attributeValues: AttributeValue,
        conditionExpression: string,
        updateExpression: string): Promise<DynamoDB.ScanOutput>;
}
