# Liquifi API

## Prerequisites
#### Install Yarn
```sh
$ npm install -g yarn
```
#### Install Dependencies
```sh
$ yarn install
```

## Calling functions locally (Ropsten Network)
### Total supply
```sh
$ yarn sls invoke local --function totalSupply --ethereum-network=bsc
```
### Circulating supply
```sh
$ yarn sls invoke local --function circulatingSupply --ethereum-network=bsc
```
## Deploying the API

The API uses the [serverless framework](https://serverless.com) and can easily be deployed to any AWS account,
via the `yarn deploy` command or `yarn deploy:{ethereum-network}`.

In order to configure your AWS account as a target, 
see [the serverless docs](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/).

## Config variables
Config variables are located within `serverless.yml`: `custom.config.{ethereum-network}`