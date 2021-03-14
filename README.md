<h1 align="center">typescript-aws-dynamo-helper</h1>

<div align="center">
    
<b>Typescript helper functions for AWS Dynamo DB service</b>
    
[![Build Status](https://dev.azure.com/kbrashears5/github/_apis/build/status/kbrashears5.typescript-aws-dynamo-helper?branchName=master)](https://dev.azure.com/kbrashears5/github/_build/latest?definitionId=14&branchName=master)
[![Tests](https://img.shields.io/azure-devops/tests/kbrashears5/github/14)](https://img.shields.io/azure-devops/tests/kbrashears5/github/14)
[![Code Coverage](https://img.shields.io/azure-devops/coverage/kbrashears5/github/14)](https://img.shields.io/azure-devops/coverage/kbrashears5/github/14)

[![NPM Version](https://img.shields.io/npm/v/typescript-aws-dynamo-helper)](https://img.shields.io/npm/v/typescript-aws-dynamo-helper)
[![Downloads](https://img.shields.io/npm/dt/typescript-aws-dynamo-helper)](https://img.shields.io/npm/dt/typescript-aws-dynamo-helper)

</div>

## Install

```
npm install typescript-aws-dynamo-helper@latest
```

## Usage

### Default - running in Lambda in your own account

```typescript
const logger = new Logger(LogLevel.Trace);

const helper = new DynamoHelper(logger);

const response = await helper.GetItemByKeyAsync(
  'tableName',
  'keyName',
  'keyValue',
);
```

### Running in separate account or not in Lambda

```typescript
import * as DynamoDB from '@aws-sdk/client-dynamodb';

const logger = new Logger(LogLevel.Trace);

const options: DynamoDB.DynamoDBClientConfig = {
  accessKeyId: '{access_key}',
  secretAccessKey: '{secret_key}',
  region: 'us-east-1',
};

const repository = new DynamoDB.DynamoDB(options);

const helper = new DynamoHelper(logger, repository);

const response = await helper.GetItemByKeyAsync(
  'tableName',
  'keyName',
  'keyValue',
);
```

## Notes

If no options are supplied, will default to `us-east-1` as the region
