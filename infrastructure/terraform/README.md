# Terraform Infrastructure for Team J IT Services

This directory contains Terraform configurations for deploying the Team J IT Services application infrastructure on AWS.

## Overview

These Terraform configurations automate the provisioning of the AWS resources required for the application, including:

- Amazon S3 bucket for static website hosting
- Amazon DynamoDB table for visitor counter
- AWS Lambda functions
- Amazon API Gateway
- IAM roles and policies
- CloudWatch logs

## Files

- `main.tf` - Main Terraform configuration file
- `variables.tf` - Input variables for the Terraform configuration
- `outputs.tf` - Output values from the Terraform deployment
- `backend.tf` - Terraform backend configuration for state management

## Prerequisites

- Terraform v1.0.0 or later
- AWS CLI configured with appropriate credentials
- S3 bucket for Terraform state (optional)

## Usage

1. Initialize Terraform:
   ```bash
   terraform init
   ```

2. Plan the deployment:
   ```bash
   terraform plan -out=tfplan
   ```

3. Apply the configuration:
   ```bash
   terraform apply tfplan
   ```

## Note

This is a placeholder for the actual Terraform configuration files that will be created during development.
