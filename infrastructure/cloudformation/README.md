# CloudFormation Templates for Team J IT Services

This directory contains AWS CloudFormation templates for deploying the Team J IT Services application infrastructure.

## Overview

These CloudFormation templates automate the provisioning of the AWS resources required for the application, including:

- Amazon S3 bucket for static website hosting
- Amazon DynamoDB table for visitor counter
- AWS Lambda functions
- Amazon API Gateway
- IAM roles and policies
- CloudWatch logs

## Templates

- `main.yaml` - Master template that orchestrates the deployment of all resources
- `s3-website.yaml` - Template for S3 static website hosting
- `api-gateway.yaml` - Template for API Gateway and Lambda functions
- `dynamodb.yaml` - Template for DynamoDB tables
- `iam-roles.yaml` - Template for IAM roles and policies

## Usage

1. Upload the templates to an S3 bucket:
   ```bash
   aws s3 cp . s3://my-templates-bucket/team-j-it-services/ --recursive --exclude "*" --include "*.yaml"
   ```

2. Create the CloudFormation stack:
   ```bash
   aws cloudformation create-stack --stack-name team-j-it-services \
       --template-url https://my-templates-bucket.s3.amazonaws.com/team-j-it-services/main.yaml \
       --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
       --parameters ParameterKey=Environment,ParameterValue=Dev
   ```

## Note

This is a placeholder for the actual CloudFormation templates that will be created during development.
