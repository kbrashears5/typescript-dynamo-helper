import * as DynamoDB from '@aws-sdk/client-dynamodb';
import { ILogger } from 'typescript-ilogger';
import { IDynamoHelper } from './interface';
import { BaseClass } from 'typescript-helper-functions';
import { Any, AttributeName, AttributeValue } from './any';

/**
 * DynamoDB Helper
 */
export class DynamoHelper extends BaseClass implements IDynamoHelper {

    /**
     * AWS Repository for DynamoDB
     */
    private Repository: DynamoDB.DynamoDB;

    /**
     * Initializes new instance of DynamoDBHelper
     * @param logger {ILogger} Injected logger
     * @param repository {DynamoDB.DynamoDB} Injected Repository. A new repository will be created if not supplied
     * @param options {DynamoDB.DynamoDBClientConfig} Injected configuration if a Repository is supplied
     */
    constructor(logger: ILogger,
        repository?: DynamoDB.DynamoDB,
        options?: DynamoDB.DynamoDBClientConfig) {

        super(logger);
        options = this.ObjectOperations.IsNullOrEmpty(options) ? { region: 'us-east-1' } as DynamoDB.DynamoDBClientConfig : options!;
        this.Repository = repository || new DynamoDB.DynamoDB(options);
    }

    /**
     * Batch delete or put
     * @param batchRequest {DynamoDB.BatchWriteItemInput} The batch request object, can be puts or deletes.
     */
    public async BatchWriteAsync(batchRequest: DynamoDB.BatchWriteItemInput): Promise<DynamoDB.BatchWriteItemOutput> {

        const action = `${DynamoHelper.name}.${this.BatchWriteAsync.name}`;
        this.LogHelper.LogInputs(action, { batchRequest });

        if (this.ObjectOperations.IsNullOrEmpty(batchRequest)) { throw new Error(`[${action}]-Must supply batchRequest`); }

        this.LogHelper.LogRequest(action, batchRequest);
        const response = await this.Repository.batchWriteItem(batchRequest);

        this.LogHelper.LogResponse(action, response);

        return response;
    }

    /**
     * Delete an item by key
     * @param tableName {string} Table name to delete from
     * @param keyName {string} Name of key column
     * @param keyValue {string | number} Value of key column
     */
    public async DeleteItemByKeyAsync(tableName: string,
        keyName: string,
        keyValue: string | number): Promise<DynamoDB.DeleteItemOutput> {

        const action = `${DynamoHelper.name}.${this.DeleteItemByKeyAsync.name}`;
        this.LogHelper.LogInputs(action, { tableName, keyName, keyValue });

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(tableName)) { throw new Error(`[${action}]-Must supply tableName`); }
        if (this.ObjectOperations.IsNullOrWhitespace(keyName)) { throw new Error(`[${action}]-Must supply keyName`); }
        if (this.ObjectOperations.IsNullOrWhitespace(keyValue.toString())) { throw new Error(`[${action}]-Must supply keyValue`); }

        // create attribute map
        const attributeMap: Any = {};
        attributeMap[keyName] = keyValue;

        // create params object
        const params: DynamoDB.DeleteItemInput = {
            Key: attributeMap,
            TableName: tableName,
        };
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.deleteItem(params);
        this.LogHelper.LogResponse(action, response);

        return response;
    }

    /**
     * Get an item by key
     * @param tableName {string} Table name to get from
     * @param keyName {string} Name of key column
     * @param keyValue {string | number} Value of key column
     */
    public async GetItemByKeyAsync(tableName: string,
        keyName: string,
        keyValue: string | number): Promise<DynamoDB.GetItemOutput> {

        const action = `${DynamoHelper.name}.${this.GetItemByKeyAsync.name}`;
        this.LogHelper.LogInputs(action, { tableName, keyName, keyValue });

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(tableName)) { throw new Error(`[${action}]-Must supply tableName`); }
        if (this.ObjectOperations.IsNullOrWhitespace(keyName)) { throw new Error(`[${action}]-Must supply keyName`); }
        if (this.ObjectOperations.IsNullOrWhitespace(keyValue.toString())) { throw new Error(`[${action}]-Must supply keyValue`); }

        // create attribute map
        const attributeMap: Any = {};
        attributeMap[keyName] = keyValue;

        // create params object
        const params: DynamoDB.GetItemInput = {
            Key: attributeMap,
            TableName: tableName,
        };
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.getItem(params);
        this.LogHelper.LogResponse(action, response);

        return response;
    }

    /**
     * Put an item
     * @param tableName {string} Table name to put item in
     * @param item {T extends object} Item to put
     */
    public async PutItemByKeyAsync<T extends AttributeValue>(tableName: string,
        item: T): Promise<DynamoDB.GetItemOutput> {

        const action = `${DynamoHelper.name}.${this.PutItemByKeyAsync.name}`;
        this.LogHelper.LogInputs(action, { tableName, item });

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(tableName)) { throw new Error(`[${action}]-Must supply tableName`); }
        if (!item || Object.keys(item).length === 0) { throw new Error(`[${action}]-Must supply item`); }

        // create params object
        const params: DynamoDB.PutItemInput = {
            Item: item,
            TableName: tableName,
        };
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.putItem(params);
        this.LogHelper.LogResponse(action, response);

        return response;
    }

    /**
     * Scan a table
     * @param tableName {string} Table name to scan from
     * @param attributeNames {AttributeName} Map of attribute names
     * @param attributeValues {AttributeValue} Map of attribute values
     * @param expression {string} Filter expression
     * @param attributesToReturn {string} Attributes to return. Default is ALL_ATTRIBUTES
     * @param lastEvaluatedKey {AttributeValue} LastEvaluatedKey of response. Supplied by recursion
     */
    public async ScanAsync(tableName: string,
        attributeNames: AttributeName,
        attributeValues: AttributeValue,
        expression: string,
        attributesToReturn?: string,
        lastEvaluatedKey?: AttributeValue): Promise<DynamoDB.ScanOutput> {

        const action = `${DynamoHelper.name}.${this.ScanAsync.name}`;
        this.LogHelper.LogInputs(action, { tableName, attributeNames, attributeValues, expression, attributesToReturn, lastEvaluatedKey });

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(tableName)) { throw new Error(`[${action}]-Must supply tableName`); }
        if (this.ObjectOperations.IsNullOrEmpty(attributeNames)) { throw new Error(`[${action}]-Must supply attributeNames`); }
        if (this.ObjectOperations.IsNullOrEmpty(attributeValues)) { throw new Error(`[${action}]-Must supply attributeValues`); }
        if (this.ObjectOperations.IsNullOrWhitespace(expression)) { throw new Error(`[${action}]-Must supply expression`); }

        // set defaults
        if (this.ObjectOperations.IsNullOrWhitespace(attributesToReturn)) { attributesToReturn = 'ALL_ATTRIBUTES'; }

        // create params object
        const params: DynamoDB.ScanInput = {
            ExpressionAttributeNames: attributeNames,
            ExpressionAttributeValues: attributeValues,
            FilterExpression: expression,
            Select: attributesToReturn,
            TableName: tableName,
        };
        if (this.ObjectOperations.IsNullOrEmpty(lastEvaluatedKey)) { params.ExclusiveStartKey = lastEvaluatedKey; }
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.scan(params);
        this.LogHelper.LogResponse(action, response);

        // recursively call the function if LastEvaluatedKey is present
        if (response.LastEvaluatedKey && response.Items) {
            const nextParameters = await this.ScanAsync(tableName,
                attributeNames,
                attributeValues,
                expression,
                attributesToReturn,
                response.LastEvaluatedKey);

            if (nextParameters.Items) {
                for (const item of nextParameters.Items) {
                    response.Items.push(item);
                }
            }
        }

        return response;
    }

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
    public async UpdateByKeyAsync(tableName: string,
        keyName: string,
        keyValue: string | number,
        attributeNames: AttributeName,
        attributeValues: AttributeValue,
        conditionExpression: string,
        updateExpression: string): Promise<DynamoDB.ScanOutput> {

        const action = `${DynamoHelper.name}.${this.UpdateByKeyAsync.name}`;
        this.LogHelper.LogInputs(action, { tableName, keyName, keyValue, attributeNames, attributeValues, conditionExpression, updateExpression });

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(tableName)) { throw new Error(`[${action}]-Must supply tableName`); }
        if (this.ObjectOperations.IsNullOrWhitespace(keyName)) { throw new Error(`[${action}]-Must supply keyName`); }
        if (this.ObjectOperations.IsNullOrWhitespace(keyValue.toString())) { throw new Error(`[${action}]-Must supply keyValue`); }
        if (this.ObjectOperations.IsNullOrEmpty(attributeNames)) { throw new Error(`[${action}]-Must supply attributeNames`); }
        if (this.ObjectOperations.IsNullOrEmpty(attributeValues)) { throw new Error(`[${action}]-Must supply attributeValues`); }
        if (this.ObjectOperations.IsNullOrWhitespace(conditionExpression)) { throw new Error(`[${action}]-Must supply conditionExpression`); }
        if (this.ObjectOperations.IsNullOrWhitespace(updateExpression)) { throw new Error(`[${action}]-Must supply updateExpression`); }

        // create attribute map
        const attributeMap: Any = {};
        attributeMap[keyName] = keyValue;

        // create params object
        const params: DynamoDB.UpdateItemInput = {
            ConditionExpression: conditionExpression,
            ExpressionAttributeNames: attributeNames,
            ExpressionAttributeValues: attributeValues,
            Key: attributeMap,
            TableName: tableName,
            UpdateExpression: updateExpression,
        };
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.updateItem(params);
        this.LogHelper.LogResponse(action, response);

        return response;
    }
}
