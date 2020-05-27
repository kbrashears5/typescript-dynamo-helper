/**
 * DynamoDB Helper
 */
export interface IDynamoHelper {
    /**
     * AWS Repository for DynamoDB
     */
    Repository: AWS.DynamoDB.DocumentClient;

    /**
     * Delete an item by key
     * @param tableName {string} Table name to delete from
     * @param keyName {string} Name of key column
     * @param keyValue {string | number} Value of key column
     */
    DeleteItemByKeyAsync(tableName: string,
        keyName: string,
        keyValue: string | number): Promise<AWS.DynamoDB.DocumentClient.DeleteItemOutput>;

    /**
     * Get an item by key
     * @param tableName {string} Table name to get from
     * @param keyName {string} Name of key column
     * @param keyValue {string | number} Value of key column
     */
    GetItemByKeyAsync(tableName: string,
        keyName: string,
        keyValue: string | number): Promise<AWS.DynamoDB.DocumentClient.GetItemOutput>;

    /**
     * Put an item
     * @param tableName {string} Table name to put item in
     * @param item {T extends object} Item to put
     */
    PutItemByKeyAsync<T extends object>(tableName: string,
        item: T): Promise<AWS.DynamoDB.DocumentClient.GetItemOutput>;

    /**
     * Scan a table
     * @param tableName {string} Table name to scan from
     * @param attributeNames {AWS.DynamoDB.DocumentClient.ExpressionAttributeNameMap} Map of attribute names
     * @param attributeValues {AWS.DynamoDB.DocumentClient.ExpressionAttributeValueMap} Map of attribute values
     * @param expression {string} Filter expression
     * @param attributesToReturn {string} Attributes to return. Default is ALL_ATTRIBUTES
     * @param lastEvaluatedKey {AWS.DynamoDB.DocumentClient.Key} LastEvaluatedKey of response. Supplied by recursion
     */
    ScanAsync(tableName: string,
        attributeNames: AWS.DynamoDB.DocumentClient.ExpressionAttributeNameMap,
        attributeValues: AWS.DynamoDB.DocumentClient.ExpressionAttributeValueMap,
        expression: string,
        attributesToReturn?: string,
        lastEvaluatedKey?: AWS.DynamoDB.DocumentClient.Key): Promise<AWS.DynamoDB.DocumentClient.ScanOutput>;

    /**
     * Update an item by key
     * @param tableName {string} Table name to update in
     * @param keyName {string} Name of key column
     * @param keyValue {string | number} Value of key column
     * @param attributeNames {AWS.DynamoDB.DocumentClient.ExpressionAttributeNameMap} Map of attribute names
     * @param attributeValues {AWS.DynamoDB.DocumentClient.ExpressionAttributeValueMap} Map of attribute values
     * @param conditionExpression {string} Condition expression
     * @param updateExpression {string} Update expression
     */
    UpdateByKeyAsync(tableName: string,
        keyName: string,
        keyValue: string | number,
        attributeNames: AWS.DynamoDB.DocumentClient.ExpressionAttributeNameMap,
        attributeValues: AWS.DynamoDB.DocumentClient.ExpressionAttributeValueMap,
        conditionExpression: string,
        updateExpression: string): Promise<AWS.DynamoDB.DocumentClient.ScanOutput>;
}
